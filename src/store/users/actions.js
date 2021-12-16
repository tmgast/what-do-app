export default {
  async getLogin({ commit, state, rootState }) {
    console.log(state);
    try {
      const gUser = await rootState.auth.signIn();

      if (!gUser) {
        return;
      }

      const profile = gUser.getBasicProfile();
      const u = {
        email: profile.getEmail(),
        name: profile.getName(),
        imageUrl: profile.getImageUrl(),
      };
      commit('completeLogin', u);
    } catch (error) {
      console.log(error);
    }
  },
};
