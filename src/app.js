const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const kstatic = require('koa-static')
const cors = require('koa2-cors')

// routes
const index = require('./routes/index')
const users = require('./routes/users')
const city = require('./routes/city')

// error handler
onerror(app)

//允许跨域
app.use(cors())

// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(kstatic(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(city.routes(), city.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

module.exports = app
