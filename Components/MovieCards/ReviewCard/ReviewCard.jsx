import Link from "next/link";
import React from "react";
import { GoStarFill } from "react-icons/go";
const ReviewCard = ({ review }) => {
  const inputDate = review.created_at;
  const parsedDate = new Date(inputDate);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekday = weekdays[parsedDate.getUTCDay()];
  const dayOfMonth = parsedDate.getUTCDate();
  const addSuffixToDay = (day) => {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  };
  const year = parsedDate.getUTCFullYear();
  const formattedDate = `${weekday} ${addSuffixToDay(dayOfMonth)} ${year}`;
  return (
    <Link href={`${review.url}`}>
      <div className="mt-7  rounded-md shadowDropCenter dark:shadow-slate-500 px-4 py-3 w-full h-56 dark:text-customWhite text-customDark">
        <div className="grid grid-cols-12 h-20 gap-x-2 items-center">
          <div className="grid col-span-1  rounded-full overflow-hidden w-[60px]  h-[60px] bg-sky-600 text-customWhite uppercase justify-center items-center text-2xl">
            {review.author.slice(0, 2)}
          </div>
          <div className="grid col-span-11 w-full h-full justify-start items-start ">
            <p className="font-thin text-sm">Featured Review</p>
            <p className="text-xl font-semibold ">
              A review by {review.author}
            </p>
            <div className="flex flex-row justify-start items-center pt-2">
              <div className="px-2 text-customWhite w-[60px] flex justify-center items-center rounded-xl dark:bg-customGreen bg-green-600 ">
                <GoStarFill /> {review.author_details.rating * 10}%
              </div>
              <p className="pl-3 font-thin text-sm">
                Written by <span className="font-bold">{review.author}</span> on{" "}
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 text-lg font-Dosis overflow-hidden h-20 ">
          <p>{review.content}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
