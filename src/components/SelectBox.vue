<template>
  <div class="selectBox">
    <p>Wybierz rocznik:</p>
    <v-select
      v-model="selected"
      :options="options"
      :searchable="false"
      :clearable="false"
      onchange="handleSelectChange"
    >
      <div slot="no-options">Nie ma takiej opcji</div>
    </v-select>
  </div>
</template>

<script>
import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect);

export default {
  name: 'SelectBox',
  data: function () {
    return {
      selected: { label: 'Seniorzy', code: 'senior' },
      options: [
        { label: 'Seniorzy', code: 'senior' },
        { label: 'Junior Młodszy', code: 'juniorMlodszy' },
        { label: 'Trampkarz', code: 'trampkarz' },
      ],
    };
  },
  watch: {
    selected: function (val) {
      this.$emit('selected', this.selected.code);
    },
  },
};
</script>

<style lang="scss">
.selectBox {
  margin-bottom: 20px;

  p {
    color: white;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 24px;
  }

  .vs__dropdown-toggle {
    background: white;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
