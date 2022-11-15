import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import JobRequests from "./pages/jobRequests/JobRequests";
import MyJobRequests from "./pages/jobRequests/MyJobRequests";
import CreateAppointment from "./pages/appointments/CreateAppointment";
import CreateJobRequest from "./pages/jobRequests/CreateJobRequest";
import MyAppointments from "./pages/appointments/MyAppointments";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={JobRequests}
        />
        <Route
          exact
          path="/myjobrequests"
          component={MyJobRequests}
        />
        <Route
          exact
          path="/myappointments"
          component={MyAppointments}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
        <Route
          exact
          path="/updateuser/:email"
          component={UpdateUser}
        />
        <Route
          exact
          path="/protected"
          component={Protected}
        />
        <Route
          exact
          path="/home"
          component={Home}
        />
        <Route
          exact
          path="/createjobrequest"
          component={CreateJobRequest}
        />
         <Route
          exact
          path="/createappointment"
          component={CreateAppointment}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;
