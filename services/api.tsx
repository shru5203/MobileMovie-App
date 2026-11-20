const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',

    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
};

export const fetchMovies = async () => {
    try {
        const endpoint =
            `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
        // console.log('API Key:', process.env.EXPO_PUBLIC_MOVIE_API_KEY);
        // console.log('Endpoint:', endpoint);

        const response = await fetch(endpoint, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });

        console.log("working::", response)

        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.status}`);
        }

        const data = await response.json();
        console.log("shruti::", data.results.length)
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};