import createRepository from '~/api/repository'

export default (context : any, inject : any) => {
  const repositoryWithAxios = createRepository(context.$axios)
  inject('postRepository', repositoryWithAxios('/posts'))
  // You can reuse the repositoryWithAxios object:
  // inject('userRepository', repositoryWithAxios('/users'))
}
