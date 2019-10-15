export default {
  to(location) {
    window.history.pushState(null, null, location);
  },
  currentRoute: () => window.location.pathname
};
