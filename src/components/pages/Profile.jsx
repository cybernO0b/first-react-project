import React from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../Auth'


export default () => {
    const navigate = useNavigate();
    // const {setToken, setUser} = useContext(UserCtx);
    const st = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20px",
        paddingRight: "20px"
    }
    const logout = (e) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <>
        <div style={st}>
            <h1>Личный кабинет</h1>
            <button className='logout'
            onClick={logout} >Выйти</button>
        </div>
        
        
        </>
    )
}