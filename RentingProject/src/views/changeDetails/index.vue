<template>
    <div class="main details-box">
        <div class="tit-box clearfix">
            <div class="bold title left twoEllipsis">
                <el-input v-model="houseDetail.housename" placeholder="房屋标题" style="width: 500px; margin-right: 10px;"></el-input>
            </div>
            <div class="btns left f0 middle">
                <span class="follow">关注房源</span>
                <span class="yuyue">预约看房</span>
                <span class="online"><a href="/video" target="_blank">在线看房</a></span>
            </div>
            <div class="left share-fang">
                <span class="middle"><i class="icon share-gray-icon"></i><span class="f14 c-666">分享此房源</span></span>
                <div class="share-fang-box">
                    <img class="zoomify bb-eee" src="/fang/qrcode?sn=101968&amp;t=">
                    <p class="share-fang-link f14 c-3fabfa tcenter ptb12 line-h1" data-clipboard-text="https://www.zuke.com/fang/101968.html?t=">一键复制链接分享</p>
                </div>
            </div>
            <input type="hidden" name="sn" id="sn" value="101968">
        </div>
        <div class="main-info clearfix">
            <div class="carousel clearfix left">
                <div class="swiper-slide swiper-slide-active" style="width: 100%;"><img class="zooming-switch" :src="houseDetail.picture" alt=""></div>
            </div>
            <div class="info left">
                <p class="c-ff5555 line-h1"><span class="f26 bold"><el-input v-model="houseDetail.price" placeholder="价格" size="mini" style="width: 120px; margin-right: 10px;"></el-input></span><span class="f18">元/月</span></p>
                <div class="detail-room">
                    <p>
                        <span class="f14"><span class="c-999">面积：</span><span class="c-333"><el-input v-model="houseDetail.area" placeholder="面积" size="mini" style="width: 50px; margin-right: 10px"></el-input></span>㎡</span>
                        <span class="f14"><span class="c-999">户型：</span><span class="c-333">
                            <el-select v-model="houseDetail.apartment" placeholder="请选择户型" size="mini" style="width: 120px;">
                                <el-option
                                v-for="item in apartmentOptions"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </span></span>
                    </p>
                    <p>
                        <span class="f14"><span class="c-999">方式：</span><span class="c-333">
                            <el-select v-model="houseDetail.pay" placeholder="请选择方式" size="mini" style="width: 100px;">
                                <el-option
                                v-for="item in payOptions"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </span></span>
                        <span class="f14"><span class="c-999">入住时间：</span><span class="c-333">
                            <el-date-picker v-model="houseDetail.date" type="date" placeholder="入住时间" size="mini" style="width: 150px;"></el-date-picker>
                        </span></span>
                    </p>
                    <p>
                        <span class="f14"><span class="c-999">楼层：</span><span class="c-333"><el-input v-model="houseDetail.floor" placeholder="楼层" size="mini" style="width: 50px; margin-right: 10px;"></el-input>层 </span></span>
                    </p>
                    <p>
                        <span class="f14"><span class="c-999">编号：</span><span class="c-333"><el-input v-model="houseDetail.housenumber" placeholder="编号" size="mini" style="width: 100px;"></el-input></span></span>
                        <span class="f14"><span class="c-999">区域：</span><span class="c-333"><el-input v-model="houseDetail.region" placeholder="区域：" size="mini" style="width: 150px;"></el-input></span></span>
                    </p>
                    <div class="addr f14 clearfix"><span class="c-999 left">地址：</span><span class="c-333 left"><el-input v-model="houseDetail.address" placeholder="地址" size="mini" style="width: 200px;"></el-input></span></div>
                </div>
                <p class="fang-notes clearfix">
                    <span class="fang-note list-note-type9"><el-input v-model="houseDetail.describe" placeholder="描述" size="mini" style="width: 300px; margin-right: 10px;"></el-input></span>
                </p>
                <p class="f16 c-333 bold mb10 mt6">发布人</p>
                <div class="fabu-man clearfix">
                    <div class="fabu-avatar radiusHalf left"><img src="https://img2.zuke.com/avatar/101/03.jpg" alt=""></div>
                    <div class="left ml12">
                        <p class="mt4 f18 c-333"><el-input v-model="houseDetail.name" placeholder="出租人姓名" size="mini" style="width: 120px; margin-right: 10px;"></el-input></p>
                    </div>
                </div>
                <div class="customer-hot-line middle">
                    <span class="f16 c-333">咨询热线：</span>
                    <span class="f16 c-ff5555"><el-input v-model="houseDetail.phonenumber" placeholder="电话号码" size="mini" style="width: 120px; margin-right: 10px;"></el-input></span>
                </div>
                <div class="important-tip clearfix">
                    <div class="left tit">
                        <i class="icon dangle-triangle-icon"></i>
                        <p class="f14 c-ff5555 tcenter">重要提示</p>
                    </div>
                    <p class="left f14 desc">
                        <span class="c-333">签约前</span>
                        <span class="c-ff5555">切勿支付</span>
                        <span class="c-333">任何费用！务必</span>
                        <span class="c-ff5555">实地看房，</span>
                        <span class="c-333">查验房东和房屋证件！</span>
                    </p>
                </div>
            </div>
        </div>
        <p class="f16 c-333 bold mtb20 plr20">配套设施</p>
        <div class="supporting-box clearfix">
            <!-- 不具备的加个not-have -->
            <div class="supporting-item not-have">
                <div class="supporting-icon telev-icon"></div>
                <p>电视</p>
            </div>
            <div class="supporting-item">
                <div class="supporting-icon fridge-icon"></div>
                <p>冰箱</p>
            </div>
            <div class="supporting-item not-have">
                <div class="supporting-icon washer-icon"></div>
                <p>洗衣机</p>
            </div>
            <div class="supporting-item">
                <div class="supporting-icon heater-icon"></div>
                <p>热水器</p>
            </div>
            <div class="supporting-item">
                <div class="supporting-icon aircond-icon"></div>
                <p>空调</p>
            </div>
            <div class="supporting-item">
                <div class="supporting-icon bed-icon"></div>
                <p>床</p>
            </div>
            <div class="supporting-item">
                <div class="supporting-icon wardrobe-icon"></div>
                <p>衣柜</p>
            </div>
            <div class="supporting-item not-have">
                <div class="supporting-icon sofa-icon"></div>
                <p>沙发</p>
            </div>
            <div class="supporting-item">
                <div class="supporting-icon broadband-icon"></div>
                <p>宽带</p>
            </div>
        </div>
        <p class="f16 c-333 bold mtb20 plr20">房源描述</p>
        <div class="plr20 c-333 f14"><el-input v-model="houseDetail.describe" placeholder="描述" size="mini" style="width: 100%; margin-right: 10px;"></el-input></div>
        <p class="f16 c-333 bold mtb20 plr20">图片观看</p>
        <div class="pic-big-list mtb20 plr20">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="zooming-switch" src="https://img2.zuke.com/u/1001319/2018103115370338238_600_432.jpg" data-src="https://img2.zuke.com/u/1001319/2018103115370338238.jpg" alt=""></div>
                <div class="swiper-slide"><img class="zooming-switch" src="https://img2.zuke.com/u/1001319/2018103115370967780_600_432.jpg" data-src="https://img2.zuke.com/u/1001319/2018103115370967780.jpg" alt=""></div>
                <div class="swiper-slide"><img class="zooming-switch" src="https://img2.zuke.com/u/1001319/2018103115371486956_600_432.jpg" data-src="https://img2.zuke.com/u/1001319/2018103115371486956.jpg" alt=""></div>
                <div class="swiper-slide"><img class="zooming-switch" src="https://img2.zuke.com/u/1001319/2018103115371949464_600_432.jpg" data-src="https://img2.zuke.com/u/1001319/2018103115371949464.jpg" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      houseDetail: {
        housenumber: 3,
        housename: '新秀地铁站附近 芳春花园小区',
        picture: 'https://img2.zuke.com/u/1338011/2018121014243197847_220_158.jpg',
        area: '15',
        apartment: '1室0厅1卫',
        price: '1200',
        address: '芳春花园',
        date: '12-10',
        describe: '拎包入住 采光好 地铁口附近 商业街附近 学校附近 有阳台 有花园',
        region: '黄贝岭-芳春花园',
        floor: '1/8',
        pay: '押二月付',
        name: '高先生',
        phonenumber: '18865925412'
      },
      apartmentOptions: [
        { value: '1室1厅1卫' },
        { value: '1室2厅1卫' },
        { value: '1室3厅1卫' },
        { value: '1室4厅2卫' }
      ],
      payOptions: [
        { value: '押二付一' },
        { value: '押一付一' }
      ]
    }
  }
}
</script>

<style>
/*详情*/
.details-box { margin-bottom: 30px; background-color: #fff; border: 1px solid #eee; }
.details-box .tit-box { padding: 20px 0; }
.details-box .tit-box .title { width: 780px; padding: 0 20px; font-size: 22px; color: #333; }
.details-box .tit-box .title > .ziying-icon { width: 41px; height: 21px; margin-right: 8px; }
.details-box .tit-box .btns { width: 300px; padding: 0 10px; }
.details-box .tit-box .btns span { display: inline-block; width: 86px; height: 30px; line-height: 30px; font-size: 14px; text-align: center; cursor: pointer; margin-right: 10px; }
.details-box .tit-box .btns span:last-child { margin-right: 0; }
.details-box .tit-box .btns span.follow { border: 1px solid #3fabfa; color: #333; }
.details-box .tit-box .btns span.yuyue { background-color: #3fabfa; color: #fff; }
.details-box .tit-box .btns span.online > a { background-color: #ff5555; color: #fff; }
.details-box .tit-box .btns span > a { display: block; width: 100%; height: 100%; }
.details-box .tit-box .share-fang { position: relative; height: 30px; line-height: 30px; cursor: pointer; }
.details-box .tit-box .share-fang .icon { width: 14px; height: 12px; margin-right: 6px; }
.details-box .tit-box .share-fang:hover .share-fang-box { display: block; }
.details-box .tit-box .share-fang .share-fang-box { display: none; position: absolute; left: -50px; top: 30px; width: 150px; height: 176px; padding: 16px 18px; border: 1px solid #eee; background-color: #fff; box-shadow: 0 0 12px #f2f2f2; }
.details-box .tit-box .share-fang .share-fang-box img { display: block; width: 110px; height: 120px; padding-bottom: 10px; }

.details-box .carousel { width: 780px; height: 480px; }
.details-box .carousel .view .swiper-container { width: 600px; height: 438px; margin-right: 10px; }
.details-box .carousel .view .swiper-container img { width: 100%; height: 100%; cursor: pointer; }
.details-box .carousel .preview { position: relative; height: 438px; padding: 36px 0; }
.details-box .carousel .preview .swiper-container { width: 156px; height: 366px; }
.details-box .carousel .preview .swiper-slide { width: 100%; height: 114px; margin-bottom: 10px; border: 2px solid #fff; cursor: pointer; }
.details-box .carousel .preview .swiper-slide:last-child { margin-bottom: 0; }
.details-box .carousel .preview .swiper-slide img { width: 100%; height: 100%; }
.details-box .carousel .preview .swiper-slide.active-nav { border: 2px solid #3fabfa; }
.details-box .carousel .preview .arrow-left,
.details-box .carousel .preview .arrow-right { position: absolute; display: block; width: 100%; height: 26px; }
.details-box .carousel .preview .arrow-left { top: 0; left: 0; margin-bottom: 10px; background: url(../../assets/img/preview-top.png) no-repeat left top; }
.details-box .carousel .preview .arrow-right { bottom: 0; left: 0; background: url(../../assets/img/preview-bottom.png) no-repeat left bottom; }
.details-box .carousel .real-housing-details-icon { width: 72px; height: 28px; }
.details-box .carousel .free-deposit-icon { width: 72px; height: 28px; }

.details-box .info { width: 418px; min-height: 438px; padding: 0 20px; }
.details-box .info .partner-operate { display: inline-block; width: 88px; height: 28px; padding: 0 8px; line-height: 28px; margin-left: 60px; text-align: right; background-color: #fff; background-size: 16px 15px; background-repeat: no-repeat; background-position: 8px center; cursor: pointer; }
.details-box .info .partner-operate.add { border: 1px solid #3fabfa; color: #3fabfa; background-image: url(../../assets/img/partner-add-icon.png); }
.details-box .info .partner-operate.del { border: 1px solid #999; color: #999; background-image: url(../../assets/img/partner-del-icon.png); }
.details-box .info .detail-room { margin: 24px 0 0; }
.details-box .info .detail-room > p { font-size: 0; margin-bottom: 12px; }
.details-box .info .detail-room > p > * { vertical-align: top; }
.details-box .info .detail-room > p > span { display: inline-block; min-width: 150px; max-width: 220px; }
.details-box .info .detail-room .addr { margin-bottom: 12px; }
.details-box .info .detail-room .addr > span:last-child { width: 300px; }
.details-box .info .fang-notes { margin: 14px 0 0; }
.details-box .info .fang-notes .fang-note { margin-bottom: 10px; }
.details-box .info .customer-hot-line { margin-top: 12px; padding: 15px; background-color: #f2f2f2; }
/* .details-box .info .customer-hot-line .call-meiqia { display: inline-block; width: 96px; height: 32px; line-height: 32px; padding-right: 8px; margin-left: 20px; font-size: 14px; color: #fff; text-align: right; background: #3fabfa url(../../assets/img/kefu-white-icon.png) 8px center / auto 54% no-repeat; cursor: pointer; } */
.details-box .info .important-tip { width: 100%; height: 60px; margin-top: 10px; border: 1px solid #ff5555; background-color: #fff4f4; }
.details-box .info .important-tip .tit { width: 80px; height: 60px; padding: 8px 0; }
.details-box .info .important-tip .tit i { display: block; width: 22px; height: 22px; margin: 0 auto; }
.details-box .info .important-tip .desc { width: 280px; height: 34px; margin-left: 10px; padding: 8px 0; }

/*周边配套地图*/
.periphery-box { width: 100%; height: 400px; }
.periphery-box .map { width: 760px; height: 100%; }
.periphery-box .map-list { width: 438px; }
.periphery-box .list-top { width: 100%; height: 56px; background-color: #f1f1f1; }
.periphery-box .list-top .list-item { width: 62px;height: 100%; line-height: 56px; font-size: 14px; color: #333; text-align: center; background-color: #f1f1f1; float: left; cursor: pointer; }
.periphery-box .list-top .list-item.active { color: #3fabfa; background-color: #fff; }
.periphery-box .list-content { width: 100%; height: 344px; overflow-y: scroll; }
.periphery-box .list-content .list-item { width: 358px; min-height: 75px; padding: 18px 0; margin: 0 40px; border-bottom: 1px solid #eee; }
.periphery-box .list-content .list-item i { width: 26px; height: 36px; line-height: 32px; font-size: 14px; color: #fff; text-align: center; font-style: normal; background: url(../../assets/img/location-solid-red.png) center center / 100% no-repeat; }
.periphery-box .list-content .item-middle { width: 250px; }

.fabu-man { height: 60px; }
.fabu-man .fabu-avatar { width: 60px; height: 60px; }
.fabu-man .fabu-avatar img { width: 100%; height: 100%; }

.achv { min-height: 60px; text-align: center; }
.achv .achv-item { width: 126px; height: 60px; padding: 10px 0; float: left; }

.details-box .supporting-box { height: 70px; padding: 0 30px; }
.details-box .supporting-box .supporting-item { width: 50px; height: 70px; margin-right: 60px; float: left; }
.details-box .supporting-box .supporting-item:last-child { margin-right: 0; }
.details-box .supporting-box .supporting-item .supporting-icon { width: 50px; height: 38px; background-size: auto 100%; background-position: center center; background-repeat: no-repeat; }
.details-box .supporting-box .supporting-item p { margin-top: 4px; font-size: 14px; text-align: center; color: #333; }
.details-box .supporting-box .supporting-item.not-have p { color: #999; text-decoration: line-through; }

/*床*/
.bed-icon { background-image: url(../../assets/img/bed-icon.png); }
.not-have .bed-icon { background-image: url(../../assets/img/bed-fine-icon.png); }
/*沙发*/
.sofa-icon { background-image: url(../../assets/img/sofa-icon.png); }
.not-have .sofa-icon { background-image: url(../../assets/img/sofa-fine-icon.png); }
/*冰箱*/
.fridge-icon { background-image: url(../../assets/img/fridge-icon.png); }
.not-have .fridge-icon { background-image: url(../../assets/img/fridge-fine-icon.png); }
/*空调*/
.aircond-icon { background-image: url(../../assets/img/aircond-icon.png); }
.not-have .aircond-icon { background-image: url(../../assets/img/aircond-fine-icon.png); }
/*电视机*/
.telev-icon { background-image: url(../../assets/img/telev-icon.png); }
.not-have .telev-icon { background-image: url(../../assets/img/telev-fine-icon.png); }
/*热水器*/
.heater-icon { background-image: url(../../assets/img/heater-icon.png); }
.not-have .heater-icon { background-image: url(../../assets/img/heater-fine-icon.png); }
/*洗衣机*/
.washer-icon { background-image: url(../../assets/img/washer-icon.png); }
.not-have .washer-icon { background-image: url(../../assets/img/washer-fine-icon.png); }
/*衣柜*/
.wardrobe-icon { background-image: url(../../assets/img/wardrobe-icon.png); }
.not-have .wardrobe-icon { background-image: url(../../assets/img/wardrobe-fine-icon.png); }
/*宽带*/
.broadband-icon { background-image: url(../../assets/img/broadband-icon.png); }
.not-have .broadband-icon { background-image: url(../../assets/img/broadband-fine-icon.png); }

.details-box .xq-info { min-height: 194px; }
.details-box .xq-info .xq-img { width: 270px; height: 194px; }
.details-box .xq-info .xq-img img { width: 100%; height: 100%; }
.details-box .xq-info .xq-details { width: 850px; height: 100%; margin-left: 20px; }

.details-box .xq-info .detail-room { margin: 16px 0 0; }
.details-box .xq-info .detail-room > p { font-size: 0; margin-bottom: 12px; }
.details-box .xq-info .detail-room > p > span { display: inline-block; width: 228px; }
.details-box .xq-info .detail-room div > span:last-child { width: 780px; }

.rcmd-box { min-height: 230px; }
.rcmd-box .rcmd-item { display: inline-block; width: 234px; height: 100%; margin-right: 50px; float: left; }
.rcmd-box .rcmd-item:first-child { margin-left: 36px; }
.rcmd-box .rcmd-item:last-child { margin-right: 0; }
.rcmd-box .rcmd-item .rcmd-img { width: 234px; height: 170px; }
.rcmd-box .rcmd-item .rcmd-img img { width: 100%; height: 100%; }
.twoEllipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.swiper-slide-active{ 
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0 20px;
}
.swiper-slide-active img{ 
    width: 100%;
}
.pic-big-list .swiper-slide{
    width: 100%;
}
.pic-big-list .swiper-slide img{
    width: 100%;
}
</style>
