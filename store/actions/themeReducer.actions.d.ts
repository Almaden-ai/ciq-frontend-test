export type themes = 
    | "light"
    | "dark"

export type changeThemeAction = {
    type: "CHANGE_THEME_ACTION"
    theme: themes
}

export type changeToDarkThemeAction = {
    type: "CHANGE_THEME_ACTION",
    theme: "dark"
}

export type changeToLightThemeAction = {
    type: "CHANGE_THEME_ACTION",
    theme: "light"
}

export type themeReducerActions = 
    | changeThemeAction
    | changeToDarkThemeAction
    | changeToLightThemeAction