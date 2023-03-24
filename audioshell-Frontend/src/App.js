import './App.css';
import { RouterProvider} from 'react-router-dom';
import Router from './Components/Routes/Routes/Routes';
import Login from './Components/Authentication/Login/Login';
import Navbar from './Components/Shared/Navbar';
import Signup from './Components/Authentication/Signup/Signup';

function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Routes>
        <Route path='/login' element={Login}></Route>
        <Route path='/signup' element={Signup}></Route>
      </Routes> */}
      <RouterProvider router={Router}></RouterProvider>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
