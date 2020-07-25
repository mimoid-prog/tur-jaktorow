<template>
  <div id="layout" class="layout">
    <div class="container">
      <div class="layoutInner">
        <Navbar />
        <div class="view">
          <transition name="viewAnimation" appear>
            <main>
              <slot />
            </main>
          </transition>
        </div>
        <transition name="showPageUp">
          <a href="#layout" class="pageUp" v-if="showPageUp" @click="scrollToTop">
            <PageUp />
          </a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import PageUp from '~/assets/svgs/PageUp.svg';

export default {
  name: 'Default',
  components: {
    Navbar,
    PageUp,
  },
  data: function () {
    return {
      showPageUp: false,
    };
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (window.innerHeight / 2 < document.documentElement.scrollTop)
        this.showPageUp = true;
      else this.showPageUp = false;
    },
    scrollToTop: function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/Jost-Regular.woff') format('woff2'),
    url('../assets/fonts/Jost-Regular.woff') format('woff'),
    url('../assets/fonts/Jost-Regular.ttf') format('ttf'),
    url('../assets/fonts/Jost-Regular.eot') format('eot');
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  src: url('../assets/fonts/Jost-Medium.woff2') format('woff2'),
    url('../assets/fonts/Jost-Medium.woff') format('woff'),
    url('../assets/fonts/Jost-Medium.ttf') format('ttf'),
    url('../assets/fonts/Jost-Medium.eot') format('eot');
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  src: url('../assets/fonts/Jost-Bold.woff2') format('woff2'),
    url('../assets/fonts/Jost-Bold.woff') format('woff'),
    url('../assets/fonts/Jost-Bold.ttf') format('ttf'),
    url('../assets/fonts/Jost-Bold.eot') format('eot');
}
</style>

<style lang="scss" scoped>
.layout {
  background: #ae0505;
  width: 100%;
  min-height: 100vh;
}

.layoutInner {
  position: relative;
}

.view {
  padding: 30px 0;
  width: 100%;
}

.viewAnimation-enter-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease;
}

.viewAnimation-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.pageUp {
  position: fixed;
  display: block;
  width: 50px;
  height: 50px;
  bottom: 30px;
  right: 20px;

  .bgArrow {
    fill: #000;
  }

  .arrow {
    fill: #fff;
  }
}

.showPageUp-enter-active,
.showPageUp-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.showPageUp-enter,
.showPageUp-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (min-width: 900px) {
  .layoutInner {
    display: flex;
  }

  .view {
    padding: 0;
  }

  .viewAnimation-enter-active {
    transition: transform 0.8s ease-out, opacity 0.8s ease;
  }

  .viewAnimation-enter {
    transform: translateY(-80vh);
  }

  .pageUp {
    right: auto;

    .bgArrow {
      fill: #fff;
    }

    .arrow {
      fill: #ae0505;
    }
  }
}
</style>
