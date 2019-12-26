import React from 'react'

import CreditCardPaymentType from './CreditCardPaymentType'
import CheckPaymentType from './CheckPaymentType'
import PurchaseOrderPaymentType from './PurchaseOrderPaymentType'

class PaymentTypeSelector extends React.Component {

    constructor(props) {
        super(props);
        this.onPaymentTypeSelected = this.onPaymentTypeSelected.bind(this)
        this.state = {selectedPaymentType: null};
        this.options = this.generateSelector();
    }

    generateSelector() {
        return this.props.options.map((opt) => <option value={opt.id}>{opt.kind}</option>)
    }

    onPaymentTypeSelected(event) {
        this.setState({selectedPaymentType: event.target.options[event.target.selectedIndex].text});
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
                    <select onChange={this.onPaymentTypeSelected} name="order[payment_type_id]">
                        {this.options}
                    </select>
                </div>
                <PaymentTypeCustomComponent/>
            </div>
        );
    }
}

export default PaymentTypeSelector
