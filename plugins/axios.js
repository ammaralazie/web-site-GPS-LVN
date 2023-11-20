export default function({ $axios }) {
  // Adds header: `Authorization: Bearer 123` to only post and delete requests
  // this.$axios.setToken('123', 'Bearer', ['post', 'delete'])

  $axios.setBaseURL('http://127.0.0.1:8000/gps')
}
