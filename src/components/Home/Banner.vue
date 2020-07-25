<template>
  <div class="banner">
    <span>!</span>
    <h4>
      Z powodu epidemii koronawirusa wszystkie mecze zostają wstrzymane na czas
      nieokreślony.
    </h4>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner {
  background: white;
  padding: 20px;
  display: flex;
  align-items: center;
}

span {
  font-size: 80px;
  font-weight: 700;
  margin-right: 20px;
}
</style>
