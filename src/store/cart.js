export default {
    namespaced: true,
    state: {
        lines: []
    },
    getters: {
        itemCount: state => state.lines.reduce((total, line) => total + line.quantity, 0),
        totalPrice: state => state.lines.reduce((total, line) => total + (line.quantity * line.product.price), 0),
    },
    mutations:{
        addProduct(state, product){
            let line = state.lines.find(line => line.product.id == product.id);
            
            if(line != null){
                line.quantity++;
            }else{
                state.lines.push({ product: product, quantity: 1 });
            }
        },
        changeQuantity(state, update){
            let line = state.lines.find(line => line.product.id == update.line.product.id);
            console.log('changeQuantity');
            if (line) {
                line.quantity = update.quantity;
            } else {
                console.error(`Line not found for product id ${update.line.product.id}`);
            }
        },
        removeProduct(state, lineToRemove){
            let index = state.lines.findIndex(line => line == lineToRemove);
            if(index > -1)
                state.lines.splice(index, 1);
        },
        setCardData(state, data){
            state.lines = data;
        }
    },
    actions:{
        loadCardData(context){
            let data = localStorage.getItem("card");
            if(data != null){
                context.commit("setCartData", JSON.parse(data));
            }
        },
        storeCartData(context){
            localStorage.setItem("cart", JSON.stringify(context.state.line));
        },
        clearCartData(context){
            context.commit("setCartData", []);
        },
        initializeCart(context, store){
            context.dispatch("localCartData");
            store.watch(state => state.cart.lines, () => context.dispatch("storeCartData"),
                { deep: true });
        }
    }
}