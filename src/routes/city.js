const router = require('koa-router')()

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
        list: [
            {
                key: 1,
                id: 12,
                name: '上海',
                mode: 1,
                op_mode: '1',
                franchisee_name: 'n',
                city_admins: 'xu,pang',
                open_time: '2021-01-04 10: 23: 30',
                update_time: '2021-01-04 10: 23: 30',
                sys_user_name: 'xuzhiy'
            }
        ],
        message: 'sucess'
    }
})

module.exports = router
