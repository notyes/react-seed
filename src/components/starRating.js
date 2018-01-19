import React from 'react'

function Star({ status }) {
  return <span className={`star-icon ${status}`}>☆</span>
}
export default function RatingStar({ avgRating }) {
  let avg = parseFloat(avgRating)
  let listsStar = []
  for (let index = 1; index <= 5; index++) {
    if (avg >= 1) {
      listsStar.push(<Star key={avgRating + index} status="full" />)
    } else if (avg >= 0.5) {
      listsStar.push(<Star key={avgRating + index} status="half" />)
    } else {
      listsStar.push(<Star key={avgRating + index} status="" />)
    }
    if (avg != 0) {
      avg = avg - 1
    }
  }
  return (
    <span>
      {listsStar} ({avgRating})
    </span>
  )
}
