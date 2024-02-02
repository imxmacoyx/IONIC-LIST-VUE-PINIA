// src/api/capacitorHttpClient.js
import { Http } from '@capacitor-community/http';

const baseUrl = 'https://localhost:7144/';

export const capacitorHttpClient = {
  async get(url:string, params = {}) {
    const response = await Http.request({
      method: 'GET',
      url: baseUrl + url,
      params,
    });
    return response.data; 
  },
  
};
