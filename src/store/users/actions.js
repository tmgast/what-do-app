export default {
  async getLogin({ commit, state }) {
    try {
      const gUser = await state.auth.signIn();

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
