<template>
  <div>
    <CommonHeader>
      <GlobalNav />
    </CommonHeader>
    <Nuxt />
    <CommonFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import CommonHeader from "@/components/CommonHeader.vue";
import GlobalNav from "@/components/GlobalNav.vue";
import CommonFooter from "@/components/CommonFooter.vue";

@Component({
  components: { CommonHeader, CommonFooter }
})
export default class Default extends Vue {
  $nuxt: any;
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
}
</script>
