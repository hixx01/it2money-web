<!--
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-29 20:49:25
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 21:39:00
-->
<template>
    <el-header>
        <div>it2money</div>
    </el-header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="css">
.el-header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    line-height: 60px;
    z-index: 1500;
    padding: 0 20px;
    color: #fff;
    background-color: #409eff;
}
.el-header div {
    font-size: 20px;
}
</style>