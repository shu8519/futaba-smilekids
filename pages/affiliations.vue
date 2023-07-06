<template>
  <div id="content">
    <h1 class="hdg-under-h1">{{ msg }}</h1>
    <div class="section-inner" id="affiliations">
      <h2><img src="@/assets/images/affiliations/header.jpg"></h2>
      <div class="contents">
        <p>五十音順（敬称略）</p>
        <ul>
          <li><a href="https://www.75dc.jp/" target="_blank">田沼七郷歯科クリニック</a></li>
          <li><a href="https://www.maisonkayser-sendai.jp/" target="_blank">株式会社メゾンカイザー仙台</a></li>
          <li><a href="https://www.77bank.co.jp/" target="_blank">株式会社七十七銀行</a></li>
          <li><a href="https://www.aoikai.jp/sendai-hsp/" target="_blank">医療法人社団葵会　葵会仙台病院</a></li>
          <li><a href="https://www.nissay.co.jp/" target="_blank">日本生命保険相互会社　仙台支社</a></li>
          <li>澤内工業株式会社</li>
          <li><a href="https://www.ttk-g.co.jp/group/hokubu/" target="_blank">株式会社HOKUBU</a></li>
          <li><a href="https://www.sendaibank.co.jp/" target="_blank">株式会社仙台銀行</a></li>
          <li>株式会社Wonder　Wall</li>
          <li><a href="https://www.kaketa.com/" target="_blank">医療法人 懸田積仁会 懸田歯科医院</a></li>
        </ul>
      </div>
      <div>
        <img src="@/assets/images/affiliations/footer.jpg">
      </div>
      <a href="/pdf/契約企業様社内向け資料.pptx" target="_blank" class="btn-01 _large">提携企業様向けの社内説明資料はこちら<span class="note" style="display: block;
          margin-top: 0;
          font-size: 12px;">※○○社の部分を変更を御社名へして頂き、ご活用ください！</span></a>
      <router-link to="/corporation" class="btn-01 _large _green">保育園との共同利用をご希望される法人様はこちら</router-link>


    </div>
  </div>
</template>

<script>
export default {
  name: "Affiliations",
  data() {
    return {
      msg: "共同利用法人様のご紹介"
    };
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
