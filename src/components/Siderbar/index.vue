<template>
    <el-aside width="200px">
        <el-menu :router="true" :default-active="defaultActive">
            <el-menu-item v-for="(item, index) in menuList" :index="String(index)" :key="index" :route="{ name: item.name }">
                {{ item.title }}
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
// import Vue from 'vue'
export default {
    name: 'Siderbar',
    data() {
        return {
            defaultActive: '0',
            menuList: [{
                title: '首页',
                name: 'List'
            }]
        }
    }
}
</script>

<style lang="css">
.el-aside {
    display: inline-block;
}
.el-menu {
    background-color: #fff;
    color: #1989fa;
    height: 100%;
}
</style>