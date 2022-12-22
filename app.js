const { createApp } = Vue;

createApp({
  data() {
    return {
      info: {
        name: "Md Shahadat Hossain",
        href: "https://github.com/",
      },
      h2: "<h1>I'm Learning Vue Js</h1>",
    };
  },
}).mount("#app");
