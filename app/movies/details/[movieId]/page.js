const page = ({params}) => {
  return (
    <div className="pt-[65px] bg-customDark">
      <h1>This is the details page for move {params.movieId}</h1>
    </div>
  )
}

export default page
