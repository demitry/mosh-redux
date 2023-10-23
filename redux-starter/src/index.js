import store from "./store";

const unsubscribeFunc = store.subscribe(() => {
    console.log("Store changed!", store.getState()); // Refresh the UI
});

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});

unsubscribeFunc(); // We will not be notified any more

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
});