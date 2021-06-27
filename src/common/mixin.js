import {debounce} from 'common/utils.js'
import BackTop from 'components/content/backtop/BackTop.vue'

export const itemImageMixin={
  data () {
    return {
      itemImageLoad:null
    }
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImageLoad= () => {
      // this.$refs.scroll.refresh()
      // console.log(1);
      refresh();
    }
    this.$bus.$on('itemImageLoad',this.itemImageLoad)
  },

}

export const backTop={
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop:false,
    }
  },
  methods: {
    btnClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
  }

}
