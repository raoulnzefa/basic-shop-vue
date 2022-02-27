import { createStore } from "vuex";
import productsMudule from './modules/products';
import userModule from './modules/user';
import cartModule from './modules/cart';

const store = createStore({
    modules: {
        products: productsMudule,
        user: userModule,
        cart: cartModule
    }
});

export default store;