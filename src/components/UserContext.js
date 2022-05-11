import {createContext} from 'react';

export const UserCtx = createContext({
    token: '',
    user: '',
    setToken: () => {},
    setUser: () => {}
});

export const UserValue = {
    token: "",
    user: localStorage.getItem("user") || "",
    setUser: (id) => {
        localStorage.setItem("user", id);
    }
}