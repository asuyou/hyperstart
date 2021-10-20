<template>
  <a
    :href="href"
    target="_blank"
    class="inline-flex m-4 transition focus:ring-4 rounded"
    :class="{ 'opacity-50': !hasSamePrefix }"
  >
    <span class="p-3 bg-primary rounded-l">{{ short }}</span>
    <span class="bg-gray-800 text-white p-3 rounded-r">{{ name }}</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const prefixExp = /^\S*/;
export default defineComponent({
  props: {
    href: String,
    name: String,
    short: String,
    command: String,
  },
  computed: {
    hasSamePrefix() {
      return this.short?.startsWith(prefixExp.exec(this.command!)!.toString());
    },
  },
});
</script>
