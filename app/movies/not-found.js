import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[75vh] bg-customWhite dark:bg-customDark pt[65px]">
      <h2 className="text-4xl font-bold text-red-500 mb-4">Not Found</h2>
      <p className="text-lg dark:text-gray-100 text-gray-600 mb-8">Could not find the requested resource</p>
      <Link href="/">
        <span className="text-lg text-blue-500 hover:underline">Return Home</span>
      </Link>
    </div>
  );
};

export default NotFound