<template>
  <div id="content" class="top">
    <!-- <div class="main-visual"></div> -->
    <div class="main-visual-02">
      <img
        src="../assets/images/common/logo.png"
        alt="ふたばすまいるキッズ"
        width="150"
      />
    </div>
    <section class="section-01">
      <div class="section-inner">
        <div class="box-news-01">
          <h2 class="hdg">
            <span>新着情報</span>
          </h2>
          <ul class="list-news-01">
            <li>
              <span>2022.4.22</span>
              <p>
                <a href="/affiliations">
                  「共同利用の法人様ご紹介」のページを追加しました！</a
                >
              </p>
            </li>
            <li>
              <span>2022.4.22</span>
              <p>
                <a href="/pdf/契約企業様社内向け資料.pptx" target="_blank"
                  >「提携企業様向け社内説明資料」を追加いたしました！</a
                >
                <br />○○社の部分を御社名へ変更して頂き、社内でご活用ください！
              </p>
            </li>
            <li>
              <span>2022.1.14</span>
              <p>
                株式会社七十七銀行様と企業提携契約が締結されました。<br />
                <a href="https://www.77bank.co.jp/" target="_blank"
                  >七十七銀行公式サイト</a
                ><br />
                <a href="https://www.77bank.co.jp/77kids/" target="_blank"
                  >お子さま向けの金融教育サイト「７７しちしちキッズランド」</a
                >
              </p>
            </li>
            <li>
              <span>2021.8.10</span>
              <p>
                ヴォスクオーレ仙台の「第一回　みんなで夢体験」のイベントに協賛しています。
              </p>
            </li>
            <li>
              <span>2021.4.16</span>
              <p>
                <nuxt-link to="/images/news_0416.png" target="_blank"
                  >東北TBC放送の特集<br />
                  「女性が輝いて働く企業」に弊社が取り上げられました！</nuxt-link
                >
              </p>
            </li>
          </ul>
        </div>
        <a href="/news" class="btn-01">過去のお知らせ</a>
      </div>
    </section>
    <section class="section-02">
      <div class="section-inner">
        <h2 class="top-hdg-h2">ふたばすまいるキッズについて</h2>
        <ul class="list-index-01">
          <li>
            <nuxt-link to="/about/#anc-01">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_01.png" alt="" />
              </div>
              <p>保育園の概要</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/#anc-02">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_02.png" alt="" />
              </div>
              <p>保育理念・保育方針・ <br />保育目標</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/corporation">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_03.png" alt="" />
              </div>
              <p>法人間のご契約の流れ</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/#anc-03">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_04.png" alt="" />
              </div>
              <p>企業主導型保育園とは</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/#anc-04">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_05.png" alt="" />
              </div>
              <p>入園決定までの流れ</p>
            </nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/about/#anc-05">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_10.png" alt="" />
              </div>
              <p>写真</p>
            </nuxt-link>
          </li> -->
        </ul>
      </div>
    </section>

    <section class="section-03">
      <div class="section-inner">
        <h2 class="top-hdg-h2">一日の流れ</h2>
        <ul class="list-index-01 _color-02">
          <li>
            <nuxt-link to="/flow/#anc-01">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_06.png" alt="" />
              </div>
              <p>１日の保育の流れ</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/flow/#anc-02">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_07.png" alt="" />
              </div>
              <p>年間行事</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>

    <section class="section-04">
      <div class="section-inner">
        <h2 class="top-hdg-h2">料金</h2>
        <ul class="list-index-01">
          <li>
            <nuxt-link to="/price/#anc-01">
              <div class="inner">
                <img src="~/assets/images/top/index_illust_08.png" alt="" />
              </div>
              <p>保育料金について</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
// // webfont
// (function (d) {
//   var config = {
//     kitId: 'egc4rwq',
//     scriptTimeout: 3000,
//     async: true
//   },
//     h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
// })(document);
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
