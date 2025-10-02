import { BrowserRouter} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Background from "./components/Background"
function App() {

  return (<>

    <BrowserRouter>

      <Background/>

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
        {/* <AboutMe/> */}
        {/* <Footer/> */}
        
    </BrowserRouter>
  
  </>)
}

export default App
