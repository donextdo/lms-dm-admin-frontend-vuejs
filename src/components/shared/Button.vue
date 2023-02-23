<template>
  <v-btn
    v-if="transparent && modal"
    style="color: red"
    color="transparent"
    :width="laptop ? '100px' : '142px'"
    :height="laptop ? '40px' : '45px'"
    elevation="0"
    class="rounded-lg"
    @click="click"
    ><p
      style="
        padding-bottom: 3px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
      "
    >
      {{ text }}
    </p></v-btn
  >

  <v-btn
    v-else-if="modal"
    color="#ffa500"
    :width="laptop ? '100px' : '115px'"
    :height="laptop ? '40px' : '45px'"
    elevation="0"
    class="btn2 rounded-lg"
    @click="click"
    >{{ text }}</v-btn
  >

  <v-btn
    v-else-if="transparent && !modal"
    style="color: red"
    color="transparent"
    :width="laptop ? '100px' : '142px'"
    :height="laptop ? '40px' : '45px'"
    elevation="0"
    class="btn rounded-lg"
    @click="click"
    ><p
      style="
        padding-bottom: 3px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
      "
    >
      {{ text }}
    </p></v-btn
  >

  <v-btn
    v-else-if="!modal"
    color="#ffa500"
    :width="laptop ? '100px' : '115px'"
    :height="laptop ? '40px' : '45px'"
    elevation="0"
    class="btn rounded-lg"
    @click="click"
    >{{ text }}</v-btn
  >
</template>
<script>
export default {
  name: "Button-vue",
  props: ["text", "transparent", "modal"],
  methods: {
    click() {
      this.$emit("click");
    },
  },
  data() {
    return {
      laptop: null,
    };
  },
};
</script>
<style scoped>
.btn {
  font-size: 16px;
  text-transform: capitalize;
  font-weight: bold;
}

.btn2 {
  width: auto;
  height: 20px;
  margin-top: 8%;
  font-size: 13px !important;
  text-transform: capitalize;
  font-weight: bold;
}
</style>
