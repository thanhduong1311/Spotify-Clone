import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import { Route , Routes , BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}>
        </Route>
        <Route path="/" element={<RegisterPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
