<template>
  <div class="item-layout">
    <div class="item-banner">
      <p>
        <slot name="title"></slot>
      </p>
    </div>
    <div class="item-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
};
</script>

<style lang="scss" scoped>
.item-banner {
  background: #f5f2f2;
  padding: 6px 12px;

  p {
    font-weight: 700;
  }
}

.item-content {
  background: white;
  padding: 10px;
}

@media (min-width: 1024px) {
  .item-content {
    padding: 15px 20px;
  }
}
</style>
