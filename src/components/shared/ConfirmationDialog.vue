<template>
  <div class="overlay">
        <v-card width="40vw">
          <v-card-title class="text-h6">
            {{ title }}
          </v-card-title>
          <v-card-text>{{ text }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="$emit('discard')"
            >
              Discard
            </v-btn>
            <v-btn
              color="warning"
              elevation="0"
              @click="$emit('accept')"
            >
              {{ btnText }}
            </v-btn>
          </v-card-actions>
        </v-card>
    </div>
  </template>

<script>
    export default {
        name: 'confirmation-vue',
      
        props: ['title', 'text', 'btnText']
    }
</script>

<style scoped>

.overlay {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
</style>