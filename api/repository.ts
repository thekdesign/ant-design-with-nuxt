export default ($axios :any) => (resource : string) => ({
  index () {
    return $axios.$get(`${resource}`)
  },

  show (id : number) {
    return $axios.$get(`${resource}/${id}`)
  },

  create (payload : object) {
    return $axios.$post(`${resource}`, payload)
  },

  update (id : number, payload : object) {
    return $axios.$post(`${resource}/${id}`, payload)
  },

  delete (id : number) {
    return $axios.$delete(`${resource}/${id}`)
  }
})
