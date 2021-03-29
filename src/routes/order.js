const router = require('koa-router')()

const order = require('./TemporaryData/order')

router.prefix('/order')

router.get('/order-list', async (ctx, next) => {
    ctx.body = {
        code: 0,
        result: order.orderList,
        message: 'sucess'
    }
})

module.exports = router
