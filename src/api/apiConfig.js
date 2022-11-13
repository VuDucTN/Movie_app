const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '12234fd3275b104296c18c084f93e31d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;