const router = require('koa-router')()

const city = require('./TemporaryData/city')

router.prefix('/city')

router.get('/city-list', async (ctx, next) => {
    ctx.body = {
        code: 0,
        result: [],
        message: 'sucess'
    }
})
router.get('/open-city', async (ctx, next) => {
    ctx.body = {
        code: 0,
        result: city.openCity,
        message: 'sucess'
    }
})

module.exports = router
