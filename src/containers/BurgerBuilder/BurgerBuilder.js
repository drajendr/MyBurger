import React, { Component } from 'react';
import Aux from '../../hoc/common';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/Ordersummary';

const INGREDIENTS_PRICE = {
    salad:0.5,
    bacon:0.4,
    cheese:0.2,
    meat:1.3
}

class BugerBuilder extends Component{

    // constructor(props){
    //     super(props);        
    // }


    state = {
        ingredient: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0   
        },
        totalPrice : 4,
        orderEnable : true,
        purchasing : false
    }

    updateOrderEnableState = (ingredient) => {
        const updateState = Object.keys(ingredient)
                    .map(IgKey => {
                        return ingredient[IgKey];
                    }).reduce((sum,el) => {                         
                        return sum + el;
                    },0);
        this.setState({ orderEnable: updateState<=0 });
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredient[type];
        const newIngredientCount = oldIngredientCount + 1;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];
        const updatedIngredient = {...this.state.ingredient };
        updatedIngredient[type] = newIngredientCount;
        this.setState({ingredient:updatedIngredient, totalPrice:newPrice});
        this.updateOrderEnableState(updatedIngredient);        
    };

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredient[type];
        const newIngredientCount = oldIngredientCount !== 0 ? oldIngredientCount - 1 : 0;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICE[type];
        const updatedIngredient = { ...this.state.ingredient };
        updatedIngredient[type] = newIngredientCount;
        this.setState({ingredient:updatedIngredient, totalPrice:newPrice});
        this.updateOrderEnableState(updatedIngredient);
    };

    purchasingHandler = () => {
        this.setState( { purchasing : true } );
    };
    purchasingCancelHandler = () => {
        this.setState( { purchasing : false } );
    };
    purchasingContinueHandler = () => {
        this.purchasingCancelHandler();
        alert('Your order continued..');
    };

    render(){

        const disableInfo = {
            ...this.state.ingredient
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
       // console.log(disableInfo)
        return(
            <Aux>
                <Modal show={ this.state.purchasing } modalClosed = { this.purchasingCancelHandler } >
                    <OrderSummary 
                        ingredients = { this.state.ingredient } 
                        purchaseContinue = { this.purchasingContinueHandler }
                        price = { this.state.totalPrice }
                        cancel = { this.purchasingCancelHandler }
                    />
                </Modal>
                <Burger ingredient = {this.state.ingredient} />
                <BuildControls
                     addIngredient = {this.addIngredientHandler} 
                     removeIngredient = {this.removeIngredientHandler} 
                     disabled = { disableInfo }
                     BurgerPrice={ this.state.totalPrice }
                     orderDisable = { this.state.orderEnable }
                     purchasing = { this.purchasingHandler }
                />
            </Aux>
        );
    };
}

export default BugerBuilder;