import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form'; //renaming reducer property by creating alias

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;
