export default {
  flyTo(state, { map, location }) {
    map.flyTo([location.latitude, location.longitude], 13, {
      animate: true,
      duration: 1.5,
    });
  },
};
