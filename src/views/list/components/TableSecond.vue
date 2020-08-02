<!--
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-30 19:18:00
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 21:35:53
--> 
<template>
    <div>
        <thead>
            <tr>
                <th v-for="(item, index) in tableHeader" :key="index" class="header">
                    <el-input v-model="item.title" placeholder="请输入内容" @change="dataChange"></el-input>
                </th>
            </tr>
        </thead>
        <tr v-for="(title, idx) in tableData" :key="idx">
            <td v-for="(data, i) in title" :key="i" class="content">
               <el-input v-model="data.title" placeholder="请输入内容" @change="dataChange"></el-input>
            </td>
        </tr>
        <el-button style="{ margin: '20px' }" @click="addRowData">添加一项（一行一列）</el-button>
    </div>
</template>
 
<script>
export default {
    name: 'TableSecond',
    data() {
        return {
            // tableHeader: ['相关系数', '资产1', '资产2', '资产3'],
            tableHeader: [{
                title: '相关系数'
            },{
                title: '资产1'
            },{
                title: '资产2'
            },{
                title: '资产3'
            }],
            tableData: [
                [{
                  title: '资产1'
                },{
                  title: 0
                },{
                  title: 0
                },{
                  title: 0
                }],
                [{
                  title: '资产2'
                },{
                  title: 0
                },{
                  title: 0
                },{
                  title: 0
                }]
            ]
        }
    },
    methods: {
        /**
         * @description: 增加一行
         */
        addRowData() {
            this.tableHeader.push({
                title: '资产'
            })
            const dataLen = this.tableData[0].length
            let itemLine = [{
                title: '资产'
            }]
            for (let i = 1; i < dataLen; i++ ) {
              itemLine.push({
                  title: 0
              })
            }
            this.tableData.push(itemLine)
            this.tableData.forEach(item => {
                item.push({
                    title: 0
                })
            })
            console.log('.........', this.tableData)
        },
        dataChange() {
            let headerArr = []
            let tableArr = []
            this.tableHeader.forEach(item => {
                headerArr.push(item.title)
            })
            this.tableData.forEach(table => {
                let arr = []
                table.forEach(item => {
                    arr.push(item.title)
                })
                tableArr.push(arr)
            })
            tableArr.unshift(headerArr)
            this.$emit('getSecondData', tableArr)
        }
    }
}
</script>

<style lang="css">
.el-button  {
    margin-top: 20px;
}
.header {
    width: 200px;
    height: 50px;
    border: 1px solid #EBEEF5;
    padding: 0px 10px;
}
.content {
    width: 200px;
    height: 50px;
    color: #909399;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #EBEEF5;
    padding: 0px 10px;
}
</style>