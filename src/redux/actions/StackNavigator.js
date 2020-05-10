import { STACK_NAVIGATOR } from "./ActionTypes";
export function stackNavigator(
    oldView: String,
    newView: String
    //shop: Object,
    //   isAvailable: Boolean = true
) {
    return {
        oldView,
        newView,
        //shop,
        // isAvailable,
        type: STACK_NAVIGATOR
    };
}