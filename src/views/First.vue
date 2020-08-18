<template>
    <div class="main">
        <div class="left">
            <Left></Left>
        </div>
        <div class="right">
            <div class="top">
                <img src="images/title.jpg" alt="">
            </div>
            <div class="buttom">
                <Right></Right>
            </div>
        </div>
    </div>
</template>

<style type="text/css">

    *{
        padding: 0;
        margin: 0;
    }
    .main{
        width: 1200px;
        margin: 20px auto;
    }
    .left{
        width: 100px;
        float: left;
        margin-right: 10px;
    }
    .right{
        width: 1000px;
        margin-left: 10px;
        float: left;
    }
    
    .top img{
        height: 200px;
        width: 1000px;
    }
    .left,.right{
        background-color: #f5f5ff;
        height: 500px;
    }
</style>
<script  type="text/javascript">
    import Left from '../components/Left.vue'
    import Right from '../components/Right.vue'
   export default{
        // 注册组件
        components:{
            Left,
            Right
        }
    }
</script>