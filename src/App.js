import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Diaogs/Dialogs";
import {Route} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";

const App =(props)=>{
    return (
            <div className="App">
                <Header exact path='/' render={() => <App/>}/>
                <NavBar/>
                <Route path="/dialog" render={() =>
                    <Dialogs
                        state={props.state}
                        addDialogName = {props.addDialogName}
                        addDialogMessage = {props.addDialogMessage}
                    />}/>
                <Route path="/profile" render={() => <Profile
                    state={props.state}
                    addPost={props.addPost}
                    updatePostText={props.updatePostText}
                />}/>
            </div>
    )
}

export default App;
