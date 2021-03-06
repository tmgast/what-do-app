import APIService from '@/services/APIService';

export default {
  updateCategories(state) {
    APIService.getCategories().then((response) => {
      state.categories = response.data;
    });
  },
};
