import { changeThemeAction, changeToDarkThemeAction, changeToLightThemeAction, themes } from './themeReducer.actions.d';

export function changeToDarkTheme(): changeToDarkThemeAction {

    return {
        type: "CHANGE_THEME_ACTION",
        theme: "dark"
    }
}

export function changeToLightTheme(): changeToLightThemeAction {

    return {
        type: "CHANGE_THEME_ACTION",
        theme: "light"
    }
}

export function changeTheme(theme: themes): changeThemeAction {

    return {
        type: "CHANGE_THEME_ACTION",
        theme
    }
}