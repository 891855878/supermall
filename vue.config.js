// module.exports={
//   configureWebpack:{//修改webpack的配置 configureWebpack
//     reslove:{
//       alias: {//配置文件别名
//         'assets':'@/assets',
//         'common':'@/common',
//         'components':'@/components',
//         'network':'@/network',
//         'views':'@/views',
//       }
//     }
//   }
// }

module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views'
          }
      }
  }
}
