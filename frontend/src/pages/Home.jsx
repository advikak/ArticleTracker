import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import ArticlesTable from "../components/home/ArticlesTable";
import ArticlesCard from "../components/home/ArticlesCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/articles")
      .then((response) => {
        setArticles(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between mt-10 mb-5 items-center">
        {/* Heading and buttons in the same container */}
        <div className="flex items-center">
          <h1 className="text-3xl font-extralight ml-5">Article Tracker</h1>
          {/* Toggle buttons next to the heading */}
          <div className="flex gap-x-2 ml-6">
            <button
              className={`px-4 py-1 rounded-lg ${
                showType === "table"
                  ? "bg-[#536db6] text-white"
                  : "bg-[#a2abd7] hover:bg-[#536db6]"
              }`}
              onClick={() => setShowType("table")}
            >
              Table
            </button>
            <button
              className={`px-4 py-1 rounded-lg ${
                showType === "card"
                  ? "bg-[#536db6] text-white"
                  : "bg-[#a2abd7] hover:bg-[#536db6]"
              }`}
              onClick={() => setShowType("card")}
            >
              Card
            </button>
          </div>
        </div>
        <Link to="/articles/create">
          <MdOutlineAddBox className="text-[#536db6] mr-5 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <ArticlesTable articles={articles} />
      ) : (
        <ArticlesCard articles={articles} />
      )}
    </div>
  );
};

export default Home;
