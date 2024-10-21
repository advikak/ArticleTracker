import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateArticle from './pages/CreateArticles'
import ShowArticle from './pages/ShowArticle'
import EditArticle from './pages/EditArticle'
import DeleteArticle from './pages/DeleteArticle'

const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<Home />} />
      <Route path = '/articles/create' element={<CreateArticle />} />
      <Route path = '/articles/details/:id' element={<ShowArticle />} />
      <Route path = '/articles/edit/:id' element={<EditArticle />} />
      <Route path = '/articles/delete/:id' element={<DeleteArticle />} />
    </Routes>
  )
}

export default App