import {defineStore} from "pinia";
import {ref} from "vue";

const TOKEN_KEY = 'jwt-token'

export const useGlobalStore = defineStore('globalStore', () => {
        const token = ref(localStorage.getItem(TOKEN_KEY))
        return {
            token,
        }
    }
)