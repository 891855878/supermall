import { ADD_COUNT,ADD_SHOP } from "./mutation-types"
export default{
  [ADD_COUNT](state,payload)
  {
    payload.count++
  },
  [ADD_SHOP](state,payload)
  {
    payload.check=true
    state.shoppings.push(payload)
  }
}
