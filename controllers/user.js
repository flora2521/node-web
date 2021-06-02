const manageUser = require('../entity/manageUserEntity');

const selectList = async (ctx) => {
    ctx.response.body =  await manageUser.findAll();
};

const selectOne = async (ctx) => {
    ctx.response.body = await manageUser.findByPk(ctx.params.id);
};

const insertOne = async (ctx) => {
    await manageUser.create({
        insideUsername:ctx.request.body.insideUsername,
        addTime: new Date(),
        trueName: ctx.request.body.trueName,
        password:ctx.request.body.password
    });
    ctx.response.body = `新增成功`;
};

const updateOne = async (ctx, next) => {
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

const deleteOne = async (ctx, next) => {
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};


const fn_signin = async (ctx, next) => {
    const name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};


module.exports = {
    'GET /user/list': selectList,
    'GET /user/:id': selectOne,
    'POST /user': insertOne,
    'PUT /user': updateOne,
    'DELETE /user/:id': deleteOne
};
