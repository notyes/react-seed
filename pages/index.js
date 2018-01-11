import React from 'react'
import { Link } from '../src/routes'
import withLayout from '../hocs/withLayout'

function HomePage() {
  return (
    <div>
      Hello Restaurant
      <Link route="detail/1">
        <a>detail</a>
      </Link>
    </div>
  )
}

class HomePageContainer extends React.Component {
  render() {
    return <HomePage />
  }
}
export default withLayout(HomePageContainer)
