<template>
  <Layout>
    <div class="home">
      <SelectBox @selected="onSelect" />
      <div class="grid">
        <Match class="gridLastMatch" :firstBox="true" :selected="selected" />
        <Match class="gridNextMatch" :firstBox="false" :selected="selected" />
        <Scoreboard class="gridScoreboard" :selected="selected" />
      </div>
    </div>
  </Layout>
</template>

<script>
import SelectBox from '@/components/SelectBox.vue';
import Match from '@/components/Home/Match.vue';
import Banner from '@/components/Home/Banner.vue';
import Scoreboard from '@/components/Home/Scoreboard.vue';

export default {
  metaInfo: {
    title: 'Strona główna',
    description:
      'Oficjalna strona klubu piłkarskiego LKS Tur Jaktorów. Zobacz ostatnie mecze, wyniki i tabelę rozgrywek. Klasa A seniorów oraz wszystkie roczniki juniorskie w jednym miejscu.',
  },
  name: 'Home',
  components: {
    Match,
    Banner,
    Scoreboard,
    SelectBox,
  },
  data: function () {
    return {
      selected: 'senior',
    };
  },
  methods: {
    onSelect: function (val) {
      this.selected = val;
    },
  },
};
</script>


<style lang="scss" scoped>
.home {
  width: 100%;
}

.grid {
  display: grid;
  grid-gap: 12px 0;
}

@media (min-width: 1440px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto auto auto;
    grid-gap: 20px;
  }

  .gridScoreboard {
    grid-column: 1 / 4;
    grid-row: 2 / 5;
    background: white;
    max-width: 100%;
  }

  .gridLastMatch {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .gridNextMatch {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }

  .gridBanner {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
  }
}
</style>
