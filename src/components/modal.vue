<template>
  <teleport to="body">
    <div class="modal" v-show="this.show" @click.self="$emit('close')">

      <div class="modal-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="close" @click.self="$emit('close')">
          <path fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd" />
        </svg>

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
  position: relative;
}

.close {
  color: #fff;
  position: absolute;
  top: -40px;
  width: 1rem;
  height: 1rem;
  right: -20px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
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
  border-radius: 10px 10px 0 0;
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
@media (max-width: 480px) {
  .modal-text{
   padding-left : 0.5rem;}
}
 h2{
  font-size: medium;
  font-weight: 800;
}
p{
  font-size: small;
}
</style>