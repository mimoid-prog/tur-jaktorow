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
        { label: '2005/2006', code: 'B2JuniorMlodszy2005_2006' },
        { label: '2007/2008', code: 'C2Trampkarz2007_2008' },
        { label: '2009', code: 'D2Mlodzik2009' },
        { label: '2010', code: 'E1Orlik2010' },
        { label: '2011', code: 'E2Orlik2011' },
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
