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
  searchLocations(text) {
    return apiClient.get(`/locations/search?search=${encodeURIComponent(text)}`);
  },
  getCategories() {
    return apiClient.get('/categories');
  },
};
