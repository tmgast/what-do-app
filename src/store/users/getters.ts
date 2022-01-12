export default {
  getUserPhoto(state) {
    if (!state.user) {
      return null;
    }

    return state.user.imageUrl;
  },

  getUserName(state) {
    if (!state.user) {
      return null;
    }

    return state.user.name;
  },

  getUserEmail(state) {
    if (!state.user) {
      return null;
    }

    return state.user.email;
  },
  getUser(state) {
    if (state.user != null) {
      return state.user;
    }

    return false;
  },

  isLoggedIn(state) {
    return state.user.email !== '';
  },
};
