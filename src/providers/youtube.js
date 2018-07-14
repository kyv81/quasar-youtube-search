import youtubeSearch from 'youtube-search-promise'

export default query => {
  let params = {
    maxResults: 25,
    key: 'AIzaSyA8g2FOJWfPlZbFIt3hYrCddduYO96qTOs'
  }
  return youtubeSearch(query, params)
}
