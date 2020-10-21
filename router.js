/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

//查询实时数据
router.get('/box-data', service.getBoxData);


//优化后
//查询垃圾回收总量
router.get('/recovery', service.getRecoveryTotal);

//监测-天
router.get('/monitorDay', service.getMonitorDay);

//监控-周
router.get('/monitorWeek', service.getMonitorWeek);

//监控-月
router.get('/monitorMonth', service.getMonitorMonth);

//监控-年
router.get('/monitorYear', service.getMonitorYear);

//展示每个智箱的具体数据
router.get('/boxList', service.getBoxList);

//人群预测和垃圾总量预测
router.get('/predict', service.getPredict);

//垃圾箱--实时数据变化情况
router.get('/boxDetail', service.getBoxDetail);
module.exports = router;