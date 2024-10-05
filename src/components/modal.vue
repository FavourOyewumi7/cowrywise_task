<template>
  <teleport to="body">
    <div class="modal" v-show="this.show" @click.self="$emit('close')">
   
      <div class="modal-container">
        <div class="modal-image">
          <img :src="image.urls.raw" :alt="image.alt_description">
        </div>
        <div class="modal-text">
          <div>
            <h2>
              {{ image.user.name }}
            </h2>
            <p>
              {{ image.user.location }}
            </p>
          </div>
        </div>
      </div>
      </div>
  
  </teleport>
</template>

<script>
export default {
  name: "ModalView",
  props: {
    image: Object,
    show: Boolean
  },
  emits: ['close'],
  created() {
    console.log(this.image)
    console.log(this.show)
  }
}
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.modal-container {
  height: 50%;
  width: 50%;
  border-radius: 10px;
  margin-top: 5rem;
}

.modal-image {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  margin: 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.modal-text {
  padding-left: 2rem;
  margin-top: 0;
  height: 30%;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>