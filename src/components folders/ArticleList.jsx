import React from 'react';
import img from '../images/icon Copy.png';
function ArticleList({ className, title, description, author, date, image }) {
  return (
    <div
      className={`rounded-xl h-auto overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-slate-900 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}
    >
      <img
        className="w-full object-cover md:h-52 object-center h-auto lg:h-48 xl:h-60"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <h1 className="font-roboto font-bold text-xl md:text-2xl w-full lg:text-[28px]">
          {title}
        </h1>
        <p className="font-opensans text-sm md:text-lg">{description}</p>
        <div className="flex items-center flex-nowrap justify-between mt-6 p-4">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              className="rounded-full size-9 md:size-10"
              src="https://picsum.photos/200/300"
              alt={author}
            />
            <div className="flex flex-col">
              <h4 className="md:text-base font-bold italic text-dark-soft text-sm">
                {author}
              </h4>
              <div className="flex items-center gap-x-2 pt-2">
                <img
                  src={img}
                  className="rounded-full size-4"
                  alt="Verified Icon"
                />
                <p className="md:text-sm text-[#5A7184] font-opensans text-xs">
                  Verified writer
                </p>
              </div>
            </div>
          </div>
          <span className="italic font-opensans font-bold text-dark-light text-sm md:text-base">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleList;