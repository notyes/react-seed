import { makeExecutableSchema } from 'graphql-tools'
import 'isomorphic-fetch'

const typeDefs = `
  type Query {
    CategoryList : [CategoryType]
    MenusList : [MenuType]
    Category(cat_id : Int) : CategoryType
    MenuDetail(menu_id : Int) : MenuType
  }
  type Mutation { 
    addComment(comment: String!, menu_id: Int! ): CommentType
    addRateing(menu_id : Int! , star: Int! ) : MenuType
  }
  type CategoryType{
    id : Int
    name : String  
    images : String
    menus : [MenuType]
  }
  type MenuType{
    id : Int
    categoryId : Int
    name: String
    images: String
    price : Int
    rating : RateType
    avgRating : String
    comments : [CommentType]
    category : ParentCat
  }
  type ParentCat{
    id: Int
    name: String
    images: String
  }
  type RateType{
    one : Int
    two : Int 
    three : Int
    four : Int
    five : Int
  }
  type CommentType{
    id : Int
    body : String
  }
`

const resolvers = {
  Query: {
    CategoryList: async _ => {
      const res = await fetch('http://localhost:4000/categories/?_embed=menus')
      const json = await res.json()
      return json
    },
    Category: async (_, { cat_id }) => {
      const res = await fetch(
        'http://localhost:4000/categories/' + cat_id + '?_embed=menus'
      )
      const json = await res.json()

      json.menus = json.menus.map(function(item) {
        item.avgRating = avgRating(item.rating)
        const category = {
          id: json.id,
          name: json.name,
          images: json.images
        }
        item.category = category
        return item
      })
      return json
    },
    MenusList: async _ => {
      const url_fetch = 'http://localhost:4000/menus?_expand=category'

      const res = await fetch(url_fetch)
      const json = await res.json()
      return json.map(function(item) {
        item.avgRating = avgRating(item.rating)
        return item
      })
    },
    MenuDetail: async (_, { menu_id }) => {
      if (menu_id == undefined) {
        return false
      }
      const url =
        'http://localhost:4000/menus/' +
        menu_id +
        '?_expand=category&_embed=comments'
      const res = await fetch(url)
      const json = await res.json()

      json.avgRating = avgRating(json.rating)

      return json
    }
  },
  Mutation: {
    addComment: async (_, { comment, menu_id }) => {
      const res = await fetch('http://localhost:4000/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          menuId: menu_id,
          body: comment
        })
      })
      const json = await res.json()
      return json
    },
    addRateing: async (_, { menu_id, star }) => {
      const url_fetch =
        'http://localhost:4000/menus/' +
        menu_id +
        '?_expand=category&_embed=comments'
      const res = await fetch(url_fetch)
      const menu = await res.json()

      if (star == 1) {
        menu.rating.one = menu.rating.one + 1
      } else if (star == 2) {
        menu.rating.two = menu.rating.two + 1
      } else if (star == 3) {
        menu.rating.three = menu.rating.three + 1
      } else if (star == 4) {
        menu.rating.four = menu.rating.four + 1
      } else if (star == 5) {
        menu.rating.five = menu.rating.five + 1
      }

      const resUpdate = await fetch('http://localhost:4000/menus/' + menu_id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(menu)
      })
      const jsonUpdate = await resUpdate.json()
      jsonUpdate.avgRating = avgRating(jsonUpdate.rating)
      return jsonUpdate
    }
    //   addPost: async () => {
    //     const res = await fetch('http://localhost:4000/posts/', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         title: 'my aweson title',
    //         body: 'this is message'
    //       })
    //     })
    //     const json = await res.json()
    //     return json
    //   }
  }
}

// function modifyDate(mTime) {
//   const date = new Date(mTime)
//   return date.toString()
// }

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0)
  return Math.round(value * multiplier) / multiplier
}
function avgRating(rateObj) {
  const one_star = rateObj.one
  const two_star = rateObj.two
  const three_star = rateObj.three
  const four_star = rateObj.four
  const five_star = rateObj.five

  const sum =
    one_star + two_star * 2 + three_star * 3 + four_star * 4 + five_star * 5
  const diff = one_star + two_star + three_star + four_star + five_star
  if (diff == 0) return 0
  return round(sum / diff, 1)
}
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
