<template>
    <div>
        <div class="main member-top">
            <div class="tab-content clearfix">
                <div class="member-info-box clearfix left">
                    <div class="member-avatar radiusHalf left">
                        <img src="https://img2.zuke.com/avatar/101/13.jpg" alt="">
                    </div>
                    <div class="member-info left">
                        <p class="f18 c-333 mt6 mb6">晚上好，1002445</p>
                        <p class="f12 c-333 mb10">会员编号：1002445</p>
                        <div class="f12 c-ff7d2f" @click="changeMyInfo">修改信息</div>
                    </div>
                </div>
                <div class="num tcenter left">
                    <p class="f26 c-ff7d2f">1000</p>
                    <p class="f14 c-999">积分(分)</p>
                </div>
                <div class="num tcenter left">
                    <p class="f26 c-ff7d2f">0</p>
                    <p class="f14 c-999">租金券(张)</p>
                </div>
            </div>
        </div>
        <div class="member-right main">
            <div class="member-rt clearfix">
                <div class="tabs clearfix left">
                    <a href="/member/like/fang" class="tab active">预约的房源</a>
                </div>
            </div>
            <table class="member-table">
                <thead>
                    <tr>
                        <th class="tleft">房屋信息</th>
                        <th>价格</th>
                        <th>状态</th>
                        <th>预约时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in houseList" :key="item.housenumber">
                        <td class="house-info-td">
                            <router-link :to="'/details/'+item.houseId" target="_blank" class="clearfix">
                                <div class="house-img left">
                                    <img :src="item.picture">
                                </div>
                                <div class="house-info left">
                                    <p class="f16 bold c-333 twoEllipsis">{{item.houseName}}</p>
                                    <p class="f14 c-666">{{item.area}}㎡ / {{item.apartment}}</p>
                                </div>
                            </router-link>
                        </td>
                        <td class="rent-td">
                            <p class="tcenter f14 c-ff5555">{{item.price}}元/月</p>
                        </td>
                        <td class="num-td">
                            <p class="tcenter f14 c-333">可租</p></td>
                        <td class="time-td tcenter">
                            <p class="c-333 f14">{{item.createTime}}</p>
                        </td>
                        <td class="tcenter">
                            <p class="del f14 c-3fabfa cursor-pointer" data-id="835">删除</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="hidden" name="type" id="type" value="fang">
            <ul class="page"><li><a href="https://zuke.com/member/like/fang?page=1" class="first">首页</a></li><li><a href="https://zuke.com/member/like/fang?page=1" class="previous">上一页</a></li><li><a href="javascript:;" class="item active">1</a></li><li><a href="https://zuke.com/member/like/fang?page=1" class="next">下一页</a></li><li><a href="https://zuke.com/member/like/fang?page=1" class="last">末页</a></li></ul>        
        </div>
        <dialog-panel ref="dialogPanel"/>
    </div>
</template>
<script>
import DialogPanel from './DialogPanel'
import { getOrderRoom } from '@/api/renting'
import { formatDate } from '@/utils/validate.js'

export default {
  data() {
    return {
      houseList: [
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
    this.getOrderRoom()
  },
  components: {
    DialogPanel
  },
  methods: {
    changeMyInfo() {
      this.$refs.dialogPanel.show()
    },
    getOrderRoom() {
      console.log(this.$store.state)
      const info = {
        page: 1,
        pageSize: 25,
        role: 0,
        userId: this.$store.state.user.user.id
      }
      getOrderRoom(info).then(result => {
        this.houseList = result.list
        this.houseList.forEach(element => {
          element.createTime = formatDate(new Date(element.createTime), 'yyyy-MM-dd')
        })
      })
    }
  }
}
</script>

<style>
/*会员中心*/
/*顶部*/
.member-top { margin-bottom: 10px; }
.member-top .member-tabs { width: 301px; height: 30px; padding-left: 1px; background-color: #eee; overflow: hidden; }
.member-top .member-tabs .tab { width: 100px; height: 29px; line-height: 29px; margin-top: 1px; background-color: #eee; color: #666; font-size: 16px; text-align: center; float: left; }
.member-top .member-tabs .tab.active { background-color: #fff; color: #3fabfa; }
/* .member-top .tab-content { position: relative; height: 121px; border: 1px solid #eee; margin-top: -1px; background: url(../../images/member-top-bg.png) center center / 100% 100% no-repeat; } */
.member-top .tab-content .member-info-box { width: 340px; margin: 20px; }
.member-top .tab-content .member-info-box .member-avatar { width: 80px; height: 80px; margin-right: 20px; }
.member-top .tab-content .member-info-box .member-avatar img { width: 100%; height: 100%; }
.member-top .tab-content .member-info-box .member-info { position: relative; }
.member-top .tab-content .member-info-box .member-info p > * { vertical-align: middle; }
.member-top .tab-content .member-info-box .member-info p i { width: 24px; height: 24px; margin-right: 8px; }
.member-top .tab-content .num { width: 145px; margin-top: 24px; }
.member-top .tab-content .num p:first-child { margin-bottom: 10px; }
.member-top .tab-content .order-num { margin: 14px 0 0 45px; }
.member-top .tab-content .order-num p { margin-bottom: 6px; }
/*合伙人顶部*/
.member-top .tab-content .member-info-box .member-info { position: relative; }
.member-top .tab-content .member-info-box .member-info .upgrade { position: absolute; left: 110px; bottom: -20px; white-space: nowrap; }
.member-top .tab-content .member-info-box .member-info .upgrade .see-upgrade { display: block; width: 6em; height: 24px; line-height: 24px; margin-top: 2px; text-align: center; font-size: 10px; background-color: #ff5555; color: #fff; border-radius: 24px; }

/*分享赚钱*/
.member-top .share-money { width: 190px; height: 110px; margin: 4px 0 0 50px; }
.member-top .share-money .share-box { width: 90px; height: 110px; }
.member-top .share-money .share-box img { display: block; width: 90px; height: 90px; }
.member-top .share-money .share-box p { cursor: pointer; }
/* .member-top .share-money .member-top-share-icon { width: 90px; height: 60px; background: url(../../images/member-top-share-icon.png) center center / 100% 100% no-repeat; } */
/*右边*/
.member-right { min-height: 600px; margin-bottom: 30px; padding: 0 20px 90px; border: 1px solid #eee; background-color: #fff; }
.member-right .col-f9f9f9 { height: 30px; width: 1010px; margin-left: -21px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #f9f9f9; }
.edit-big-tit .phone-blue-icon { width: 18px; height: 18px; }

.member-table { width: 100%; }
.member-table thead { width: 100%; background-color: #f7f7f7; font-size: 14px; color: #333; }
.member-table thead tr th { height: 28px; font-weight: normal; }
.member-table thead tr th.tleft { text-align: left; text-indent: 8px; }
.member-table tbody tr { border-bottom: 1px solid #eee; }
.member-home .member-table tbody tr { border-bottom: none; }

.member-table .house-info-td { width: 410px; padding: 10px 0; }
.member-table .house-info-td .house-img { width: 140px; height: 100px; margin-right: 8px; }
.member-table .house-info-td .house-img img { width: 100%; height: 100%; }
.member-table .house-info-td .house-info { width: -webkit-calc(100% - 148px); width: calc(100% - 148px); }
.member-table .house-info-td .house-info p:last-child { margin-top: 16px; }
.member-table .rent-td { width: 116px; }
.member-table .num-td { width: 86px; }
.member-table .rent-time-td { width: 154px; }
.member-table .next-rent-time-td { width: 90px; }

.member-right .edit-tit { margin: 10px 0; font-size: 16px; }
.member-right .edit-tit span { margin-right: 6px; }
.member-right .house-box { width: 100%; min-height: 204px; }
.member-right .house-box .house-item { width: 177px; height: 204px; margin: 0 20px 10px 0; float: left; -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2); -moz-box-shadow: 0 2px 4px rgba(0,0,0,0.2); -o-box-shadow: 0 2px 4px rgba(0,0,0,0.2); box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.member-right .house-box .house-item:last-child { margin-right: 0; }
.member-right .house-box .house-item .img-box { width: 100%; height: 130px; }
.member-right .house-box .house-item .img-box img { width: 100%; height: 100%; }
.member-right .house-box .house-item .info-box { width: 100%; height: 74px; padding: 6px 8px; }
.member-right .house-box .house-item .info-box > p:first-child { margin-bottom: 4px; height: 39px; overflow-y: hidden; }

.member-right .not-content { margin: 14px 0 24px; }
.member-right .not-content > p:first-child { margin-bottom: 4px; }

.member-right .member-rt { width: 100%; height: 30px; margin: 10px 0 24px; }
.member-right .member-rt .tabs { height: 28px; line-height: 28px; }
.member-right .member-rt .tabs .tab { height: 100%; margin-right: 30px; font-size: 14px; text-align: center; cursor: pointer; float: left; }
.member-right .member-rt .tabs .tab.active { border-bottom: 2px solid #3fabfa; color: #3fabfa; }
.member-right .member-rt .input-box { margin-top: 2px; border-radius: 4px; overflow: hidden; }
.member-right .member-rt .input-box > * { vertical-align: top; }
.member-right .member-rt .input-box input { width: 168px; height: 26px; padding: 0 6px; border: 1px solid #ddd; font-size: 12px; }
.member-right .member-rt .input-box button { height: 26px; width: 48px; margin-left: -1px; background-color: #3fabfa; color: #fff; font-size: 14px; border: none; cursor: pointer; }
.member-right .member-rt .fabu-contract { position: relative; width: 112px; height: 26px; margin-top: 2px; cursor: pointer; background: url(../../assets/img/contract-fabu-icon.png) left center / auto 100% no-repeat; }
.member-right .member-rt .fabu-contract span { display: block; width: 74px; height: 26px; line-height: 26px; font-size: 14px; color: #fff; text-align: center; background-color: #47d38f; }

.member-right .member-rt .fabu-contract-box { display: none; position: absolute; left: 50%; bottom: -162px; width: 160px; height: 150px; margin-left: -86px; padding: 14px 10px; background-color: #fff; -webkit-box-shadow: 0 0 10px #ddd; -moz-box-shadow: 0 0 10px #ddd; -o-box-shadow: 0 0 10px #ddd; box-shadow: 0 0 10px #ddd; -webkit-border-radius: 10px; -moz-border-radius: 10px; -o-border-radius: 10px; border-radius: 10px; z-index: 1; }
.member-right .member-rt .fabu-contract-box:after { content: ""; position: absolute; left: 50%; top: -18px; width: 0; height: 0; margin-left: -9px; border-style: solid; border-width: 9px; border-color:transparent transparent #fff transparent; }
.member-right .member-rt .fabu-contract-box:before { content: ''; position: absolute; left: 50%; top: -9px; margin-left: -7px; border-left: 7px solid transparent; border-right: 7px solid transparent; border-bottom: 6px solid #aaa; filter: blur(2px); }
.member-right .member-rt .fabu-contract-box a { display: block; margin-bottom: 14px; font-size: 14px; color: #333; text-align: center; }
.member-right .member-rt .fabu-contract-box a:hover { color: #3fabfa; }
</style>
