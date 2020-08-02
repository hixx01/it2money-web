<!--
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-08-02 21:23:41
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 21:27:42
-->
<template>
    <div>
        <el-table
            :data="result"
            border>
            <el-table-column
                prop="name"
                label="资产组合名称">
            </el-table-column>
            <el-table-column
                prop="expect"
                label="期望">
            </el-table-column>
            <el-table-column
                prop="var"
                label="方差">
            </el-table-column>
            <el-table-column
                prop="stdev"
                label="标准差">
            </el-table-column>
            <el-table-column
                prop="weight"
                label="权重">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'TableFirst',
    props: [ 'result' ],
    methods: {}
}
</script>

<style lang="css">
.el-button  {
    margin: 10px 0 40px;
}
</style>