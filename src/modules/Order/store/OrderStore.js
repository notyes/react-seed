import {
  createStore,
  combineReducers as combineStateUpdater,
  applyMiddleware
} from 'redux'
import logger from '../middlewares/logger'

import orderUpdater from './OrderUpdater'
// import priceUpdater from './PriceUpdater'

const rootStateUpdater = combineStateUpdater({
  orders: orderUpdater
  //   sumprice: priceUpdater
})

const enhancer = applyMiddleware(logger)
const store = createStore(rootStateUpdater, enhancer)

export default store
