export default function DeveloperReducer(state = {true: [], false: []}, action) {
    switch(action.type) {
        case 'LOAD_TRUE_DEVELOPERS_SUCCESS':
            return {
                true: action.payload,
                false: state.false
            };

        case 'LOAD_FALSE_DEVELOPERS_SUCCESS':
            return {
                true: state.true,
                false: action.payload
            };

        default:
            return state;
    }
};