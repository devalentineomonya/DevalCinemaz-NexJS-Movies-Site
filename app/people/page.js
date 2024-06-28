import PersonCard from '@/Components/MovieCards/PersonCard/PersonCard'
import { getMediaPerCategory } from '../Api/api';
import PageNavigationButtons from '@/Components/PageNavigationButtons/PageNavigationButtons';


const page = async () => {
    try {
        const peoplePage = await Promise.all([
            getMediaPerCategory("popular", "person", 1)
        ]);

        const [popularPeopleList] = peoplePage;
        return (
            <main className="pt-[65px] dark:bg-customDark flex justify-center">
                <div className="flex  flex-col justify-start items-start max-w-[1400px] w-full pt-12">
                    <h1 className="dark:text-customWhite text-customDark text-2xl font-semibold  font-Inter mb-5">
                        DevalCinemaz Popular People
                    </h1>
                    <div className="w-full grid xl:grid-cols-5 md:grid-cols-4  sm:grid-cols-2 sm:justify-around gap-x-3  gap-y-6  flex-wrap text-customDark dark:text-customWhite">
                        {popularPeopleList?.map((cast, i) => (
                            
                            <PersonCard key={i} cast={cast} width={64} />
                        ))
                        }
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <PageNavigationButtons routeFilter="popular" pageNumber={1} mediaType="people" />
                    </div>
                </div>
            </main>

        )
    } catch (error) {
        console.error("Error fetching data:", error);

    }

}

export default page
