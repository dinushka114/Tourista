import React from 'react'

const AccommodationItem = (props) => {
    return (
        <div class="card" style={{borderBottom:'5px solid #01959a'}} onClick={props.showAcDetails}>
            <div class="card__image-container">
                <img
                    src={props.img}
                />
            </div>
            <div class="card__content">
                <p class="card__title text--medium">
                    {props.name}
                </p>
                <div class="card__info">
                    <p class="text--medium">{props.description}</p>
                    <p class="card__price text--medium" style={{color:'#fff'}}>Chek now</p>
                </div>
            </div>
        </div>
    )
}

export default AccommodationItem