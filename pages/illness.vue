<template>
  <div id="content">
    <h1 class="hdg-under-h1">{{ msg }}</h1>
    <div class="section-inner">
      <ul class="nav-page">
        <li><nuxt-link to="/illness/#anc-01">病児保育のご案内</nuxt-link></li>
        <li>
          <nuxt-link to="/illness/#anc-02">病児室ご利用の流れ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/illness/#anc-03">病児保育の持ち物・給食</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/illness/#anc-04"
            >たくまこどもクリニック<br />松木医師よりご挨拶</nuxt-link
          >
        </li>
      </ul>
      <h2 id="anc-01" class="hdg-under-h2">
        病児保育のご案内
      </h2>
      <p class="text-01">
        お子さんの急な発熱や感染症等で、保護者の方が仕事も休むことができず、家庭での看護・保育ができない時にお子さんを当園でおあずかりします。
      </p>

      <h3 class="hdg-under-h3">ご利用できる方</h3>

      <table class="table-01">
        <colgroup>
          <col style="width:30%" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>対象年齢</th>
            <td>生後６ヶ月～小学６年生</td>
          </tr>
          <tr>
            <th>開設日</th>
            <td>
              月曜日～金曜日　午前8:30～午後5:00<br />
              （土曜・日曜日、祝日、年末年始、臨時休業日を除く）
            </td>
          </tr>
          <tr>
            <th>病児クラス定員</th>
            <td>
              3～5名（年齢による）
            </td>
          </tr>
          <tr>
            <th>連絡先</th>
            <td>
              TEL：<a href="tel:022-253-6507" class="tel-link">022-253-6507</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="table-01-wrapper">
        <table class="table-01">
          <colgroup>
            <col style="width: 250px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th rowspan="2">名目</th>
              <th colspan="3">ご利用料金</th>
            </tr>
            <tr>
              <th>企業枠</th>
              <th>地域枠</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>利用料金（※）</th>
              <td>1,000円</td>
              <td>2,000円</td>
            </tr>
            <tr>
              <th>布団使用料</th>
              <td>200円</td>
              <td>200円</td>
            </tr>
            <tr>
              <th>給食</th>
              <td>300円</td>
              <td>300円</td>
            </tr>
            <tr>
              <th>午前おやつ</th>
              <td>100円</td>
              <td>100円</td>
            </tr>
            <tr>
              <th>午後おやつ</th>
              <td>100円</td>
              <td>100円</td>
            </tr>
            <tr>
              <th>お昼寝タオル3枚<br />（ご持参頂ける方はご持参ください）</th>
              <td>200円</td>
              <td>200円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-01">
        上記の他に緊急で必要になったものは実費となります。<br />
        ※利用料金と布団使用料は必須の料金となっています。
      </p>
      <!-- <h3 class="hdg-under-h3">持ち物（例：３歳未満のお子さまの場合）</h3>
      <p class="text-01">
        ※３歳児以上のお子さまの持ち物は、事前登録の際にお伝えします
      </p>
      <ol class="list-order-01">
        <li>
          書類
          <ul class="list-01">
            <li>病児保育　利用申請書　（毎日必要）</li>
            <li>病児保育　家庭医連絡票（原本）</li>
            <li>薬の依頼書　（必要があれば）</li>
          </ul>
        </li>
        <li>
          着替え
          <ul class="list-01">
            <li>
              上下・下着各２組（嘔吐や下痢が予想される時は多めにお願いします）
            </li>
            <li>バスタオル(大)3枚（お昼寝用）</li>
          </ul>
        </li>
        <li>
          おむつ　７～８枚（使用の場合）
        </li>
        <li>
          飲み物
          <ul class="list-01">
            <li>水分補給用（５００ミリ程度１本）</li>
            <li>粉ミルク</li>
            <li>哺乳瓶は必要な回数分ご用意ください</li>
          </ul>
        </li>
        <li>
          薬（必要な場合）は
          <ul class="list-01">
            <li>お薬手帳または薬剤情報提供書・薬の依頼書もお持ちください</li>
            <li>
              １回毎に分けてお持ちください。日付、名前を忘れずに記入してください
            </li>
          </ul>
        </li>
        <li>
          食事
          <ul class="list-01">
            <li>エプロン　３枚　（必要な場合）</li>
            <li>コップ（普段お使いのもの、マグなど）</li>
          </ul>
          <p class="text-01">
            食事・おやつは当保育園で用意させていただきますが
            　アレルギーのお子様にはご家庭で食べられているものをお持ちください
          </p>
        </li>
        <li>
          お気に入りおもちゃ、絵本など（必要であれば）
          <p class="text-01">
            ※持ち物には、必ず「名前」を記入してください<br />
            ※不足していて保育園で用意したものについては有料になります。（補水液・使い捨て哺乳瓶など）<br />
            ※小学生の準備が限られておりますので、お気に入りのもの（漫画本、カードゲーム等）はお持ちください<br />
            ※ゲーム機（電子機器）の持ち込みはご遠慮ください<br />
          </p>
        </li>
      </ol> -->

      <h2 id="anc-02" class="hdg-under-h2">
        ご利用の手続き
      </h2>
      <p class="text-01">
        未登録の場合はSTEP1からになります。<br />
        すでに登録が済んでいる方はSTEP3からになります。
      </p>
      <ol class="list-step-02">
        <li>
          <div class="icon"><span>STEP1</span></div>
          <div class="image">
            <img src="~/assets/images/common/step_01.png" alt="" width="80px" />
          </div>
          <div class="text">
            <p>電話にて事前登録の予約をする</p>
            電話にて日時を確認させていただきます。<br />
            受付時間午前9:00～午後5:00<br />
            TEL：<a href="tel:022-253-6507">022-253-6507</a>
          </div>
        </li>
        <li>
          <div class="icon"><span>STEP2</span></div>
          <div class="image">
            <img src="~/assets/images/common/step_02.png" alt="" width="80px" />
          </div>
          <div class="text">
            <p>事前登録をする</p>
            ふたばすまいるキッズに来園して頂き、病児保育登録申請書を記入
          </div>
        </li>
        <li>
          <div class="icon"><span>STEP3</span></div>
          <div class="image">
            <img src="~/assets/images/common/step_03.png" alt="" width="80px" />
          </div>
          <div class="text">
            <p>病院を受診</p>
            近日中の利用が必要な場合、家庭医（かかりつけ医）の診察を受け、<br />
            「病児保育家庭医連絡票」を記入していただく
          </div>
        </li>
        <li>
          <div class="icon"><span>STEP4</span></div>
          <div class="image">
            <img src="~/assets/images/common/step_04.png" alt="" width="80px" />
          </div>
          <div class="text">
            <p>予約をする</p>
            家庭医連絡票の記入後、家庭医連絡票を見ながら、<br />
            電話にて、病名・安静度等をつたえていただき、予約の確認をとる
          </div>
        </li>
        <li>
          <div class="icon"><span>STEP5</span></div>
          <div class="image">
            <img src="~/assets/images/common/step_05.png" alt="" width="80px" />
          </div>
          <div class="text">
            <p>ご利用当日</p>
            「利用申請書」「家庭医連絡票」、与薬が必要な場合は「薬の依頼書」と、
            お子さまの年齢に応じたお持物をご持参ください
          </div>
        </li>
      </ol>

      <h2 id="anc-03" class="hdg-under-h2">
        病児保育の持ち物・給食
      </h2>
      <p class="text-01">
        病児保育ご利用の際の、持ち物・給食につきましては以下の資料をご確認ください
      </p>
      <p class="align-l">
        <nuxt-link
          to="/pdf/R5.3最新病児保育の持ち物・給食について.pdf"
          target="_blank"
          class="link-01"
          >病児保育の持ち物・給食について</nuxt-link
        >
      </p>
      <p class="text-01">
        <b>【必要書類ダウンロード】</b>
      </p>
      <p class="align-l">
        <nuxt-link
          to="/pdf/①病児保育登録申請書.pdf"
          target="_blank"
          class="link-01"
          >①病児保育登録申請書</nuxt-link
        >
      </p>
      <p class="align-l">
        <nuxt-link
          to="/pdf/②病児家庭医連絡票.pdf"
          target="_blank"
          class="link-01"
          >②病児保育家庭医連絡票</nuxt-link
        >
      </p>
      <p class="align-l">
        <nuxt-link
          to="/pdf/③病児保育利用申請書.pdf"
          target="_blank"
          class="link-01"
          >③病児保育利用申請書</nuxt-link
        >
      </p>
      <p class="align-l">
        <nuxt-link
          to="/pdf/④個人情報取り扱い同意書.pdf"
          target="_blank"
          class="link-01"
          >④個人情報取り扱い同意書</nuxt-link
        >
      </p>
      <p class="align-l">
        <nuxt-link
          to="/pdf/⑤薬の依頼書_20230207更新.pdf"
          target="_blank"
          class="link-01"
          >薬の依頼書</nuxt-link
        >
      </p>
      <p class="align-l">
        <nuxt-link to="/pdf/病児食事依頼票.pdf" target="_blank" class="link-01"
          >病児食事依頼票</nuxt-link
        >
      </p>
      <h2 class="hdg-under-h2" id="anc-04">
        たくまこどもクリニック　松木琢磨医師よりご挨拶
      </h2>
      <div class="message">
        <figure class="align-c">
          <img src="~/assets/images/common/illness_04.png" alt="" />
          <figcaption>
            たくまこどもクリニック　松木琢磨医師より
          </figcaption>
        </figure>
        <div class="bubble">
          <p class="text-01">
            小児科専門医として何か力になれることはないかと模索する中で、
            荒井駅同地区内にあるふたば保育園との出会いがあり
            「この地区に新たにこんな保育園を作りたい！」というベクトルが一致して、
            実現に至りました。
          </p>
          <p class="text-01">
            私は緊急時の対応や、病児様子伺いなど、スタッフと密に連携していきます。<br />
            スタッフが安心して保育をできるということは、保護者の皆様の安心にも繋がると考えています。<br />
          </p>
          <p class="text-01">
            また、病児申し込みについても、当院経由であれば保護者の皆様の作業負担が減るよう、準備してまいります。<br />
            ご利用お待ちしております。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "病児保育について"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
