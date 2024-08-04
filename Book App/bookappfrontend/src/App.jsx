import React from 'react'
import { Routes, Route, json } from 'react-router-dom'
import Home from './Pages/Home'
import CreateBook from './Pages/CreateBook'
import DeleteBook from './Pages/DeleteBook'
import ShowBook from './Pages/ShowBook'
import EditBook from './Pages/EditBook'

import axios from 'axios'
import { useEffect, useState } from 'react'




function App() {

  const [books, setbooks] = useState('')
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/book/')
      .then((response) => {
        setbooks(response.data.data)
        console.log(response.data.data + "heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey")

      })
      .catch((error) => {
        console.log(error);

      });
  }, [])
  return (

    // <Routes>
    //   <Route path="/" element={Home} />
    //   <Route path="/books/create" element={CreateBook} />
    //   <Route path="/books/details/:id" element={ShowBook} />
    //   <Route path="/books/edit/:id" element={EditBook} />
    //   <Route path="/books/delete/:id" element={DeleteBook} />

    // </Routes>
    <>
      <h2>hellooooooooooo</h2>
      <h1>{setbooks.title}</h1>
    </>


  )
}

export default App
