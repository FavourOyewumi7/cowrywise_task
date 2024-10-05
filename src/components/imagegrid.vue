<template>
    <div class="image-grid">

        <ImageView v-for="image in this.store.images" :key="image.id" :image="image" :class="getSizeClass(image)" />

    </div>
</template>

<script>
import ImageView from './imageview.vue';
import { store } from '@/store';
export default {
    name: "ImageGrid",
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
            if (image.aspectRatio >= 1.5) return 'image-item--very-large'
            if (image.aspectRatio >= 1.2) return 'image-item--large'
            return 'image-item--medium'
        }
    }


}
</script>

<style scoped>
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
</style>