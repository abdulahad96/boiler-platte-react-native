import Immutable from "seamless-immutable";
import * as types from "../actions/ActionTypes";
const initialState = Immutable({
    oldView: undefined,
    newView: undefined,
    appState: undefined
});
export default (state: Object = initialState, action: Object) => {
    switch (action.type) {
        case types.STACK_NAVIGATOR:
            return Immutable.merge(state, {
                oldView: action.oldView,
                newView: action.newView
            });
        // case types.APP_STATE_CHANGED:
        //     return Immutable.merge(state, {
        //         appState: action.nextState
        //     });
        default:
            return state;
    }
};