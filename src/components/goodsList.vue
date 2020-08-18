<template>
    <div name="show">
        <ul class="goodList">
            <li v-for="goods in list" :key="goods.goodName">
                <img v-bind:src="goods.img" alt="">
                <p>{{goods.goodName}}</p>
            </li>
        </ul>
    </div>
</template>
<style>
    .goodList li{
        width: 200px;
        height: 200px;
        list-style: none;
        float: left;
        font-size: 9px;
        color: red;
        margin-bottom: 30px;

    }
    .goodList li img{
        width: 180px;
        height: 180px;
    }

</style>
<script type="text/javascript">
export default {
    name:"show",
    data(){
        var obj=this;
        var url = ""
        if(obj.goodId==1){
            url="json/bjb.json";
        }else if(obj.goodId==2){
            url="json/shouji.json";
        }else{
            url="json/bjb.json"
        }
        this.$Http.get(url).then(function(res){
            obj.list = res.data;
        })
        return{
            list:[]
        }
    },
    props:{
        goodId:Number
    },
    watch:{
        goodId(){
            var obj = this;
            var url="";
            if(obj.goodId==1){
                url="json/bjb.json"
            }else if(obj.goodId==2){
                url="json/shouji.json"
            }
            this.$Http.get(url).then(function(res){
            obj.list = res.data;
        })
        return{
            list:[]
        }
        }
    }
}
</script>