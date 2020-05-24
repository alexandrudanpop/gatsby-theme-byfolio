module.exports = {
  pathPrefix: "/gatsby-theme-byfolio",
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        siteTitle: `Alex's Portfolio`,
        siteUrl: `https://alexandrudanpop.dev`,
        siteName: `Alexandru-Dan Pop`,
        siteShortName: `Alex`,
        siteDescription: `This Application contains info about my work experience as a Software Engineer.`,
        siteKeywords: `Freelancer, Software developer, Full Stack Developer, React Developer, Typescript developer, Javascript Developer, Software engineer, React.Js, .Net Core`,
        useMozJpeg: true,
        typographyPath: "src/utils/typography.js",
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#080c1c`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#080c1c`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#9d316e`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#f3ffff`, link: `` },
          {
            name: `blog`,
            title: `Blog`,
            color: `#f3ffff`,
            link: `https://blog.alexandrudanpop.dev`,
          },
        ],
        email: `alexandrudanpop@gmail.com`,
        social: {
          // Usernames
          twitter: `alexandrudanpop`,
          gitHub: `alexandrudanpop`,
          stackOverflow: `5239664/alexandru-dan-pop`,
          linkedIn: `in/alexandrudanpop/`,
          resumeInPdf: `/CV-Alexandru-DanPop.pdf`,
          devTo: `alexandrudanpop`,
        },
        homePage: {
          availableToHire: false,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi! I'm Alex.`,
          h2Text: `I'm a freelance Software Engineer who loves working with Javascript, React and Node.js. 👨‍💻 I'm also a big Typescript fan! 🚀`,
          typewriter: [
            `I love <span style='color: #4a89ff;'>quality code</span> and <span style='color: #4a89ff;'>software architecture</span>`,
            `I'm a 🍕 & 🍺 lover`,
            "I work as a <span style='color: #4a89ff;'>freelancer</span> / <span style='color: #4a89ff;'>consultant</span>",
            `During my free time, I enjoy working out 🏋 & listening to music 🎧`,
            `I get involved in knowing the business domain on projects I work on`,
            `Spending lots of my time staying up to date with various technologies, new & old 🤓.`,
            `The best solutions are the simple ones ⭐`,
            `I like taking up new challenges ✅`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#080C1C", hover: "#2a3669" },
          shape1: {
            color: `#BFD7EA`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#BFD7EA`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#BFD7EA`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-2X1YWGET59`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
        send_page_view: true,
      },
    },
  ],
}
