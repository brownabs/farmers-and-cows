import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json`).then((response) => {
    const demCows = response.data;
    const cows = [];
    if (demCows) {
      Object.keys(demCows).forEach((cowId) => {
        cows.push(demCows[cowId]);
      });
    }
    resolve(cows);
  }).catch((error) => reject(error));
});

const addCow = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/cows.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/cows/${response.data.name}.json`, update);
      resolve(response);
    }).catch((error) => reject(error));
});

const deleteCow = (firebaseKey) => axios.delete(`${baseUrl}/cows/${firebaseKey}.json`);

const getFarmersCows = (farmerUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json?orderBy="farmerUid"&equalTo="${farmerUid}"`)
    .then((response) => {
      const farmerCows = response.data;
      const cows = [];
      if (farmerCows) {
        Object.keys(farmerCows).forEach((cowId) => {
          cows.push(farmerCows[cowId]);
        });
      }
      resolve(cows);
    }).catch((error) => reject(error));
});

export default {
  getAllCows,
  deleteCow,
  addCow,
  getFarmersCows
};
