import {createStore} from "redux";
import voteReducer from '../reducers/voteReducer'

const store = createStore(voteReducer);

export default store;


