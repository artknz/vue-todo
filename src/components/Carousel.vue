<template>
  <div calss="carousel">
    <div class="carousel__container">
      <CarouselItem
        class="carousel__page"
        :currentPage="this.currentPage"
      />
      <button class="carousel__btn" @click="prevPage()">Назад</button>
      <button class="carousel__btn carousel__btn_fast" v-for="page in pages" :key="page" @click="`${updatePage()}`">{{ page.id }}</button>
      <button class="carousel__btn" @click="nextPage()">Далее</button>
    </div>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';

export default {
  name: 'Carousel',
  components: {
    CarouselItem
  },
  data() {
    return {
      currentPage: 1,
      pages: [
        {id: 1, name: 'img1', img: '1.png'},
        {id: 2, name: 'img2', img: '2.png'},
        {id: 3, name: 'img3', img: '3.png'},
        {id: 4, name: 'img4', img: '4.png'}
      ]
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.pages.length) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    updatePage() {
      return this.currentPage;
    }
  }
}
</script>

<style>
  .carousel__container {
    position: relative;
    border: 1px solid grey;
    max-width: 500px;
    min-height: 300px;
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .carousel__page {
    position: absolute;
    max-width: 300px;
    height: 200px;
    left: 100px;
  }

  .carousel__btn {
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #88a2bc;
  }

  .carousel__btn_fast {
    margin-top: auto;
    width: 30px;
    height: 30px;
  }

  .carousel__btn:hover {
    opacity: 80%;
  }
</style>
