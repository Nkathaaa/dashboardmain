import thunk from "redux-thunk";
import rootReducer from "./reducers"
import { compose,createStore, applyMiddleware} from 'redux'

const ReduxStore=()=>{
    const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
    const store=createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store
}
export default ReduxStore