import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribeFunc = store.subscribe(() => {
    console.log("Store changed!", store.getState()); // Refresh the UI
});

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugResolved(1));

unsubscribeFunc(); // We will not be notified any more

store.dispatch(bugRemoved(1));