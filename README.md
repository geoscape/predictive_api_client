# Predictive API Client

This repository's purpose is to demo example usage of the Predictive Address Verification API by PSMA Australia. Each directory at the root level of this repository is an example in a particular programming language and or framework.

Find the Predictive Address API online documentation here: https://psma.docs.stoplight.io/apiReference/predictive

It's important to note that to use the API you'll need an API key; if you do not have one, you can create a PSMA developer account here: https://developer.psma.com.au/user/register

## jQuery
Located in the jQuery_client directory, written in javascript using the jQuery and Bloodhound libraries.
Bloodhound (https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md) is a 'typeahead' engine which allows for a more intelligent consumption of an API resource; it's being used in this example to debounce requests from the client in order to lower the load on the API. It comes at a tradeoff of user experience however; the larger the debounce wait, the more latency the user feels but less calls are made to the API.
### Usage
To run this client locally:
1. Open the file '`index.html`'
2. Enter some text in the 'Address Lookup' field (at least 3 characters are required to make an API call)
3. At this stage you should be prompted with an alert asking if you would like to store your API key in your web browser
    1. Selecting 'Yes' will prompt with a form asking for your key, enter it here
    2. You can clear the API key by clicking 'Clear API Key' in the top right of the page, you will be prompted for it again when next using the form
    3. Alternatively, you can store the key on disk by placing it in the file '`src/config.js`' by hard coding it as the '`auth`' field in the '`environment`' variable
4. You can use the controls above the Address Lookup field to control the behaviour of the API, discover what affects they have in the documentation
