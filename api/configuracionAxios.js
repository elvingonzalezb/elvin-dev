import axios from 'axios';
require('dotenv').config();

export default axios.create({
  baseURL: process.env.DES_URL_API,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    'x-vtex-api-appkey': process.env.API_APP_KEY,
    'x-vtex-api-apptoken': process.env.API_APP_TOKEN,
  }
});
