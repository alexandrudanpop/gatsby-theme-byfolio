module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        siteTitle: `Portfolio`,
        siteUrl: `https://www.christianibarguen.com`,
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
          h2Text: `I'm a Software Engineer who loves working with React & Node , I've
              been developing software since 2014.`,
          typewriter: [
            // todo
            `Coding is my passion 😎`,
            `I'm a 🍕 lover`,
            `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
            `I think one of my values is the <strong>ability to resolve problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours, I'm at the 🏋‍`,
            `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
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
