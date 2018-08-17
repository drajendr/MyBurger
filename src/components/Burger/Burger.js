import React from 'react';
import Classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    let changeIngredient = Object.keys(props.ingredient)
            .map(IgKey => {                
                return [...Array(props.ingredient[IgKey])].map(
                    (_,i) =>{                        
                        return <BurgerIngredient key={IgKey + i} type={IgKey} />
                    }
                )
            }).reduce((arr,element) => {
                return arr.concat(element);
            },[]);
           // console.log(changeIngredient)

            if(changeIngredient.length === 0){
                changeIngredient = <p>Please add ingredients!!</p>;
            }

    return(
    <div className={Classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {changeIngredient}
        <BurgerIngredient type="bread-bottom" />
    </div>
    );
};

export default burger;