<template>
  <Item class="scoreboard">
    <template v-slot:title>Tabela wyników</template>
    <template v-slot:content>
      <div class="scoreboard">
        <table>
          <tr>
            <th title="Miejsce">M</th>
            <th>Nazwa klubu</th>
            <th title="Zwycięstwa/Remisy/Porażki">Z/R/P</th>
            <th title="Bilans bramek">B</th>
            <th title="Punkty">P</th>
          </tr>
          <tr v-for="(item, index) in scoreboard" :key="index">
            <td>{{ index + 1 }}.</td>
            <td class="club">
              <g-image
                :src="require(`@/assets/images/logos/${item.logo}`)"
                :alt="item.club + ' logo'"
              />
              <span>{{ item.club }}</span>
            </td>
            <td>{{ item.stats }}</td>
            <td>{{ item.scoredGoals }} : {{ item.lostGoals }}</td>
            <td>{{ item.points }}</td>
          </tr>
        </table>
      </div>
    </template>
  </Item>
</template>

<script>
import Item from "@/components/Item.vue";
import infoAll from "@/data/info";

export default {
  name: "Scoreboard",
  props: ["selected"],
  components: {
    Item,
  },
  computed: {
    scoreboard: function () {
      const info = infoAll[this.selected];
      let scoreboard = info.map((team) => ({
        club: team.club,
        logo: team.logo,
        stats: `${team.stats[0]}/${team.stats[1]}/${team.stats[2]}`,
        scoredGoals:
          team.scoredGoals.length === 0
            ? 0
            : team.scoredGoals.reduce((a, b) => a + b),
        lostGoals:
          team.lostGoals.length === 0
            ? 0
            : team.lostGoals.reduce((a, b) => a + b),
        points: team.stats[0] * 3 + team.stats[1],
      }));
      scoreboard.sort((a, b) => b.points - a.points);
      return scoreboard;
    },
  },
};
</script>

<style lang="scss" scoped>
.scoreboard {
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-bottom: 1px solid gray;
  font-size: 16px;

  &:last-child {
    border: none;
  }
}

th,
td {
  text-align: left;
  white-space: nowrap;
  padding: 4px 8px;
}

img {
  width: 24px;
  margin-right: 6px;
}

.club {
  display: flex;
  align-items: center;
}

@media (min-width: 640px) {
  tr {
    font-size: 18px;
  }

  img {
    width: 32px;
  }
}
</style>
