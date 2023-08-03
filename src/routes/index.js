import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from '../pages/Error'
import Home from '../pages/Home'
import Navbar from '../layout/Navbar'
import BooksView from '../features/books/BooksView'
import AddBook from '../features/books/AddBook'
// import Error from '../pages/Error'

const Index = () => {
  return (
    <>
      {/* <h2>hello</h2> */}
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/show-book' element={<BooksView />} />
            <Route exact path='/add-book' element={<AddBook />} />
            <Route exact path='*' element={<Error />} />
          </Routes>
        </main>

      </BrowserRouter>
    </>
  )
}

export default Index