import koaRouter from 'koa-router'
const router = koaRouter()

export default app => {

/*----------------------admin-------------------------------*/
    // 用户请求
    router.get('/client_demo_api/blog/list', app.admin.user.list)
    router.get('/client_demo_api/blog/info', app.admin.user.info)

/*----------------------client-------------------------------*/
    // client/文章请求
    router.get('/client_demo_api/blog/list', app.client.blog.list)
    router.get('/client_demo_api/blog/info', app.client.blog.info)

    


    app.use(router.routes()).use(router.allowedMethods());
}