import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string)=> void
}

const App =(props: AppPropsType)=> {

    return(
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile/'
                        render={()=><Profile
                            state={props.state}
                            addPost={props.addPost}
                        />}/>

                    <Route
                        path='/dialogues/'
                        render={()=><Dialogues
                            state={props.state}
                        />}/>
                </div>
            </div>
    );
}

export default App;