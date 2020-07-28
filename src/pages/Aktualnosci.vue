<template>
  <Layout>
    <div id="news" class="news">
      <h2 class="secondaryTitle viewTitle">Aktualności</h2>
      <div class="posts">
        <Item v-for="(post, index) in news" :key="index">
          <template v-slot:title>{{ post.emoji }} {{ post.date }}</template>
          <template v-slot:content>
            <div v-html="post.content" class="post-content"></div>
            <a :href="post.link" target="_blank">➡️ Zobacz post i zdjęcia na FB</a>
          </template>
        </Item>
      </div>
    </div>
  </Layout>
</template>

<script>
import Item from '@/components/Item.vue';
import news from '@/data/news';

export default {
  metaInfo: {
    title: 'Aktualności',
    meta: [
      {
        description:
          'Najnowsze aktualności na temat Tura Jaktorów, ostatnie wyniki meczów oraz informacje o wyjazdach, obozach i treningach.',
      },
    ],
  },
  name: 'Aktualności',
  components: {
    Item,
  },
  data: function () {
    return {
      page: 1,
      news,
    };
  },
};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
}

.post-content /deep/ p {
  margin-bottom: 0.2em !important;
}

.posts {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
}

.post {
  background: white;

  &:first-child {
    margin: 0;
  }
}

.post-inner {
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    display: block;
    margin-top: 20px;
  }
}

.link-box {
  text-align: right;
}

.paginator {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page {
  background: white;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  width: 32px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-right: 1px;
  cursor: pointer;
  font-family: Jost;
  font-weight: 700;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    background: #f0f0f0;
  }
}

.currentPage {
  background: #7ac1f0;
  border-color: #5ca9db;

  &:hover {
    background: #5ca9db;
  }
}

a {
  margin-top: 8px;
  color: black;
  display: inline-block;
}
</style>
