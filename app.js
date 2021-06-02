const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

// 请求日志记录:
app.use(async (ctx, next) => {
    console.log(`请求方式 ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 格式化body参数:
app.use(bodyParser());

// 添加所有的请求路径
app.use(controller());

//监听3000
app.listen(3000);
console.log('app started at port 3000...');
