<template>
  <div
    class="bg-cover bg-secondary"
    :style="{ backgroundImage: `${wallpaper}` }"
  >
    <div
      class="
        h-screen
        w-screen
        flex flex-col
        items-center
        justify-center
        space-y-5
      "
      :class="{
        'backdrop-blur backdrop-filter backdrop-brightness-50':
          conf.background_images.length > 0,
      }"
    >
      <h1 class="text-primary text-8xl font-semibold">
        {{ conf.greeting_text }}
      </h1>
      <div v-if="conf.show_time">
        <Time class="text-primary font-bold text-lg" />
      </div>
      <form @submit.stop.prevent="onSubmit">
        <input
          type="text"
          placeholder="Type :<key> and hit enter"
          class="
            text-primary
            bg-gray-700
            w-min
            p-1
            rounded
            transition
            focus:ring-4 focus:ring-indigo-200
          "
          v-focus
          v-model="command"
        />
      </form>
      <div>
        <ul class="flex flex-row flex-wrap max-w-2xl">
          <li v-for="{ href, name, key } of conf.favorites" v-bind:key="name">
            <Card :short="key" v-bind="{ href, name, command }" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./index.css";
import { defineComponent } from "@vue/runtime-core";
import Card from "./components/button.vue";
import Time from "./components/time.vue";
import conf from "../config.json";
const search = /^:s (.*)$/;
const site = /^:u (.*)$/;

export default defineComponent({
  data() {
    return {
      conf,
      command: "",
      wallpaper:
        conf.background_images[
          Math.floor(Math.random() * conf.background_images.length)
        ],
    };
  },
  methods: {
    onSubmit() {
      let link;
      let commandCopy = this.command;

      if (search.test(commandCopy)) {
        link =
          conf.search_engine +
          encodeURIComponent(commandCopy.replace(/^:s /g, ""));
      } else if (site.test(commandCopy)) {
        link = commandCopy.replace(/^:u /g, "");
      } else {
        conf.favorites.forEach((item) => {
          if (commandCopy.startsWith(item.key)) {
            link = item.href;
            const searchTerm = commandCopy.replace(/^\S*/, "").trim();
            if (item.cse && searchTerm.length > 0) {
              link = link + item.cse + encodeURIComponent(searchTerm);
            }
          }
        });
      }

      {
        link && open(link, "_blank");
        this.command = "";
      }
    },
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  components: {
    Card,
    Time,
  },
});
</script>
