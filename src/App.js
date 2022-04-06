import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Records from './components/Index'
import Show from './components/Show'
 import New from './components/New'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
     <Router>
       <nav>
         <Link to='/'>Home</Link><br />
         <Link to='/new'>Add Record</Link>
       </nav>
      <Routes>
        <Route path='/' element={<Records />} />
        <Route path='/new' element={<New />} />
        <Route path='/:id' element={<Show />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
