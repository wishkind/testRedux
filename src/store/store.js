
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/testReducer';
//import rootSaga from './sagas/testSaga';
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()|| compose

const initialState = { num: 0 };
const sagaMiddleware = createSagaMiddleware();
 const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
);


export default store;
