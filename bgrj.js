/*************************************

项目名称：文档手机版-办公软件
下载地址：https://t.cn/A6CUJehI
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/www\.spacefree\.top\/api\/Order\/validateOrder url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bgrj.js

[mitm]

hostname = www.spacefree.top

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.datas = {
    "subscript_expire_time" : 4092599349,
    "origin_trade_no" : "490001292785753"
  };


$done({body : JSON.stringify(chxm1023)});
