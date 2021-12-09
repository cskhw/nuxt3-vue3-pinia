import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
    state: () => ({user: {
        xHeaderToken: "",
        sessionKey: "",
    }}),
    getters: {
        getXHeaderToken(state): string {
            return "bearer " + state.user.xHeaderToken
        }
    },
    actions:{
        async requestSessionKey(email, password){
            let token = await Promise.resolve("token");
            this.xHeaderToken = this.getXheaderToken()
        }
    }
})

export default useAuthStore;