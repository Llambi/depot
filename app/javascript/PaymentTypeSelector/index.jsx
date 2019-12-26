import React from 'react'

import NoPaymentType from './NoPaymentType'
import CreditCardPaymentType from './CreditCardPaymentType'
import CheckPaymentType from './CheckPaymentType'
import PurchaseOrderPaymentType from './PurchaseOrderPaymentType'

class PaymentTypeSelector extends React.Component {

    constructor(props) {
        super(props);
        this.onPaymentTypeSelected = this.onPaymentTypeSelected.bind(this)
        this.state = {selectedPaymentType: null}
    }

    onPaymentTypeSelected(event) {
        this.setState({ selectedPaymentType: event.target.value });
        console.log(this.props)
    }

    render() {
        let PaymentTypeCustomComponent = CheckPaymentType;
        if (this.state.selectedPaymentType === "Credit card") {
            PaymentTypeCustomComponent = CreditCardPaymentType;
        } else if (this.state.selectedPaymentType === "Check") {
            PaymentTypeCustomComponent = CheckPaymentType;
        } else if (this.state.selectedPaymentType === "Purchase order") {
            PaymentTypeCustomComponent = PurchaseOrderPaymentType;
        }
        return (
            <div>
                <div className="field">
                    <label htmlFor="order_payment_type_id">Pay type</label>
                    <select onChange={this.onPaymentTypeSelected} id="payment_type_id" name="order[payment_type_id]">
                        <option value="Check">Check</option>
                        <option value="Credit card">Credit card</option>
                        <option value="Purchase order">Purchase order</option>
                    </select>
                </div>
                <PaymentTypeCustomComponent/>
            </div>
        );
    }
}

export default PaymentTypeSelector
