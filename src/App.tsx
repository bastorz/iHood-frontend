import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Invite } from './components/Invite/Invite'
import SignIn from './components/SignIn/SignIn'
import { EnterInvitation } from './components/EnterInvitation/EnterInvitation'
import CreateIncidents from './components/Incidents/CreateIncidents'
import CreateNotification from './components/Notifications/CreateNotification'
import {Navbar} from './components/Navbar/Navbar';
import {SignUp} from './components/SignUp/Signup';
/* import {Payment} from './components/Payment/Payment'; */
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <Router>

    <Navbar />
          
      <Routes>
 
        <Route path="/" element={<SignIn />}> 
          
        </Route>

        <Route path="/sign-in" element={<SignIn />}> 
          
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
        
      </Routes>

      <Footer/>
      
    </Router>
  )
  
}

export default App;
