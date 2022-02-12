type initStateType = { isFetching: boolean }
const initState = {
    isFetching: true
}

export const loadingReducer = (state: initStateType = initState, action: LoadingACType): initStateType => {
    switch (action.type) {
        case "LOADING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        default:
            return state
    }
}

type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isFetching: boolean) => {
    return {
        type: 'LOADING',
        payload: {isFetching}
    }
}