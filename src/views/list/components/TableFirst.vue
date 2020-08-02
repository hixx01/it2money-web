<!--
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-30 19:18:00
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 20:59:42
--> 
<template>
    <div>
        <el-table
            :data="tableData"
            border>
            <el-table-column
                prop="name"
                label="资产名称">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.name" @change="value => dataChange(value, scope, 'name')"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                prop="expect"
                label="日收益率均值">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.expect" @change="value => dataChange(value, scope, 'expect')"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                prop="stdev"
                label="日收益率标准差">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.stdev" @change="value => dataChange(value, scope, 'stdev')"></el-input>
                </template>
            </el-table-column>
        </el-table>
        <el-button style="{ margin: '20px' }" @click="addRowData">添加一行</el-button>
    </div>
</template>

<script>
export default {
    name: 'TableFirst',
    data() {
        return {
            tableData: [{
                name: '资产', // 资产名称
                expect: '', // 日收益率均值
                stdev: '' // 日收益率标准差
                }, {
                name: '资产',
                expect: '',
                stdev: ''
                }, {
                name: '资产',
                expect: '',
                stdev: ''
            }]
        }
    },
    methods: {
        /**
         * @description: 更改表格数据
         * @param {String} value 更改后的数据
         * @param {Object} scope 整行数据 
         * @param {String} key key值 
         * @return: 
         */
        dataChange(value, scope, key) {
            this.tableData[scope.$index][key] = value
            this.$emit('getDataFirst', this.tableData)
        },
        /**
         * @description: 增加一行
         */
        addRowData() {
            this.tableData.push({
                name: '资产',
                expect: '',
                stdev: ''
            })
        }
    }
}
</script>

<style lang="css">
.el-button  {
    margin: 10px 0 40px;
}
</style>