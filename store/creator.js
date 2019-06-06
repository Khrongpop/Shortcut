import creators from '../data/creators.json'
import details from '../data/creator_details.json'
export const state = () => ({
  creators,
  details
})
export const getters = {
  creators: state => state.creators,
  getCreatorById: (state) => (id) => {
     let creator = state.creators.find(creator => creator.id === id)
     let detail = state.details.find(detail => detail.id === id)
     let data = Object.assign(creator, detail)
     return data
  }
}
