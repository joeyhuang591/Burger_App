import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=> {
        return (
            <li key = {igKey}><span style={{textTransform:'capitalize'}} >{igKey}:{props.ingredients[igKey]}</span></li>
        );
    });
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </div>
    );
};

export default orderSummary;