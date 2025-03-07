import { motion } from 'motion/react'
import React from 'react'
import { slideIn } from '../../utils/animations'

const PaymentForm = () => {
    return (
        <>
            <motion.form 
            initial="hidden"
            whileInView="visible"
            variants={slideIn()}
            className="payment-form">
                <h1 className="payment-title">Get your package</h1>
                <div className="payment-vrapper">
                    <div className="payment-detales">
                        <span className="payment-subtitle">Pay with</span>
                        <div className="payment-method">
                            <input type="radio" name="pay" id="paypal" />
                            <label for="paypal" className="paypal"></label>
                        </div>
                        <div className="payment-method">
                            <input type="radio" name="pay" id="pay" />
                            <label for="pay" className="pay"></label>
                        </div>
                        <span className="payment-text">Or using a credit card</span>
                        <div className="payment-field">
                            <label className="cardholder">Cardholder Name</label>
                            <input type="text" />
                        </div>
                        <div className="payment-field">
                            <label className="card-number">Card Number</label>
                            <input type="text" placeholder=" Ex:  31111 1111 1111 1111" />
                        </div>
                        <div className="payment-code">
                            <div className="code-info">
                                <label >Postal Code</label>
                                <input type="text" placeholder=" Postal or ZIP code" />
                            </div>
                            <div className="code-info">
                                <label >Expiration</label>
                                <input type="text" placeholder="MM/YY" />
                            </div>
                            <div className="code-info">
                                <label >CVV</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="save-card">
                            <input type="checkbox" name="radio" id="save-card" />
                            <label for="save-card">Save card</label>
                        </div>
                        <button className="btn payment-btn" type="submit">Confirm and pay</button>
                    </div>
                </div>
            </motion.form>
        </>
    )
}

export default PaymentForm