<template>
  <Layout>
    <div class="schedule">
      <h2 class="secondaryTitle viewTitle">Terminarz</h2>
      <SelectBox @selected="onSelect" />
      <div class="content">
        <Item
          v-for="(week, weekIndex) in schedule"
          :key="weekIndex"
          class="week-box"
        >
          <template v-slot:title
            >Kolejka {{ week.week + 1 }} - {{ week.date }}</template
          >
          <template v-slot:content>
            <ul>
              <li v-for="(match, index) in week.matches" :key="index">
                <img
                  v-if="match.teamOne !== null"
                  :src="
                    require(`@/assets/images/logos/${info[match.teamOne].logo}`)
                  "
                  :alt="info[match.teamOne].club + ' logotyp'"
                />
                <p
                  v-if="match.teamTwo !== null"
                  :class="{
                    tur: match.teamOne === 0 || match.teamTwo === 0,
                  }"
                >
                  <span>{{ info[match.teamOne].club }}</span>
                  <span class="score"
                    >{{ info[match.teamOne].scoredGoals[week.week] }} -
                    {{ info[match.teamTwo].scoredGoals[week.week] }}</span
                  >
                  <span>{{ info[match.teamTwo].club }}</span>
                </p>
                <p v-else class="week-pause">
                  <span>{{ info[match.teamOne].club }}</span>
                  <span>pauzuje w kolejce</span>
                </p>
                <img
                  v-if="match.teamTwo !== null"
                  :src="
                    require(`@/assets/images/logos/${info[match.teamTwo].logo}`)
                  "
                  :alt="info[match.teamTwo].club + ' logotyp'"
                />
              </li>
            </ul>
          </template>
        </Item>
      </div>
    </div>
  </Layout>
</template>

<script>
import SelectBox from "@/components/SelectBox.vue";
import Item from "@/components/Item.vue";

import info from "@/data/info";
import schedule from "@/data/schedule";

export default {
  metaInfo: {
    title: "Terminarz",
  },
  name: "Schedule",
  components: {
    Item,
    SelectBox,
  },
  data: function() {
    return {
      info: info.senior,
      schedule: schedule.senior,
    };
  },
  methods: {
    onSelect: function(val) {
      this.info = info[val];
      this.schedule = schedule[val];
    },
  },
};
</script>

<style lang="scss" scoped>
.week-box {
  margin-bottom: 10px;
}

.week-pause {
  text-align: left;
}

ul {
  list-style: none;
  font-size: 16px;

  li {
    padding: 6px 0;
    border-bottom: 1px solid #f5f2f2;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border: none;
    }

    img {
      width: 32px;
    }

    img:first-child {
      margin-right: 10px;
    }

    img:last-child {
      margin-left: 10px;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .score {
        display: block;
      }
    }
  }
}

.tur {
  font-weight: 700;
}

@media (min-width: 640px) {
  ul {
    font-size: 18px;

    li {
      flex-direction: row;
      justify-content: flex-start;

      img {
        width: 32px;
      }

      p {
        display: block;

        .score {
          display: initial;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
