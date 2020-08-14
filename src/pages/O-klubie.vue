<template>
  <Layout>
    <div class="about">
      <h2 class="secondaryTitle viewTitle">O klubie</h2>
      <div class="content">
        <div class="box">
          <div class="header">
            <g-image src="@/assets/images/logos/tur.jpg" alt="Tur Jaktorów logo" />
            <h3>Ludowy Klub Sportowy</h3>
            <h3>Tur Jaktorów</h3>
          </div>
          <div class="infoBox">
            <div class="info">
              <h3 class="subtitle">📝 Dane:</h3>
              <p>
                <span>Prezes:</span> Bronisław Świdlicki
              </p>
              <p>
                <span>Miejscowość:</span> Jaktorów, Mazowieckie
              </p>
              <p>
                <span>Ulica:</span> Warszawska 88
              </p>
              <p>
                <span>Kontakt z klubem:</span>
                {{ " " }}
                <a href="tel:468565132">46 856 51 32</a>
              </p>
              <p>
                <span>Fanpage:</span>
                {{ " " }}
                <a
                  href="https://www.facebook.com/lksturjaktorow"
                  target="_blank"
                >www.facebook.com/lksturjaktorow</a>
              </p>
              <h3 class="subtitle">🏟️ Stadion:</h3>
              <p>
                <span>Liczba miejsc:</span> 300 miejsc siedzących
              </p>
              <p>
                <span>Boisko:</span> 105m x 60m
              </p>
              <p>
                <span>Murawa:</span> Naturalna
              </p>
              <h3 class="subtitle">🏦 Konto bankowe:</h3>
              <p>LKS „TUR” Jaktorów</p>
              <p>ul. Warszawska 88</p>
              <p>
                <span>Nr konta:</span> 07 1240 3350 1111 0000 3550 3002
              </p>
            </div>
          </div>
        </div>
        <g-image
          src="../assets/images/photos/kadra.jpg"
          class="photo"
          alt="Kibice na stadionie Tura"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'O klubie',
    meta: [
      {
        name: 'description',
        content:
          'Dane o klubie piłkarskim Tur Jaktorów, o miejscowym stadionie. Skontaktuj się z klubem przez telefon lub facebooka.',
      },
    ],
  },
  name: 'About',
};
</script>

<style lang="scss" scoped>
.content {
  background: white;
  padding: 20px;
}

.header {
  text-align: center;
}

.info {
  margin: 30px auto 0;

  .subtitle {
    margin: 10px 0 5px;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    margin-bottom: 2px;
    max-width: 100%;
    word-wrap: break-word;

    span {
      font-weight: 500;
      display: block;
    }
  }

  a {
    color: black;
  }
}

.photo {
  width: 100%;
  height: 300px;
  margin-top: 20px;
  object-fit: cover;
}

.source {
  margin-top: 3px;
}

@media (min-width: 640px) {
  .info {
    p {
      span {
        display: initial;
      }
    }
  }
}

@media (min-width: 850px) {
  .header {
    font-size: 24px;
  }
}

@media (min-width: 1024px) {
  .content {
    padding: 30px;
  }
}

@media (min-width: 1360px) {
  .photo {
    height: 400px;
    margin-top: 30px;
  }

  .box {
    display: flex;
  }

  .header {
    margin-right: 60px;
    text-align: center;
  }

  .info {
    margin-top: 0;

    .subtitle {
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
