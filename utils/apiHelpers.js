require('dotenv').config()
const axios = require('axios')
const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001'
const CWB_AUTH_ID = process.env.CWB_AUTH_ID

async function getOpenCWBdata() {
  const response = await axios.get(`${baseURL}?Authorization=${CWB_AUTH_ID}`)
  const locations = response.data.records.location
  return locations
}

module.exports = getOpenCWBdata
