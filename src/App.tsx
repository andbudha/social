import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";

const App =()=> {
    return(
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            {/* <Profile/>*/}
            <div className='app-wrapper-content'>
                <Profile/>
            </div>
        </div>

    );
}

export default App;