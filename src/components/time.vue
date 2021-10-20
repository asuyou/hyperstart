<template>
  <p>{{ time }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      interval: setInterval(() => {}, 0),
      time: "",
    };
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    setTime() {
      this.time = Intl.DateTimeFormat(navigator.language, {
        dateStyle: "medium",
        timeStyle: "medium",
      }).format();
    },
  },
  mounted() {
    this.setTime();
    this.interval = setInterval(this.setTime, 1000);
  },
});
</script>
