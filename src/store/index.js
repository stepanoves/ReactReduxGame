import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DeveloperReducer from '../reducers/DeveloperReducer';
import ManagerReducer from '../reducers/ManagerReducer';
import ProjectReducer from '../reducers/ProjectReducer';
import CompanyReducer from '../reducers/CompanyReducer';

const rootReducer = combineReducers({
    developers: DeveloperReducer,
    managers: ManagerReducer,
    projects: ProjectReducer,
    company: CompanyReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;