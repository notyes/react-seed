import React from 'react'
import styles from './styles'
import Header from './Header'

function Layout({ children, categories }) {
  return (
    <div className="wrapper">
      <Header categories={categories} />
      <main>{children}</main>
      {/* <style jsx global>{`
        .wrapper {
          max-width: 1024px;
          margin: 0 auto;
        }
        main {
          margin-top: 50px;
        }
      `}</style> */}
      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

export default Layout
