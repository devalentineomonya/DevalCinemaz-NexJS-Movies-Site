import PersonCard from '@/Components/MovieCards/PersonCard/PersonCard'
import React from 'react'


const page = () => {
    return (
        <main className="pt-[65px] dark:bg-customDark flex justify-center">
            <div className="flex  flex-col justify-start items-start max-w-[1400px] w-full pt-12">
                <h1 className="dark:text-customWhite text-customDark text-2xl font-semibold  font-Inter">
                    DevalCinemaz Top Movies{" "}
                </h1>
                <div className="w-full grid xl:grid-cols-5 md:grid-cols-4  sm:grid-cols-2 sm:justify-around gap-x-3  gap-y-6  flex-wrap text-customDark dark:text-customWhite">
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                </div>

            </div>
        </main>

    )
}

export default page
