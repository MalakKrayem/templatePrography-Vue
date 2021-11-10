import { createStore } from "vuex";

export default createStore({
  state: {
    socials: [
      {
        id: 1,
        name: "whatsapp",
        img: require("../assets/social/whatsapp.svg"),
        url: "https://api.whatsapp.com/send?phone=970567731107",
      },
      {
        id: 2,
        name: "facebook",
        img: require("../assets/social/FACEBOOK.svg"),
        url: "https://www.facebook.com/Sameerkraem.ux",
      },
      {
        id: 3,
        name: "instagram",
        img: require("../assets/social/INSTAGRAM.svg"),
        url: "https://instagram.com/sameerkraem?utm_medium=copy_link",
      },
      {
        id: 4,
        name: "twitter",
        img: require("../assets/social/TWITTER.svg"),
        url: "https://twitter.com/sameerkraem?s=08",
      },
      {
        id: 5,
        name: "linkedin",
        img: require("../assets/social/LINKEDIN.svg"),
        url: "https://www.linkedin.com/in/sammeerkrayem",
      },
      {
        id: 6,
        name: "behance",
        img: require("../assets/social/BEHANCE.svg"),
        url: "https://www.behance.net/sammeer12591d4",
      },
      {
        id: 7,
        name: "dribbble",
        img: require("../assets/social/DRIBBBLE.svg"),
        url: "https://dribbble.com/Sammeer",
      },
    ],
  },
  getters: {
    socials(state) {
      return state.socials;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
