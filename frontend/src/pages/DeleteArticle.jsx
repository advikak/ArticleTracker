import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteArticle = () => {
  const [loading, setLoading] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()
  const handleDeleteArticle = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/articles/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Article Deleted Successfully', {variant: 'success'})
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert('error')
        enqueueSnackbar('Error', {variant: 'error'})
        console.log(error)
      })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Article</h1> 
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-[#7c8bc6] rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this article?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteArticle}>
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteArticle