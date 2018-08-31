import React, { Component } from 'react';
import Aux from '../../hoc/Common/common';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/Ordersummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler';

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
        ingredient: null,
        totalPrice : 4,
        orderEnable : true,
        purchasing : false,
        loading : false
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
       this.setState( { loading : true } )
        const order = {
            ingredients : this.state.ingredient,
            price : this.state.totalPrice,
            customer : {
                name : 'Dinesh',
                address :{
                    street : 'Test street',
                    zipcode : '602154',
                    country : 'India'
                },
                email : 'abc@gmail.com',
            },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json', order).then(
            response => {
               // console.log(response);
                this.setState({ loading : false, purchasing : false })
            }
        ).catch(
            error => {
                this.setState({ loading : false, purchasing : false })
            }
        )
    };

    componentDidMount() {
        axios.get('ingredient.json')
            .then(response => {
                this.setState({ ingredient : response.data });
            })
            .catch( error => {} );
    }

    render(){
        const disableInfo = {
            ...this.state.ingredient
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let burger = <Spinner />;
        let orderSummary = null;
        
        if(this.state.ingredient){
            burger = (
                <Aux>
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
            orderSummary = <OrderSummary 
                                    ingredients = { this.state.ingredient } 
                                    purchaseContinue = { this.purchasingContinueHandler }
                                    price = { this.state.totalPrice }
                                    cancel = { this.purchasingCancelHandler }
                                />
        }
        if(this.state.loading){            
            orderSummary = <Spinner />
        }
       // console.log(disableInfo)
        return(
            <Aux>
                <Modal show={ this.state.purchasing } modalClosed = { this.purchasingCancelHandler } >
                    { orderSummary }
                </Modal>
                { burger }
            </Aux>
        );
    };
}

export default errorHandler(BugerBuilder,axios);