<template>
    <div class="landing-area">
        <Searchbar />
        <div class="result-area">
            <div class="result-container">
                <div class="image-grid">

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
            if (image.width/image.height >= 1.5) return 'image-item--very-large'
            if (image.width/image.height >= 1.2) return 'image-item--large'
            return 'image-item--medium'
        }
    }



}
</script>

<style>
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