<template>
  <div class="header-wrap" :class="{ 'header-top-fixed': isInScreen }">
    <header v-bind:class="{ fixed: isInScreen }">
      <div class="header-inner">
        <h1>
          <nuxt-link to="/">
            <img
              src="../assets/images/common/logo.png"
              alt="ふたばすまいるキッズ"
              width="150"
            />
          </nuxt-link>
        </h1>
        <div class="header-nav-inner">
          <p class="header-nav-01">
          <router-link to="/affiliations">共同利用法人様のご紹介</router-link>
          </p>
          <p class="header-nav-01">
          <router-link to="/corporation">保育園との共同利用をご希望される法人様</router-link>
          </p>
        </div>
      </div>
      <slot></slot>
    </header>
  </div>
</template>
<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({})
export default class CommonHeader extends Vue {
  scrollY = 0;
  height = 0;
  position = 0;
  open = false;

  get width() {
    if (process.browser) {
      return window.innerWidth;
    }
  }

  get isInScreen() {
    if (process.browser) {
      if (this.width > 768) {
        if (this.scrollY > this.position + 400) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  mounted() {
    if (process.browser) {
      window.addEventListener("scroll", this.onScroll);
      window.addEventListener("resize", this.onResize);
      window.addEventListener("load", () => {
        this.onScroll();
        this.onResize();
      });
    }
  }

  onScroll() {
    if (process.browser) {
      this.scrollY = window.pageYOffset;
    }
  }
  onResize() {
    if (process.browser) {
      this.height = document.documentElement.clientHeight;
    }
  }
  getPosition() {
    if (this.$el) {
      return this.$el.getBoundingClientRect().top + this.scrollY - this.height;
    } else {
      return 0;
    }
  }
  toggle() {
    this.open = !this.open;
  }
  setWindowWidth() {
    if (process.browser) {
      this.width = window.innerWidth;
    }
  }
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.setWindowWidth, false);
    }
  }
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("resize", this.setWindowWidth, false);
    }
  }
}
</script>
