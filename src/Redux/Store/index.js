import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../Reducers'
import rootSaga  from '../Sagas'

const configureStore=()=>{
    const sagasMiddleware=createSagaMiddleware();
    const store= createStore(
        rootReducer,
        compose(
        applyMiddleware(sagasMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagasMiddleware.run(rootSaga)
    store.dispatch({type:'HELLO'})
    return store;

}

export default configureStore;