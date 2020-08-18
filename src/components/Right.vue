<template>
    <div>
        <div v-if="value==1">
            <GoodsList :goodId="1"></GoodsList>
        </div>
        <div v-else-if="value==2">
            <GoodsList :goodId="2"></GoodsList>
        </div>
        <div v-else-if="value==3">
            333333333333
        </div>
        <div v-else-if="value==4">
            444444444444
        </div>
        <div v-else>
            <GoodsList :goodId="0"></GoodsList>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Msg from './msg.js'
    import GoodsList from './goodsList.vue'
    export default {
        data(){
            return{
                value:0
            }
        },
        mounted:function(){
            var _this=this
            Msg.$on('val',function(m){
                _this.value=m;
            })
        },
        components:{
            GoodsList
        }
    }
</script>