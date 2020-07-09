function clearApiKey() {
    localStorage.clear();
    location.reload();
}

function getAddress(suggestId) {
    let headers = {Authorization: getAuth()};
    const crs = getCrs();
    if (crs.length) headers['Accept-Crs'] = crs;
    $.ajax({
        url: getURL() + `${suggestId}/`,
        headers: headers
    }).done(function(res, status, xhr) {
        $('#json-viewer').jsonViewer(res);
    }).fail(function(xhr) {
        $('#json-viewer').jsonViewer(xhr.responseJSON);
    });
}

function initialiseTypeahead() {
    let predictive = new Bloodhound({
        datumTokenizer : Bloodhound.tokenizers.obj.whitespace('address'),
        queryTokenizer : Bloodhound.tokenizers.whitespace,
        identify: suggestion => suggestion.id,
        limit : 20,
        displayKey: 'address',
        remote : {
            url : getURL(),
            prepare: (query, settings) => {
                let params = [`query=${query}`]
                const data = getQueryParams();
                if (data.stateTerritory) params.push(`stateTerritory=${data.stateTerritory}`);
                if (data.addressType) params.push(`addressType=${data.addressType}`);
                if (data.dataset) params.push(`dataset=${data.dataset}`);
                if (data.maxNumberOfResults) params.push(`maxNumberOfResults=${data.maxNumberOfResults}`);
                const searchString = encodeURI(params.join('&'));
                settings.url = settings.url + `?${searchString}`;
                settings.headers = {
                    Authorization: getAuth('pav')
                };
                return settings
            },
            filter: response => $.map(response.suggest, suggestion => ({
                id: suggestion.id,
                address: suggestion.address,
                rank: suggestion.rank
            })),
            rateLimitBy : 'debounce',
            rateLimitWait : 200
        }
    });
    predictive.clearRemoteCache();
    predictive.initialize();

    $('#typeahead .typeahead').typeahead({
        minLength: 3,
        highlight: true
    }, {
        name: 'address',
        limit: 20,
        display: 'address',
        source: predictive
    });

    $('.typeahead').bind('typeahead:select', (ev, suggestion) => {
        getAddress(suggestion.id);
    });
}

createForm();
initialiseTypeahead();
