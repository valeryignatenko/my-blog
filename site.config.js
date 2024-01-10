const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Valery T",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software development",
    bio: "Я разработчик програмного обеспечения. Веду свой блог и делюсь опытом и переводом статей.",
    email: "trumanv82@gmail.com",
    linkedin: "--",
    github: "https://github.com/valeryignatenko",
    instagram: "--",
  },
  projects: [ // Ссылки на проекты
    {
      name: `ibakecookies.com`,
      href: "https://my-blog-eight-sigma.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "ibakecookies.com",
    description: "Welcome to trumanv82 Developer Blog!",
  },

  // CONFIG configration (required)
  link: "my-blog-eight-sigma.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ru-RU", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
