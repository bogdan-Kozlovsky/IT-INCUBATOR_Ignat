import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth',
});
export const RequestsAPI = {
    createBody(valueChecked: boolean) {
        return instance.post<PostType>('/test', {success: valueChecked})
    }
}

type PostType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}


