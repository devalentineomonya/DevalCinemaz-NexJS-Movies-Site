export const fetchData = async (url) => {
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`There was an error when fetching data: ${response.status}`);
    }
    return response.json();
};

export const getInfo = async (id, fetchType) => {
    return fetchData(`${process.env.BASE_URL}/${fetchType}/${id}?api_key=${process.env.API_KEY}`);
};


export const getMediaItems = async (id, fetchType, itemType) => {
    const data = await fetchData(`${process.env.BASE_URL}/${fetchType}/${id}/${itemType}?api_key=${process.env.API_KEY}`);
    if (itemType === "videos") {
        const trailer = data.results && data.results.find((v) => v.type === "Trailer") || data.results[0] || [];
        return trailer;
    } else {
        if (itemType === "credits")
            return data.cast
        else
            return data.results;
    }
};


export const getMediaPerCategory = async (mediaType, fetchType, page = 1) => {
    const baseUrl = process.env.BASE_URL;
    const apiKey = process.env.API_KEY;
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



export const fetchCountryName = async () => {
    return fetchData('https://ipapi.co/json/')
        .then((data) => data.country_name)

}