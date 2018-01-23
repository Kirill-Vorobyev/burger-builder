import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auxilary';

class OrderSummary extends Component {
    // Can be functional component rather than class
    /*componentWillUpdate = () => {
        console.log('[OrdeSummary] Will Update');
    }*/
    render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map((ingKey)=>{
        return (
        <li key={ingKey}>
            <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
        </li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
            <Button buttonType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
    }
};

export default OrderSummary;