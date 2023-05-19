import React from 'react'

const DestinationData = ({title , description , img1,img2 , clsName}) => {
    return (
        <div className={clsName}>
            <div className='des-text'>
                <h2>{title}</h2>
                <p> {description} </p>
            </div>

            <div className='image'>
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
                {/* <img src={MontainImg3} alt="img" />
                    <img src={MontainImg4} alt="img" /> */}
            </div>
        </div>
    )
}

export default DestinationData