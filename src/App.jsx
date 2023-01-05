import {Routes,Route} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import AuthenticationComponent from './components/AuthenticationComponent'
function App() {
  console.log("Helloe")
  return (
    <Routes>
      <Route element={<AuthenticationComponent/>}>
        <Route path='' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  )
}

export default App
