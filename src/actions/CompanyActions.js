import axios from 'axios';
import * as API from '../api/API.json';

export function loadCompany() {
    return (dispatch) => {
        return axios.get(API.host + API.GET.company).then((response) => {
            dispatch(loadCompanySuccess(response.data));
        }).catch(error => {
            throw(error);
        });
    }
};

export function loadCompanySuccess(company) {
    return {
        type: 'LOAD_COMPANY_SUCCESS',
        payload: company
    }


};