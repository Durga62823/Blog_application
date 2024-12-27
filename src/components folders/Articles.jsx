import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ArticleList from './ArticleList';
import img1 from '../images/image3.png';
import img4 from '../images/75427.jpg'
import img2 from '../images/image4.png';
import img3 from '../images/article2.jpg';
import img7 from '../images/img6.png'
import img5 from '../images/img5.png'

function Articles() {
  // Full list of articles data
  const allArticlesData = [
    {
      title: "Future of Work",
      description: "Majority of people will work in jobs that don’t exist today.",
      author: "Viola Manisa",
      date: "02 March",
      image: img1,
    },
    {
      title: "Tech Innovations",
      description: "Exploring the latest trends in technology.",
      author: "John Doe",
      date: "15 April",
      image: img2,
    },
    {
      title: "Sustainability Matters",
      description: "How businesses are adapting to environmental changes.",
      author: "Emily Clark",
      date: "22 May",
      image: img3,
    },
    {
      title: "Health Tech Breakthroughs",
      description: "Advancing healthcare with modern technology.",
      author: "Sarah Lee",
      date: "30 June",
      image: img4,
    },
    {
      title: "Space Exploration",
      description: "Latest discoveries and innovations in space.",
      author: "Mark Twain",
      date: "10 July",
      image: img5,
    },
    {
      title: "AI Revolution",
      description: "How AI is transforming every industry.",
      author: "Jane Smith",
      date: "20 August",
      image: img7,
    },
  ];

  // State to manage displayed articles
  const [visibleArticles, setVisibleArticles] = useState(3); // Start with 3 articles

  // Handle Load More button click
  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => Math.min(prevVisible + 3, allArticlesData.length));
  };

  return (
    <section className="container mx-auto px-5 py-10 flex flex-col">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10 gap-x-2">
        {allArticlesData.slice(0, visibleArticles).map((article, index) => (
          <ArticleList
            key={index}
            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
            title={article.title}
            description={article.description}
            author={article.author}
            date={article.date}
            image={article.image}
          />
        ))}
      </div>
      {visibleArticles < allArticlesData.length && (
        <button
          onClick={loadMoreArticles}
          className="mx-auto flex items-center gap-x-2 font-bold text-white hover:text-black rounded-3xl border-2 border-green-400 p-3 hover:text-dark-hard hover:bg-green-600"
        >
          <span>More Articles</span>
          <FaArrowRight className="size-3" />
        </button>
      )}
    </section>
  );
}

export default Articles;
