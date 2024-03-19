const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    Product: [{
        name: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        quantity: {
            type: Number,
            require: true,
        },
    }],
    totalprice: {
        type: Number,
        require: true,
    },

    ShippingAddress: {
        contactno: {
            type: Number,
            require: true
        },
        Houseno: {
            type: String,
            require: true,

        },
        street: {
            type: String,
            require: true,
        },
        landmark: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        State: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
        postalcode: {
            type: Number,
            require: true,
        }
    },
    Paymentmethod: {
        type: String,
        require: true,
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }



});


const Order = mongoose.model("Order", orderSchema)

module.exports = Order
