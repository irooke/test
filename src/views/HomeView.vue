<template>
  <div>
      <el-container> 
          <!--  侧边栏-->
          <!-- 高度设置一个窗口大小 -->
          <el-aside style="width:200px;min-height:100vh;background-color:#1888ff">
            <div style="height:60px;color:white;display:flex;align-items:center;justify-content:center">
            
              广东工业大学
          
            </div>
                      <!-- border none去除菜单边框 -->
                <el-menu background-color="#1999ff" style="border: none">

                             <!-- 一级菜单 -->
                           <el-menu-item>
                            <template solot="title">
                            <i class="el-icon-house"></i>
                            <span>首页</span>
                            </template>
                            </el-menu-item>


                              <el-menu-item>
                              <template solot="title">
                              <i class="el-icon-menu"></i>
                              <span>外出登记</span>
                                </template>
                              </el-menu-item>
                </el-menu>
          </el-aside>
    

        <el-container> 
          <!-- 头部区域 -->
        <el-header>
            头部区域

        </el-header>
          <!-- 主体区域 -->
        <e-main>
            主体区域

        </e-main>

        </el-container>
          

        </el-container>
    </div>  

  </template>





<script>
  export default{
  name:'HomeView'
  }
</script>










