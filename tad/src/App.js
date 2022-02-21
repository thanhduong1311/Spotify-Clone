import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import SignIn from "./component/SignIn/SignIn";
import { Route , Routes , BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}>
        </Route>
        <Route path="/" element={<RegisterPage/>}>
        </Route>
        <Route path="/signin" element={<SignIn/>}>
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
