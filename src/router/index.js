import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject){
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
    return originalReplace.call(this, location).catch(err => err);
};

const Home=()=>import('views/home/Home.vue')
const Category=()=>import('views/category/Category.vue')
const Cart=()=>import('views/cart/Cart.vue')
const Profile=()=>import('views/profile/Profile.vue')
const Detail=()=>import('views/detail/Detail.vue')
const routes=[
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  }
  ,
  {
    path:'/category',
    component:Category
  }
  ,
  {
    path:'/cart',
    component:Cart
  }
  ,
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail
  }
]
const router=new VueRouter({
  routes,
  // mode:'history'
})

export default router
