import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditArticle = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [peerReviewed, setPeerReviewed] = useState(false); // Now a boolean value
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/articles/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setPeerReviewed(response.data.peerReviewed); // Ensure it's set to a boolean
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('error');
        console.log(error);
      });
  }, [id]);

  const handleEditArticle = () => {
    const data = {
      title,
      author,
      publishYear: parseInt(publishYear), // Ensure publishYear is a number
      peerReviewed: peerReviewed, // Send peerReviewed explicitly as a boolean
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/articles/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Article Edited Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error');
        enqueueSnackbar('Error, year must be numerical', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl text-white text-center my-4'>Edit Article</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-[#536db6] rounded-xl w-[600px] p-4 mx-auto'>
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
            className='border-2 text-black border-gray-100 px-4 py-2 w-full'
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
          <label className='text-xl mr-4 text-gray-100'>Peer Reviewed?</label>
          <input
            type='checkbox' // Checkbox to toggle true/false
            checked={peerReviewed} // Bind to peerReviewed boolean state
            onChange={(e) => setPeerReviewed(e.target.checked)} // Set to true/false based on checkbox
          />
        </div>
        <button className='p-2 bg-[#536db6] m-8' onClick={handleEditArticle}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditArticle;
