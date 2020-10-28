export const notifier = {
  install: (Vue, store) => {
    Vue.prototype.$notifier = {
      success: (message) => store.dispatch('success', message),
      error: (message) => store.dispatch('error', message),
      info: (message) => store.dispatch('info', message),
      notify: (message, color) => store.dispatch('notify', message, color),
    }
  }
}
