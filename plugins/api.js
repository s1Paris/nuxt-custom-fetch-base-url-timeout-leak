export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({ baseURL: 'https://yesno.wtf/' })

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})
