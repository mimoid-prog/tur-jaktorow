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
            <th title="Bilans bramek">Bramki</th>
            <th title="Rozegrane mecze">Mecze</th>
            <th title="Punkty">Punkty</th>
          </tr>
          <tr v-for="(item, index) in scoreboard" :key="index">
            <td>{{ item.place }}</td>
            <td class="club">
              <g-image
                :src="require(`@/assets/images/logos/${item.logo}`)"
                :alt="item.club + ' logo'"
              />
              <span>{{ item.club }}</span>
            </td>
            <td>{{ item.stats }}</td>
            <td>{{ item.scoredGoals }} : {{ item.lostGoals }}</td>
            <td>{{ item.matches }}</td>
            <td>{{ item.points }}</td>
          </tr>
        </table>
      </div>
    </template>
  </Item>
</template>

<script>
import Item from '@/components/Item.vue';
import infoAll from '@/data/info';

export default {
  name: 'Scoreboard',
  props: ['selected'],
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
            : team.scoredGoals.reduce(
                (a, b) => (a === false ? 0 : a) + (b === false ? 0 : b),
              ),
        lostGoals:
          team.lostGoals.length === 0
            ? 0
            : team.lostGoals.reduce(
                (a, b) => (a === false ? 0 : a) + (b === false ? 0 : b),
              ),
        points: team.stats[0] * 3 + team.stats[1],
        matches: team.stats[0] + team.stats[1] + team.stats[2],
      }));
      scoreboard.sort((a, b) => {
        if (a.points === b.points) {
          return b.matches - a.matches;
        }
        return b.points - a.points;
      });

      let place = 1;
      let isUsed = false;
      for (let i = 0; i < scoreboard.length; i++) {
        if (!isUsed) {
          scoreboard[i].place = place + '.';
          isUsed = true;
        } else scoreboard[i].place = '';

        if (i !== scoreboard.length - 1) {
          if (scoreboard[i].points !== scoreboard[i + 1].points) {
            place++;
            isUsed = false;
          }
        }
      }

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
