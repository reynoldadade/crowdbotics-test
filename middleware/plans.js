export default function ({ $axios, store }) {
  console.log('plans working')
  return $axios
    .$get('api/v1/plans/')
    .then((response) => store.dispatch('plans/setPlans', response))
    .catch((error) => console.log(error.response))
}
