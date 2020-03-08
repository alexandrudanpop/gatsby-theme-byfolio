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
        siteUrl: `http://localhost:5000`,
        siteName: `Alexandru-Dan Pop`,
        siteShortName: `Alex`,
        siteDescription: `This Application contains info about my work experience as a Software Engineer.`,
        siteKeywords: `Software developer, Full Stack Developer, React Developer, Software engineer, React.Js, .Net Core`,
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
        ],
        email: `alexandrudanpop@gmail.com`,
        social: {
          // Usernames
          twitter: `alexd_pop`,
          gitHub: `alexandrudanpop`,
          stackOverflow: `5239664/alexandru-dan-pop`,
          linkedIn: `in/alexandrudanpop/`,
          resumeInPdf: `/CV-Alexandru-DanPop.pdf`,
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi! I'm Alex.`,
          h2Text: `I'm a Software Engineer who loves working with Javascript, React and NodeJs. I also enjoy programming C# with .NET Core. 
          I work as a freelancer / consultant, developing applications that solve complex business problems in various industries.`,
          typewriter: [
            `I love <span style='color: #4a89ff;'>quality code</span> and <span style='color: #4a89ff;'>software architecture</span>`,
            `During my free time, I enjoy working out 🏋 & listening to music 🎧`,
            `No 🐵 coding! I get involved in knowing the business domain on projects I work on`,
            `I spend a lot of my time staying up to date with various technologies, new & old 🤓.`,
            `Trying to find the simple solutions to your business problems`,
            `Communication is key! I try to always stay positive and engaged in every team`,
            `I like taking up new challenges ✅`,
            `I'm a 🍕 & 🍺 lover`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-123`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: `google-gtag`,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: false,
        },
      },
    },
  ],
}
