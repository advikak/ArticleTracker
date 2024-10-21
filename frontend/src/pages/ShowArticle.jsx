import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


const ShowArticle = () => {
  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() =>{
    setLoading(true)
    axios
      .get(`http://localhost:5555/articles/${id}`)
      .then((response) => {
        setArticle(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(flase)
      })
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Article</h1>
      {loading? (
        <Spinner/>
      ): (
        <div className='flex flex-col border-2 border-[#8f9bcf] rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span className='text-lg'>{article.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span className='text-lg'>{article.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span className='text-lg'>{article.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Peer Reviewed?</span>
            <span className='text-lg'>{article.peerReviewed ? 'Yes' : 'No'}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(article.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(article.updatedAt).toString()}</span>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default ShowArticle