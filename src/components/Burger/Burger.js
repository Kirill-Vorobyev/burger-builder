import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let myIngredients = Object.keys(props.ingredients).map((ingKey)=>{
        return [...Array(props.ingredients[ingKey])].map((_,index) => {
            return <BurgerIngredient key={ingKey + index} type={ingKey} />
        });
    }).reduce((arr,curr)=>{
        return arr.concat(curr);
    },[]);

    if(myIngredients.length === 0){
        myIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {myIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;