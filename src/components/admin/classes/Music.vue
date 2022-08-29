<template>
  <div class="music d-flex flex-column">
    <CardRow v-for="(item, index) in musicClasses" :item="item" :key="index" />
  </div>
</template>

<script>
import CardRow from '@/components/shared/CardRow.vue';

export default {
    name: 'music-vue',

    components: {
      CardRow
    },

    data() {
      return {
        musicClasses : [
          {
            title: 'Grade 7 Dancing - Canada students',
            students: 21,
            sessions: 14
          },
          {
            title: 'Grade 8 Dancing - Local students',
            students: 21,
            sessions: 14
          },
          {
            title: 'Grade 9 Dancing - Canada students',
            students: 21,
            sessions: 14
          },
          {
            title: 'Grade 7 Dancing - Canada students',
            students: 21,
            sessions: 14
          }

        ]
      }
    },

}
</script>

<style scoped>
  .music {
    gap: 35px;
  }

  @media (max-width: 1400px) {
    .music {
      gap: 25px;
    }
  }

</style>