/*************************************

项目名称：番薯小说-解锁VIP
下载地址：https://t.cn/A6CX524j
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/ggs\.manmeng168\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fanshuxiaoshuo.js

[mitm]

hostname = ggs.manmeng168.com

*************************************/


const vipa = "/ios/user/info";
const vipb = "/user/info";
var chxm1023 = JSON.parse($response.body);

if ($request.url.indexOf(vipa) != -1) {
	chxm1023.data.userInfo.vip = true;
	chxm1023.data.userInfo.sm_enable = true;
	chxm1023.data.userInfo.vip_end_time = 4092599349000;
}

if ($request.url.indexOf(vipb) != -1) {
	chxm1023.data.vip = true;
	chxm1023.data.sm_enable = true;
	chxm1023.data.vip_end_time = 4092599349000;
}

$done({ body: JSON.stringify(chxm1023) });
