<template>
    <div style="height:100vh;display:flex;align-items:center;justify-content:center;background-color:rgba(186, 253, 253, 0.212);w;overflow: hidden">
        <!-- 超出隐藏 （overflow: hidden）-->
        <!-- 边框变成钝角(border-radius:5px)(超出隐藏可解决边框钝角化后因被图片覆盖而仍保持直角的情况) -->
        <div style ="display:flex;background-color:white;width:50%;border-radius:5px;overflow: hidden">
            <!-- 拆成左右两个部分，其中左边放图片，右边放登录框 -->
            <div style ="flex:1;display: flex">
                <img src="@/assets/圣光迪莫.png" alt="" style="width:100%"  >
            </div>
            <!-- 登录框 -->
            <div style ="flex:1;diplay: flex;align-items: center;justify-content:center;padding:10px 20px">
                <el-form :model="user">
                    <div style="font-size: 20px;font-weight: bold;text-align: center;margin-bottom: 20px">
                        登录
                    </div>
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user" size="medium" placeholder="请输入账号" v-model="user.username">
                    </el-input>
                </el-form-item > 
                <el-form-item prop="password">                    
                    <el-input prefix-icon="el-icon-lock" size="medium" show-password placeholder="请输入密码" v-model="user.password">
                        <!-- 注：把输入的密码变成密文(show-password) -->
                    </el-input>
                </el-form-item>
                <!-- 验证码   -->
                <el-form-item prop="validCode"> 
                    <div style ="display:flex">
                        <el-input prefix-icon="el-icon-circle" size="medium" placeholder="请输入验证码" v-model="user.validCode" style ="flex:1">

                        </el-input>
                        <div style ="flex:1;display:flex;justify-content: center">
                            2333
                        </div>

                    </div>
                    </el-form-item>
                <!-- 登录按钮-->
                <el-button type="primary" style="width: 100%" @click="login">
                    登录
                </el-button>
                

            </el-form>  
            </div>
        </div>



    </div>   
</template>
<script>
import router from '@/router';

export default{
    name:"Login",
    data(){
        return{
            user:{
                username:'',
                password:'',
                validCode:'',

            }
        }
    },
    create(){

    },
    methods:{
        login(){
            router.push({ path: '/' })
        }
    }
    /*if
    return true*/

}
</script>
<style scoped>

</style>