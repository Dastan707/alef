<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img class="logo-img" src="@/assets/logo.svg" alt="logo">
    </div>
    <div class="navbar-links">
        <p class="navbar-links__form">
         <router-link :to="{name: 'Form'}">
            Форма
         </router-link>
        </p>
        <p class="navbar-links__preview">
         <router-link :to="{name: 'Preview'}">
            Превью
         </router-link>
        </p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.navbar{
    max-width: 100%;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
    padding: 0px 51px 0px 51px;
}
.navbar-logo{
    width: 175px;
    height: 32px;
}
.navbar-links{
    width: 134px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 51px;
    cursor: pointer;
}
.navbar-links a {
    text-decoration: none;
    color: inherit;
}
</style>
