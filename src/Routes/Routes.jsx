import React, { useReducer } from "react"
import { Route, Switch } from "react-router-dom"
import Reg from "../Fireauth/Reg"
import { useSelector } from "react-redux";
import Login from "../Fireauth/Login"
import Profile from "../Components/Profile/Profile"
import NavBar from "../Components/Navbar/NavBar"
import NavbarList from "../Components/Navbar/NavbarList"
import Home from "../Pages/Home";


function Routes()
{
 

    return( 
        <div>
           
            <NavBar/>
            <NavbarList/>

            <Switch>

                <Route path="/" exact>
                   <Home/>
                </Route>

               <Route path="/regi" exact>
                   <Reg/>
               </Route>

               <Route path="/login" exact>
                   <Login/>
               </Route>

               <Route path="/profile" exact>
                   <Profile/>
               </Route>


            </Switch>


        </div>
    )
}

export default Routes;