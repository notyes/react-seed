import { makeExecutableSchema } from 'graphql-tools'
import 'isomorphic-fetch'

const typeDefs = `
  type Query {
    posts(first : Int = 5) : [PostType]
    post(id: Int) : PostType
    CategoryList : [CategoryType]
    MenusList : [MenuType]
    Category(cat_id : Int) : CategoryType
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
  }
  type RateType{
    one : Int
    two : Int 
    three : Int
    four : Int
    five : Int
  }
  type PostType {
    id : Int
    title : String
    body : String
    author : AuthorType
    tags : [String]
    date : String
  }
  type AuthorType{
    name : String
    avatar : String
  }
  type Mutation { 
    addPost(title: String!, body: String! ): PostType
  }
`

const resolvers = {
  Query: {
    // posts: async (_, { first }) => {
    //   const res = await fetch('http://localhost:4000/posts')
    //   const json = await res.json()

    //   return json.slice(0, first).map(function(post) {
    //     post.date = modifyDate(post.pubDate)
    //     return post
    //   })
    // },
    // post: async (_, { id }) => {
    //   const res = await fetch('http://localhost:4000/posts/' + id)
    //   const json = await res.json()

    //   json.date = modifyDate(json.pubDate)
    //   return json
    // },
    CategoryList: async (_, {}) => {
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
        return item
      })
      return json
    },
    MenusList: async (_, {}) => {
      const url_fetch = 'http://localhost:4000/menus?_expand=category'

      const res = await fetch(url_fetch)
      const json = await res.json()

      return json.map(function(item) {
        item.avgRating = avgRating(item.rating)
        return item
      })
    }
  }
  // Mutation: {
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
  // }
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
