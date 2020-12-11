import React from 'react';
import ListItem from './ListItem';
import TotalPrice from './TotalPrice';

const groceries = [{
        item: 'Flour',
        brand: 'Golden Star',
        price: 12,
        quantity: '1 lb',
        isPurchased: true
    },
    {
        item: 'Salt',
        brand: 'Diamond',
        price: 2,
        quantity: '1 lb',
        isPurchased: true
    },
    {
        item: 'Eggs',
        brand: 'Maple Orchards',
        price: 3,
        quantity: '1 dz',
        isPurchased: true
    },
    {
        item: 'Milk',
        brand: 'Horizon Organic',
        price: 4,
        quantity: '1 gal',
        isPurchased: true
    },
    {
        item: 'Chocolate Chips',
        brand: 'Hershey\'s',
        price: 6,
        quantity: '.5 lb',
        isPurchased: true
    },
    {
        item: 'Butter',
        brand: 'Tillamook',
        price: 2,
        quantity: '1 stick',
        isPurchased: true
    }
]

const ListContainer = (props) => {
    // sum of grocery prices
    let totalPrice = 0;

    return ( 
        <div> 
            {groceries.map( (currGrocery, i) => {
                // sums the prices
                totalPrice += currGrocery.price;
                // console.log(totalPrice)

                // returns <ListItem/> component
                return ( 
                <ListItem data={currGrocery} />
                )
            })} 
            <TotalPrice totalPrice={totalPrice}/>
        </div>
    )
}

export default ListContainer;