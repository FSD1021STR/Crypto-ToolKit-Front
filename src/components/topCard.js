import React from 'react'

const TopCard = (props) => {
    return(
        <div className='topCard'>
            <img
                className='coinPhoto'
                src={props.ImageUrl}
                name= {props.FullName}
                symbol={props.Name}
                id={props.Id}/>
        </div>
    )
}

export default TopCard