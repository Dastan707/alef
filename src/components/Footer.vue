<template>
  <div class="footer">
      <div class="footer-text">
       <p>all rights reserved</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer{
    width: 100%;
    height: 76px;
    background-color: #FAFAFA;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}
.footer-text{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-text p {
 margin: 30px 0px;
}
</style>
