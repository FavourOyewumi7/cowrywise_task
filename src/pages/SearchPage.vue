<template>
  <div class="page-area">
    <div class="page-container-flex">
      <div class="page-bar">
        <h2 class="search-word-begin"> Searching for <q class="search-word">{{ store.search_word }}</q></h2>
      </div>
    </div>
  </div>
  <div class="result-area">
    <div class="result-container">
      <div class="skeleton-grid" v-if="store.isloading">
        <div v-for="i in 9" :key="i" class="skeleton-loader">
          <div class="skeleton-text">
            <div class="skeleton-text-lg">

            </div>
            <div class="skeleton-text-sm">

            </div>
          </div>
        </div>
      </div>
      <div class="image-grid" v-else>
        <ImageView v-for="image in this.store.searched_images" :key="image.id" :image="image"
          :class="getSizeClass(image)" />
      </div>
      <ModalView :image="this.store.images[this.isSelected]" :show="this.isModalOpen" />
    </div>
  </div>

</template>

<script>
import { store } from '@/store';
import ImageView from '@/components/imageview.vue';
import ModalView from '@/components/modal.vue';
export default {
  name: "SearchPage",
  components: [
    ImageView,
    ModalView
  ],
  data() {
    return {
      store,
      isModalOpen: false,
      isSelected: null,
      modal_data: {}
    }
  },
  created() {
        this.model_data = this.store.searched_images 
    },
  methods: {
    getSizeClass(image) {
      if (image.width / image.height >= 1.5) return 'image-item--very-large'
      if (image.width / image.height >= 1.2) return 'image-item--large'
      return 'image-item--medium'
    },
    openModal(index) {
      this.isSelected = index;
      console.log(this.isSelected)
      console.log(store.images[this.isSelected])
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.isSelected = null;
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

.page-bar {
  width: 70%;
}

.search-word-begin {
  font-weight: 700;
  font-size: 2rem;
  color: #233c62;
}

.search-word {
  color: #4771af !important;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-auto-rows: 10px;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.9rem;
}

.image-item--medium {
  grid-row-end: span 5;
}

.image-item--large {
  grid-row-end: span 7;
}

.image-item--very-large {
  grid-row-end: span 10;
}

.result-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}

.result-container {

  position: absolute;
  top: -2.5rem;
}

.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-auto-rows: 10px;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.9rem;
}

.skeleton-loader {
  background-color: #ccc;
  height: 8rem;
  width: 100%;
  margin-bottom: 10px;
  animation: shimmer 1.5s infinite;
  position: relative;
  border-radius: 10px;
}

@keyframes shimmer {
  0% {
    background-color: #ccc;
  }

  50% {
    background-color: #e6e6e6;
  }

  100% {
    background-color: #f0f0f0;
  }
}

.skeleton-text {
  position: absolute;
  bottom: 1rem;
  height: 2rem;
}

.skeleton-text-lg {
  height: 0.4rem;
  background-color: #eee;
  width: 50%;
}

.skeleton-text-sm {
  height: 0.2rem;
  background-color: #eee;
  width: 30%;
  margin-top: 1rem;
}
</style>