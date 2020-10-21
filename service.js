const data = require('./data.json');
const path = require('path'); //这个没有用到，可以删除
const fs = require('fs'); //这个没有用到，可以删除
const connection = require('./dao')
    //连接数据库
connection.connect();

// 关闭数据库
//   connection.end();

//实时数据查询
exports.getBoxData = (req, res) => {
    let data = connection.query('select * from `Case_Data` order by `LOG_ID` desc limit 0,1;', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}


//首页-垃圾回收总量查询
exports.getRecoveryTotal = (req, res) => {
    let data = connection.query('SELECT * FROM `recoveryTotal`', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//首页四类垃圾监控-以天为单位查询
exports.getMonitorDay = (req, res) => {
    let data = connection.query('SELECT * FROM `monitor_day`', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//首页-监控-周
exports.getMonitorWeek = (req, res) => {
    let data = connection.query('SELECT * FROM `monitor_week`', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//首页-监控-月
exports.getMonitorMonth = (req, res) => {
    let data = connection.query('SELECT * FROM `monitor_month`', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//首页-监控-年
exports.getMonitorYear = (req, res) => {
    let data = connection.query('SELECT * FROM `monitor_year`', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//智箱/boxlist?id=1,通过url的id
exports.getBoxList = (req, res) => {
    const id = req.query.id
    let data = connection.query(`SELECT * FROM boxList where boxNum=${id}`, function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//预测
exports.getPredict = (req, res) => {
    let data = connection.query('SELECT * FROM `predict`', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}


//实时数据取出再写入数据库处理
exports.getBoxDetail = (req, res) => {
    let data = connection.query('select * from `Case_Data` order by `LOG_ID` desc limit 0,1;', function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        let value1 = parseInt(((60 - results[0].VALUME1) / 60) * 100)
        let value2 = parseInt(((60 - results[0].VALUME2) / 60) * 100)
        let value3 = parseInt(((60 - results[0].VALUME3) / 60) * 100)
        let value4 = parseInt(((60 - results[0].VALUME4) / 60) * 100)
        results[0].recycled = value1
        results[0].hazardous = value2
        results[0].kitchen = value3
        results[0].other = value4
        res.json(results);
    });
}