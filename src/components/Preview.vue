<template>
<div class="preview">
  <div class="user-info">
      <h3>Персональные данные</h3>
      <p>{{user.name}}, {{user.age}}</p>
  </div>
  <div class="children-info">
      <h3>Дети</h3>
       <div class="children-info__item" v-for="children in childrens" :key="children.id">
         <p class="children-info__text">{{children.name}}, {{children.age}}</p>
       </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Preview',
  computed: {
    ...mapGetters({
      user: 'user',
      childrens: 'childrens'
    })
  }
}
</script>

<style scoped>
.preview{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
.user-info{
    width: 197px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.children-info{
    width: 197px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;
}
.children-info__item{
    width: 143px;
    height: 44px;
    background-color: #F1F1F1;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 4px;
}
.children-info__text{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
