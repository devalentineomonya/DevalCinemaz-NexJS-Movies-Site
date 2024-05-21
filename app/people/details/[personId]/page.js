import { getInfo, getMediaItems } from '@/app/Api/api';
import NotFound from '@/app/movies/not-found';
import Image from 'next/image'
import fallbackImage from "@/assets/fallbackImage.svg"
import Link from 'next/link';
import { LuExternalLink } from "react-icons/lu";
import NewRelease from '@/Components/MovieCards/NewRelease/NewRelease';

const page = async ({ params }) => {

    const personId = parseInt(params.personId) || 1;
    if (isNaN(personId)) {
        return <NotFound />

    }

    try {
        const fullInfo = await Promise.all([
            getInfo(personId, "person"),
            getMediaItems(personId, "person", "combined_credits")
        ])
        const [personInfo, creditInfo] = fullInfo

        const imageName = personInfo.profile_path !=null && personInfo.profile_path ? `https://image.tmdb.org/t/p/original${personInfo.profile_path}` : fallbackImage;
        return (
            <div className='w-full bg-customWhite dark:bg-customDark h-fit flex justify-center pt-[65px] dark:text-customWhite text-customDark'>
                <div className='w-full max-w-[1400px] flex justify-center flex-col'>
                    <div className=' grid grid-cols-4 justify-center gap-x-3'>
                        <div className='w-full h-fit col-span-1'>
                            <div className='relative w-full h-[450px]  pt-5'>
                                    <Image  width={1}  height={1} src={imageName}  className='w-full h-full absolute' alt={personInfo.name} />
                            </div>
                            <div className='my-10'>
                                <Link href={`${personInfo && personInfo.homepage || "https://www.google.com/search?q=" + personInfo.name.replaceAll(" ", "+")}`} target='_blank' className='flex justify-start items-center gap-x-2'>Personal Website<LuExternalLink /></Link>
                            </div>
                        </div>
                        <div className='w-full h-fit grid col-span-3 '>
                            <h1 className='font-semibold font-Inter text-2xl mt-5 mb-6'>{personInfo && personInfo.name}</h1>
                            <p className='text-md font-Dosis font-thin'>{ }</p>
                            <div className='W-full l w-full max-w-[1400px] overflow-hidden px-[2px]'>
                                <h3 className='font-bold text-xl font-Inter my-3'>Know For</h3>
                                <div className="flex gap-x-4 justify-start items-center overflow-x-scroll">
                                    {
                                        creditInfo && creditInfo.map((singleCredit, i) => (
                                            <NewRelease key={i} movieInfo={singleCredit} width="64" />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dark:bg-slate-900 bg-slate-200 w-full h-[350px] mt-2 mb-2 px-2 '>
                        <div className='grid grid-cols-3 pl-4 h-full'>
                            <div className='grid col-span-1 h-full py-3'>
                                <ul className='flex flex-wrap flex-col'>
                                    <li className='my-2 text-xl font-Inter font-bold '>Also Known As:</li>
                                    {personInfo && personInfo.also_known_as.map((alias, index) => (
                                        <li className="list-disc font-Dosis italic font-semibold text-md" key={index}>{alias}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='grid col-span-1 py-3'>
                                <ul className=" flex gap-y-3 flex-col">
                                    <li>Birthday: {personInfo && personInfo.birthday}</li>
                                    <li>Gender: {personInfo && personInfo.gender === 1 ? 'Female' : 'Male'}</li>
                                    <li className="text-xl italic font-Dosis font-thin ">Homepage:  <Link href={`${personInfo && personInfo.homepage || "https://www.google.com/search?q=" + personInfo.name.replaceAll(" ", "+")}`} target='_blank' className='flex justify-start items-center gap-x-2'>Personal Website<LuExternalLink /></Link>
                                    </li>
                                    <li>Place of Birth: {personInfo && personInfo.place_of_birth}</li>
                                    <li>Popularity: {personInfo && personInfo.popularity}</li>
                                </ul>
                            </div>
                            <div className='relative  grid col-span-1 max-w-[300px] h-full'>
                                    <Image  width={1}  height={1}{1}={0} src={imageName}  className='w-full h-full absolute' alt={personInfo && personInfo.name} />
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        )
    } catch (error) {
        console.error("Error fetching data:", error);

    }

}

export default page
