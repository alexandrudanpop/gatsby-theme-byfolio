module.exports = {
  pathPrefix: "/gatsby-theme-byfolio",
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        siteTitle: `Portfolio`,
        siteUrl: `http://localhost:5000`,
        siteName: `Alexandru-Dan Pop`,
        siteShortName: `Alex`,
        siteDescription: `This Application contains info about my work experience as a Software Engineer.`,
        siteKeywords: `Software developer, Full Stack Developer, React Developer, Software engineer, React.Js, .Net Core`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `alexandrudanpop@gmail.com`,
        social: {
          // Usernames
          twitter: `alexd_pop`,
          gitHub: `alexandrudanpop`,
          stackOverflow: `5239664/alexandru-dan-pop`,
          linkedIn: `in/alexandrudanpop/`,
          resumeInPdf: `/CV-22.pdf`, // todo - url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi!, I'm Alex.`,
          h2Text: `I'm a Software Engineer who loves working with React, Node & .NET Core. I've
              been developing software since 2013.`,
          typewriter: [
            // todo
            `this site is WIP...`,
            `I love <span style='color: #4a89ff;'>quality code</span> and <span style='color: #4a89ff;'>software architecture</span>.`,
            `I can learn new things pretty fast.`,
            `During my free time, I sometimes go to the 🏋‍`,
            `I'm always engaged in staying up to date with new technologies 🤓.`,
            `Always trying to find the simple solutions to complex problems.`,
            `Communication in every team is key. I like to always stay positive and engaged in any team.`,
            `No 🐵 coding! I get involved in knowing the business domain on projects I work on.`,
            `I like taking up new challenges ✅`,
            `I'm a 🍕 lover`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#5e5858" },
          shape1: {
            color: `#413f46`,
            opacity: `0.8`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.8`,
          },
          shape3: {
            color: `#fff`,
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
          `UA-151335375-1`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: `christianibarguen.com`,
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
