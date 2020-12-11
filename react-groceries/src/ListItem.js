import React from 'react'

const ListItem = (props) => {

    const {item, brand, price, quantity, isPurchased} = props.data;

    return (
        <div> 
            <p> {item}    {brand}   {price}   {quantity} </p>
        </div>
    )
}


export default ListItem;