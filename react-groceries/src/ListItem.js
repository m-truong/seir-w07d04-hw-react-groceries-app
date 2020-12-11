import React from 'react'

const ListItem = (props) => {

    const {item, brand, quantity, price, isPurchased} = props.data;

    return (
        <div> 
            <p> {item}  -  {brand}   {quantity}   {price} </p>
        </div>
    )
}


export default ListItem;