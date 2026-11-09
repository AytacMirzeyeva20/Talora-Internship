import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Choose from './pages/Choose.jsx';
import Footer from './components/Footer.jsx';
function App(){
  return(
    <>
      <Navbar />
      <Home/>
      <About/>
      <Choose/>
      <Footer/>
    </>
  )
}
export default App;