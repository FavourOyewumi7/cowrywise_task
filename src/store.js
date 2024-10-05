import { reactive } from "vue";
import axios from "axios";
import router from "./router";


export const store = reactive({
    isloading : true,
    images:'',
    search_word:'',
    searched_images:'',
    async fetchHomeImages(){
        this.isloading = true
        // await new Promise(r => setTimeout(r, 10000));
        try{
        const data = await axios.get(`${process.env.VUE_APP_UNSPLASH_API}/search/photos?query=african&client_id=${process.env.VUE_APP_UNSPLASH_CLIENT_KEY}&per_page=8`)

        this.images = data.data.results

        }
        catch (error) {
            this.error = 'An error occurred while fetching photos';
            console.error('Error:', error);
        }   
        finally{
            this.isloading = false;
        }
},
    async SearchImages(word){
        this.isloading = true
        this.search_word = word
        router.push({name:'search'})
        // await new Promise(r => setTimeout(r, 20000));
        try{
        const new_data = await axios.get(`${process.env.VUE_APP_UNSPLASH_API}/search/photos?query=${word}&client_id=${process.env.VUE_APP_UNSPLASH_CLIENT_KEY}&per_page=8`)

        this.searched_images = new_data.data.results

        }
        catch (error) {
            this.error = 'An error occurred while fetching photos';
            console.error('Error:', error);
    }
    finally{
        this.isloading = false;
    }
}

})