<template>
    <div class="null">
        <div><img src="..\assets\null.png">开发中...</div>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .null div{
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 30px;
        margin-top:10%
    }
    img{
        max-width: 150px;
        height: auto;
        margin-right:20px;
    }
</style>
