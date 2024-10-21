import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'

const ArticlesTable = ({ articles }) => {
  return (
    <table className='w-full p-3 border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-[#8f9bcf] rounded-md'>No</th>
          <th className='border border-[#8f9bcf] rounded-md'>Title</th>
          <th className='border border-[#8f9bcf] rounded-md max-md:hidden'>Author</th>
          <th className='border border-[#8f9bcf] rounded-md max-md:hidden w-[150px]'>Publish Year</th> {/* Set a smaller width */}
          <th className='border border-[#8f9bcf] rounded-md max-md:hidden w-[150px]'>Peer Reviewed?</th> {/* Set a smaller width */}
          <th className='border border-[#8f9bcf] rounded-md w-[150px]'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={article._id} className='h-8'>
            <td className='border border-[#8f9bcf] rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-[#8f9bcf] rounded-md text-center'>
              {article.title}
            </td>
            <td className='border border-[#8f9bcf] rounded-md text-center max-md:hidden'>
              {article.author}
            </td>
            <td className='border border-[#8f9bcf] rounded-md text-center max-md:hidden w-[100px]'>
              {article.publishYear}
            </td>
            <td className='border border-[#8f9bcf] text-white rounded-md text-center max-md:hidden w-[150px]'>
              {article.peerReviewed ? 'Yes' : 'No'}
            </td>
            <td className='border border-[#8f9bcf] rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/articles/details/${article._id}`}>
                  <BsInfoCircle className='text-2xl text-[#8f9bcf]' />
                </Link>
                <Link to={`/articles/edit/${article._id}`}>
                  <AiOutlineEdit className='text-2xl text-[#8f9bcf]' />
                </Link>
                <Link to={`/articles/delete/${article._id}`}>
                  <MdOutlineDelete className='text-2xl text-[#8f9bcf]' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ArticlesTable;
