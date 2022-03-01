const initState = {
    theme: 'some'
};
type initialStateType = {
    theme: string
}
export const themeReducer = (state: initialStateType = initState, action: ChangeThemeACType): initialStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME" : {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};


type ChangeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => {
    return {type: "CHANGE_THEME", theme} as const
};