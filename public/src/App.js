import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Secret from "./pages/Secret";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
}


// NOTES:

// React : difference between <Route exact path="/" /> and <Route path="/" />
// In this example, nothing really. The exact param comes into play when you have multiple paths that have similar names:

// For example, imagine we had a Users component that displayed a list of users. We also have a CreateUser component that is used to create users. The url for CreateUsers should be nested under Users. So our setup could look something like this:

// <Switch>
//   <Route path="/users" component={Users} />
//   <Route path="/users/create" component={CreateUser} />
// </Switch>
// Now the problem here, when we go to http://app.com/users the router will go through all of our defined routes and return the FIRST match it finds. So in this case, it would find the Users route first and then return it. All good.

// But, if we went to http://app.com/users/create, it would again go through all of our defined routes and return the FIRST match it finds. React router does partial matching, so /users partially matches /users/create, so it would incorrectly return the Users route again!

// The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.

// So in this case, we should add exact to our Users route so that it will only match on /users:
