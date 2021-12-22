import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Invite } from './components/Invite/Invite'
import Login from './components/login/login'
import { EnterInvitation } from './components/EnterInvitation/EnterInvitation'
import { CreateIncidents } from './components/Incidents/CreateIncidents'
import { CreateNotification } from './components/Notifications/CreateNotification'
import { Navbar } from './components/Navbar/Navbar'
import { SignUp } from './components/registro/registro'
/* import {Payment} from './components/Payment/Payment'; */
import { Footer } from './components/Footer/Footer'
import { Payment } from './components/Payments/payments'
import { Myaccount } from './components/Myaccount/MyAccount'
import { MainContextProvider } from './components/context/Main.context'
import { ChooseRol } from './components/ChooseRol/ChooseRol'
import { CreateCommunity } from './components/CreateCommunity/CreateCommunity'
import { UserProfile } from './components/UserProfile/UserProfile'
import { GeneralPayment } from './components/Payments/GeneralPayments'
import { CommunityServicePayment } from './components/Payments/CommunityServicePayments'
import { ExtraPayment } from './components/Payments/ExtraPayments'
import { MasterProfile } from './components/MasterProfile/MasterProfile'
import { CheckIncidents } from './components/Incidents/CheckIncidents'
import { CheckNotification } from './components/Notifications/CheckNotification'
import { LoginPresidente } from './components/login/LoginPresidente'

function App() {
    return (
        <MainContextProvider>
            <Router>
                <Fragment>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Login />}></Route>

                        <Route path="/login-user" element={<Login />}></Route>

                        <Route path="/sign-up" element={<SignUp />}></Route>

                        {/*  PRIVATE ROUTE */}

                        <Route
                            path="/create-incidents"
                            element={<CreateIncidents />}
                        ></Route>
                        <Route
                            path="/create-notifications"
                            element={<CreateNotification />}
                        ></Route>

                        <Route path="/profile" element={<Myaccount />}></Route>
                        <Route
                            path="/choose-rol"
                            element={<ChooseRol />}
                        ></Route>

                        <Route
                            path="/user-profile"
                            element={<UserProfile />}
                        ></Route>

                        <Route
                            path="/master-profile"
                            element={<MasterProfile />}
                        ></Route>

                        <Route
                            path="/check-incidents"
                            element={<CheckIncidents />}
                        ></Route>

                        <Route
                            path="/check-notifications"
                            element={<CheckNotification />}
                        ></Route>

                        <Route
                            path="/generate-invitation"
                            element={<Invite />}
                        ></Route>

                        <Route
                            exact
                            path="/enter-invitation"
                            element={<EnterInvitation />}
                        ></Route>

                        <Route
                            path="/create-community"
                            element={<CreateCommunity />}
                        ></Route>

                        <Route path="/payments" element={<Payment />} />
                        <Route
                            path="/general-payments"
                            element={<GeneralPayment />}
                        />
                        <Route
                            path="/community-service-payments"
                            element={<CommunityServicePayment />}
                        />
                        <Route
                            path="/extra-payments"
                            element={<ExtraPayment />}
                        />
                    </Routes>

                    <Footer />
                </Fragment>
            </Router>
        </MainContextProvider>
    )
}

export default App
