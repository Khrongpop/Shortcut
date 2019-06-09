import creators from '../data/creators.json'
import details from '../data/creator_details.json'
import categories from '../data/categories.json'
export const state = () => ({
  creators,
  details,
  categories
})
export const getters = {
  creators: state => state.creators,
  getCreatorById: (state) => (id) => {
     let creator = state.creators.find(creator => creator.id === id)
     let detail = state.details.find(detail => detail.id === id)
     let data = Object.assign(creator, detail)
     return data
  },
  getCreatorByCat: (state) => (name) => {
    let cats = state.categories.find(creator => creator.name === name)
    const result = state.creators.filter((creator) => {
      return creator.category_id == cats.id
    })
    return result
 }
}
