'use strict';

/**
 * order controller
 */
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({

    async create(ctx) {
        const { amount, city, items, pin, shippingAddress, state, token } = ctx.request.body;

        /** Logic to be Completed With new Stripe Gateway method */
        // await stripe.charges.create({
        //     amount: amount * 100,
        //     currency: "USD",
        //     source: token,
        //     description: `order by user ${ctx.state.user.email}`
        // })

        const order = await strapi.db.query('api::order.order').create({
            data: {
                shippingAddress,
                city,
                state,
                pin,
                amount,
                items,
                user: ctx.state.user.email
            }
        })

        return order;
    }
}));
