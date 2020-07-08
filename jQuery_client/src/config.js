
let environment = {
  "url": "https://api.psma.com.au/v1",
  "auth": null
};

const endpoints = {
  pav_suggest: {
    url: '/predictive/address/'
  },
  pav_address: {
    url: '/predictive/address/'
  }
};

const stateTerritories = {
  all: {name: 'All', id: 'stAll'},
  act: {name: 'ACT'},
  qld: {name: 'QLD'},
  nsw: {name: 'NSW'},
  vic: {name: 'VIC'},
  tas: {name: 'TAS'},
  sa: {name: 'SA'},
  nt: {name: 'NT'},
  wa: {name: 'WA'},
  ot: {name: 'OT'}
};

const datasets = {
  all: {name: 'All', id: 'dsAll'},
  gnaf: {name: 'GNAF'},
  gnaflive: {name: 'GNAF Live'},
  mailAddress: {name: 'Mail Address'}
};

const addressTypes = {
  all: {name: 'All', id: 'atAll'},
  mailing: {name: 'Mailing'},
  physical: {name: 'Physical'}
};

const crs = {
  '<https://www.opengis.net/def/crs/EPSG/0/4283>': {name: 'GDA94'},
  '<https://www.opengis.net/def/crs/EPSG/0/7844>': {name: 'GDA2020'},
  '<https://www.opengis.net/def/crs/EPSG/0/4326>': {name: 'WGS84'}
};
