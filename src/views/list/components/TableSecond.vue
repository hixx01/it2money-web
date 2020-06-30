<!--
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-30 19:18:00
 * @LastEditors: xiexing
 * @LastEditTime: 2020-06-30 20:54:26
--> 
<template>
    <div>
        <el-table
            :data="tableData"
            border>
            <el-table-column
                prop="assetsName"
                label="资产名称">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.assetsName" @change="value => dataChange(value, scope, 'assetsName')"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                prop="averageDaily"
                label="日收益率均值">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.averageDaily" @change="value => dataChange(value, scope, 'averageDaily')"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                prop="deviationDaily"
                label="日收益率标准差">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.deviationDaily" @change="value => dataChange(value, scope, 'deviationDaily')"></el-input>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" style="{ margin: '20px' }" @click="addRowData">添加一行</el-button>
    </div>
</template>

<script>
export default {
    name: 'TableSecond',
    data() {
        return {
            tableData: [{
                assetsName: '资产', // 资产名称
                averageDaily: '', // 日收益率均值
                deviationDaily: '' // 日收益率标准差
                }, {
                assetsName: '资产',
                averageDaily: '',
                deviationDaily: ''
                }, {
                assetsName: '资产',
                averageDaily: '',
                deviationDaily: ''
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
        },
        /**
         * @description: 增加一行
         */
        addRowData() {
            this.tableData.push({
                assetsName: '资产',
                averageDaily: '',
                deviationDaily: ''
            })
        }
    }
}
</script>

<style lang="css">
.el-button  {
    margin-top: 20px;
}
</style>