const router = require('koa-router')()

router.get('/city-list', async (ctx, next) => {
    ctx.body = {
        code: 0,
        result: [],
        message: 'sucess'
    }
})

module.exports = router
