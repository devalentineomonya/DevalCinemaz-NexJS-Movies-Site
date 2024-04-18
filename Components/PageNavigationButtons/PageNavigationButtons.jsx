"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PageNavigationButtons = ({ routeFilter, pageNumber, mediaType }) => {
  
  const router = useRouter();
  const handlePageChange = (newPageNumber) => {
    if (newPageNumber <= 0) {
      return;
    }
    router.push(
      `/${mediaType}/${routeFilter.replaceAll("_", "-")}?page=${newPageNumber}`
    );
  
  };

  return (
    <div className="flex items-center justify-center gap-x-2 max-w-[1400px] mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l disabled:opacity-50 cursor-not-allowed"
        onClick={() => handlePageChange(pageNumber > 0 && pageNumber - 1)}
        disabled={pageNumber <= 0}
      >
        <FaChevronLeft className="inline-block text-xl" />
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        onClick={() => handlePageChange(pageNumber + 1)}
      >
        <FaChevronRight className="inline-block text-xl" />
      </button>
    </div>
  );
};

export default PageNavigationButtons;
