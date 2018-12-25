export default function CompanyReducer(state = {}, action) {
    switch(action.type) {
        case 'LOAD_COMPANY_SUCCESS':
            return action.payload;

        default:
            return state;
    }
};