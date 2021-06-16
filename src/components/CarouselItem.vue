<template>
  <div class="carousel__item">
    <img :src="require(`../assets/images/${renderPage()}.png`)" alt="картинка" />
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
  methods: {
    renderPage() {
      return this.currentPage;
    }
  }
}
</script>
