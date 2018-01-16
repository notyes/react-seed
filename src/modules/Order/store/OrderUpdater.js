const emptyList = []

function addOrder(state_a, menuSelect) {
  const has_order = state_a.find(function(val) {
    if (val.id == menuSelect.id) {
      return true
    }
  })

  if (has_order) {
    return state_a.map(function(val, index) {
      if (val.id == menuSelect.id) {
        return {
          ...val,
          orders: val.orders + 1
        }
      }
      return val
    })
  } else {
    return state_a.concat([
      {
        ...menuSelect,
        orders: 1
      }
    ])
  }
}

export default function orderUpdater(state = emptyList, action) {
  const { type, menuSelect, select_order, menu_id } = action

  if (type === 'ADD_ORDER') {
    return addOrder(state, menuSelect)
  } else if (type == 'UPDATE_ORDER') {
    return state.map(function(val, index) {
      if (val.id == menu_id) {
        return {
          ...val,
          orders: parseInt(select_order)
        }
      }
      return val
    })
  } else if (type == 'REMOVE_ORDER') {
    return state.filter(function(val) {
      if (val.id != menu_id) {
        return val
      }
    })
  }
  return state
}
