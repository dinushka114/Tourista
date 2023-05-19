import React from 'react'

const TripData = (props) => {
  return (

    <div class="card" onClick={props.showPostDetails}>
      <div class="card__image-container">
        <img
          src={props.img}
        />
      </div>
      <div class="card__content">
        <p class="card__title text--medium">
          {props.title}
        </p>
        <div class="card__info">
          <p class="text--medium">{props.subtitle}</p>
          {/* <p class="card__price text--medium">Free</p> */}
        </div>
      </div>
    </div>
  )
}

export default TripData