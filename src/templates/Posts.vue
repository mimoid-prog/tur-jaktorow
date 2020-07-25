<template>
  <Layout>
    <div class="information">
      <h2 class="secondaryTitle viewTitle">Informacje</h2>
      <div class="content">
        <p>
          Strona Tur Jaktorów pod adresem
          <b>tur-jaktorow.now.sh</b> to nieoficjalna, fanowska strona
          Jaktorowskiego klubu piłkarskiego.
        </p>
        <p>
          Masz jakieś uwagi/spostrzeżenia dotyczące strony lub pomysł co można
          ulepszyć/poprawić?
        </p>
        <p>Chcesz się o coś zapytać lub skontaktować w ramach współpracy?</p>
        <p class="contact-me">Napisz do mnie:</p>
        <p class="email">mateusz.szkop99@gmail.com</p>
        <p class="copyright">© 2020 Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Information",
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

  &:first-child {
    margin-bottom: 14px;
  }
}

.contact-me {
  font-weight: 700;
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

@media (min-width: 1024px) {
  .content {
    padding: 30px;
  }
}
</style>
