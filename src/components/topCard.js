import React from 'react'

const TopCard = (props) => {
    console.log(props)
    return(
        
        <div className='topCard'>
            <img
                className='coinPhoto'
                src={props.ImageUrl}
                />
            <p>{props.FullName}</p>
            <p>{props.Name}</p>
            <p>{props.Id}</p>
        </div>
    )
}

export default TopCard