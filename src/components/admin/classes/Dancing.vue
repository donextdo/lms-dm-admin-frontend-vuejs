<template>
  <div class="dancing d-flex flex-column">
    <CardRow v-for="(item, index) in dancingClasses" :item="item" :key="index" />
  <div class="music d-flex flex-column">
    <CardRow />
  </div>
</template>

<script>
import CardRow from '@/components/shared/CardRow.vue';

export default {
    name: 'dancing-vue',

    data() {
      return {
        dancingClasses : [
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
          },
          {
            title: 'Grade 7 Dancing - Canada students',
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

    components: {
      CardRow
    }

}
</script>

<style scoped>
  .dancing {
    gap: 35px;
  }

  @media (max-width: 1400px) {
    .dancing {
      gap: 25px;
    }
  }
</script>

