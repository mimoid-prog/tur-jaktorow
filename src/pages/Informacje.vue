<template>
  <Layout>
    <div class="information">
      <h2 class="secondaryTitle viewTitle">Informacje</h2>
      <div class="content">
        <p>
          Strona
          <b>tur-jaktorow.pl</b> to oficjalna strona Jaktorowskiego klubu
          piłkarskiego Tur Jaktorów.
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
        <p class="changes-text">
          Masz jakieś uwagi/spostrzeżenia dotyczące strony lub pomysł co można
          ulepszyć/poprawić?
        </p>
        <p>Chcesz się o coś zapytać lub skontaktować w ramach współpracy?</p>
        <p class="info-heading">📧 Wyślij mail:</p>
        <p class="email">mateusz.szkop99@gmail.com</p>
        <p class="info-heading">🖼️ Strona internetowa:</p>
        <a href="https://mateuszszkop.pl" target="_blank" class="my-page">mateuszszkop.pl</a>
        <p class="copyright">© 2020 Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Informacje',
    meta: [
      {
        name: 'description',
        content:
          'Informacje na temat strony tur-jaktorow.pl. Zauważyłeś błąd lub masz pomysł na rozwój strony? Skontaktuj się z nami.',
      },
    ],
  },
  name: 'Information',
};
</script>

<style lang="scss" scoped>
.information {
  width: 100%;
}

.content {
  background: white;
  padding: 20px;
}

p {
  margin-top: 3px;
}

.info-heading {
  font-weight: 700;
  margin-top: 6px;
}

.email {
  background: #f1f1f1;
  padding: 5px 10px;
  border-radius: 5px;
}

.copyright {
  margin-top: 30px;
  font-weight: 700;
}

.changes-text {
  margin-top: 18px;
}

a {
  color: black;
}

.my-page {
  margin-left: 10px;
}

@media (min-width: 1024px) {
  .content {
    padding: 30px;
  }
}
</style>
