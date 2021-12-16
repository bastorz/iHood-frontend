import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeLog } from './components/Home/HomeLog'
import { Invite } from './components/Invite/Invite'
import Login from './components/Login/Login'
import { EnterInvitation } from './components/EnterInvitation/EnterInvitation'
import CreateIncidents from './components/Incidents/CreateIncidents'
import CreateNotification from './components/Notifications/CreateNotification'
import SignUp from './components/SignUp/Signup'

function App() {
  return (
    <Router>

      <Routes>
 
        <Route path="/" element={<HomeLog />}> 
          
        </Route>

        <Route path="/sign-up" element={<SignUp onSignup={undefined} onGoHomeLog={undefined} />}> 
          
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

      </Routes>
      
    </Router>
  )
  
}

export default App;
