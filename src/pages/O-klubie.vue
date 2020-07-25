<template>
  <Layout>
    <div class="about">
      <h2 class="secondaryTitle viewTitle">O klubie</h2>
      <div class="content">
        <div class="box">
          <div class="header">
            <img src="@/assets/images/logos/tur.jpg" alt="Tur Jaktorów logo" />
            <h3>Ludowy Klub Sportowy</h3>
            <h3>Tur Jaktorów</h3>
          </div>
          <div class="infoBox">
            <div class="info">
              <h3>Dane:</h3>
              <p><span>Rok założenia: </span>2001</p>
              <p>
                <span>Kontakt z klubem: </span
                ><a href="tel:468565132">+46 586 51 32</a>
              </p>
              <p><span>Prezes:</span> Bronisław Świdlicki</p>
              <p><span>Miejscowość:</span> Jaktorów, 93-313</p>
              <p><span>Ulica:</span> Warszawska 88</p>
              <p>
                <span>Fanpage: </span
                ><a
                  href="https://www.facebook.com/lksturjaktorow"
                  target="_blank"
                  >www.facebook.com/lksturjaktorow</a
                >
              </p>
              <h3>Stadion:</h3>
              <p><span>Liczba miejsc: </span>300 miejsc siedzących</p>
              <p><span>Boisko: </span>105m x 6m</p>
              <p><span>Murawa: </span>Naturalna</p>
              <h3>Konto bankowe:</h3>
              <p>LKS „TUR” Jaktorów</p>
              <p>ul. Warszawska 88</p>
              <p><span>Nr konta: </span>07 1240 3350 1111 0000 3550 3002</p>
            </div>
          </div>
        </div>
        <div class="photo"></div>
        <p class="source">Źródło: www.facebook.com/lksturjaktorow</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "O klubie",
  },
  name: "O klubie",
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
}

.content {
  background: white;
  padding: 20px;
}

.header {
  text-align: center;
}

.info {
  margin: 30px auto 0;
  display: inline-block;

  p {
    margin-bottom: 2px;
  }

  span {
    font-weight: 500;
    color: #2e2e2e;
  }

  h3 {
    margin-top: 10px;
  }
}

.photo {
  width: 100%;
  height: 200px;
  background: url("../assets/images/photos/kadra.jpg");
  background-position: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-top: 20px;
}

.source {
  margin-top: 3px;
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
    height: 300px;
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
  }

  h3:first-child {
    margin: 0;
  }
}
</style>
