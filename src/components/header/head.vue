<template>
    <header id='head_top'>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)"></section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
    </header>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        mounted(){
            //获取用户信息

        },
        props: ['headTitle', 'goBack'],
        methods: {
            
        }

    }

</script>

<style scoped>
#head_top {
	height: 30px;
}
.head_goback {
	width: 100%;
	height: 50px;
	background-color: red;	
} 
</style>
