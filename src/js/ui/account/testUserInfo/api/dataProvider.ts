import axios from 'axios'
import {PostType, UserType} from "../ts/types";

export const getTestUsers = (): Promise<UserType[]> => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const getPosts = (): Promise<PostType[]> => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
};