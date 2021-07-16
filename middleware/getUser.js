export default function ({ $axios, store }) {
  return $axios
    .$get('rest-auth/user/')
    .then((response) => store.dispatch('user/setUser', response))
    .catch((error) => console.log(error.response))
}
