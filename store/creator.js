import creators from '../data/creators.json'
import details from '../data/creator_details.json'
import categories from '../data/categories.json'
import creator_techs from '../data/creator_tech.json'
export const state = () => ({
  creators,
  details,
  categories,
  creator_techs
})
export const getters = {
  creators: state => state.creators,
  getCreatorById: (state) => (id) => {
     let creator = state.creators.find(creator => creator.id === id)
     let detail = state.details.find(detail => detail.id === id)
     let creator_tech = state.creator_techs.find(tech => tech.id === id)
     let data = Object.assign(creator, detail,creator_tech)
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
