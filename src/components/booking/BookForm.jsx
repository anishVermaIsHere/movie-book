import React from "react";

export const Cross = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_1020)">
        <path
          d="M18 1.0605L16.9395 0L9 7.9395L1.0605 0L0 1.0605L7.9395 9L0 16.9395L1.0605 18L9 10.0605L16.9395 18L18 16.9395L10.0605 9L18 1.0605Z"
          fill="#374957"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1020">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const BookForm = ({ movieData, setBookOpen }) => {
  const { id, language, image, name, schedule, premiered} = movieData[0].show;

  console.log(id)

  return (
    <div className="book-layout border border-red-600">
      <div className="book-form min-w-[300px] md:min-w-[750px] rounded-2xl">
        <div className="flex justify-between items-center">
            <div className="h-[50px] w-[40px] mb-1">
                <img src={image.medium} alt={name} />
            </div>
          <h4 className="book-movie-title text-2xl font-bold">
            {name}
            </h4>
          <span
            className="text-[#374957] cursor-pointer"
            onClick={() => setBookOpen(false)}
          >
            <Cross />
          </span>
        </div>
            <span className="mt-4 text-sm text-gray-500">Language - {language}</span>
        <hr className="mt-8"/>
        

        <div className="mt-[22px] flex items-center justify-between gap-5">
          <div className="w-full">
            <label htmlFor="start-time" className="text-base font-bold ">
              Start Time
            </label>

            <input
              className="relative rounded-[10px] mt-[15px] px-[43px] py-[16px] focus:outline-none border border-[#aaa] w-full"
              type="time"
              name="start-time"
              id="start-time"
              value={schedule.time}
            />
          </div>

          <div className="w-full">
            <label htmlFor="end-time" className="text-base font-bold ">
              Premiered
            </label>
            <div className="relative rounded-[10px] mt-[15px] text-[20px] text-left w-full">
                {premiered}
            </div>
          </div>
        </div>
        <div className="mt-[41px]">
          <label htmlFor="day" className="text-base font-bold">
            Available on days
          </label>
          <div className="flex mt-[14px] gap-[14px]">
            {schedule.days.map((day, index) => {
              return (
                <div className="day-block day-active" key={"day" + index}>
                  <input
                    type="checkbox"
                    name="day"
                    className="day-checkbox absolute inset-y-0"
                  />
                  {day.substr(0,3).toUpperCase()}
                </div>
              );
            })}
          </div>
          <div className="mt-[39px]">
          <label htmlFor="period" className="text-base font-bold ">
            Customer Name
          </label>
          <input
            className="rounded-[10px] mt-[15px] px-[26px] py-[16px] focus:outline-none border border-[#aaa] w-full"
            type="text"
            name="period"
            id="period"
            placeholder="Enter Cutomer Name"
          />
        </div>
        </div>

        <div className="flex justify-between items-center mt-[39px]">
          {/* <div className="flex items-center"> */}
          <button className="inline-flex items-center mt-5 px-5 py-2 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Proceed
            <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
