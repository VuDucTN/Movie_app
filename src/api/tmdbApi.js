import axiosClient from "./axiosClient";

export const cateory = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcommingL: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rate'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rate',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, params) 
    },

    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type]
        return axiosClient.get(url, params) 
    },

    getVideos: (cate, id) => {
        const url = cateory[cate] + '/' + id + '/videos'
        return axiosClient.get(url, {params: {}})
    },

    search: (cate, params) => {
        const url = 'search/' + cateory[cate]
        return axiosClient.get(url, params)
    },

    detail : (cate, id, params) => {
        const url = cateory[cate] + '/' + id
        return axiosClient.get(url, params)
    },

    credits : (cate, id) => {
        const url = cateory[cate] + '/' + id + '/credits'
        return axiosClient.get(url, {params: {}})
    },

    similar : (cate, id) => {
        const url = cateory[cate] + '/' + id + '/similar'
        return axiosClient.get(url, {params: {}})
    },
}

export default tmdbApi;