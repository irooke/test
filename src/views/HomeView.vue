<template>
  <div>
      <el-container> 
          <!--  侧边栏-->
          <!-- 高度设置一个窗口大小 -->
          <el-aside :width="asideWidth" style="min-height:100vh;background-color:#1888ff">
            <div style="height:60px;color:white;display:flex;align-items:center;justify-content:center">
            
              广东工业大学
          
            </div>
                      <!-- border none去除菜单边框 -->
                <el-menu :collapse="isCollapse"  :isCollaspe-transtion ="false"
                                                  router background-color="#1999ff" 
                                                  style="border: none">

                             <!-- 一级菜单 -->
                            <el-menu-item index ="/">
                             
                                <i class="el-icon-house"></i>
                                  <span slot="title">首页</span>
                          
                            </el-menu-item>


                            <el-menu-item index="1">
                            
                                <i class="el-icon-menu"></i>
                                  <span slot="title">外出登记</span>
                             
                            </el-menu-item>
                </el-menu>
          </el-aside>
    

        <el-container> 
          <!-- 头部区域 -->
          <!-- 左侧面板 -->
        <el-header>
          <i class="el-icon-s-fold" style ="font-size:20px" @click="handleCollapse"></i>
            
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">我的</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">信息填报</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">事务管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 右侧面板 (justify-content: flex-end)-->
            <div style="flex: 1; display: flex; justify-content: flex-end; align-items: center">
              <i class="el-icon-quanping" @click="handleFullScreen" style="font-size: 25px"></i>
              <el-dropdown placement="bottom">
              <!-- 字体与图标对齐 -->
              <div style="display: flex; align-items: center; cursor: pointer">
              <span>学生</span>
              <img src="@/assets/圣光迪莫.png" alt="" style="width: 40px; height: 40px; margin: 0 5px">
              <span>欢迎你！</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            </div>
            

        </el-header>



          <!-- 主体区域 -->
        <e-main>
            <div>
              <span>概览</span>
            </div>
            <div style="font-size: 2em;box-shadow: 0 0 10px rgba(0,0,0,.1);padding: 10px 20px">
              <span>学生工作系统管理后台</span>
            </div>
            <div style="box-shadow: 0 0 10px rgba(0,0,0,.1); padding: 10px 20px">
              <span>欢迎您</span>
            </div>

        </e-main>

        </el-container>
          

        </el-container>
    </div>  

  </template>





<script>
  export default{
  name:'HomeView',
  
  data(){
     return{
     isCollaspe: false,//不收缩（对应el-ui里的collaspe收缩菜单返回值）    加逗号。。。。
     asideWidth:'200px'

      }
    },//记得加逗号。。。
     methods:{
      handleCollapse(){
        this.isCollaspe =!this.isCollaspe//点击后变成相反的值，以便能实现收缩和展开
        this.asideWidth = this.isCollaspe ? '50px' : '200px'
      }
     }
  }


</script>

<style>
/* 加一个2秒的伸缩动画效果（在上面代码中已取消了原动画效果"isCollaspe-transtion ="false""） */
.el-aside {
  box-shadow:2px 0 6px rgba(0,2,41,35);
  transition: width .2s;
}
.el-header{
  box-shadow:2px 0 6px rgba(0,2,41,35);
  display:flex;    /* 采用flex布局 */
  align-items :center;
}
.el-main{
  box-shadow:2px 0 6px rgba(0,2,41,35);
}
</style>









