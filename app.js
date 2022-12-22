const { createApp } = Vue;

createApp({
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
  },
}).mount("#app");
