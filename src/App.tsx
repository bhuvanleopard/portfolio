import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Background from "./components/Background"

function App() {

  return (<>

    <BrowserRouter>

      <Background>

      </Background>


        <Header/>
      
        <main className="relative -z-50">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/footer" element={<Footer/>} />
            </Routes>
        </main>
      
        <Footer/>
        
    </BrowserRouter>
  
  </>)
}

export default App
