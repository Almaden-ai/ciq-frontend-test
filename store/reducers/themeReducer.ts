import { themeReducerActions } from "../actions/themeReducer.actions.d";

const initialValue = "light";

export default function themeReducer(state = initialValue, action: themeReducerActions) {

    console.log("Changing Theme...", action.theme);

    switch (action.type) {

        case "CHANGE_THEME_ACTION": {

            state = action.theme;
            break;
        }
    }

    return state;
}