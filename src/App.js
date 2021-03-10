import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import SvgDraw from "./components/SVGdraw/Svgdraw";

const App =(props)=>{
    return (
            <div className="App">
                <Header exact path='/' render={() => <App/>}/>
                <NavBar/>
                <Route path="/dialog" render={() =>
                    <Dialogs
                        // state={props.state}
                        // dispatch={props.dispatch}
                        store={props.store}
                        // addDialogName = {props.addDialogName}
                        // addDialogMessage = {props.addDialogMessage}
                    />}/>
                <Route path="/profile" render={() => <Profile
                    dispatch={props.dispatch}
                    state={props.state}
                />}/>
                <Route path='/draw' render={()=> <SvgDraw />} />
            </div>
    )
}

export default App;
