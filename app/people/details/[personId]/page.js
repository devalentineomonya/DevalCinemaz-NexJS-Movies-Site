import { getInfo } from '@/app/Api/api';
import NotFound from '@/app/movies/not-found';
import Image from 'next/image'
import React from 'react'
import testImage from "@/assets/testImage.jpg"
import Link from 'next/link';
import { LuExternalLink } from "react-icons/lu";
import NewRelease from '@/Components/MovieCards/NewRelease/NewRelease';

const page = async ({ params }) => {

    const personId = parseInt(params.personId) || 1;
    if (isNaN(personId)) {
        return <NotFound />

    }


    const personInfo = await getInfo(personId, "person")
    console.log(personInfo);
    return (
        <div className='w-full bg-customWhite dark:bg-customDark h-fit flex justify-center pt-[65px] dark:text-customWhite text-customDark'>
            <div className='w-full max-w-[1400px] flex justify-center flex-col'>
                <div className=' grid grid-cols-4 justify-center gap-x-3'>
                    <div className='w-full h-fit col-span-1'>
                        <div className='relative w-full h-[450px]'>
                            <Image src={testImage} width={100} height={100} className='w-full h-full absolute' />
                        </div>
                        <div className='my-2'>
                            <Link href={`https://www.youtube.com`} className='flex justify-start items-center gap-x-2'>Personal Website <LuExternalLink /> </Link>
                        </div>
                    </div>
                    <div className='w-full h-fit grid col-span-3 '>
                        <h1 className='font-semibold font-Inter text-2xl mt-2 mb-10'>Valentine Omonya</h1>
                        <p className='text-md font-Dosis font-thin'>Esse laboris sunt irure duis magna excepteur esse aliquip. Labore cupidatat consectetur est sit exercitation laboris culpa tempor. Pariatur dolor quis consequat ad proident incididunt aliqua culpa voluptate eu. Nostrud labore in deserunt excepteur mollit fugiat qui aute magna do.</p>
                        <div className='W-full l w-full max-w-[1400px] overflow-hidden px-[2px]'>
                            <h3 className='font-bold text-xl font-Inter my-3'>Know For</h3>
                            <div className="flex gap-x-4 justify-start items-center overflow-x-scroll">
                                <NewRelease width="56" />
                                <NewRelease width="56" />
                                <NewRelease width="56" />
                                <NewRelease width="56" />
                                <NewRelease width="56" />
                                <NewRelease width="56" />
                                <NewRelease width="56" />
                                <NewRelease width="56" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-green-500 w-full h-[350px] mt-2 mb-2'>

                </div>
            </div>


        </div>
    )
}

export default page
