import store from "./store";
import * as actions from './actionTypes'

const unsubscribeFunc = store.subscribe(() => {
    console.log("Store changed!", store.getState()); // Refresh the UI
});

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
});

unsubscribeFunc(); // We will not be notified any more

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
});