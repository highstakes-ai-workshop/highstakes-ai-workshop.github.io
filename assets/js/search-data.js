// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-schedule",
          title: "Schedule",
          description: "Full-day workshop schedule for October 9, 2026",
          section: "Navigation",
          handler: () => {
            window.location.href = "/schedule/";
          },
        },{id: "nav-call-for-papers",
          title: "Call for Papers",
          description: "Submission guidelines, topics of interest, and review process",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cfp/";
          },
        },{id: "news-workshop-proposal-submitted-to-colm-2026-call-for-papers-coming-mid-may-2026-stay-tuned",
          title: 'Workshop proposal submitted to COLM 2026. Call for papers coming Mid May 2026...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
