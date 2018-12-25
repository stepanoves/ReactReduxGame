import axios from 'axios';
import * as API from '../api/API.json';


export function loadManagers(status) {
    return (dispatch) => {
        return axios.get(API.host + API.GET.managers + status).then((response) => {
            dispatch(loadManagersSuccess(response.data, status));
        }).catch(error => {
            throw(error);
        });
    }
};

export function loadManagersSuccess(managers, status) {
    if (status) {
        return {
            type: 'LOAD_TRUE_MANAGERS_SUCCESS',
            payload: managers
        }
    } else {
        return {
            type: 'LOAD_FALSE_MANAGERS_SUCCESS',
            payload: managers
        }
    }

};