module.exports = {
  async list(ctx, next) {
      try {
        console.log(ctx.request.query)
        let { id } = ctx.request.query.id
        console.log(id)
        if(id){
          return ctx.send(id)
        } else {
          return ctx.sendError('请确认id')
        }
      }catch (e){
          console.log(e)
          return ctx.sendError(e)
      }
  },
  async info(ctx, next) {
      try {
          const data = '获取博客信息'
          return ctx.send(data);
      } catch (e) {
          return ctx.sendError(e)
      }
  }
}