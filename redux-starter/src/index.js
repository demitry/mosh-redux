import store from "./store";

console.log("our store:");
console.log(store);

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
})

console.log("our store state:");
console.log(store.getState());

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
})

console.log("our store state:");
console.log(store.getState());