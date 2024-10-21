import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateArticles = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [peerReviewed, setPeerReviewed] = useState(false); // Default value is false
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveArticle = () => {
    const data = {
      title,
      author,
      publishYear: parseInt(publishYear), // Ensure publishYear is a number
      peerReviewed // Will send false if unchecked
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/articles', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Article Created Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error, year must be numerical', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl text-white text-center my-4'>Create Article</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-[#7c8bc6] rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-100'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 text-black border-gray-100 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-100'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2  text-black border-gray-100 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-100'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 text-black border-gray-100 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-100'>Peer reviewed?</label>
          <input
            type='checkbox' // Change input type to checkbox
            checked={peerReviewed} // Bind to peerReviewed boolean state
            onChange={(e) => setPeerReviewed(e.target.checked)} // Toggle boolean state
            className='border-2 text-black border-gray-100 px-4 py-2'
          />
        </div>
        <button className='p-2 bg-[#7c8bc6] m-8' onClick={handleSaveArticle}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateArticles;
