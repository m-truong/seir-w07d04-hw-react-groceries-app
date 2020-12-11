import React from 'react'; 
import Title from './Title';
import ListContainer from './ListContainer';
// import TotalPrice from './TotalPrice';

const GroceriesContainer = (props) => {
    return (
        <div>
            <Title />
            <ListContainer /> 
            {/* <TotalPrice /> */}
        </div>
    )
}

export default GroceriesContainer;