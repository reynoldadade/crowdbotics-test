export default function ({ app, redirect }) {
  if (app.$cookies.get('token')) {
    redirect('/dashboard')
  }
}
