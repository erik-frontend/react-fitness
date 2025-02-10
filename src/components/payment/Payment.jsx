import React from 'react'
import "./payment.scss"
import PaymentForm from './PaymentForm'
import PaymentSumary from './PaymentSumary'

const Payment = () => {
    return (
        <>
            <section className="payment">
                <div className="container">
                    <div className="payment-wrapper">
                        <PaymentForm/>
                        <PaymentSumary/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Payment