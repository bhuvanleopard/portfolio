import { BrowserRouter, Routes, Route } from "react-router-dom"
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
      
        {/* <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/footer" element={<Footer/>} />
            </Routes>
        </main> */}
        <Home/>
        <Footer/>
        
    </BrowserRouter>
  
  </>)
}

export default App
