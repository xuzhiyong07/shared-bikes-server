const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello Koa2!'
})

router.get('/test-sucess-json', async (ctx, next) => {
    ctx.body = {
        code: 0,
        result: 'koa2 test json',
        message: 'sucess'
    }
})

router.get('/test-error-json', async (ctx, next) => {
    ctx.body = {
        code: -1,
        result: 'koa2 test json',
        message: 'error'
    }
})

module.exports = router
