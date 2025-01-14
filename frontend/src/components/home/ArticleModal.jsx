import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const ArticleModal = ({ article, onClose }) => {
  return (
    <div
      className="fixed text-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-6 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-2 mb-3 bg-[#8f9bcf] rounded-lg">
          {article.publishYear}
        </h2>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-[#8f9bcf] text-2xl" />
          <h2 className="my-1">{article.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-[#8f9bcf] text-2xl" />
          <h2 className="my-1">{article.author}</h2>
        </div>
        <p className="mt-4">Description:</p>
        <p className="my-2">
          Haven't made this data yet
        </p>
      </div>
    </div>
  );
};

export default ArticleModal;
