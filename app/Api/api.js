export const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("There was an error when fetching data");
    }
    return response.json();
};



export const getInfo = async (id, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${id}?api_key=${process.env.API_KEY}`);
};


export const getRecommended = async (id, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${id}/recommendations?api_key=${process.env.API_KEY}`)
        .then((data) => data.results);
};


export const getSimilar = async (id, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${id}/similar?api_key=${process.env.API_KEY}`)
        .then((data) => data.results);
};



export const getVideoInfo = async (id, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${id}/videos?api_key=${process.env.API_KEY}`)
        .then((data) => {
            const trailer = data.results && data.results.find((v) => v.type === "Trailer") || data.results[0] || [];
            return trailer;
        });
};



export const getCastList = async (id, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${id}/credits?api_key=${process.env.API_KEY}`)
        .then((data) => data.cast);
};



export const getReviews = async (id, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${id}/reviews?api_key=${process.env.API_KEY}`)
        .then((data) => data.results);
};
export const getMediaPerCategory = async (mediaType, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${mediaType}?api_key=${process.env.API_KEY}`)
        .then((data) => data.results);
};



export const getUpcoming = async () => {
    return fetchData(`${process.env.BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}`)
        .then((data) => data.results);
};

export const getOnTheAir = async () => {
    return fetchData(`${process.env.BASE_URL}/tv/on_the_air?api_key=${process.env.API_KEY}`)
        .then((data) => data.results);
};


export const discoverMovies = async () => {
    return fetchData(`${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}`)
        .then((data) => data.results )
}


export const trendingMovies = async () => {
    return fetchData(`${process.env.BASE_URL}/trending/movie/day?api_key=${process.env.API_KEY}`)
        .then((data) => data.results)

}

export const fetchCountryName = async () => {
    return fetchData('https://ipapi.co/json/')
        .then((data) => data.country_name)

}