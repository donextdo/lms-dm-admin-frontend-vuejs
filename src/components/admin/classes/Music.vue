<template>
  <div class="music d-flex flex-column">
    <CardRow />
    <CardRow />
  </div>
</template>

<script>
import CardRow from '@/components/shared/CardRow.vue';

export default {
    name: 'music-vue',

    components: {
      CardRow
    }

}
</script>

<style>
  .music {
    gap: 100px;
  }

</style>