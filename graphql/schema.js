import { makeExecutableSchema } from 'graphql-tools'
import 'isomorphic-fetch'

const typeDefs = `
  type Query {
    posts(first : Int = 5) : [PostType]
    post(id: Int) : PostType
    CategoryList(limit : Int = 5) : [CategoryType]
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
    posts: async (_, { first }) => {
      const res = await fetch('http://localhost:4000/posts')
      const json = await res.json()

      return json.slice(0, first).map(function(post) {
        post.date = modifyDate(post.pubDate)
        return post
      })
    },
    post: async (_, { id }) => {
      const res = await fetch('http://localhost:4000/posts/' + id)
      const json = await res.json()

      json.date = modifyDate(json.pubDate)
      return json
    },
    CategoryList: async (_, { limit }) => {
      const res = await fetch('http://localhost:4000/categories/?_embed=menus')
      const json = await res.json()

      return json
    }
  },
  Mutation: {
    addPost: async () => {
      const res = await fetch('http://localhost:4000/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'my aweson title',
          body: 'this is message'
        })
      })
      const json = await res.json()
      return json
    }
  }
}

function modifyDate(mTime) {
  const date = new Date(mTime)
  return date.toString()
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
