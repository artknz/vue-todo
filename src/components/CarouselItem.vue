<template>
  <div class="carousel__item">
    <img :src="imageUrl" alt="картинка" />
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    imageUrl() {
      return require(`../assets/images/${this.currentPage}.png`);
    }
  }
}
</script>
