require('dotenv').config()
const axios = require('axios')
const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001'
const CWB_AUTH_ID = process.env.CWB_AUTH_ID

async function getOpenCWBdata() {
  const response = await axios.get(`${baseURL}?Authorization=${CWB_AUTH_ID}`)
  const locations = response.data.records.location
  const data = locations.filter(l => l.parameter[0].parameterValue === '臺北市' || l.parameter[0].parameterValue === '新北市' || l.parameter[0].parameterValue === '桃園市')
  return data
}

module.exports = getOpenCWBdata
