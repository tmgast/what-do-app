export default {
  flyTo(state, { map, location }) {
    map.panTo([location.latitude, location.longitude], 5);
  },
};
