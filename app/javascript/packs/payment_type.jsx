import React from 'react'
import ReactDOM from 'react-dom'
import PaymentTypeSelector from '../components/PaymentTypeSelector'

document.addEventListener('turbolinks:load', function () {
    var element = document.getElementById("payment-type-component");
    ReactDOM.render(<PaymentTypeSelector/>, element)
});
