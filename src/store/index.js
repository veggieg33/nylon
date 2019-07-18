import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//import {ADD_CART,REDUCE_CART} from "./mutation-type";

const state={

  brandsArr:[
    {name:'nylon1',src:"/static/image/card1.jpg"},
    {name:'nylon2',src:"/static/image/card1.jpg"},
    {name:'nylon3',src:"/static/image/card1.jpg"},
    {name:'nylon4',src:"/static/image/card1.jpg"},
  ],
  news:[
    {
      src:'/static/image/news.jpg',
      title:'COOL MAN 酷枇杷',
      date:'2018/12/13'
    },
    {
      src:'/static/image/news2.jpg',
      title:'潮流教父藤原浩做的鸡你吃吗？',
      date:'2018/07/21'
    },
    {
      src:'/static/image/news3.jpg',
      title:'跨界发型屋！Edwin Watch Store × Barber shop...',
      date:'2018/07/16'
    },
    {
      src:'/static/image/news4.jpeg',
      title:'广州人气潮所地图&1626联乘卡贴领取方法',
      date:'2019/01/13'
    },
    {
      src:'/static/image/news.jpg',
      title:'篮球文化新基地，JORDAN 218 TIANHE正式开业',
      date:'2018/12/13'
    },
    {
      src:'/static/image/news2.jpg',
      title:'潮流教父藤原浩做的鸡你吃吗？',
      date:'2018/07/21'
    },
    {
      src:'/static/image/news3.jpg',
      title:'跨界发型屋！Edwin Watch Store × Barber shop...',
      date:'2018/07/16'
    },
    {
      src:'/static/image/news4.jpeg',
      title:'广州人气潮所地图&1626联乘卡贴领取方法',
      date:'2019/01/13'
    },
    {
      src:'/static/image/news.jpg',
      title:'篮球文化新基地，JORDAN 218 TIANHE正式开业',
      date:'2018/12/13'
    },
    {
      src:'/static/image/news2.jpg',
      title:'潮流教父藤原浩做的鸡你吃吗？',
     date:'2018/07/21'
    },
    {
      src:'/static/image/news3.jpg',
      title:'跨界发型屋！Edwin Watch Store × Barber shop...',
      date:'2018/07/16'
    },
    {
      src:'/static/image/news4.jpeg',
      title:'广州人气潮所地图&1626联乘卡贴领取方法',
      date:'2019/01/13'
    },


  ],

  count:1,
  singleNum:1,
  singlePrice:125,
  show:"fashion",
  
  goods:[
  //商品信息
  {
    
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'迪士尼联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      shopsName:'jenry',
      price:789,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      shopsName:'jenry',
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      
      shopsName:'jenry',
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      
      shopsName:'jenry',
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
     
      shopsName:'jenry',
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      
      shopsName:'jenry',
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  },
  {
      src:'/static/image/card1.jpg',
      title:'DIE WELLE X TEAMAGE 联名款冲锋羽绒服 撒哈拉之眼 长款MA1 棉服',
      
      shopsName:'jenry',
      price:679,
      isLike:true,
      likes:10,
      flag:false,
      num:1,
      description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
      sizes:['S','M','L','XL'],
      size:'',
      colors:['黑色','白色','红色','灰色'],
      color:'',
      completed:false//用来检测购物车中是否选中
  }
  ],
  totalPrice:0,
  totalNum:0,
  cart:[],
  selectedItem:{},


}

const mutations={
  CHANGE_SHOW(state,type){
    state.show=type
  },
  SUB(state,index){
    if(typeof(index)!='number'){
      state.selectedItem.num-=1
    }else{
      state.cart[index].num -=1
    }
  },
  ADD(state,index){
    if(typeof(index)!='number'){
      state.selectedItem.num+=1
    }else{
      state.cart[index].num+=1
    }
  },
  ADD_TO_CART(state){
    var cart=state.cart;
    var thing=mutations.clone(state.selectedItem);
    //查看购物车是否已经有相同的商品，信息都一样

    if(!cart.length){
      cart.push(thing)
    }else{
      var flag=cart.some(function(e){
        return e.color==thing.color&&e.size==thing.size&&e.src==thing.src
      })
      try{
        if(!flag){
          cart.push(thing);
          throw new Error("can't find")
        }
        cart.forEach(function(e,index){
          if(e.color==thing.color&&e.size==thing.size&&e.src==thing.src){
            cart[index].num+=thing.num;
            foreach.break=new Error("StopIteration");
          }
        })
      }catch(e){
        //用于跳出循环
      }

    }
    state.selectedItem={};

  },
  REMOVE(state,index){
    state.cart.splice(index,1)
  },
  CHANGE_COLOR(state,index){
    state.selectedItem.color=state.selectedItem.colors[index]
  },
  CHANGE_SIZE(state,num){
    state.selectedItem.size=state.selectedItem.sizes[num]
  },
  CHANGE_SELECTED_ITEM(state,index){
    state.selectedItem=mutations.clone(state.goods[index]);
    var temp=mutations.clone(state.selectedItem);
    sessionStorage.setItem('storageItem',JSON.stringify(temp));
  },
  clone(myObj){
    if(typeof(myObj) != 'object') return myObj;
    if(myObj == null) return myObj;

    var myNewObj = new Object();

    for(var i in myObj)
      myNewObj[i] = mutations.clone(myObj[i]);

    return myNewObj;
  },
  CHANGE_NUM_ADD(state,index){
    if(typeof(index)!='number'){
      state.selectedItem.num+=1
    }else{
      state.cart[index].num+=1
    }
  },
  CHANGE_NUM_SUB(state,index){
    if(typeof(index)!='number'){
      state.selectedItem.num-=1
    }else{
      state.cart[index].num-=1
    }
  }

}

const actions={

  changeShow({commit},type){
    commit('CHANGE_SHOW',type)
  },
  add({commit},type){
    commit('ADD',type)
  },
  sub({commit},type){
    commit('SUB',type)
  },
  changeColor({commit},type){
    commit('CHANGE_COLOR',type)
  },
  changeSize({commit},type){
    commit('CHANGE_SIZE',type)
  },
  addToCart({commit},type){
    commit('ADD_TO_CART',type)
  },
  changeSelectedItem({commit},index){
    commit('CHANGE_SELECTED_ITEM',index)
  },
  remove({commit},index){
    commit('REMOVE',index)
  },
  changeNumSub({commit},index){
    commit('CHANGE_NUM_SUB',index)
  },
  changeNumAdd({commit},index){
    commit('CHANGE_NUM_ADD',index)
  }




}

const getters={

  getNews:function(state){
     return state.news
  },
  getCart:function(state){
     return state.cart
  },
  getGoods:function(state){
    return state.goods
  }

}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
