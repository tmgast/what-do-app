import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: false,
});

export default {
  getLocations() {
    return apiClient.get('/locations');
  },
  getLocation(id) {
    return apiClient.get(`/locations/${id}`);
  },
  getCategories() {
    return apiClient.get('/categories');
  },
};
