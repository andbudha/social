import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";

const App =()=> {
    return(
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogues' component={Dialogues}/>
                    <Route path='/profile' render={()=> <Profile message={'Hi there, I am from Route-Component'}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;