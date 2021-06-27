import Toast from './Toast.vue'
const obj={}

obj.install = function(Vue){
  // 1.创建组件构造器
  const toastConstructor=Vue.extend(Toast)
  //2.使用new 创建一个组件对象
  const toast =new toastConstructor()
  // 3.将组件对象手动挂载到某个对象
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast
  // console.log(vue);
}

export default obj
