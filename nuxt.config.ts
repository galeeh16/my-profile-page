// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  experimental: {
    watcher: "chokidar",
  },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'nuxt-icon', "@nuxt/image"],
  app: {
    head: {
      title: 'Galih Anggoro Jati',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        {
          name: 'description',
          content: 'Profile Galih Anggoro Jati'
        },
        {
          name: 'keywords',
          content: 'Profile, Galih, Galih Anggoro, Galih Anggoro Jati'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg',
          sizes: 'any'
        },
      ]
    }
  },
  i18n: {
    vueI18n: './nuxt-i18n.js', // custom path example
    lazy: true,
    langDir: './lang',
    locales: [
      {
        code: 'en',
        name: 'English(US)',
        file: 'en.json',
        icon: `<svg xmlns=" http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-gb" viewBox="0 0 640 480">
                <path fill="#012169" d="M0 0h640v480H0z"></path>
                <path fill="#FFF"
                  d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"></path>
                <path fill="#C8102E"
                  d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z">
                </path>
                <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"></path>
                <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"></path>
              </svg>`
      },
      {
        code: 'id',
        name: 'Indonesia',
        file: 'id.json',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-id" viewBox="0 0 640 480"><path fill="#e70011" d="M0 0h640v240H0Z"></path><path fill="#f4f5f6" d="M0 240h640v240H0Z"></path></svg>'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
  },
  image: {
    domains: [
      'galih-anggoro-jati.vercel.app'
    ]
  },
  // nitro: {
  //   prerender: {
  //     routes: [
  //       '/_ipx/f_webp/chat.webp',
  //       '/_ipx/f_webp/illustration.webp',
  //       '/_ipx/f_webp/laptop.webp',
  //       '/_ipx/f_webp/me.webp',
  //       '/_ipx/f_webp/portfolio/logee/logee1.webp',
  //       '/_ipx/f_webp/portfolio/ketupat-ramadhan/ketupat-ramadhan.webp',
  //       '/_ipx/f_webp/portfolio/bisnis-di-dubai/bisnisdidubai1.webp',
  //       '/_ipx/f_webp/portfolio/merchant/merchant1.webp',
  //       '/_ipx/f_webp/portfolio/dextop/dextop1.webp',
  //       '/_ipx/f_webp/portfolio/youbid/youbid1.webp',
  //       '/_ipx/f_webp/portfolio/cbs-web/cbs1.webp',
  //       '/_ipx/f_webp/portfolio/cbs-monitoring/cbs-monitoring3.webp',
  //       '/_ipx/f_webp/portfolio/core-team/core-team.webp',
  //       '/_ipx/f_webp/portfolio/core-team/core-team.webp',
  //       '/_ipx/f_webp/portfolio/my-profile/my-profile.webp',
  //       '/_ipx/f_webp/portfolio/monitoring-kopnuspos/monitoring-kopnuspos1.webp',
  //       '/_ipx/f_webp/portfolio/kpt/kpt2.webp'
  //     ]
  //   }
  // }

})