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
        // this.user = id;
        localStorage.setItem("user", id);
    }
}