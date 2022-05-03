import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


const App = () => {
    return (
        <>
        <Header/>
       
        
        <div className="container">
            <Card/>
            
        </div>
        <Footer/>
        </>
    )
}

export default App;