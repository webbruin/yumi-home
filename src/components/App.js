'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import '../vendor/home';


var App = React.createClass({
    render: function() {
        return (
            <div>

              <header>
                <div className="header_bar">
                  <ul className="header_left">
                    <li className="web">
                      <img src="src/images/shyumi/header1.png" alt=""/>
                      <span>移动客户端</span>
                      <div className="ios_android">
                        <div><img src="src/images/shyumi/IOS.png" alt=""/><span>IOS App下载</span></div>
                        <div><img src="src/images/shyumi/Android.png" alt=""/><span>Android App下载</span></div>
                      </div>
                    </li>
                    <li className="wire"><img src="src/images/shyumi/header5.png" alt=""/></li>
                    <li className="share">
                      <img className="weixin" src="src/images/shyumi/header2.png" alt=""/>
                      <div className="WeChat">
                        <div><img src="src/images/shyumi/WeChat.png" alt=""/><span>微信服务号</span></div>
                      </div>
                      <img src="src/images/shyumi/header3.png" alt=""/>
                    </li>
                    <li className="wire"><img src="src/images/shyumi/header5.png" alt=""/></li>
                    <li className="phone">
                      <img src="src/images/shyumi/header4.png" alt=""/>
                      <span>客服电话：400-990-7622</span>
                    </li>
                  </ul>
                  <ul className="header_right">
                    <li>您好，欢迎来到鱼米金服！</li>
                    <li>请<a href="#" className="login">登录</a> <a href="#" className="reg">注册</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">帮助中心</a></li>
                  </ul>
                </div>
              </header>

              <nav>
                <div className="nav_bar">
                  <ul className="nav_left">
                    <li><a href="#"><img src="src/images/shyumi/nav1.png" alt=""/></a></li>
                    <li><a href="#"><img src="src/images/shyumi/nav2.png" alt=""/></a></li>
                  </ul>
                  <ul className="nav_right">
                    <li className="active"><a href="#">首页</a></li>
                    <li><a href="#">我要投资</a></li>
                    <li><a href="#">我要借款</a></li>
                    <li><a href="#">新手引导</a></li>
                    <li><a href="#">积分商城</a></li>
                    <li><a href="#">我的账户</a></li>
                  </ul>
                </div>
              </nav>

              <div id="Banner">
                <aside>
                  <div className="layout">
                    <div className="banner_right">
                      <h3>鱼米金服预期年化收益率</h3>
                      <div className="turnVolume">高达 <em>10%</em></div>
                      <div className="but"><a href="#">免费注册</a></div>
                      <div className="text">已有账户 <a href="#">立即登录</a></div>
                    </div>
                  </div>

                </aside>
                <ul className="banner_list">
                  <li><a href="#"><img src="src/images/shyumi/banner1.jpg" alt=""/></a></li>
                  <li><a href="#"><img src="src/images/shyumi/banner2.jpg" alt=""/></a></li>
                  <li><a href="#"><img src="src/images/shyumi/banner3.jpg" alt=""/></a></li>
                  <li><a href="#"><img src="src/images/shyumi/banner4.jpg" alt=""/></a></li>
                  <li><a href="#"><img src="src/images/shyumi/banner5.jpg" alt=""/></a></li>
                  <li><a href="#"><img src="src/images/shyumi/banner6.jpg" alt=""/></a></li>
                </ul>
                <div className="paging">
                  <a className="prev" href="#"><img src="src/images/shyumi/prev.png" alt=""/></a>
                  <a className="next" href="#"><img src="src/images/shyumi/next.png" alt=""/></a>
                </div>
                <div className="controllers">
                  <a href="#" className="active"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
              </div>

              <section>
                <div className="setion_content">
                  <div className="module1">
                    <ul className="module1_top">
                      <li className="mark">
                        <div><img src="src/images/shyumi/module1_1.png" alt=""/></div>
                        <div><h3>诚信经营</h3><p>一切以保障客户利益为首要</p></div>
                      </li>
                      <li className="wire"><img src="src/images/shyumi/module1_5.png" alt=""/></li>
                      <li className="mark">
                        <div><img src="src/images/shyumi/module1_2.png" alt=""/></div>
                        <div><h3>多重保障</h3><p>多重保体系严格风控把关</p></div>
                      </li>
                      <li className="wire"><img src="src/images/shyumi/module1_5.png" alt=""/></li>
                      <li className="mark">
                        <div><img src="src/images/shyumi/module1_3.png" alt=""/></div>
                        <div><h3>灵活投资</h3><p>多种期限项目灵活配置</p></div>
                      </li>
                      <li className="wire"><img src="src/images/shyumi/module1_5.png" alt=""/></li>
                      <li className="mark">
                        <div><img src="src/images/shyumi/module1_4.png" alt=""/></div>
                        <div><h3>定期披露</h3><p>平台运营公开透明</p></div>
                      </li>
                    </ul>
                    <ul className="module1_bottom">
                      <li><h3>鱼米金服实时投资数据</h3></li>
                      <li><span>累计投资金额</span><strong><em>134,804,075</em>元</strong></li>
                      <li><span>为用户赚取收益</span><strong><em>672,267.86</em>元</strong></li>
                      <li><span>注册用户</span><strong><em>1564</em>人</strong></li>
                    </ul>
                  </div>
                  <div className="module2">
                    <div className="module2_content">
                      <span className="red_belt"><img src="src/images/shyumi/module2_1.png" alt=""/><em>新手专享</em></span>
                      <div className="Newbie_left">
                        <p className="Newbie_left_fav"><img src="src/images/shyumi/module2_2.png" alt=""/><span>单笔限额5万元</span></p>
                        <ul className="Newbie_left_earnings">
                          <li><h2><em>12</em>%</h2><h5>历史年化收益率</h5></li>
                          <li><h4><em>15</em>天</h4><h5>投资期限</h5></li>
                          <li><h4><em>1000</em>元</h4><h5>起投金额</h5></li>
                        </ul>
                      </div>
                      <div className="Newbie_center">
                        <div className="progress_bar"><span></span></div>
                        <h3>剩余金额：<em>50</em>万元</h3>
                        <div className="Newbie_center_invest"><a href="#">立即投资</a></div>
                      </div>
                      <div className="Newbie_right">
                        <div><img src="src/images/shyumi/module2_3.png" alt=""/></div>
                      </div>
                    </div>
                  </div>
                  <div className="module3">
                    <div className="module3_top">
                      <span className="red_flag"><img src="src/images/shyumi/module3_1.png" alt=""/></span>
                      <p>热门投资产品</p>
                    </div>
                    <div className="module3_bottom">
                      <ul>
                        <li>
                          <h3 className="hot_product_name">名车系列：安胜2号3M第16期</h3>
                          <h4><em>7</em>%</h4>
                          <p>预期年化收益率</p>
                          <div className="progress_bar"><span></span></div>
                          <p>剩余金额：<em>0</em>元</p>
                          <h5>投资期限：<em>12</em>个月</h5>
                          <div className="hot_product_btn"><a href="#">立即投资</a></div>
                        </li>
                        <li>
                          <h3 className="hot_product_name">名企系列：安技4号12M第7期A</h3>
                          <h4><em>10</em>%</h4>
                          <p>预期年化收益率</p>
                          <div className="progress_bar"><span></span></div>
                          <p>剩余金额：<em>10</em>万元</p>
                          <h5>投资期限：<em>6</em>个月</h5>
                          <div className="hot_product_btn"><a href="#">立即投资</a></div>
                        </li>
                        <li>
                          <h3 className="hot_product_name">名企系列：安技4号12M第4期B</h3>
                          <h4><em>9.8</em>%</h4>
                          <p>预期年化收益率</p>
                          <div className="progress_bar"><span></span></div>
                          <p>剩余金额：<em>5</em>万元</p>
                          <h5>投资期限：<em>3</em>个月</h5>
                          <div className="hot_product_btn"><a href="#">立即投资</a></div>
                        </li>
                        <li>
                          <h3 className="hot_product_name">名企系列：安技4号6M第4期</h3>
                          <h4><em>8</em>%</h4>
                          <p>预期年化收益率</p>
                          <div className="progress_bar"><span></span></div>
                          <p>剩余金额：<em>30</em>万元</p>
                          <h5>投资期限：<em>12</em>个月</h5>
                          <div className="hot_product_btn"><a href="#">立即投资</a></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module_common module4">
                    <div className="series">
                      <div><h1>速盈系列</h1><h4>3个月内</h4></div>
                    </div>
                    <div className="module4_right">
                      <p className="module4_right_title">更多 ></p>
                      <ul className="module4_right_article">
                        <li>
                          <h2>名车系列：安胜2号3M第20期</h2>
                          <dl>
                            <dd className="module4_right_earnings"><h3>预期年化收益率</h3><h4><em>7</em>%</h4></dd>
                            <dd className="module4_right_deadline"><h3>投资期限</h3><h4><em>3</em>个月</h4></dd>
                            <dd className="module4_right_rental"><h3>总额</h3><h4><em>1,000,000</em>元</h4></dd>
                          </dl>
                          <div className="progress"><div className="progress_bar"><span></span></div><strong><em>10</em>%</strong></div>
                          <div className="module4_right_btn"><a href="#">立即投资</a></div>
                        </li>
                        <li>
                          <h2>名车系列：安胜2号3M第19期</h2>
                          <dl>
                            <dd className="module4_right_earnings"><h3>预期年化收益率</h3><h4><em>7</em>%</h4></dd>
                            <dd className="module4_right_deadline"><h3>投资期限</h3><h4><em>3</em>个月</h4></dd>
                            <dd className="module4_right_rental"><h3>总额</h3><h4><em>1,000,000</em>元</h4></dd>
                          </dl>
                          <div className="progress"><div className="progress_bar"><span></span></div><strong><em>10</em>%</strong></div>
                          <div className="module4_right_btn"><a href="#">立即投资</a></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module_common module5">
                    <div className="series">
                      <div><h1>易盈系列</h1><h4>6个月内</h4></div>
                    </div>
                    <div className="module4_right">
                      <p className="module4_right_title">更多 ></p>
                      <ul className="module4_right_article">
                        <li>
                          <h2>名车系列：安技4号6M第5期</h2>
                          <dl>
                            <dd className="module4_right_earnings"><h3>预期年化收益率</h3><h4><em>8</em>%</h4></dd>
                            <dd className="module4_right_deadline"><h3>投资期限</h3><h4><em>6</em>个月</h4></dd>
                            <dd className="module4_right_rental"><h3>总额</h3><h4><em>1,000,000</em>元</h4></dd>
                          </dl>
                          <div className="progress"><div className="progress_bar"><span></span></div><strong><em>10</em>%</strong></div>
                          <div className="module4_right_btn"><a href="#">立即投资</a></div>
                        </li>
                        <li>
                          <h2>名车系列：安技4号6M第5期</h2>
                          <dl>
                            <dd className="module4_right_earnings"><h3>预期年化收益率</h3><h4><em>8</em>%</h4></dd>
                            <dd className="module4_right_deadline"><h3>投资期限</h3><h4><em>6</em>个月</h4></dd>
                            <dd className="module4_right_rental"><h3>总额</h3><h4><em>1,000,000</em>元</h4></dd>
                          </dl>
                          <div className="progress"><div className="progress_bar"><span></span></div><strong><em>10</em>%</strong></div>
                          <div className="module4_right_btn"><a href="#">立即投资</a></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module_common module6">
                    <div className="series">
                      <div><h1>稳盈系列</h1><h4>12个月内</h4></div>
                    </div>
                    <div className="module4_right">
                      <p className="module4_right_title">更多 ></p>
                      <ul className="module4_right_article">
                        <li>
                          <h2>名企系列：安技4号12M第9期A</h2>
                          <dl>
                            <dd className="module4_right_earnings"><h3>预期年化收益率</h3><h4><em>10</em>%</h4></dd>
                            <dd className="module4_right_deadline"><h3>投资期限</h3><h4><em>12</em>个月</h4></dd>
                            <dd className="module4_right_rental"><h3>总额</h3><h4><em>1,000,000</em>元</h4></dd>
                          </dl>
                          <div className="progress"><div className="progress_bar"><span></span></div><strong><em>10</em>%</strong></div>
                          <div className="module4_right_btn"><a href="#">立即投资</a></div>
                        </li>
                        <li>
                          <h2>名车系列：安胜2号12M第13期B</h2>
                          <dl>
                            <dd className="module4_right_earnings"><h3>预期年化收益率</h3><h4><em>10</em>%</h4></dd>
                            <dd className="module4_right_deadline"><h3>投资期限</h3><h4><em>12</em>个月</h4></dd>
                            <dd className="module4_right_rental"><h3>总额</h3><h4><em>1,000,000</em>元</h4></dd>
                          </dl>
                          <div className="progress"><div className="progress_bar"><span></span></div><strong><em>10</em>%</strong></div>
                          <div className="module4_right_btn"><a href="#">立即投资</a></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="module7">
                    <li className="module7_left">
                      <h3>媒体报道</h3>
                      <dl>
                        <dd className="module7_left_img"><img src="src/images/shyumi/module7.png" alt=""/></dd>
                        <dd className="module7_left_article">
                          <h4>今夜，外滩为中嵘投集团亮灯</h4>
                          <p>今夜，外滩为中嵘投集团亮起了璀璨明灯，展示集团强大的品牌公信力。“中嵘投”三个红色大字，整晚在蓝宝石大屏幕循环滚动播放，灿烂了陆家嘴的夜空。整个北外滩地区都可以清晰地看到中嵘投集团的骄人业绩，见证中嵘投集团在上半年度取得的累累硕果。</p>
                          <h5>更多 ></h5>
                        </dd>
                      </dl>
                    </li>
                    <li className="module7_right">
                      <h3><span>官方公告</span><b>更多 ></b></h3>
                      <a href="#"><span>关于安卓版App上线通知</span><em>2017-03-13</em></a>
                      <a href="#"><span>鱼米金服关于更换客服电话的公告</span><em>2017-03-13</em></a>
                      <a href="#"><span>2017-2-16鱼米金服系统升级公告</span><em>2017-03-13</em></a>
                      <a href="#"><span>【富友】浦发、兴业银行维护通知</span><em>2017-03-13</em></a>
                      <a href="#"><span>鱼米庆元宵，有“鱼”有“米”喜…</span><em>2017-03-13</em></a>
                    </li>
                  </ul>
                  <div className="module8">
                    <h3 className="module8_top">合作伙伴</h3>
                    <ul className="module8_bottom">
                      <li><a href="http://www.cbhb.com.cn/bhbank/S101/index.htm" target="_blank"><img src="src/images/shyumi/module8_1.jpg" alt=""/></a></li>
                      <li><a href="http://www.xinhuanet.com/" target="_blank"><img src="src/images/shyumi/module8_2.png" alt=""/></a></li>
                      <li><a href="http://www.xhfyg.com/index" target="_blank"><img src="src/images/shyumi/module8_3.png" alt=""/></a></li>
                      <li><a href="https://www.fadada.com/" target="_blank"><img src="src/images/shyumi/module8_4.png" alt=""/></a></li>
                      <li><a href="http://www.wdzj.com/" target="_blank"><img src="src/images/shyumi/module8_5.png" alt=""/></a></li>
                      <li><a href="http://shanghai.qfang.com/" target="_blank"><img src="src/images/shyumi/module8_6.jpg" alt=""/></a></li>
                      <li><a href="https://www.tops001.com/" target="_blank"><img src="src/images/shyumi/module8_7.jpg" alt=""/></a></li>
                      <li><a href="http://www.spider.com.cn/" target="_blank"><img src="src/images/shyumi/module8_8.jpg" alt=""/></a></li>
                      <li><a href="https://www.fuiou.com/" target="_blank"><img src="src/images/shyumi/module8_9.jpg" alt=""/></a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <footer>
                <div className="footer_bar">
                  <ul className="footer_left">
                    <li>
                      <h3>关于鱼米金服</h3>
                      <p>公司简介</p>
                      <p>管理团队</p>
                      <p>资质证书</p>
                      <p>联系我们</p>
                    </li>
                    <li>
                      <h3>安保保障</h3>
                      <p>本息保障</p>
                      <p>风控控制</p>
                      <p>银行存管</p>
                    </li>
                    <li>
                      <h3>帮助中心</h3>
                      <p>资费说明</p>
                      <p>常见问题</p>
                      <p>法律法规</p>
                    </li>
                    <li>
                      <h3>手机应用</h3>
                      <p>关注微信</p>
                    </li>
                  </ul>
                  <ul className="footer_center">
                    <li>
                      <img src="src/images/shyumi/WeChat.png" alt=""/>
                      <p>关注微信公众号</p>
                    </li>
                    <li>
                      <img src="src/images/shyumi/IOS.png" alt=""/>
                      <p>IOS下载手机APP</p>
                    </li>
                    <li>
                      <img src="src/images/shyumi/Android.png" alt=""/>
                      <p>安卓下载手机APP</p>
                    </li>
                  </ul>
                  <div className="footer_right">
                    <p>客服热线（工作时间：9:00-18:00)</p>
                    <h1>400-990-7622</h1>
                    <div><a><img src="src/images/shyumi/footer_1.png" alt=""/><em>服务邮箱</em></a></div>
                    <div><a><img src="src/images/shyumi/footer_2.png" alt=""/><em>在线客服</em></a></div>
                  </div>
                </div>
              </footer>

              <div id="dibu">
                <div className="dibu_bar"></div>
              </div>

            </div>
        );
    }
});

//最终渲染
ReactDom.render(<App/>, document.getElementById('app'));
