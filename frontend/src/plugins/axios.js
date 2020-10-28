import axios from "axios";

export const Axios = {
  install: (Vue, options) => {
    const { defaultHeaders, baseURL } = options;
    if (defaultHeaders) {
      Object.entries(defaultHeaders).forEach(([key, value]) => {
        axios.defaults.headers.common[key] = value;
      });
    }

    if (baseURL) {
      axios.defaults.baseURL = baseURL;
    }

    Vue.prototype.$axios = axios;
  }
};
