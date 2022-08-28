<template>
  <div class="grid">
    <div class="image">
        <img src="../../assets/image-grid/Rectangle 1-1.png" alt="">
    </div>
    <div class="image">
        <img src="../../assets/image-grid/Asset 8.png" alt="">
    </div>
    <div class="image">
        <img src="../../assets/image-grid/Asset 6.png" alt="">
    </div>
    <div class="image">
    </div>
    <div class="image">
    </div>
    <div class="image">
        <img src="../../assets/image-grid/Asset 5.png" alt="">
    </div>
    <div class="image">
        <img src="../../assets/image-grid/Asset 9.png" alt="">
    </div>
    <div class="image">
        <img src="../../assets/image-grid/Rectangle 1-3.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
    name: 'image-grid'
}

</script>

<style scoped>
    .grid {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
        align-content: center;
        justify-content: center;
    }

    .image {
        width: 100%;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image:nth-child(2) {
        background-color: rgba(254, 63, 73, 0.3);
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
    }

    .image:nth-child(3) {
        border-radius: 50%;
        background-color: rgba(24, 104, 71, 0.3);
    }

    .image:nth-child(4) {
        background-color: #FFDD33;
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
    }

    .image:nth-child(5) {
        background-color: #FFA500;
        border-top-left-radius: 2.5rem;
    }

    .image:nth-child(6) {
        background-color: rgba(255, 165, 0, 0.3);
        border-radius: 50%;
    }

    .image:nth-child(7) {
        background-color: rgba(254, 63, 73, 0.3);
        border-bottom-left-radius: 2.5rem;
        border-bottom-right-radius: 2.5rem;
    }

    .image:nth-child(2) > img,
    .image:nth-child(3) > img,
    .image:nth-child(6) > img,
    .image:nth-child(7) > img {
        height: 81%;
        width: initial;
        opacity: 1 !important;
    }

    .image > img {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
</style>