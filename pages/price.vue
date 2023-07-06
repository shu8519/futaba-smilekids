<template>
  <div id="content">
    <h1 class="hdg-under-h1">{{ msg }}</h1>
    <div class="section-inner">
      <h2 id="anc-01" class="hdg-under-h2">
        令和3年度 保育料金について
      </h2>
      <div class="table-01-wrapper">
        <table class="table-01">
          <colgroup>
            <col style="width: 250px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th rowspan="2">ご年齢</th>
              <th rowspan="2">ご利用コース</th>
              <th colspan="3">ご利用料金</th>
            </tr>
            <tr>
              <th>地域枠</th>
              <th>契約企業枠</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="3">0歳児</th>
              <th>週4日コース</th>
              <td>27,000円</td>
              <td>25,000円</td>
            </tr>
            <tr>
              <th>週5日コース</th>
              <td>37,000円</td>
              <td>35,000円</td>
            </tr>
            <tr>
              <th>週6日コース</th>
              <td>39,000円</td>
              <td>37,000円</td>
            </tr>
            <tr>
              <th rowspan="3">1・2歳児</th>
              <th>週4日コース</th>
              <td>25,000円</td>
              <td>23,000円</td>
            </tr>
            <tr>
              <th>週5日コース</th>
              <td>35,000円</td>
              <td>33,000円</td>
            </tr>
            <tr>
              <th>週6日コース</th>
              <td>37,000円</td>
              <td>35,000円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul class="list-note-01">
        <li>
          <span>※</span>
          <p>住民税非課税世帯からは月額利用料はいただきません</p>
        </li>
        <li>
          <span>※</span>

          <p>
            2人目半額、3人目以降無料（条件有）
            <a class="link-01" href="/pdf/20220125.pdf" target="_blank">詳細はこちら</a>
          </p>
        </li>
        <li>
          <span>※</span>
          <p>
            入園にかかる費用として、カラー帽子代 ９９０ 円、防災ずきん代
            ２９００
            円を別途集金させていただきます。（初年度のみ購入。失くされた場合はその都度保護者様負担で購入となります。）
          </p>
        </li>
        <li>
          <span>※</span>
          <div>
            延長料金
            <ul class="list-01">
              <li>３０分５００円（ご利用の都度お支払いお願いします）</li>
              <li>１ヶ月５，０００円（ご利用の前月までにお支払い願います）</li>
              <li>詳細はお問合せください</li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="box-alert-01">
        <p class="hdg">１ヶ月利用の保護者様へ</p>
        <p>
          延長保育申込書は月ごとの提出になります。利用前月の２０日までに提出をお願い致します。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "料金"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
