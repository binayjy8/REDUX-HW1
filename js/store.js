const store = Redux.createStore(cartReducer);

store.subscribe(() => {
    console.log("Store Updated");
    console.log(store.getState());
});