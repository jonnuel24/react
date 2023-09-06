import React from 'react'
import onboard from '../pages/onboard'
import signup from '../pages/signup'
import login from '../pages/login'
import createAccount from '../pages/createAccount'
import home from '../pages/home'
import { Route, Routes } from 'react-router-dom'


function Root() {
  return (
    <Routes>
      <Route path="/" exact Component={onboard} />
      <Route path="/signup" Component={signup} />
      <Route path="/login" Component={login} />
      <Route path="/createAccount" Component={createAccount} />
      <Route path="/home" Component={home} />
    </Routes>
  )
}

export default Root