<template>
    <el-container>
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
                    <input name="search" id="search" placeholder="请输入区域、小区名、标题等搜索条件" type="text">
                    <input class="search-btn" value="" type="submit">
                </form>
                <p class="summ-word tcenter f14"><i class="icon news-red-icon"></i><span class="c-333">今日新闻：今日新增房源</span><span class="c-ff5555">256</span><span class="c-333">套，总计271039套，入驻合伙人</span><span class="c-ff5555">23190</span><span class="c-333">人</span></p>
            </div>
            <div class="bottom">
                <div class="category left">
                    <div class="item active" name="1001">租房</div>
                    <div class="item" name="1004">商铺</div>
                    <div class="item" name="1003">写字楼</div>
                </div>
                <div class="criteria-box left" name="1001">
                    <div class="subsection">
                        <span class="subsection-item active" name="area">区域找房</span>
                        <span class="subsection-item" name="metro">地铁找房</span>
                    </div>
                    <div class="criteria-item clearfix" name="area">
                        <span class="left">热门区域</span>
                        <div class="left">
                            <router-link to="" v-for="item in search.area" :key="item.id">{{item.name}}</router-link>
                        </div>
                    </div>
                    <div class="criteria-item clearfix hide" name="metro">
                        <span class="left">地铁</span>
                        <div class="left">
                            <a href="/fang?line=1">1号线</a>
                            <a href="/fang?line=31">2号线</a>
                            <a href="/fang?line=56">3号线</a>
                            <a href="/fang?line=87">4号线</a>
                            <a href="/fang?line=103">5号线</a>
                            <a href="/fang?line=131">7号线</a>
                            <a href="/fang?line=160">9号线</a>
                            <a href="/fang?line=184">11号线</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">租金</span>
                        <div class="left">
                            <a href="/fang?rentstart=&amp;rentend=1000">1000元以下</a>
                            <a href="/fang?rentstart=1000&amp;rentend=2000">1000-2000元</a>
                            <a href="/fang?rentstart=2000&amp;rentend=3000">2000-3000元</a>
                            <a href="/fang?rentstart=3000&amp;rentend=4000">3000-4000元</a>
                            <a href="/fang?rentstart=4000&amp;rentend=5000">4000-5000元</a>
                            <a href="/fang?rentstart=5000&amp;rentend=6000">5000-6000元</a>
                            <a href="/fang?rentstart=6000&amp;rentend=7000">6000-7000元</a>
                            <a href="/fang?rentstart=7000&amp;rentend=8000">7000-8000元</a>
                            <a href="/fang?rentstart=8000&amp;rentend=9000">8000-9000元</a>
                            <a href="/fang?rentstart=9000&amp;rentend=10000">9000-10000元</a>
                            <a href="/fang?rentstart=10000&amp;rentend=">10000元以上</a>
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
                            <a href="/fang?bedroom=1">一室</a>
                            <a href="/fang?bedroom=2">两室</a>
                            <a href="/fang?bedroom=3">三室</a>
                            <a href="/fang?bedroom=4">四室</a>
                            <a href="/fang?bedroom=5">四室以上</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">特色</span>
                        <div class="left">
                            <a href="/fang?characteristic=%E6%8B%8E%E5%8C%85%E5%85%A5%E4%BD%8F">拎包入住</a>
                            <a href="/fang?characteristic=%E9%A6%96%E6%AC%A1%E5%87%BA%E7%A7%9F">首次出租</a>
                            <a href="/fang?characteristic=%E9%87%87%E5%85%89%E5%A5%BD">采光好</a>
                            <a href="/fang?characteristic=%E5%81%9C%E8%BD%A6%E4%BD%8D%E5%A4%9A">停车位多</a>
                            <a href="/fang?characteristic=%E5%9C%B0%E9%93%81%E5%8F%A3%E9%99%84%E8%BF%91">地铁口附近</a>
                            <a href="/fang?characteristic=%E5%95%86%E4%B8%9A%E8%A1%97%E9%99%84%E8%BF%91">商业街附近</a>
                            <a href="/fang?characteristic=%E5%AD%A6%E6%A0%A1%E9%99%84%E8%BF%91">学校附近</a>
                            <a href="/fang?characteristic=%E6%9C%89%E7%94%B5%E6%A2%AF">有电梯</a>
                            <a href="/fang?characteristic=%E6%9C%89%E9%98%B3%E5%8F%B0">有阳台</a>
                            <a href="/fang?characteristic=%E6%9C%89%E8%8A%B1%E5%9B%AD">有花园</a>
                            <a href="/fang?characteristic=%E6%9C%89%E9%98%81%E6%A5%BC">有阁楼</a>
                            <a href="/fang?characteristic=%E6%9C%89%E5%9C%B0%E4%B8%8B%E5%AE%A4">有地下室</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix mb10">
                        <span class="left">装修</span>
                        <div class="left">
                            <a href="/fang?decoration=%E8%B1%AA%E5%8D%8E%E8%A3%85%E4%BF%AE">豪华装修</a>
                            <a href="/fang?decoration=%E4%B8%AD%E7%AD%89%E8%A3%85%E4%BF%AE">中等装修</a>
                            <a href="/fang?decoration=%E6%99%AE%E9%80%9A%E8%A3%85%E4%BF%AE">普通装修</a>
                            <a href="/fang?decoration=%E6%97%A0%E8%A3%85%E4%BF%AE">无装修</a>
                        </div>
                    </div>
                </div>
                <div class="criteria-box left hide" name="1004">
                    <div class="subsection">
                        <span class="subsection-item active" name="area">区域找房</span>
                        <span class="subsection-item" name="metro">地铁找房</span>
                    </div>
                    <div class="criteria-item clearfix" name="area">
                        <span class="left">热门区域</span>
                        <div class="left">
                            <a href="/shop?district=1016">福田</a>
                            <a href="/shop?district=1017">罗湖</a>
                            <a href="/shop?district=1018">南山</a>
                            <a href="/shop?district=1019">盐田</a>
                            <a href="/shop?district=1020">宝安</a>
                            <a href="/shop?district=1021">龙岗</a>
                            <a href="/shop?district=1022">龙华</a>
                            <a href="/shop?district=1023">坪山</a>
                            <a href="/shop?district=1024">光明新区</a>
                            <a href="/shop?district=1025">大鹏新区</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix hide" name="metro">
                        <span class="left">地铁</span>
                        <div class="left">
                            <a href="/shop?line=1">1号线</a>
                            <a href="/shop?line=31">2号线</a>
                            <a href="/shop?line=56">3号线</a>
                            <a href="/shop?line=87">4号线</a>
                            <a href="/shop?line=103">5号线</a>
                            <a href="/shop?line=131">7号线</a>
                            <a href="/shop?line=160">9号线</a>
                            <a href="/shop?line=184">11号线</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">租金</span>
                        <div class="left">
                            <a href="/shop?rentstart=&amp;rentend=2000">2000元/月以下</a>
                            <a href="/shop?rentstart=2000&amp;rentend=5000">2000-5000元/月</a>
                            <a href="/shop?rentstart=5000&amp;rentend=8000">5000-8000元/月</a>
                            <a href="/shop?rentstart=8000&amp;rentend=10000">8000-10000元/月</a>
                            <a href="/shop?rentstart=10000&amp;rentend=20000">10000-20000元/月</a>
                            <a href="/shop?rentstart=20000&amp;rentend=50000">20000-50000元/月</a>
                            <a href="/shop?rentstart=50000&amp;rentend=">50000元/月以上</a>
                            <span class="range middle">
                        <input class="shop-rentstart" type="text" value="">
                        <span class="f14 c-333 ml8">-</span>
                            <input class="ml8 shop-rentend" type="text" value="">
                            <button class="shop-price-btn">确定</button>
                            </span>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">面积</span>
                        <div class="left">
                            <a href="/shop?squarestart=&amp;squareend=20">20㎡以下</a>
                            <a href="/shop?squarestart=20&amp;squareend=50">20-50㎡</a>
                            <a href="/shop?squarestart=50&amp;squareend=80">50-80㎡</a>
                            <a href="/shop?squarestart=80&amp;squareend=120">80-120㎡</a>
                            <a href="/shop?squarestart=120&amp;squareend=200">120-200㎡</a>
                            <a href="/shop?squarestart=200&amp;squareend=500">200-500㎡</a>
                            <a href="/shop?squarestart=500&amp;squareend=">500㎡以上</a>
                            <span class="range middle">
                        <input class="shop-squarestart" type="text" value="">
                        <span class="f14 c-333 ml8">-</span>
                            <input class="shop-squareend ml8" type="text" value="">
                            <button class="shop-square-btn">确定</button>
                            </span>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">类型</span>
                        <div class="left">
                            <a href="/shop?type=%E8%B4%AD%E7%89%A9%E4%B8%AD%E5%BF%83">购物中心</a>
                            <a href="/shop?type=%E7%A4%BE%E5%8C%BA%E5%95%86%E4%B8%9A">社区商业</a>
                            <a href="/shop?type=%E7%BB%BC%E5%90%88%E4%BD%93%E9%85%8D%E5%A5%97">综合体配套</a>
                            <a href="/shop?type=%E5%85%B6%E4%BB%96">其他</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix mb10">
                        <span class="left">特色</span>
                        <div class="left">
                            <a href="/shop?characteristic=%E6%B2%BF%E8%A1%97%E6%97%BA%E9%93%BA">沿街旺铺</a>
                            <a href="/shop?characteristic=%E7%B9%81%E5%8D%8E%E5%9C%B0%E6%AE%B5">繁华地段</a>
                            <a href="/shop?characteristic=%E4%B8%93%E4%B8%9A%E5%B8%82%E5%9C%BA">专业市场</a>
                            <a href="/shop?characteristic=%E4%BD%8F%E5%AE%85%E5%BA%95%E5%95%86">住宅底商</a>
                            <a href="/shop?characteristic=%E7%BB%BC%E5%90%88%E4%BD%93%E9%85%8D%E5%A5%97">综合体配套</a>
                            <a href="/shop?characteristic=%E5%9C%B0%E9%93%81%E5%8F%A3%E9%99%84%E8%BF%91">地铁口附近</a>
                            <a href="/shop?characteristic=%E5%B0%8F%E9%9D%A2%E7%A7%AF">小面积</a>
                            <a href="/shop?characteristic=%E7%8B%AC%E6%A0%8B%E6%95%B4%E5%B1%82">独栋整层</a>
                            <a href="/shop?characteristic=%E7%9F%A5%E5%90%8D%E5%95%86%E6%88%B7%E5%85%A5%E9%A9%BB">知名商户入驻</a>
                            <a href="/shop?characteristic=%E5%8F%AF%E5%88%86%E9%9A%94%E5%8A%9E%E5%85%AC%E5%AE%A4">可分隔办公室</a>
                        </div>
                    </div>
                </div>
                <div class="criteria-box left hide" name="1003">
                    <div class="subsection">
                        <span class="subsection-item active" name="area">区域找房</span>
                        <span class="subsection-item" name="metro">地铁找房</span>
                    </div>
                    <div class="criteria-item clearfix" name="area">
                        <span class="left">热门区域</span>
                        <div class="left">
                            <a href="/office?district=1016">福田</a>
                            <a href="/office?district=1017">罗湖</a>
                            <a href="/office?district=1018">南山</a>
                            <a href="/office?district=1019">盐田</a>
                            <a href="/office?district=1020">宝安</a>
                            <a href="/office?district=1021">龙岗</a>
                            <a href="/office?district=1022">龙华</a>
                            <a href="/office?district=1023">坪山</a>
                            <a href="/office?district=1024">光明新区</a>
                            <a href="/office?district=1025">大鹏新区</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix hide" name="metro">
                        <span class="left">地铁</span>
                        <div class="left">
                            <a href="/office?line=1">1号线</a>
                            <a href="/office?line=31">2号线</a>
                            <a href="/office?line=56">3号线</a>
                            <a href="/office?line=87">4号线</a>
                            <a href="/office?line=103">5号线</a>
                            <a href="/office?line=131">7号线</a>
                            <a href="/office?line=160">9号线</a>
                            <a href="/office?line=184">11号线</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">租金</span>
                        <div class="left">
                            <a href="/office?rentstart=&amp;rentend=40">40元/㎡⋅月以下</a>
                            <a href="/office?rentstart=40&amp;rentend=60">40-60元/㎡⋅月</a>
                            <a href="/office?rentstart=60&amp;rentend=80">60-80元/㎡⋅月</a>
                            <a href="/office?rentstart=80&amp;rentend=100">80-100元/㎡⋅月</a>
                            <a href="/office?rentstart=100&amp;rentend=120">100-120元/㎡⋅月</a>
                            <a href="/office?rentstart=120&amp;rentend=140">120-140元/㎡⋅月</a>
                            <a href="/office?rentstart=140&amp;rentend=">140元/㎡⋅月以上</a>
                            <span class="range middle">
                        <input class="office-rentstart" type="text" value="">
                        <span class="f14 c-333 ml8">-</span>
                            <input class="ml8 office-rentend" type="text" value="">
                            <button class="office-price-btn">确定</button>
                            </span>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">面积</span>
                        <div class="left">
                            <a href="/office?squarestart=&amp;squareend=80">80㎡以下</a>
                            <a href="/office?squarestart=80&amp;squareend=120">80-120㎡</a>
                            <a href="/office?squarestart=120&amp;squareend=150">120-150㎡</a>
                            <a href="/office?squarestart=150&amp;squareend=200">150-200㎡</a>
                            <a href="/office?squarestart=200&amp;squareend=300">200-300㎡</a>
                            <a href="/office?squarestart=300&amp;squareend=400">300-400㎡</a>
                            <a href="/office?squarestart=400&amp;squareend=500">400-500㎡</a>
                            <a href="/office?squarestart=500&amp;squareend=800">500-800㎡</a>
                            <a href="/office?squarestart=800&amp;squareend=1200">800-1200㎡</a>
                            <a href="/office?squarestart=1200&amp;squareend=2000">1200-2000㎡</a>
                            <a href="/office?squarestart=2000&amp;squareend=">2000㎡以上</a>
                            <span class="range middle">
                        <input class="office-squarestart" type="text" value="">
                        <span class="f14 c-333 ml8">-</span>
                            <input class="office-squareend ml8" type="text" value="">
                            <button class="office-square-btn">确定</button>
                            </span>
                        </div>
                    </div>
                    <div class="criteria-item clearfix">
                        <span class="left">类型</span>
                        <div class="left">
                            <a href="/office?type=%E7%BA%AF%E5%86%99%E5%AD%97%E6%A5%BC">纯写字楼</a>
                            <a href="/office?type=%E5%95%86%E4%B8%9A%E7%BB%BC%E5%90%88%E4%BD%93">商业综合体</a>
                            <a href="/office?type=%E5%95%86%E4%BD%8F%E4%B8%A4%E7%94%A8%E6%A5%BC">商住两用楼</a>
                            <a href="/office?type=%E5%85%B6%E4%BB%96">其他</a>
                        </div>
                    </div>
                    <div class="criteria-item clearfix mb10">
                        <span class="left">特色</span>
                        <div class="left">
                            <a href="/office?characteristic=%E6%A0%87%E5%BF%97%E6%80%A7%E5%BB%BA%E7%AD%91">标志性建筑</a>
                            <a href="/office?characteristic=5A%E7%94%B2%E7%BA%A7">5A甲级</a>
                            <a href="/office?characteristic=%E5%90%8D%E4%BC%81%E5%85%A5%E9%A9%BB">名企入驻</a>
                            <a href="/office?characteristic=%E5%9C%B0%E9%93%81%E5%8F%A3%E9%99%84%E8%BF%91">地铁口附近</a>
                            <a href="/office?characteristic=%E7%94%B5%E6%A2%AF%E5%8F%A3">电梯口</a>
                            <a href="/office?characteristic=%E5%95%86%E4%B8%9A%E8%A1%97%E9%99%84%E8%BF%91">商业街附近</a>
                            <a href="/office?characteristic=%E6%95%B4%E5%B1%82%E6%95%B4%E6%A0%8B">整层整栋</a>
                            <a href="/office?characteristic=%E5%B0%8F%E9%9D%A2%E7%A7%AF">小面积</a>
                            <a href="/office?characteristic=%E5%81%9C%E8%BD%A6%E4%BD%8D%E5%A4%9A">停车位多</a>
                            <a href="/office?characteristic=%E5%8F%AF%E6%B3%A8%E5%86%8C%E5%85%AC%E5%8F%B8">可注册公司</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
      search: {
        area: [
          { id: 1, name: '福田' },
          { id: 2, name: '罗湖' },
          { id: 3, name: '南山' },
          { id: 4, name: '宝安' },
          { id: 5, name: '龙华' },
          { id: 6, name: '龙岗' }
        ]
      }
    }
  }
}
</script>

<style>
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
</style>
