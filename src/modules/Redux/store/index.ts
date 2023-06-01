import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "../reducers/rootReducer";
import { rootSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};
