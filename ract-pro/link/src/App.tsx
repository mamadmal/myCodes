import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FetcherWithComponents } from 'react-router-dom'
import home from './component/home/home'
import join from './component/join/join'
import sign from './component/signIn/sign'
import homePage from './component/homePage/homePage'
import profile from './component/profile/profile'

export default function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" Component={home}></Route>
              </Routes>
              <Routes>
                  <Route path="/join" Component={join}></Route>
              </Routes>
              <Routes>
                    <Route path='/sign_in' Component={sign}></Route>
              </Routes>
              <Routes>
                    <Route path='/home' Component={homePage}></Route>
              </Routes>
              <Routes>
                    <Route path='/profile' Component={profile}></Route>
              </Routes>


          </Router>
      </>
  )
}