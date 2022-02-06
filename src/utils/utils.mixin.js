export const UtilsMixins = {
  methods: {
    getYear(dateStr) {
      if (!dateStr || !Date.parse(dateStr)) {
        return "unknown";
      }
      var launchYear = new Date(dateStr);
      return launchYear.getFullYear();
    },
    getCastCharString(characterStr) {
      return "as " + characterStr;
    },
  },
};
