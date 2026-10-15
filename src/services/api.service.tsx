import axios from "axios";

const axiosInstance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

export const getAll = async <T,>(url:string):Promise<T>=>{
    const {data} = await axiosInstance.get<T>(url)
    return data
}
export const getById = async <T,>(url:string,id:string):Promise<T>=>{
    const {data} = await axiosInstance.get<T>(`${url}/${id}`)
    return data
}