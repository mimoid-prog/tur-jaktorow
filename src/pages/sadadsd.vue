<template>
  <Layout>
    <div id="news" class="news">
      <h2 class="secondaryTitle viewTitle">Aktualności</h2>
      <div class="posts">
        <div class="post" v-for="edge in $page.posts.edges" :key="edge.node.id">
          <Item>
            <template v-slot:title>{{ edge.node.date }}</template>
            <template v-slot:content>
              <div class="post-inner">
                <!-- <g-image :src="edge.node.image" /> -->
                <div class="post-content" v-html="edge.node.content"></div>
                <g-image :src="edge.node.image" />
              </div>
            </template>
          </Item>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPosts(filter: { published: { eq: true }}, sortBy: "date") {
    edges {
      node {
        id
        title
        content
        demo
        date(format: "DD.MM.YYYY")
        path
        image
      }
    }
  }
}
</page-query>

<script>
import Item from '@/components/Item.vue';

export default {
  metaInfo: {
    title: 'Aktualności',
  },
  name: 'Aktualności',
  components: {
    Item,
  },
  data: function () {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
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
</style>
