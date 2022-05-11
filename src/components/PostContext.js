import { createContext } from "react";

export const PostCtx = createContext({
    posts: [],
    text: "",
    title: "",
    image: "",
    tags: "",
    setText: () => {},
    setPosts: () => {},
    setTitle: () => {},
    setImage: () => {},
    setTags: () => {}

});