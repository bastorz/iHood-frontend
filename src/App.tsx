import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Invite } from './components/Invite/Invite'
import Login from './components/login/login'
import { EnterInvitation } from './components/EnterInvitation/EnterInvitation'
import {CreateIncidents} from './components/Incidents/CreateIncidents'
import { CreateNotification } from './components/Notifications/CreateNotification'
import {Navbar} from './components/Navbar/Navbar';
import {SignUp} from './components/registro/registro';
/* import {Payment} from './components/Payment/Payment'; */
import {Footer} from './components/Footer/Footer';
import {Payment} from './components/Payments/payments';
import {Myaccount} from './components/Myaccount/MyAccount';
import {MainContextProvider} from './components/context/Main.context'
import {ChooseRol} from './components/ChooseRol/ChooseRol';
import {CreateCommunity} from './components/CreateCommunity/CreateCommunity';
import {UserProfile} from './components/UserProfile/UserProfile';
import {MasterProfile} from './components/MasterProfile/MasterProfile'


function App() {
  return (
    <MainContextProvider>
      <Router>
      <Navbar />
        <Routes>
  
          <Route path="/" element={<Login />}> 
            
          </Route>

          <Route path="/sign-in" element={<Login />}> 
            
          </Route>

          <Route path="/enter-invitation" element={<EnterInvitation />}> 
            
          </Route>

          <Route path="/create-incidents" element={<CreateIncidents />}> 
        
          </Route>

          <Route path="/create-notification" element={<CreateNotification />}> 
            
          </Route>

          <Route path="/generate-invitation" element={<Invite />}> 
            
          </Route> 
          
          <Route path="/sign-up" element={<SignUp/>}> 
            
          </Route> 

          <Route path="/payments" element={<Payment/>}> 
            
          </Route> 
          
          <Route path="/profile" element={<Myaccount/>}> 
            
          </Route> 
          
          <Route path="/choose-rol" element={<ChooseRol/>}> 
            
          </Route> 

          <Route path="/create-community" element={<CreateCommunity/>}> 
            
          </Route> 
          
          <Route path="/user-profile" element={<UserProfile/>}> 
            
          </Route> 
          
          <Route path="/master-profile" element={<MasterProfile/>}> 
            
          </Route> 
          
        </Routes>

        <Footer/>
      </Router>
    </MainContextProvider>
  )
  
}

export default App;
