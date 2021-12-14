import Editor from "@tinymce/tinymce-vue";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("editor", Editor);
});
