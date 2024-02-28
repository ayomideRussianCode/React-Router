import { Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'

function App() {
  return (
    <>

     <Navbar/>
     <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='about' element = {<About/>} />
        <Route path='blog' element = {<Blog/>} />
        <Route path='contact' element = {<Contact/>} />
     </Routes>
     
    </>
  );
}

export default App;


