const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

export const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`There was an error when fetching data: ${response.status}`);
    }
    return response.json();
};



export const getInfo = async (id, fetchType) => {
    return fetchData(`${baseUrl}/${fetchType}/${id}?api_key=${apiKey}`);
};



export const getSearchResult = async (query, resultType) => {
    return fetchData(`${baseUrl}/search/${resultType}?query=${query}&api_key=${apiKey}`)
    .then((data)=>data.results)
};



export const getMediaItems = async (id, fetchType, itemType) => {
    const data = await fetchData(`${baseUrl}/${fetchType}/${id}/${itemType}?api_key=${apiKey}`);
    if (itemType === "videos") {
        const trailer = data?.results?.find((v) => v.type === "Trailer") || data.results[0] || [];
        return trailer;
    } else {
        if (itemType === "credits" || itemType === "combined_credits")
            return data.cast
        else
            return data.results;
    }
};


export const getMediaPerCategory = async (mediaType, fetchType, page = 1) => {

    let url;
    if (mediaType === "trending") {
        url = `${baseUrl}/${mediaType}/${fetchType}/day?api_key=${apiKey}`;
    } else if (mediaType === "discover") {
        url = `${baseUrl}/${mediaType}/${fetchType}?api_key=${apiKey}`;
    } else {
        url = `${baseUrl}/${fetchType}/${mediaType}?page=${page}&api_key=${apiKey}`;
    }
    const data = await fetchData(url);
    return data.results;
};



export const getEpisodes = async (seriesId,seasonId) => {
    return fetchData(`${baseUrl}/tv/${seriesId}/season/${seasonId}?api_key=${apiKey}`)
    .then((data)=>data.episodes)
};
export const getEpisodeCredits = async (seriesId,seasonId, episodeId) => {
    return fetchData(`${baseUrl}/tv/${seriesId}/season/${seasonId}?api_key=${apiKey}`)
    .then((data)=>data.episodes)
};


export const fetchCountryName = async () => {
    return fetchData('https://ipapi.co/json/')
        .then((data) => data.country_name)

}