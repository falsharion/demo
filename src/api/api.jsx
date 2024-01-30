// api.js
const BASE_URL = 'http://adsofun-001-site1.ftempurl.com/api/';

export const fetchProductsByStore = (storeName, storeId) => {

  const storeEndpoints = {
    Bluebird: 'stores/{storeId}/products',
    Entrust: 'stores/{storeId}/products',
    Honeywell: 'stores/{storeId}/products'
  };

  const endpoint = storeEndpoints[storeName];
  if (!endpoint) {
    return Promise.reject(new Error('Invalid store name'));
  }

  const url = `${BASE_URL}${endpoint.replace('{storeId}', storeId)}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => data) // Assuming the API response has a 'products' property
    .catch(error => {
      console.error(`Error fetching products for ${storeName} (ID: ${storeId}):`, error);
      throw error; // Propagate the error for handling in the calling component
    });
};
