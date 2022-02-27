export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false,
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
    },
}