let defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export default function ({ app, $axios }) {
  $axios.onRequest((req) => {
    const { headers } = req
    const token = app.$cookies.get('access_token')
    if (token) {
      defaultHeaders = {
        ...defaultHeaders,
        Authorization: `Bearer ${token}`,
      }
      headers.common = { ...headers.common, ...defaultHeaders }
    }
  })
  $axios.onError((error) => {
    if (error.response) {
      console.log(error.response)
    }
  })
}
