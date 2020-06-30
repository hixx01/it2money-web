<template>
    <el-aside width="200px">
        <el-menu :default-openeds="['0']" :router="true">
            <el-submenu v-for="(item, i) in menuList" :key="i" :index="String(i)">
                <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                <el-menu-item-group v-for="(key, j) in item.child" :key="j">
                    <el-menu-item :index="String(j)" :route="{ name: key.name }">
                        {{ key.title }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
    name: 'Siderbar',
    data() {
        return {
            menuList: [{
                title: '导航',
                icon: 'el-icon-menu',
                child: [
                    {
                        title: '列表',
                        name: 'List'
                    }
                ]
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