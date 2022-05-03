import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


const data = ["1post", "11post", "20post", "33posttt", "44postt"]
const dataCards = data.map((post, i) => <Card like={post} key={i}/>)


const App = () => {
    return (
        <>
        <Header/>
       
        
        <div className="container">
            {dataCards}
            {/* <Card/>
            <Card/>
            <Card/>
            <Card/> */}
            
        </div>
        <Footer/>
        </>
    )
}

export default App;