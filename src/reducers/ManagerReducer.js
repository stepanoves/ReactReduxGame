export default function ManagerReducer(state = {true: [], false: []}, action) {
    switch(action.type) {
        case 'LOAD_TRUE_MANAGERS_SUCCESS':
            return {
                true: action.payload,
                false: state.false
            };

        case 'LOAD_FALSE_MANAGERS_SUCCESS':
            return {
                true: state.true,
                false: action.payload
            };

        default:
            return state;
    }
};