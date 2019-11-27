let store = {
  anchorList: ["#hetchr", "#developers", "#companies", "#contact"],
  linkList: [
    "#hetchrLink",
    "#developersLink",
    "#companiesLink",
    "#contactLink"
  ],
  imgList: [
    { bg: "/img/hetchr_bg.jpg", img: "/img/astronaut.png", class: "astronaut" },
    { bg: "/img/dev_bg.jpg", img: "/img/astro_helmet.png", class: "helmet" },
    {
      bg: "/img/companie_bg.jpg",
      img: "/img/space_shuttle.svg",
      class: "space_shuttle"
    },
    {
      bg: "/img/contact_bg.jpg",
      img: "/img/space_ship.png",
      class: "space_ship"
    }
  ],
  currentNavTheme: 0,
  currentFootTheme: 0,
  currentAnchorIdx: 0,
  navLogoDisplayed: false,
  tick: false
};

export { store };
