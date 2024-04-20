"use client";
import Image from "next/image";
import fallbackImage from "@/assets/fallbackImage.svg";
import { useState } from "react";
import Link from "next/link";

const GuestStart = ({ guestStar }) => {
  const [image, setImage] = useState(
    `https://image.tmdb.org/t/p/original${
      guestStar &&
      guestStar.profile_path &&
      guestStar.profile_path != null &&
      guestStar.profile_path
    }` || fallbackImage
  );

  return (
    <Link href={`/people/details/${guestStar.id}`}>
      <div className="h-fit w-56 flex flex-row gap-x-2 border border-customDark dark:border-customWhite rounded-xl text-customDark dark:text-customWhite">
        <div className="w-16 h-20  rounded-xl overflow-hidden ">
          <Image
            src={image}
            className="h-full w-full"
            width={100}
            height={100}
            alt={guestStar.original_name || "Name not defined"}
            onError={()=>setImage(fallbackImage)}
          />
        </div>
        <div className="flex justify-center flex-col">
          <p className="text-xl font-Dosis font-semibold">
            {guestStar.original_name}
          </p>
          <p className="text-md font-Dosis font-thin ">{guestStar.character}</p>
        </div>
      </div>
    </Link>
  );
};

export default GuestStart;
