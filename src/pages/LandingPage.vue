<template>
    <div class="landing-area">
        <Searchbar />
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

                    <ImageView v-for="image in this.store.images" :key="image.id" :image="image"
                        :class="getSizeClass(image)" />

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Searchbar from '@/components/searchbar.vue';
import ImageView from '@/components/imageview.vue';
import { store } from '@/store';
export default {
    name: 'LandingPage',
    components: {
        Searchbar,
        ImageView
    },
    data() {
        return {
            store
        }
    },
    created() {
        this.store.fetchHomeImages()
    },
    methods: {
        getSizeClass(image) {
            if (image.width / image.height >= 1.5) return 'image-item--very-large'
            if (image.width / image.height >= 1.2) return 'image-item--large'
            return 'image-item--medium'
        }
    }



}
</script>

<style scoped>
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
.skeleton-grid{
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-auto-rows: 10px;
    grid-column-gap: 2.5rem;
    grid-row-gap: 1.9rem;
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
.skeleton-text{
  position: absolute;
  bottom: 1rem;
  height: 2rem;
}
.skeleton-text-lg{
  height: 0.4rem;
  background-color: #eee;
  width: 50%;
}
.skeleton-text-sm{
  height: 0.2rem;
  background-color: #eee;
  width: 30%;
  margin-top: 1rem;
}
</style>