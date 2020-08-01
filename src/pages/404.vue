<template>
  <Layout>
    <h2 class="secondaryTitle viewTitle">Błąd 404</h2>
    <h2 class="viewTitle">nie ma takiej podstrony</h2>
    <Warning class="warning-icon" />
  </Layout>
</template>

<script>
import Warning from "~/assets/svgs/warning.svg";

export default {
  metaInfo: {
    title: "Błąd 404",
  },
  name: "404",
  components: {
    Warning,
  },
};
</script>

<style lang="scss" scoped>
.warning-icon {
  width: 100px;
  display: block;
  margin: 10px auto 0;
}
</style>
