module.exports={
  configurewebpack:{//修改webpack的配置
    reslove:{
      alias: {//配置文件别名
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}
