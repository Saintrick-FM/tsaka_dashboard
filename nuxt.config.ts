// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/custom.scss'],
  modules: ['nuxt-quasar-ui','nuxt-icon'],
  quasar: {
    plugins: [
      // 'BottomSheet',
      'Dialog',
      // 'Loading',
      // 'LoadingBar',
      'Notify',
      // 'Dark',
    ],
    extras: {
      font: 'roboto-font',
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
});
