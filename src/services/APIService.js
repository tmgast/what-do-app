import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: false,
});

export default {
  getLocations(position) {
    return apiClient.get(
      `/locations?lat=${position.coords[0]}&lon=${position.coords[1]}&zoom=${position.zoom}`,
    );
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
