import {BrowserRouter, Route, Routes} from "react-router-dom"
import Welcome from './pages/Welcome';
import Signup from './pages/customers/Signup';
import Login from './pages/customers/Login';
import Services from './pages/customers/Services';
import Ownerdesk from "./pages/owner/Ownerdesk";
function App() {
  return (
    <div className="App">
    //React router DOM for managing the routes
      <BrowserRouter>
    //All the route are wrapped with a routes component 
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/services' element={<Services/>}/>
        
        {/* ownerPage */}
        <Route path="/secret" element={<Ownerdesk/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
