import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    lettuce: 0.3,
    tomato: 0.4,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6,
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super.props;
    //     this.state = {}
    // }
    state = {
        ingredients: {
            lettuce: 0,
            tomato: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        showSummary: false
    }

    updatePurchaseable () {
        const ingredients = {
            ...this.state.ingredients
        }
        const sum = Object.keys(ingredients)
            .map((ingKey)=>{
                return ingredients[ingKey];
            }).reduce((sum, curr) => {
                return sum + curr;
            },0);
        this.setState({purchaseable: sum>0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceToAdd = INGREDIENT_PRICES[type];
        //console.log(priceToAdd);
        const oldPrice = this.state.totalPrice;
        //console.log(oldPrice);
        const newPrice = oldPrice + priceToAdd;
        //console.log(newPrice);
        this.setState({totalPrice: newPrice, ingredients: updateIngredients},()=>(this.updatePurchaseable()));
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceToAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceToAdd;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients},()=>(this.updatePurchaseable()));
    }

    showPurchaseSummaryHandler = () => {
        this.setState({showSummary:true});
    }

    hidePurchaseSummaryHandler = () => {
        this.setState({showSummary:false});
    }

    purchaseContinueHandler = () => {
        alert('Order Complete!');
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal 
                    show={this.state.showSummary}
                    modalClosed={this.hidePurchaseSummaryHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        showSummary={this.state.showSummary}
                        price={this.state.totalPrice}
                        purchaseCancel={this.hidePurchaseSummaryHandler}
                        purchaseContinue={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    showSummary={this.state.showSummary}
                    orderConfirm={this.showPurchaseSummaryHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder