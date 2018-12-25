import axios from 'axios';
import * as API from '../api/API.json';

export function loadDevelopers(status) {
    return (dispatch) => {
        return axios.get(API.host + API.GET.developers + status).then((response) => {
            dispatch(loadDevelopersSuccess(response.data, status));
        }).catch(error => {
            throw(error);
        });
    }
};

export function loadDevelopersSuccess(developers, status) {
    if (status) {
        return {
            type: 'LOAD_TRUE_DEVELOPERS_SUCCESS',
            payload: developers
        }
    } else {
        return {
            type: 'LOAD_FALSE_DEVELOPERS_SUCCESS',
            payload: developers
        }
    }

};