<template>
    <div class="list-box bg-f9f9f9 main mt6">
        <div class="list">
            <div class="list-result">
                <span class="f14 c-333">共有<span class="c-ff5555">{{total}}</span>套符合您要求的房源</span>
                <div class="sort right">
                    <a href="/fang?district=&amp;region=&amp;line=&amp;station=&amp;bedroom=1&amp;rentstart=&amp;rentend=&amp;squarestart=&amp;squareend=&amp;characteristic=&amp;decoration=&amp;orientation=&amp;floor=&amp;xq=&amp;search=&amp;order=" class="active">默认</a>
                    <!--a href="/fang?district=&amp;region=&amp;line=&amp;station=&amp;bedroom=1&amp;rentstart=&amp;rentend=&amp;squarestart=&amp;squareend=&amp;characteristic=&amp;decoration=&amp;orientation=&amp;floor=&amp;xq=&amp;search=&amp;order=newDesc">最新</a>
                    <a href="/fang?district=&amp;region=&amp;line=&amp;station=&amp;bedroom=1&amp;rentstart=&amp;rentend=&amp;squarestart=&amp;squareend=&amp;characteristic=&amp;decoration=&amp;orientation=&amp;floor=&amp;xq=&amp;search=&amp;order=rentDesc">价格<i class="icon down-arrow-icon"></i></a>
                    <a href="/fang?district=&amp;region=&amp;line=&amp;station=&amp;bedroom=1&amp;rentstart=&amp;rentend=&amp;squarestart=&amp;squareend=&amp;characteristic=&amp;decoration=&amp;orientation=&amp;floor=&amp;xq=&amp;search=&amp;order=squareDesc">面积<i class="icon down-arrow-icon"></i></a-->
                </div>
            </div>
            <router-link :to="'/details/'+item.id" class="list-item clearfix"  v-for="item in houseList" :key="item.id">
                <div class="list-img">
                    <img :src="item.picture" alt="">
                    <div class="top-icon">
                    </div>
                </div>
                <div class="list-info">
                    <p class="oneEllipsis mb6 bold f22 c-333">{{item.name}}</p>
                    <p class="clearfix"><span class="f16 c-333 left mt6">{{item.area}}㎡/{{item.apartment}}</span><span class="f24 c-ff5555 right">{{item.price}}<span class="f16">元/月</span></span>
                    </p>
                    <p class="mb6 clearfix"><span class="f16 c-999 left middle"><i class="icon location-icon middle"></i><span>{{item.address}}</span></span><span class="f14 c-999 right">{{item.date}}发布</span></p>
                    <p class="fang-notes clearfix">
                        <span class="fang-note list-note-type1">{{item.describe}}</span>
                    </p>
                </div>
            </router-link>
            <ul class="page" style="margin-top:20px;">
              <el-pagination
              layout="prev, pager, next" :page-size="10" background @current-change="changePage"
              :total="total">
              </el-pagination>
            </ul>        
        </div>  
        <div class="rcmd-list">
            <p class="mtb12 f18 c-333">推荐房源</p>
            <router-link to="/fang/101833.html" class="list-item" v-for="item in recommendHouseList" :key="item.housenumber">
                <div class="list-img mb10">
                    <img :src="item.picture" alt="">
                </div>
                <p class="oneEllipsis mb10 bold f18 c-333">{{item.housename}}</p>
                <p class="clearfix"><span class="f14 c-333 left">{{item.apartment}}</span><span class="f18 c-ff5555 right">{{item.price}}<span class="f14">元/月</span></span>
                </p>
            </router-link>
        </div>
    </div>
</template>
<script>
import { getHouseList } from '@/api/renting'
export default {
  data() {
    return {
      total: 0,
      page: 1,
      houseList: [
      ],
      recommendHouseList: [
        {
          housenumber: 1,
          housename: '新秀地铁站附近 芳春花园小区',
          picture: 'https://img2.zuke.com/u/1338011/2018121014243197847_220_158.jpg',
          area: '15',
          apartment: '1室0厅1卫',
          price: '1200',
          address: '芳春花园',
          date: '12-10',
          describe: '学校附近，有电梯'
        },
        {
          housenumber: 2,
          housename: '新秀地铁站附近 芳春花园小区',
          picture: 'https://img2.zuke.com/u/1338011/2018121014243197847_220_158.jpg',
          area: '15',
          apartment: '1室0厅1卫',
          price: '1200',
          address: '芳春花园',
          date: '12-10',
          describe: '学校附近，有电梯'
        },
        {
          housenumber: 3,
          housename: '新秀地铁站附近 芳春花园小区',
          picture: 'https://img2.zuke.com/u/1338011/2018121014243197847_220_158.jpg',
          area: '15',
          apartment: '1室0厅1卫',
          price: '1200',
          address: '芳春花园',
          date: '12-10',
          describe: '学校附近，有电梯'
        }
      ]
    }
  },
  mounted() {
    this.getHouseList()
  },
  props: {
    search: Object
  },
  watch: {
    search: {
      handler: function(newVal) {
        this.page = 1
        this.getHouseList()
      },
      deep: true
    }
  },
  methods: {
    getHouseList() {
      const info = {
        page: this.page,
        pageSize: 10,
        userId: '',
        area: '',
        university: this.search.university ? this.search.university : null, // 学校
        name: this.search.name ? this.search.name : null, // 关键字
        apartment: this.search.apartment ? this.search.apartment : null, // 户型
        price1: this.search.price1 ? this.search.price1 : null,
        price2: this.search.price2 ? this.search.price2 : null
      }
      getHouseList(info).then(result => {
        this.houseList = result.list
        this.total = result.total
      })
    },
    changePage(val) {
      this.page = val
      this.getHouseList()
    }
  }
}
</script>

<style>
.list-box { margin-bottom: 30px; }
.list-box .list { width: 920px; height: auto; margin-right: 20px; border: 1px solid #eee; background-color: #fff; float: left; }
.list-result { width: 100%; height: 52px; line-height: 52px; padding: 0 20px; border-bottom: 1px solid #eee; }
.list-result .sort {  }
.list-result .sort a { margin-right: 20px; font-size: 14px; color: #333; }
.list-result .sort a:last-child { margin-right: 0; }
.list-result .sort a.active { color: #3fabfa; }
.list-result .sort a .icon { width: 8px; height: 12px; margin-left: 4px; }
.list-box .list .list-item { display: block; width: 100%; height: 198px; padding: 20px; border-bottom: 1px solid #eee; }
.list-box .list .list-item .list-img { position: relative; width: 220px; height: 100%; margin-right: 20px; float: left; }
.list-box .list .list-item .list-img img { width: 100%; height: 100%; }
.list-box .list .list-item .list-img .top-icon { position: absolute; top: 4px; }
.list-box .list .list-item .list-img .top-icon .real-housing-icon { width: 24px; height: 27px; }
.list-box .list .list-item .list-img .top-icon .free-deposit-icon { width: 71px; height: 24px; }
.list-box .list .list-item .list-info .ziying-icon { width: 41px; height: 21px; }
.list-box .list .list-item .list-info { width: 638px; height: 100%; padding: 10px 0; float: left; }
.list-box .list .list-item .list-info .location-icon { width: 10px; height: 16px; margin-right: 8px; }
.list-box .list .list-item .list-info .fang-notes { height: 27px; overflow: hidden; }

/*推荐*/
.rcmd-list { width: 260px; height: 100%; padding: 0 20px; border: 1px solid #eee; background-color: #fff; float: left; }
.rcmd-list .list-item { display: block; width: 100%; height: 222px; margin-bottom: 20px; }
.rcmd-list .list-item .list-img { width: 100%; height: 158px; }
.rcmd-list .list-item .list-img img { width: 100%; height: 100%; }
</style>
