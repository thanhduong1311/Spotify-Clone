import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import SignIn from "./component/SignIn/SignIn";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import Download from "./component/DownloadPage/Download";
import Premium from "./component/PremiumPage/Premium";
import Support from "./component/SupportPage/Support";
import RegisterWithFacebook from "./component/RegisterWithFacebook/RegisterWithFacebook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}>
        </Route>
        <Route path="/registerpage" element={<RegisterPage/>}>
        </Route>
        <Route path="/signin" element={<SignIn/>}>
        </Route>
        <Route path="/download" element={<Download/>}></Route>
        <Route path="/premium" element={<Premium/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/registerpage/RF" element={<RegisterWithFacebook/>}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
