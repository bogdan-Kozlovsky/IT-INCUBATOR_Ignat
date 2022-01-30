import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: GlobalType): Array<UserType> => {
    switch (action.type) {
        case 'SORT-UP': {
            let newState = [...state]
            return newState.sort((a, b) => {
                return a.name > b.name ? 1 : -1
            })
        }
        case 'SORT-DOWN': {
            let newState = [...state]
            return newState.sort((a, b) => {
                return a.name > b.name ? 1 : -1
            }).reverse()
        }
        case 'CHECK': {
            let newState = [...state]
            return newState.filter(f => f.age >= 18)
        }
        default:
            return state
    }
}


type GlobalType = sortUpACType | sortDownACType | ageSortingACType
type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'SORT-UP',
    } as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN',
    } as const
}
type ageSortingACType = ReturnType<typeof ageSortingAC>
export const ageSortingAC = () => {
    return {
        type: 'CHECK',
    } as const
}


