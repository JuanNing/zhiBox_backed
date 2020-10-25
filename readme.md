# 智箱云路后台接口文档
> 基准路径： http://localhost:3001/

## 获取实时垃圾桶数据
- 路径：box-data
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{"LOG_ID":53,"TIME":"2020-09-05 16:01:01","TEMP":"26","HUMI":"61","NUMBER":"3","WEIGHT1":"1","WEIGHT2":"4","WEIGHT3":"0","WEIGHT4":"18","SMOKE":"0.556","VALUME1":"10","VALUME2":"20","VALUME3":"30","VALUME4":"25","PEOPLE":"17","POST":"1","TYPE1":"16","STATE":"0","STATE1":"1"}]
```



# :cherry_blossom:优化后

## 查询垃圾回收总量

- 路径：recovery
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{id: 1, recycled: 102400, hazardous: 81212, kitchen: 9280, other: 13600}]
```

## 获取一天的垃圾桶数据
- 路径：monitorDay
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{id: 1, day: 1, recycled: 120, hazardous: 100, kitchen: 60, other: 10},…]
```

## 获取一周垃圾桶数据
- 路径：monitorWeek
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{id: 1, week: 1, recycled: 780, hazardous: 300, kitchen: 1200, other: 230},…]
```

## 获取每月垃圾桶数据
- 路径：monitorMonth
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{id: 1, month: 1, recycled: 120, hazardous: 80, kitchen: 30, other: 23},…]
```

## 获取每年垃圾桶数据

- 路径：monitorYear
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{id: 1, year: 19, recycled: 23134, hazardous: 5432, kitchen: 12432, other: 5436},…]
```

## 获取每个垃圾箱的具体数据

- 路径：boxList
- 请求参数：id (目前可选值为1,2,3,4)
- 请求类型：get
- 响应结果

```json
[{id: 1, boxNum: 1, capacity: 60, temp: 26, gas: 548, recycled: 780, hazardous: 300, kitchen: 1200,…}
```

## 获取人群和垃圾总量的预测

- 路径：predict
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{id: 1, month: 1, people: 1036, recycled: 1666, hazardous: 327, kitchen: 500, other: 327},…]
```

## 获取垃圾箱实时数据的变化情况

**更改了体积的处理，直接返回具体的百分比**

- 路径：boxDetail
- 请求参数：无
- 请求类型：get
- 响应结果

```json
[{LOG_ID: 221, TIME: "2020-09-11 17:24:35", TEMP: "29", HUMI: "46", NUMBER: "3", WEIGHT1: "2",…}]
```

