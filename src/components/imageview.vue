<template>
  <div class="image-container">
    <div class="image-card" 
      v-bind:style="{ backgroundImage: 'url(' + image.urls.raw + ')', backgroundPosition: 'center' }">
      <div class="image-info" >
        <p class="image-name">{{ image.user.name }}</p>
        <p class="image-loc">{{ image.user.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'ImageView',
  props: {
    image: Object
  },
  data(){
    return{
      store
    }
  },
  created(){
    console.log(store.isloading)
  }
}
</script>

<style scoped>
.image-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.image-card {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  width: 15rem;
  position: relative;
}

.image-info {
  border-radius: 0 10px 10px 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 1.1rem;
  padding-bottom: 2rem;
  padding-top: 10px;
  width: 100%;
}

.image-name {
  font-size: medium;
  font-weight: 500;
}

.image-loc {
  font-size: smaller;
  font-weight: 300;
}
.skeletonloader {
  background-color: #f0f0f0;
  height: 20px;
  width: 100%;
  margin-bottom: 10px;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e6e6e6;
  }
  100% {
    background-color: #f0f0f0;
  }
}
</style>
