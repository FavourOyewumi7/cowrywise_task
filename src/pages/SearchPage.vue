<template>
  <div class="page-area">
    <div class="page-container-flex">
      <div class="page-bar">
      <h2> Search Results for <span>"{{ store.search_word }}" </span></h2>
    </div>
    </div>
  </div>
    <div class="result-area">
      <div class="result-container">
        <div class="image-grid">

          <ImageView v-for="image in this.store.searched_images" :key="image.id" :image="image" :class="getSizeClass(image)" />

        </div>
      </div>
    </div>
  
</template>

<script>
import { store } from '@/store';
import ImageView from '@/components/imageview.vue';
export default {
  name: "SearchPage",
  components: [
    ImageView
  ],
  data() {
    return {
      store
    }
  },
  methods: {
    getSizeClass(image) {
      if (image.width/image.height >= 1.5) return 'image-item--very-large'
      if (image.width/image.height >= 1.2) return 'image-item--large'
      return 'image-item--medium'
    }
  }
}
</script>

<style scoped>
.page-area {
    background-color: #DEE3EA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15rem;
    width: 100%;
}
.page-container-flex {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.page-bar{
  width: 70%;
}
.result-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}

.result-container {

  position: absolute;
  top: -1.5rem;

}
</style>