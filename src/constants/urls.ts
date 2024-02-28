
const baseURL= 'https://api.themoviedb.org/3'


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDkzYTBkYjgxZWQ3OTA3ZTE0Y2I4NmUxODJlYzgzMCIsInN1YiI6IjY1ZGRlNmU5YzkyYzVkMDE3YzQ4NDVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6Tl1x00gri35zqc1RS_qB4xw3dg1a5XsOh9luidi5U'
const movies = '/movie';
const list = '/list';
const genre = '/genre';
const search = '/search';
const discover = '/discover';
const images = '/images'

const urls = {
    movies: `${discover}${movies}`,
    info: {
        byId: (id: number) => `${movies}/${id}`
    },
    genre: `${genre}${movies}${list}`,
    search: `${search}${movies}`
}
export {
    urls,
    baseURL,
    token
}
