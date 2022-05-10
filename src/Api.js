
const responseHandler = res => {
    return res.ok ? res.json() : res.statusText
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    signup(body) {
        return fetch(`${this.path}/signup`, {
            method: 'post',
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler)
    }
    login(body) {
        return fetch(`${this.path}/signin`, {
            method: 'post',
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"

            },
            body: JSON.stringify(body)
        }).then(responseHandler)
    }
    addpost(body) {
        return fetch(`${this.path}/posts`, {
            method: 'post',
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
                "title": "",
                "text": "", 
	            "image": "",
                "tags": []
            },
             body: JSON.stringify(body)
        }).then(responseHandler)
        
    }
}

const config = {
    path: "https://api.react-learning.ru",
    token: localStorage.getItem("token")
}

const api = new Api(config);

export default api;

