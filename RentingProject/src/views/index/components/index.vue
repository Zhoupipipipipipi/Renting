<template>
    <div class="home">
        <div class="banner">
            <div class="search-box">
                <div class="top">
                    <form action="/fang" method="" class="" id="form-search">
                        <dl>
                            <dt>搜住宅</dt>
                            <dd>
                                <ul id="banner-search-select">
                                    <li data-param="/office">搜写字楼</li>
                                    <li data-param="/shop">搜商铺</li>
                                </ul>
                            </dd>
                        </dl>
                        <el-input id="search" placeholder="请输入高校名字" type="text" v-model="searchSchool" v-on:input="getSearchSchool"></el-input>
                        <!-- <input class="search-btn" value="" type="submit"> -->
                    </form>
                    <el-card class="box-card search-school-box" v-if="search.searchList.length>0">
                        <div v-for="item in search.searchList" :key="item.name" class="text item" @click="chooseThisSchool(item)">
                            {{ item.name }}
                        </div>
                    </el-card>
                    <p class="summ-word tcenter f14"><i class="icon news-red-icon"></i><span class="c-333">今日新闻：今日新增房源</span><span class="c-ff5555">263</span><span class="c-333">套，总计271046套，入驻合伙人</span><span class="c-ff5555">23154</span><span class="c-333">人</span></p>
                </div>
                <div class="bottom">
                    <!-- <div class="category left">
                        <div class="item active" name="1001">租房</div>
                        <div class="item" name="1004">商铺</div>
                        <div class="item" name="1003">写字楼</div>
                    </div> -->
                    <div class="criteria-box" name="1001">
                        <div class="subsection">
                            <span class="subsection-item active" name="area">区域找房</span>
                        </div>
                        <div class="criteria-item clearfix" name="area">
                            <span class="left">热门区域</span>
                            <div class="left">
                                <router-link to="" v-for="(item, $index) in search.area" :key="item.id" v-if="$index<10||showMore">{{item.name}}</router-link>
                                <span @click="showAny" class="show-more">更多</span>
                            </div>
                        </div>
                        <div class="criteria-item clearfix">
                            <span class="left">租金</span>
                            <div class="left">
                                <router-link to="" v-for="item in search.money" :key="item.id">{{item.name}}</router-link>
                                <span class="range middle">
                        <input class="fang-rentstart" type="text" value="">
                        <span class="f14 c-333 ml8">-</span>
                                <input class="ml8 fang-rentend" type="text" value="">
                                <button class="fang-price-btn">确定</button>
                                </span>
                            </div>
                        </div>
                        <div class="criteria-item clearfix">
                            <span class="left">户型</span>
                            <div class="left">
                                <router-link to="" v-for="item in search.roomType" :key="item.id">{{item.name}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <house-list></house-list>
    </div>
</template>
<script>
import HouseList from '@/views/houseList/index'
import { getSearchSchool } from '@/api/index'
import { CityToSchool } from '@/api/index'
export default {
  data() {
    return {
      search: {
        area: [
          { id: 1, name: '肇庆学院' },
          { id: 2, name: '广东金融学院' },
          { id: 3, name: '广东工业大学' },
          { id: 4, name: '华南理工学院' }
        ],
        money: [
          { id: 1, name: '1000-2000元' },
          { id: 2, name: '2000-3000元' },
          { id: 3, name: '3000-4000元' },
          { id: 4, name: '4000-5000元' },
          { id: 5, name: '5000-6000元' }
        ],
        roomType: [
          { id: 1, name: '一室' },
          { id: 2, name: '两室' },
          { id: 3, name: '三室' },
          { id: 4, name: '四室' },
          { id: 5, name: '四室以上' }
        ],
        searchSchool: '', // 查询高校名字
        searchList: [] // 查询高校下拉列表
      },
      searchSchool: '',
      CityName: this.$route.params.CityName,
      CityList: [],
      showMore: false
    }
  },
  components: {
    HouseList
  },
  watch: {
    $route(to, from) {
      console.log(to.params.CityName)
      this.CityName = to.params.CityName
      this.CityToSchool()
    }
  },
  methods: {
    getSearchSchool() { // 获取学校数据列表
      const reg = /^[\u4e00-\u9fa5]+$/
      if (!reg.test(this.searchSchool)) {
        this.search.searchList = []
        return
      }
      console.log(this.searchSchool)
      getSearchSchool(this.searchSchool).then(result => {
        if (this.searchSchool !== '') {
          this.search.searchList = result
        }
      })
    },
    chooseThisSchool(item) { // 点击选中该学校
      this.searchSchool = item.name
      this.search.searchList = []
    },
    showAny() {
      console.log('!!!!')
      this.showMore = !this.showMore
    },
    CityToSchool() {
      CityToSchool(this.CityName).then(result => {
        this.search.area = result
      })
    }
  },
  mounted() {
    this.CityToSchool()
  }
}
</script>
<style>
/*首页*/
.home .nav { border-bottom: none; }
.home .banner { position: relative; width: 100%; min-width: 1200px; height: 440px; background: url(../../../assets/img/home-banner.png) left top / 100% 100% fixed no-repeat; }
.home .banner .search-box { position: absolute; left: 50%; top: 34px; width: 1200px; border: 1px solid #eee; margin: 10px 0 50px -600px; background-color: #fff; -webkit-border-radius: 10px; -moz-border-radius: 10px; -ms-border-radius: 10px; border-radius: 10px; overflow: hidden; }
.home .banner .search-box .top { display: inline-block; width: 100%; height: 125px; background-color: #ebf2f9; }
.home .banner .search-box .top .summ-word { margin: 10px 0; }
.home .banner .search-box .top .summ-word > * { vertical-align: middle; }
.home .banner .search-box .top .summ-word i { width: 18px; height: 14px; margin-right: 10px; }
.home .banner .search-box .top form { display: block; background-color: #f9f9f9; width: 1144px; height: 44px; margin: 20px auto; -webkit-border-radius: 44px; border-radius: 44px; }
.home .banner .search-box .top form dl,
.home .banner .search-box .top form input { font-size: 14px; color: #333; border: none; line-height: 44px; height: 44px; }
.home .banner .search-box .top form dl { position: relative; text-indent: 14px; width: 120px; float: left;border-top-left-radius: 44px; border-bottom-left-radius: 44px; }
.home .banner .search-box .top form dl dt { position: relative; padding-right: 26px; cursor: pointer; font-size: 14px; }
.home .banner .search-box .top form dl dt::after { position: absolute; content: '|'; font-size: 18px; font-weight: 200; color: #999; top: 0; right: 20px; }
.home .banner .search-box .top form dl dd { position: absolute; top: 44px; z-index: 1; width: 90px; font-size: 14px; line-height: 38px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; display: none; background-color: #f9f9f9; }
.home .banner .search-box .top form dl dd ul li { cursor: pointer; }
.home .banner .search-box .top form input[type="text"] { position: relative; width: 900px; display: inline-block; color: #333; font-size: 14px; float: left; }
.home .banner .search-box .top form dl,
.home .banner .search-box .top form input { font-size: 14px; color: #333; border: none; line-height: 44px; height: 44px; background-color: #f9f9f9; }
.home .banner .search-box .top form input:-webkit-autofill { -webkit-box-shadow: 0 0 0 1000px #f9f9f9 inset; }
.home .banner .search-box .top form .search-btn { width: 85px; height: 44px; float: right; background: #3fabfa url(../../../assets/img/search-white-icon.png) center center / auto 50% no-repeat; cursor: pointer; border-top-right-radius: 44px; border-bottom-right-radius: 44px; }
.home .banner .search-box .bottom { width: 100%; height: 200px; }
.home .banner .search-box .bottom .category { width: 140px; height: 100%; background-color: #ebf2f9; }
.home .banner .search-box .bottom .category .item { width: 140px; height: 110px; line-height: 110px; text-align: center; font-size: 16px; color: #666; background-color: #ebf2f9; border-right: 1px solid #fff; border-bottom: 1px solid #fff; cursor: pointer; }
.home .banner .search-box .bottom .category .item:last-child { border-bottom: none; }
.home .banner .search-box .bottom .category .item.active { background-color: #fff; border-right: none; color: #333; }
.home .banner .search-box .bottom .criteria-box { width: 1050px; height: 300px; padding-bottom: 0; border: none; overflow: auto; margin-bottom: 0; }
.home .banner .search-box .bottom .criteria-item > div { width: 900px; line-height: 36px; }
.home .banner .search-box .bottom .criteria-item > span { padding-right: 14px; text-align: right; }
.home .banner .search-box .bottom .down-ani { position: absolute; left: 46%; bottom: 8px; }
.home .banner .search-box .bottom .down-ani .down-ani-icon { position: absolute; top: 0; left: -18px; width: 12px; height: 15px; -webkit-animation: downAni 1s infinite; -webkit-animation-fill-mode: both; }
@-webkit-keyframes downAni { from { top: 0%; } to { top: 4px; } }
.home .banner .bottom-box { position: absolute; left: 50%; top: 560px; width: 1200px; margin-left: -600px; }
.home .banner .bottom-box .word { width: 100%; height: 80px; background: url(../../../assets/img/home-banner-word.png) center top / auto 70% no-repeat; }
.home .banner .bottom-box .content { width: 100%; height: 580px; padding: 30px 0; background-color: #fff; box-shadow: 0px 5px 24px 0px #eee; border-radius:0px 0px 10px 10px;}
.home .banner .bottom-box .content .zu-entry { width: 260px; height: 160px; margin: 0 20px; background-size: 100% 100%; background-position: center center; background-repeat: no-repeat; float: left; }
.home .banner .bottom-box .content .entry-box { width: 1200px; margin-top: 45px; }
.home .banner .bottom-box .content .entry-box .entry-col { position: relative; width: 300px; float: left; }
.home .banner .bottom-box .content .entry-box .entry-col:not(:last-child)::after { content: ''; position: absolute; top: 0; right: 0; background-color: #eee; width: 1px; height: 270px; }
.home .banner .bottom-box .content .entry-box .entry-col .item { display: inline-block; width: 7.3em; height: 76px; margin: 0 6px 30px; float: left; }
.home .banner .bottom-box .content .entry-box .entry-col .item i { display: block; width: 40px; height: 40px; margin: 0 auto 6px; }
.home .banner .bottom-box .content .entry-box .entry-col .item p { font-size: 14px; color: #333; text-align: center; }
.home .banner .bottom-box .content .entry-box .entry-col .item:hover > p { color: #ff5555; }
.home .banner .bottom-box .big-entry {position: relative; width: 380px; height: 200px; margin-top: 30px; background-size: 100% 100%; background-position: center center; background-repeat: no-repeat; float: left; }
.home .banner .bottom-box .big-entry:not(:first-child) {margin-left: 30px;}
.home .banner .bottom-box .big-entry .from {display: flex;position: absolute;top: 50%; left: 50%; transform: translateX(-50%); height: 36px; width: 250px;}
.home .banner .bottom-box .big-entry .partner-number {display: inline-block;font-size: 14px;
z-index: 5; padding: 0 0 0 4px; width: 204px; height: 36px; background-color: #fff; border: none;}
.home .banner .bottom-box .big-entry .from .verification-partner-number {display: inline-block;height: 36px;width: 42px;background-color: #0C9DF9;background-size: 23px 26px;background-repeat: no-repeat; background-position: center center;}
.home .common-box {  }
.home .common-box > .left { width: 890px; }
.home .common-box > .right { width: 290px; padding-top: 40px; }
.home .common-box .entry-box { width: 246px; height: 132px; padding: 20px 10px; background-color: #f9f9f9; }
.home .common-box .entry-box > a { display: block; margin: 28px auto 0; width: 158px; height: 38px; line-height: 38px; font-size: 14px; color: #fff; text-align: center; background-color: #3fabfa; }
.home .common-box .xq-box { width: 100%; height: 354px; padding: 20px; }
.home .common-box .xq-box .item { width: 422px; height: 176px; float: left; }
.home .common-box .xq-box .item .img-box { width: 206px; height: 136px; float: left; overflow: hidden; }
.home .common-box .xq-box .item .img-box img { width: 100%; height: auto; }
.home .common-box .xq-box .item .info-box { width: 210px; height: 136px; padding: 12px 20px; float: left; }
.home .common-box .xq-box .item .info-box > a { display: block; font-size: 14px; color: #333; }
.home .common-box .xq-box .item .info-box > a.active { text-decoration: underline; color: #ff5555 }
.home .common-box .xq-box .item .info-box > a:hover { text-decoration: underline; color: #ff5555; }
.home .common-box .xq-box .item .info-box > a:first-child { margin-bottom: 24px; }
.home .common-box .xq-right { height: 354px; padding: 18px 20px; }
.home .common-box .xq-right > p a { white-space:nowrap }
.home .common-box .xq-right > p a:hover { text-decoration: underline; }
.home .common-box .xq-right .xq-search { width: 246px; height: 40px; margin: 26px auto 36px; }
.home .common-box .xq-right .xq-search input[type="text"] { width: 184px; height: 40px; padding: 4px 8px; background-color: #f9f9f9; border: 1px solid #eee; font-size: 14px; color: #333; }
.home .common-box .xq-right .xq-search input[type="submit"] { width: 62px; height: 40px; border: 1px solid #eee; background: #fff url(../../../assets/img/search-gray-icon.png) center center / auto 40% no-repeat; cursor: pointer; }
.home .common-box .fang-box { width: 100%; height: 448px; }
.home .common-box .fang-box .big-fang { display: block; width: 414px; height: 448px; padding: 12px; }
.home .common-box .fang-box .big-fang .img-box { position: relative; width: 388px; height: 358px; overflow: hidden; }
.home .common-box .fang-box .big-fang .img-box img { position: absolute; left: 50%; width: auto; height: 100%; -webkit-transform: translate(-50%,0); transform: translate(-50%,0); }
.home .common-box .fang-box .small-fang { width: 466px; height: 448px; margin-left: 10px; }
.home .common-box .fang-box .small-fang .item { width: 227px; height: 219px; padding: 10px 12px; margin-right: 10px; border: 1px solid #eee; float: left; }
.home .common-box .fang-box .small-fang .item:nth-child(2n+0) { margin-right: 0; }
.home .common-box .fang-box .small-fang .item .img-box { width: 200px; height: 150px; overflow: hidden; }
.home .common-box .fang-box .small-fang .item .img-box img { display: block; width: 100%; height: 100%; }
.home .common-box .fang-right { height: 448px; padding: 18px 20px; }
.home .common-box .fang-right .map-find { display: block; width: 247px; height: 234px; margin-bottom: 40px; background: url(../../../assets/img/map-find-fang-bg.png) center center / 100% 100% no-repeat; }
.home .common-box .shop-box { padding: 10px 16px; }
.home .common-box .shop-box .item { display: block; width: 276px; height: 236px; margin-right: 20px; }
.home .common-box .shop-box .item:last-child { margin-right: 0; }
.home .common-box .shop-box .item .img-box { width: 276px; height: 180px; overflow: hidden; }
.home .common-box .shop-box .item .img-box img { width: 100%; height: 100%; }
.home .common-box .office-box .big-office { display: block; width: 414px; height: 490px; padding: 12px; }
.home .common-box .office-box .big-office .img-box { position: relative; width: 388px; height: 398px; overflow: hidden; }
.home .common-box .office-box .big-office .img-box img { position: absolute; left: 50%; width: auto; height: 100%; -webkit-transform: translate(-50%,0); transform: translate(-50%,0); }
.home .common-box .office-box .small-office { width: 764px; height: 490px; margin-left: 20px; }
.home .common-box .office-box .small-office .item { width: 240px; height: 240px; padding: 8px; margin-right: 22px; border: 1px solid #eee; float: left; }
.home .common-box .office-box .small-office .item:nth-child(3n+0) { margin-right: 0; }
.home .common-box .office-box .small-office .item .img-box { width: 222px; height: 170px; overflow: hidden; }
.home .common-box .office-box .small-office .item .img-box img { width: 100%; height: 100%; }

.home .mobile-pictures { width: 100%; height: auto; margin-top: 40px; }
.home .mobile-pictures img { display: block; width: 100%; height: auto; }
/*分段*/
.subsection { width: auto; height: 26px; font-size: 0; }
.subsection .subsection-item { display: inline-block; min-width: 40px; height: 26px; line-height: 26px; padding: 0 10px; text-align: center; font-size: 14px; color: #3fabfa; white-space: nowrap; border-top: 1px solid #3fabfa; border-bottom: 1px solid #3fabfa; border-right: 1px solid #3fabfa; cursor: pointer; }
.subsection .subsection-item.active { color: #fff; background-color: #3fabfa; }
.subsection .subsection-item:nth-child(1) { border-left: 1px solid #3fabfa; }
/*列表页*/
.criteria-box { position: relative; margin-bottom: 20px; padding: 20px 0 10px; background-color: #fff; border: 1px solid #eee; }
.criteria-box .subsection { margin: 0 0 6px 100px; }
.criteria-item { width: 100%; min-height: 36px; padding: 0 20px; font-size: 0; }
.criteria-item > span { width: 80px; line-height: 36px; font-size: 14px; color: #333; font-weight: bold; }
.criteria-item > div { width: 1078px; line-height: 36px; }
.criteria-item > div .search-input { width: 276px; height: 36px; border: 1px solid #eee; padding: 4px 8px; font-size: 14px; color: #333; }
.criteria-item > div .search-btn { width: 60px; height: 36px; margin-left: 10px; font-size: 14px; color: #fff; background-color: #3fabfa; border: none; }
.criteria-item > div a { margin-right: 20px; font-size: 14px; color: #333; float: left; }
.criteria-item > div a:hover { color: #3fabfa; }
.criteria-item > div a.active { color: #3fabfa; }
.criteria-item > div .menu { width: 1080px; min-height: 36px; margin-bottom: 10px; padding: 0 10px; border: 1px solid #eee; background-color: #fcfcfc; float: left; }
.criteria-item > div .menu > a { width: 30px; }
.criteria-item > div .menu > div { width: 1008px; }
.criteria-box .tabs { height: 28px; line-height: 28px; padding: 0 20px; margin-bottom: 20px; }
.criteria-box .tabs .tab { height: 100%; margin-right: 30px; font-size: 14px; text-align: center; cursor: pointer; float: left; }
.criteria-box .tabs .tab.active { border-bottom: 2px solid #3fabfa; color: #3fabfa; }
.range { display: block; float: left; }
.range input { width: 100px; height: 26px; padding: 4px 8px; border: 1px solid #eee; font-size: 14px; }
.range button { width: 60px; height: 26px; margin-left: 10px; font-size: 14px; border: none; background-color: #f0f9ff; color: #3fabfa; }
.selectedInfo { min-width: 110px; height: 36px; line-height: 36px; margin: 4px 10px 4px 0; padding: 0 10px; border: 1px solid #ff7d2f; font-size: 14px; color: #333; float: left; }
.selectedInfo span { float: left; }
.selectedInfo .icon { width: 12px; height: 36px; margin-right: 0; margin-left: 6px; cursor: pointer; float: left; }
.empty-selectedInfo { height: 36px; margin-left: 20px; float: left; font-size: 14px; color: #333; }
.empty-selectedInfo > * { vertical-align: middle; }
.empty-selectedInfo .icon { width: 18px; height: 100%; }

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
.search-school-box{
    position: absolute;
    z-index: 10;
    overflow-y: scroll;
    height: 200px;
    font-size: 16px;
    line-height: 2;
    right: 17px;
    top: 62px;
    left: 125px;
}
.search-box .el-input{
    position: relative;
    width: 900px;
    display: inline-block;
    color: #333;
    font-size: 14px;
    float: left;
}
.show-more{
    margin-right: 20px;
    font-size: 14px;
    color: #333;
    float: left;
    color: #0C9DF9;
    cursor: pointer;
}
</style>
