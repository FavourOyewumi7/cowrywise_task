<template>
    <div class="search-area">
        <div class="search-container-flex">
            <div class="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 search-icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search for Photo" v-model="searchQuery" @keyup.enter="store.SearchImages(searchQuery)">
            </div>
        </div>
    </div>

</template>

<script>
import { store } from '@/store';
export default {
    name: "SearchBar",
    data() {
        return {
            store
        }
    },

}
</script>

<style scoped>
.search-area {
    background-color: #DEE3EA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15rem;
    width: 100%;
}

.search-container-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.search-bar {
    width: 70%;
    position: relative;
}

.search-icon {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 50%;
    transform: translateY(-50%);
    left: 1.5rem;
    color: #4771af;

}

.search-container-flex input[type="text"] {
    box-shadow: 0 0 10px #DEE3EA;
    border-radius: 10px;
    border: none;
    transition: box-shadow 0.3s ease;
    padding-left: 4.5rem;
    height: 3rem;
    width: 100%;
    color: #4771af;

}
input::placeholder{
    color: #4771af;
}

.search-bar input:focus {
    outline: none;
}
</style>