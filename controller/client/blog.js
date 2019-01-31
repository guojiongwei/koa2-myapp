module.exports = {
    async list(ctx, next) {
        console.log('----------------获取博客列表 client_demo_api/blog/list-----------------------');
        // let { type = null, pageindex = 1, pagesize = 5} = ctx.request.query;
        // console.log('type:'+type+','+'pageindex:'+pageindex +','+ 'pagesize:'+pagesize)
        try {
            const data = '获取博客列表'            
            return ctx.send(data)
        }catch (e){
            console.log(e)
            return ctx.sendError(e)
        }

    },
    async info(ctx, next) {
        console.log('----------------获取博客信息 client_demo_api/blog/info-----------------------');
        // let _id = ctx.request.query._id;
        try {
            // let data = await ctx.findOne(blogModel, { _id });
            const data = '获取博客信息'
            return ctx.send(data);
        } catch (e) {
            return ctx.sendError(e)
        }
    }
}