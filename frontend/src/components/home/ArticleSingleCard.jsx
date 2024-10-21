import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import ArticleModal from "./ArticleModal";

const ArticleSingleCard = ({ article }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 bg-[#2e2f35] border-[#8f9bcf] rounded-lg px-4 py-2 m-4 relative hover:shadow-xl flex flex-col ">
      <h2 className="absolute top-1 right-2 px-4 py-2 bg-[#536db6] rounded-lg">
        {article.publishYear}
      </h2>
      <div className="flex justify-start items-center gap-x-2 mb-2"> {/* Reduced margin */}
        <PiBookOpenTextLight className="text-[red-300] text-2xl" />
        <h2 className="my-1">{article.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 mb-2"> {/* Reduced margin */}
        <BiUserCircle className="text-white text-2xl" />
        <h2 className="my-1">{article.author}</h2>
      </div>
      {article.peerReviewed && (
        <div className="flex justify-start items-center gap-x-2 mb-2"> {/* Reduced margin */}
          <span className="text-green-500 font-semibold">Peer Reviewed</span>
        </div>
      )}

      <div className="flex-grow"></div> {/* This will push the icons down */}

      <div className="flex justify-between items-center gap-x-2 p-2"> {/* Reduced padding */}
        <BiShow
          className="text-3xl text-[#8f9bcf] hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/articles/details/${article._id}`}>
          <BsInfoCircle className="text-2xl text-[#8f9bcf] hover:text-black" />
        </Link>
        <Link to={`/articles/edit/${article._id}`}>
          <AiOutlineEdit className="text-2xl text-[#8f9bcf] hover:text-black" />
        </Link>
        <Link to={`/articles/delete/${article._id}`}>
          <MdOutlineDelete className="text-2xl text-[#8f9bcf] hover:text-black" />
        </Link>
      </div>

      {showModal && (
        <ArticleModal article={article} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ArticleSingleCard;
