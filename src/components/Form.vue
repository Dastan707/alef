<template>
  <form @submit.prevent="save">
      <div class="user-info">
       <p class="title-text">Персональные данные</p>
       <div class="form-item">
         <label for="name" class="form-text">Имя</label>
         <input type="text" v-model="userData.name" class="form-input" id="name">
      </div>
      <div class="form-item">
         <label for="age">Возраст</label>
         <input type="text" v-model="userData.age" class="form-input" id="age">
      </div>
      </div>
      <div class="user-children">
        <div class="user-children__add">
        <p>Дети (макс. 5)</p>
        <button v-if="childrens.length <= 4" class="button-add" @click.prevent="addChild">+ Добавить ребенка</button>
        </div>
        <div class="user-children__group" v-for="children in childrens" :key="children.id">
          <div class="user-children__item">
              <label for="name">Имя</label>
              <input type="text" v-model="children.name" class="children-input" id="name">
          </div>
          <div class="user-children__item">
              <label for="age">Возраст</label>
              <input type="text" v-model="children.age" class="children-input" id="age">
          </div>
          <p class="delete-text" @click.prevent="deleteChild(children.id)">Удалить</p>
        </div>
      </div>
      <div v-if="childrens.length" class="form-button">
      <button class="button-save" type="submit">Сохранить</button>
      </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Form',
  data () {
    return {
      userData: {
        name: '',
        age: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
      childrens: 'childrens'
    })
  },
  methods: {
    save () {
      this.$store.dispatch('saveUser', this.userData)
        .then(() => {
          this.userData = {}
        })
      this.$store.dispatch('saveChild', this.childrens)
    },
    addChild () {
      this.$store.dispatch('addChild', {
        name: '',
        age: '',
        id: Date.now()
      })
    },
    deleteChild (childId) {
      this.$store.dispatch('deleteChild', childId)
    }
  }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title-text{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
}
.delete-text{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #01A7FD;
    cursor: pointer;
}
form label{
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.48);
}
.user-info{
    width: 616px;
    height: 166px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.form-item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 616px;
    height: 100%;
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    padding: 6px 16px;
}
.user-info div:nth-child(2){
    margin-bottom: 10px;
}
.form-input{
    width: 584px;
    height: 30px;
    border: none;
    outline: none;
}
.user-children{
    width: 616px;
    height: 100%;
    margin-top: 34px;
}
.user-children__add{
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
}
.button-add{
    width: 204px;
    height: 44px;
    border: 2px solid #01A7FD;
    box-sizing: border-box;
    border-radius: 100px;
    color: #01A7FD;
    background-color: white;
}
.user-children__group{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
.user-children__group div:nth-child(2){
    margin: 0px 18px 0px 18px;
}
.user-children__item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 260px;
    height: 44px;
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    padding: 6px 16px;
}
.children-input{
    width: 228px;
    height: 30px;
    border: none;
    outline: none;
}
.form-button{
    width: 616px;
    display: flex;
    align-items: flex-start;
}
.button-save{
    width: 118px;
    height: 44px;
    background: #01A7FD;
    border-radius: 100px;
    border: 2px solid #01A7FD;
    color: white;
}
</style>
