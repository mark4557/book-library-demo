import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import BookTable from './components/BookTable'
import BookFormModal from './components/BookFormModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BookTable />
      <BookFormModal />
    </>
  )
}

export default App
