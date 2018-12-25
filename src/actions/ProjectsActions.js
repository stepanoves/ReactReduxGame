import axios from 'axios';
import * as API from '../api/API.json';

export function loadProjects(status) {
    return (dispatch) => {
        return axios.get(API.host + API.GET.projects + status).then((response) => {
            dispatch(loadProjectsSuccess(response.data, status));
        }).catch(error => {
            throw(error);
        });
    }
};

export function loadProjectsSuccess(projects, status) {
    if (status) {
        return {
            type: 'LOAD_TRUE_PROJECTS_SUCCESS',
            payload: projects
        }
    } else {
        return {
            type: 'LOAD_FALSE_PROJECTS_SUCCESS',
            payload: projects
        }
    }

};