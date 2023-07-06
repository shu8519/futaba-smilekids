<template>
  <div id="content">
    <h1 class="hdg-under-h1">{{ msg }}</h1>
    <div class="section-inner">
      <h2 id="anc-01" class="hdg-under-h2">お知らせ</h2>
      <ul class="list-news-01">
        <li>
          <span>2020.12.1</span>
          <p>
            女性のチカラを活かす企業に認証されました。<br />詳細は
            <nuxt-link to="/pdf/20201207_01.pdf" target="_blank"
              >こちら</nuxt-link
            ><br />
            <nuxt-link to="/pdf/20201207_02.pdf" target="_blank"
              >女性のチカラを活かす企業認定書</nuxt-link
            >
          </p>
        </li>
        <li>
          <span>2020.6.1</span>
          <p>
            <a href="http://www.aoikai.jp/sendai-hsp/" target="_blank"
              >医療法人社団葵会　葵会仙台病院</a
            >と企業提携契約が締結されました。
            <br />
            <a
              href="https://ssc7.doctorqube.com/aoikai-sendai/"
              target="_blank"
              >小児科：松木先生の診療予約について</a
            >
          </p>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {
  name: 'お知らせ',
  data () {
    return {
      msg: 'お知らせ'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
