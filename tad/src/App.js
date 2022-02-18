import LoginPage from "./component/LoginPage/LoginPage";
import { Route , Routes , BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
