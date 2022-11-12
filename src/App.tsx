import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
}

const App =(props: AppPropsType)=> {

    return(
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile/'
                        render={()=><Profile
                            posts={props.state.profilePage.posts}
                        />}/>

                    <Route
                        path='/dialogues/'
                        render={()=><Dialogues
                            dialogues={props.state.messagePage.dialogues}
                            messages = {props.state.messagePage.messages}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;