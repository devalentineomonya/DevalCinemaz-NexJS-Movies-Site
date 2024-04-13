import MediaDetailsContainer from "@/Components/MediaDetailsContainer/MediaDetailsContainer"
import SeriesNavbar from "@/Components/SeriesNavbar/SeriesNavbar"

const page = ({params}) => {
  return (
    <>
    <SeriesNavbar pt="[65px]" h="[115px]"/>
    <MediaDetailsContainer/>
    </>
  )
}

export default page
