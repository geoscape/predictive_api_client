function createFilterFieldset(fieldset_id, legend, items, type, name) {
  let fieldset = $("#" + fieldset_id);
  fieldset.append(
    $(`<legend>${legend}</legend>`)
  );
  $.each(items, (id, item) => (
      fieldset.append(
        $(`<div class="form-check">` +
          `<input class="form-check-input" type="${type}" value="${id}" id="${item['id'] || id}" name="${name}">` +
          `<label class="form-check-label" for="${item['id'] || id}" title="${id}">${item['name']}</label>` +
          `</div>`)
      )
  ));
}

function createStateTerritoriesFilter() {
  createFilterFieldset(
    "state-territory-fieldset",
    "stateTerritory",
    stateTerritories,
    "checkbox",
    "stateTerritory"
  );
}

function createDatasetFilter() {
  createFilterFieldset(
    "dataset-fieldset",
    "dataset",
    datasets,
    "checkbox",
    "dataset"
  );
}

function createAddressTypeFilter() {
  createFilterFieldset(
    "address-type-fieldset",
    "addressType",
    addressTypes,
    "checkbox",
    "addressType"
  );
}

function createCrsFilter() {
  createFilterFieldset(
    "crs-fieldset",
    "CRS",
    crs,
    "checkbox",
    "crs"
  );
}

function createForm() {
  createStateTerritoriesFilter();
  createDatasetFilter();
  createAddressTypeFilter();
  createCrsFilter();
}

function getQueryParams() {
  let params = {};
  const dataset = $("input[name='dataset']:checked").map(() => (this.value)).get().join();
  if (dataset) params['dataset'] = dataset;
  const stateTerritory = $("input[name='stateTerritory']:checked").map(() => (this.value)).get().join();
  if (stateTerritory) params['stateTerritory'] = stateTerritory;
  const addressType = $("input[name='addressType']:checked").map(() => (this.value)).get().join();
  if (addressType) params['addressType'] = addressType;
  const maxNumberOfResults = $("#maxNumberOfResults").val();
  if (maxNumberOfResults) params['maxNumberOfResults'] = maxNumberOfResults;
  return params;
}

function getURL() {
  let endpoint = 'pav_suggest';
  return environment['url'] + endpoints[endpoint]['url'];
}

function getAuth(id) {
  let auth = environment['auth'];
  if (auth === null) {
    if (typeof(Storage) !== "undefined") {
      auth = localStorage.getItem(id);
      if (auth === null) {
        if (confirm("Would you like to save your API keys in your browser?")) {
          auth = prompt('Please enter your API key for Predictive Address Verification:');
          localStorage.setItem('pav', auth);
        }
      }
    }
    if (auth === null) {
      auth = prompt('Please enter your API key for Predictive Address Verification:');
    }
    environment['auth'] = auth;
  }
  return environment['auth'];
}

function getCrs() {
  return $("input[name='crs']:checked").map(() => (this.value)).get().join();
}
