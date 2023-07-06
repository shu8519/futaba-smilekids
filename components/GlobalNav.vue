<template>
  <nav id="navmenu">
    <div>
      <button @click="menuToggle" class="btn-menu">
        <span>メニューを表示</span>
      </button>
      <ul class="nav-global" :class="{ 'is-open': isOpen }">
        <li>
          <nuxt-link to="/" @click="menuToggle">
            <img
              src="~/assets/images/common/icon_01.png"
              alt=""
              width="29px"
              height="25px"
            />
            TOP</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/about" @click.native="menuToggle">
            <img src="~/assets/images/common/icon_02.png" alt="" width="32px" />
            ふたばすまいるキッズについて
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/flow" @click.native="menuToggle">
            <img src="~/assets/images/common/icon_03.png" alt="" width="32px" />
            一日の流れ</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/price" @click.native="menuToggle">
            <img src="~/assets/images/common/icon_04.png" alt="" width="32px" />
            料金</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/company" @click.native="menuToggle">
            <img src="~/assets/images/common/icon_05.png" alt="" width="32px" />
            企業主導型保育園について</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/illness" @click.native="menuToggle">
            <img src="~/assets/images/common/icon_06.png" alt="" width="32px" />
            病児保育について</nuxt-link
          >
        </li>
        <li>
          <button type="button" @click="menuToggle" class="close">
            メニューを閉じる
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({})
export default class GlobalNav extends Vue {
  isOpen = false;

  menuToggle() {
    this.isOpen = !this.isOpen;
  }
}
</script>
