<template>
  <header class="header">
      <router-link class="logo" :to="{name: 'form'}">
          <img src="/src/assets/logo.png" alt="logo">
      </router-link>
      <nav class="nav">
          <router-link :to="{name: 'form'}" class="nav__item">
            Форма
          </router-link>
          <router-link :to="{name: 'preview'}" class="nav__item">
              Превью
          </router-link>
      </nav>
  </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header {
    box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.1);
    height: 76px;
    display: flex;
    align-items: center;
    position: relative;
}

.logo {
    position: absolute;
    left: 92px;


}

.nav {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 24px;

    &__item {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
    }


}

@media screen and (max-width: 600px) {
  .logo {
    left: 20px;
  }

  .nav {
    margin: 0 20px 0 auto;
  }
}

</style>
