const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()//注意：路径要具体到存放的svg的路径下，不然会报错
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      //定义规则 使用时 <svg class="icon"> <use xlink:href="#icon-svg文件名"></use>  </svg>
      .options(
        {extract:false}
      )
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)
      
    }
}
