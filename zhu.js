
/***************************************

脚本功能：知乎 盐故事+知识+书刊+测评
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-02-01
问题反馈：QQ+55749353
作者QQ:55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
作者忠告: 如果你是大佬请不要盗用此包，创作不易谢谢各位
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法

**************************************

[mitm]

hostname = www.zhihu.com, api.zhihu.com, zhuanlan.zhihu.com, appcloud2.zhihu.com, m-cloud.zhihu.com,116.136.170.105

[rewrite_local]

^https:\/\/api\.zhihu\.com\/commercial_api\/launch_v2\? url reject-dict
^https:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2\? url reject-dict
^http[s]?:\/\/.*zhihu\.(com|cn)\/(sku\/reversion_sku_ext\?sku_id|remix-web\/paid_columns|km_player\/album).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/yxuan.js
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/zhu.js

***************************************/



;var encode_version = 'jsjiami.com.v5', fzklq = '__0xf45bc',  __0xf45bc=['w4RCAMOvQMObwqM=','bWbDqMKQwoHDnA8AwrfDusONccODwrbDpOeDp+WHuea2t+WLkeS8ieiCtCLCsOmhvemCoA==','PMKew4jDi3jCrQY=','wrQGKkw4YgrCmMKywqM3wpjDlDPDksKqw5vCp8KFF+WIluadow==','woJbRsO/FsOEw7cdw4w7w5vCjsKgw5PDhg==','K8KJw4w=','acK2wrXCjcO8wpvCrVnCsA==','U8Krwp7CkcOnFMOaNGxaGMOdFi4=','w5Edwrc=','b0jDsw==','54mq5p2c5Y6477y/ckDkvJvlr5TmnrblvL7nqIfvvqfovYTorZvml6vmj6jmiJDkuKTnm5PltpXkvJU=','5YqW6ZmR54mw5p2/5Y2F776WwoQF5Lyh5a+L5py75b2F56q5','w6zCnsO8MsOyw6c=','KXHDs8KHwoHDmg4x','w6/CscOhwrAgF8KnBMKTwpXDjcKLNA==','w5XDimJAQg==','PHTDscKNwoE=','aEwd','woHCrVQ=','wrfCh8KFTMOj','woXCtQh1KQ==','w5TCmG7DrVo=','IhPDgA==','wp/CvH4=','HDvDvQ==','w6zCscOmwrAmF8KkBMKXwpXDi8KLNw==','XWkSwrzDpA==','RRo3YF4=','WTrCqg9i','wozCqsKVYsOM','CjPDnz9M','woNlbcK0w4I=','w6ZHMDDCkQ==','LnTDrcKIwow=','w6FGARjChA==','wp1KJsK2wqs=','wo1VJMKswrBBw6c=','woNVwqYgcQ==','f8K3wr/Cm8O1wp7Cpg==','Ej7Digk=','LGvDs8KXwprDnwQ=','w5PCmcKKUw==','wrXCt1IHw5DDmMOg','aXYc','woVIwro8bMO3LQ==','wo3Dm8KXw5AE','C8Oow4nDlG9kYg==','w6bChMO1MsOhw6fCqcOJwok=','w4fDhUvCtzI=','JcKOHidPw4DDkw==','w5vDjMOTb1phZx1cw7PDpWZ9wpHDuX8c','My3ChsOBGA==','wrbCo8KxwqM=','bFTDl8KSwoM=','wrLCgXbDpA==','w4JVEcOgRA==','wozDhsKWw4ATB8K3RhA=','woXDkcKS','BMK4w4zDpGI=','woJ0wpE9w4w=','w7/Duns=','TBjCv0bDvw==','cMOzXF/Cmw==','w6nDrVtGXA==','w6zCv8OGM8Oa','CTfDnRjDmQ==','wpvDviXCkcKW','Kw7CpcO6Lw==','wqQqOznCjg==','wobCvcK1UMOJ','b8O2UVbCsg==','wojCm8Kfwqtf','wohYRcOvLA==','GzLCjcOwDsOswrY=','wq4NCcKXwrXDlmk=','J8OMLsOyasOgw57CjcOKw77DiVBhwp/CoyPCiQ==','w5siwpTCjFQ=','wprDjsKZw4wX','wr8Sw4JtPA==','w5JCEsO2Rg==','wpnCgxU=','f8KMwpTDoQ==','JmrDu8KL','Bx3DmSnDsXEEw43DhA==','wqLCql0Xw5o=','w5UcwpjCqEY=','wqkQw5xrOg==','woUQMQ==','BjDDlhRmw4ZT','Sx4pXA==','wo0aNCnCuA==','w5VIHsOwTsOUwqM=','w5NfE8OmUcOMwq8OwpA=','VsOrekbChcOcw58=','KnbDr8KLwoc=','w6DCk8O4JMO+w7/CpQ==','fCTCiCVt','LcKUw5bDlHbCogY=','wrJsWsOk','UzvCh3DDpA==','w4leNivCnQ==','w4nDlw9fNg==','eMK6woXClsOU','wr90IcKVwpE=','MMKwPSdQ','woTDicKjw4Yx','w7EVC3Y/','bMKawpbCrcOq','ZcK7wpLCicOW','w5nDsWPCvi0=','wpo6AQTCmg==','w7rCpsO+LsOG','KsKvJBNL','OW3Dr8KuwpE=','wq9YO8Kxwo0=','w65MJsO2Ww==','wp/ClU8tw48=','w7ctwqvCmUk=','UcONWmzCuA==','LRDCk8OqLA==','wohoYQ==','w7PDrDY=','AcKSw4LDjFY=','wrE0w4RWDA==','wqhhwqEgw5s=','YBoVeko=','woBSwrosd8OyJ8OxQ0HDoCsOKsKUBw==','WcOCBHzCoXjCoUgsQ3nCnH7DtsKyCMKXd8K1w5PCnE3Dv8OnNATDhlkmdcO7wrDDv8OHw6xnfcOpw7rDl1HCiXDCj1RQRMOhw7pBwoQEPwNnw7bCqcKSwqRbEXM=','DDHDkRM=','wq4KBsKNwrQ=','wo9CIMKoaA==','wr5FYsK2w5Y=','w4rCq0vDn3s=','d2MvwrXDpA==','ZBfClGbDiw==','wp0aJSg=','Fw/Cl8OUJQ==','wo94XcKiw50=','QcOhZ0E=','Z8K/wpLDmDQ=','w45eaBzDow==','w4LDvWLCvAQ=','d2E4wrbDuw==','T1PDvw==','ZB7CtQ==','wpnDvxPCm8KI','w70ECk0j','VMKYTsO1Hw==','ZGkLwpLDtA==','wr9sUcOQKg==','wqTDngw=','HijCjcOgFcOpwrxow6ddw4pwwoXChMObFA==','QMOzwo3Dg8K6w5jDqwPDrsKTworDh37DncKaczPCqSlsFR8Mw57Clm3Dow56JmvDmsOpwo7Dhht+w614bSBwclDDviIIwp9nw50JM8OhUcO5wprCvsOMbsK6QhI=','woVnY8KY','ZCciJMO3','wpNAwqsNw7o=','QcKswprCqsOF','wrwvJsKDwp8=','wp1ES8KLw4I=','X8KCwrHDrRI=','wrrDuMK8w7IU','SMKRwpzCscOT','T1gOwofDuw==','wo5LwqgM','YBUNSX8=','wq7Dl8KuRw0=','woHCiQFb','w63CosK2acKA','wpV0ScO6Nw==','G03DkMK9wrw=','w7JsUBbDiw==','w6jDkSp3MA==','wrDDtsKsRB4=','w7V1NsOGdw==','FMK4w53DpQ==','wqHCqEQTw7w=','SH4wwqrDqQ==','aw8dw6E=','Z8OAZcOpHQ==','w5dOISzCog==','wpXCinoxw6k=','w77CrsKEecKY','IsKOCT9M','wrZ5WsOjE8Kp','ZDPChyF8wp0=','JhDDkA==','WBPCjw==','wrZ6wrw+w4I=','wrnDmMKsw5A3','FnfDksKywqM=','QFgOwrzDjg==','w73DsUPCojM=','fsKTwoHCr8OY','f0o6wqjDvg==','aD8DXXM=','A1zDjsKWwqI=','wp3DujPChMKu','c8OcRcO9Kw==','MhLCr8OtCg==','wrV8Y8Kuw7E=','WMK1woPCiMOB','wpHCisKPwo1d','a0nDgcKE','wq8Sw5w=','VcKEdMOfEcOBw64=','w7PCjmLDjElELE5Vwo7Cu8K3H8OzFsOFcXkmwp9hZWDCvwx2DcOxw4ZWw43DiMKV','cSYzEsOtUsO0woPCisOpw6c=','PWHDrcKIwpTDkAQ=','DATDlynCoz9Pw4DDkxDkvoLkuYY=','CjjCk8OvAMOjwrY=','woDDjcKqw5MKA8O8EwrDrR7Dog=='];(function(_0x35edb1,_0x2472d3){var _0x3d9922=function(_0x37e804){while(--_0x37e804){_0x35edb1['push'](_0x35edb1['shift']());}};var _0x471d43=function(){var _0x3e4f10={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1699ce,_0x2d7a15,_0x3e7b6b,_0x2e450c){_0x2e450c=_0x2e450c||{};var _0x4fedce=_0x2d7a15+'='+_0x3e7b6b;var _0x185f31=0x0;for(var _0x185f31=0x0,_0x48064a=_0x1699ce['length'];_0x185f31<_0x48064a;_0x185f31++){var _0x5a5e47=_0x1699ce[_0x185f31];_0x4fedce+=';\x20'+_0x5a5e47;var _0x1c810e=_0x1699ce[_0x5a5e47];_0x1699ce['push'](_0x1c810e);_0x48064a=_0x1699ce['length'];if(_0x1c810e!==!![]){_0x4fedce+='='+_0x1c810e;}}_0x2e450c['cookie']=_0x4fedce;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3443c2,_0x834c2){_0x3443c2=_0x3443c2||function(_0x56e849){return _0x56e849;};var _0x2be38f=_0x3443c2(new RegExp('(?:^|;\x20)'+_0x834c2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3aca38=function(_0x1c774d,_0x49ad4c){_0x1c774d(++_0x49ad4c);};_0x3aca38(_0x3d9922,_0x2472d3);return _0x2be38f?decodeURIComponent(_0x2be38f[0x1]):undefined;}};var _0x595dd4=function(){var _0x5e8aba=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5e8aba['test'](_0x3e4f10['removeCookie']['toString']());};_0x3e4f10['updateCookie']=_0x595dd4;var _0x295cae='';var _0xfbcfa1=_0x3e4f10['updateCookie']();if(!_0xfbcfa1){_0x3e4f10['setCookie'](['*'],'counter',0x1);}else if(_0xfbcfa1){_0x295cae=_0x3e4f10['getCookie'](null,'counter');}else{_0x3e4f10['removeCookie']();}};_0x471d43();}(__0xf45bc,0xca));var _0xa506=function(_0x56cb4c,_0x3e039c){_0x56cb4c=_0x56cb4c-0x0;var _0x21738d=__0xf45bc[_0x56cb4c];if(_0xa506['initialized']===undefined){(function(){var _0x55b0df=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xaf9ace='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x55b0df['atob']||(_0x55b0df['atob']=function(_0x3b88eb){var _0x3398c8=String(_0x3b88eb)['replace'](/=+$/,'');for(var _0x27c169=0x0,_0x20c1ea,_0x331c18,_0x44367a=0x0,_0x10c555='';_0x331c18=_0x3398c8['charAt'](_0x44367a++);~_0x331c18&&(_0x20c1ea=_0x27c169%0x4?_0x20c1ea*0x40+_0x331c18:_0x331c18,_0x27c169++%0x4)?_0x10c555+=String['fromCharCode'](0xff&_0x20c1ea>>(-0x2*_0x27c169&0x6)):0x0){_0x331c18=_0xaf9ace['indexOf'](_0x331c18);}return _0x10c555;});}());var _0x14f63c=function(_0xe29745,_0x3d737e){var _0xd5c6a0=[],_0x519ad4=0x0,_0x3dfe73,_0x7770ed='',_0x5ae2bf='';_0xe29745=atob(_0xe29745);for(var _0x48db04=0x0,_0x2f4797=_0xe29745['length'];_0x48db04<_0x2f4797;_0x48db04++){_0x5ae2bf+='%'+('00'+_0xe29745['charCodeAt'](_0x48db04)['toString'](0x10))['slice'](-0x2);}_0xe29745=decodeURIComponent(_0x5ae2bf);for(var _0x20fed4=0x0;_0x20fed4<0x100;_0x20fed4++){_0xd5c6a0[_0x20fed4]=_0x20fed4;}for(_0x20fed4=0x0;_0x20fed4<0x100;_0x20fed4++){_0x519ad4=(_0x519ad4+_0xd5c6a0[_0x20fed4]+_0x3d737e['charCodeAt'](_0x20fed4%_0x3d737e['length']))%0x100;_0x3dfe73=_0xd5c6a0[_0x20fed4];_0xd5c6a0[_0x20fed4]=_0xd5c6a0[_0x519ad4];_0xd5c6a0[_0x519ad4]=_0x3dfe73;}_0x20fed4=0x0;_0x519ad4=0x0;for(var _0x5a417f=0x0;_0x5a417f<_0xe29745['length'];_0x5a417f++){_0x20fed4=(_0x20fed4+0x1)%0x100;_0x519ad4=(_0x519ad4+_0xd5c6a0[_0x20fed4])%0x100;_0x3dfe73=_0xd5c6a0[_0x20fed4];_0xd5c6a0[_0x20fed4]=_0xd5c6a0[_0x519ad4];_0xd5c6a0[_0x519ad4]=_0x3dfe73;_0x7770ed+=String['fromCharCode'](_0xe29745['charCodeAt'](_0x5a417f)^_0xd5c6a0[(_0xd5c6a0[_0x20fed4]+_0xd5c6a0[_0x519ad4])%0x100]);}return _0x7770ed;};_0xa506['rc4']=_0x14f63c;_0xa506['data']={};_0xa506['initialized']=!![];}var _0x4ac4ce=_0xa506['data'][_0x56cb4c];if(_0x4ac4ce===undefined){if(_0xa506['once']===undefined){var _0xc7f0b1=function(_0x3378b5){this['rc4Bytes']=_0x3378b5;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xc7f0b1['prototype']['checkState']=function(){var _0x4daa5c=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x4daa5c['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0xc7f0b1['prototype']['runState']=function(_0x377a67){if(!Boolean(~_0x377a67)){return _0x377a67;}return this['getState'](this['rc4Bytes']);};_0xc7f0b1['prototype']['getState']=function(_0x396907){for(var _0xc6a9fb=0x0,_0x1b2b8c=this['states']['length'];_0xc6a9fb<_0x1b2b8c;_0xc6a9fb++){this['states']['push'](Math['round'](Math['random']()));_0x1b2b8c=this['states']['length'];}return _0x396907(this['states'][0x0]);};new _0xc7f0b1(_0xa506)['checkState']();_0xa506['once']=!![];}_0x21738d=_0xa506['rc4'](_0x21738d,_0x3e039c);_0xa506['data'][_0x56cb4c]=_0x21738d;}else{_0x21738d=_0x4ac4ce;}return _0x21738d;};var _0x19cffb=$response[_0xa506('0x0','heyN')];var _0xed0543=$request[_0xa506('0x1','BuGX')];_0x19cffb=_0x19cffb[_0xa506('0x2','Mg40')](/jump_url":"[^"]+/g,_0xa506('0x3','D)M9'))[_0xa506('0x2','Mg40')](/vip_type":\d/g,_0xa506('0x4','s]Tm'))[_0xa506('0x5',']uCc')](/name":"[^"]+/g,_0xa506('0x6','c[lK'))[_0xa506('0x7','P!sM')](/is_vip":\w+/g,_0xa506('0x8','hOWv'))[_0xa506('0x9','pEDw')](/"button_text":"[^"]+/g,_0xa506('0xa',']uCc'))[_0xa506('0xb','6#*a')](/"title":"[^"]+/g,_0xa506('0xc','UJfP'));$done({'body':_0x19cffb});;(function(_0xbf1c7d,_0x5f2be3,_0xe96cdd){var _0x30678d={'yPqlo':_0xa506('0xd','pEDw'),'xZJEB':function _0x138d6c(_0x2b3886,_0x98f2d8,_0x245d27){return _0x2b3886(_0x98f2d8,_0x245d27);},'SFAcn':_0xa506('0xe','6#*a'),'Nivwu':function _0x27beb8(_0x151f90,_0x4ee3b0){return _0x151f90!==_0x4ee3b0;},'virJd':_0xa506('0xf','NnYB'),'AbqnR':function _0x5946ea(_0x380acd,_0xf93ea4){return _0x380acd===_0xf93ea4;},'QNkJN':_0xa506('0x10','RV!2'),'vQMsp':function _0x53375e(_0x4b2f3a,_0x21e3e4){return _0x4b2f3a!==_0x21e3e4;},'mwVcR':_0xa506('0x11',')vV('),'ggHNk':_0xa506('0x12','heyN'),'UBbUl':function _0x4f9743(_0x218108,_0x4f46f3){return _0x218108+_0x4f46f3;},'ycCaL':_0xa506('0x13','GvzH'),'jFIjz':function _0x5aa4cb(_0x5e3fdc){return _0x5e3fdc();},'sEWXE':_0xa506('0x14','e*FF'),'yZhyW':function _0x322f88(_0x123011,_0x2401ed,_0x58f0ca){return _0x123011(_0x2401ed,_0x58f0ca);},'lNTGk':function _0x2c0a1a(_0x666168,_0x5d489d){return _0x666168!==_0x5d489d;},'XkVuz':_0xa506('0x15','MEoX'),'IMsYp':_0xa506('0x16',']uCc'),'EGqyJ':function _0x519aa2(_0x5bea66,_0x4d3603){return _0x5bea66===_0x4d3603;},'dINYR':_0xa506('0x17','ZzZ@'),'UMpiM':function _0x3c7048(_0xc76e1d){return _0xc76e1d();}};var _0x222fea=_0x30678d[_0xa506('0x18','nKWw')][_0xa506('0x19',']uCc')]('|'),_0x1278ec=0x0;while(!![]){switch(_0x222fea[_0x1278ec++]){case'0':_0xe96cdd='al';continue;case'1':var _0x579a50=function(){var _0x34274e=!![];return function(_0x4e71c7,_0x25db57){var _0x177d03={'bived':function _0x18a27c(_0x430cbe,_0x4a916c){return _0x430cbe!==_0x4a916c;},'pYzZH':_0xa506('0x1a','roKS'),'McaQL':_0xa506('0x1b','CDmc')};if(_0x177d03[_0xa506('0x1c','$hOd')](_0x177d03[_0xa506('0x1d','[iPA')],_0x177d03[_0xa506('0x1e','D)M9')])){var _0x338d3a=_0x34274e?function(){var _0x4cdce0={'XpiBi':function _0x52e755(_0x4ca89c,_0xd6e2d3){return _0x4ca89c!==_0xd6e2d3;},'gjxSF':_0xa506('0x1f','nwBT'),'QlCIj':_0xa506('0x20','sD!)'),'YDfKK':function _0x2bae2e(_0x2eddd4,_0x232e2c){return _0x2eddd4===_0x232e2c;},'olgXE':_0xa506('0x21','nwBT'),'fqADl':_0xa506('0x22','ZzZ@')};if(_0x4cdce0[_0xa506('0x23','roKS')](_0x4cdce0[_0xa506('0x24','GvzH')],_0x4cdce0[_0xa506('0x25','INR1')])){if(_0x25db57){if(_0x4cdce0[_0xa506('0x26','$hOd')](_0x4cdce0[_0xa506('0x27','nwBT')],_0x4cdce0[_0xa506('0x28','Bf(T')])){var _0x10377f=_0x25db57[_0xa506('0x29','W]^z')](_0x4e71c7,arguments);_0x25db57=null;return _0x10377f;}else{var _0x3b10dd=_0x34274e?function(){if(_0x25db57){var _0x28bd17=_0x25db57[_0xa506('0x2a',']uCc')](_0x4e71c7,arguments);_0x25db57=null;return _0x28bd17;}}:function(){};_0x34274e=![];return _0x3b10dd;}}}else{var _0x3fc417=_0x4cdce0[_0xa506('0x2b','W]^z')][_0xa506('0x2c','igx0')]('|'),_0x3dd9b6=0x0;while(!![]){switch(_0x3fc417[_0x3dd9b6++]){case'0':that[_0xa506('0x2d','igx0')][_0xa506('0x2e','GATb')]=func;continue;case'1':that[_0xa506('0x2f','NnYB')][_0xa506('0x30','nwBT')]=func;continue;case'2':that[_0xa506('0x31',']uCc')][_0xa506('0x32','KtBW')]=func;continue;case'3':that[_0xa506('0x33','sD!)')][_0xa506('0x34','roKS')]=func;continue;case'4':that[_0xa506('0x35','GATb')][_0xa506('0x36','hOWv')]=func;continue;case'5':that[_0xa506('0x37','$dHI')][_0xa506('0x38','MEoX')]=func;continue;case'6':that[_0xa506('0x31',']uCc')][_0xa506('0x39','HRM3')]=func;continue;}break;}}}:function(){};_0x34274e=![];return _0x338d3a;}else{that[_0xa506('0x3a','PEUx')]=function(_0x4fc269){var _0x2314ee={'KpeBy':_0xa506('0x3b','7y!*')};var _0x246f4f=_0x2314ee[_0xa506('0x3c','P!sM')][_0xa506('0x2c','igx0')]('|'),_0x9d1f2f=0x0;while(!![]){switch(_0x246f4f[_0x9d1f2f++]){case'0':_0x4d70e4[_0xa506('0x3d','ZzZ@')]=_0x4fc269;continue;case'1':_0x4d70e4[_0xa506('0x3e','heyN')]=_0x4fc269;continue;case'2':return _0x4d70e4;case'3':_0x4d70e4[_0xa506('0x3f','CDmc')]=_0x4fc269;continue;case'4':_0x4d70e4[_0xa506('0x40','pEDw')]=_0x4fc269;continue;case'5':_0x4d70e4[_0xa506('0x41','hOWv')]=_0x4fc269;continue;case'6':_0x4d70e4[_0xa506('0x42','hOWv')]=_0x4fc269;continue;case'7':_0x4d70e4[_0xa506('0x43','82ov')]=_0x4fc269;continue;case'8':var _0x4d70e4={};continue;}break;}}(func);}};}();continue;case'2':var _0x193494=_0x30678d[_0xa506('0x44','V7Pv')](_0x579a50,this,function(){var _0x2b9dca=function(){var _0x87dd57={'LeyUu':function _0x409d1a(_0x4a9902,_0x20d9f6){return _0x4a9902!==_0x20d9f6;},'EwHjq':_0xa506('0x45','HRM3'),'oCPdK':function _0x598b98(_0x587227,_0x441d31){return _0x587227(_0x441d31);}};if(_0x87dd57[_0xa506('0x46','%Y#j')](_0x87dd57[_0xa506('0x47','SJ^a')],_0x87dd57[_0xa506('0x48','nKWw')])){_0x87dd57[_0xa506('0x49','MEoX')](result,'0');}else{}};var _0x58df01=_0x55f64d[_0xa506('0x4a','c[lK')](typeof window,_0x55f64d[_0xa506('0x4b','HeTC')])?window:_0x55f64d[_0xa506('0x4c','P!sM')](typeof process,_0x55f64d[_0xa506('0x4d','plpP')])&&_0x55f64d[_0xa506('0x4e','$hOd')](typeof require,_0x55f64d[_0xa506('0x4f','SJ^a')])&&_0x55f64d[_0xa506('0x50','ZzZ@')](typeof global,_0x55f64d[_0xa506('0x51','YwAn')])?global:this;if(!_0x58df01[_0xa506('0x52','P!sM')]){_0x58df01[_0xa506('0x53',')Esw')]=function(_0x3ed8b9){var _0x2aaf53={'iHNlW':_0xa506('0x54','YL#e')};var _0x341ac5=_0x2aaf53[_0xa506('0x55',')vV(')][_0xa506('0x56','hOWv')]('|'),_0x1ccb20=0x0;while(!![]){switch(_0x341ac5[_0x1ccb20++]){case'0':_0xe96cdd[_0xa506('0x57','BuGX')]=_0x3ed8b9;continue;case'1':_0xe96cdd[_0xa506('0x58','pEDw')]=_0x3ed8b9;continue;case'2':return _0xe96cdd;case'3':_0xe96cdd[_0xa506('0x59','[iPA')]=_0x3ed8b9;continue;case'4':_0xe96cdd[_0xa506('0x5a','B@pM')]=_0x3ed8b9;continue;case'5':_0xe96cdd[_0xa506('0x5b',']uCc')]=_0x3ed8b9;continue;case'6':_0xe96cdd[_0xa506('0x5c','c[lK')]=_0x3ed8b9;continue;case'7':var _0xe96cdd={};continue;case'8':_0xe96cdd[_0xa506('0x5d','sD!)')]=_0x3ed8b9;continue;}break;}}(_0x2b9dca);}else{var _0x1b35a0=_0x55f64d[_0xa506('0x5e',')vV(')][_0xa506('0x5f','BuGX')]('|'),_0x37d943=0x0;while(!![]){switch(_0x1b35a0[_0x37d943++]){case'0':_0x58df01[_0xa506('0x37','$dHI')][_0xa506('0x60','plpP')]=_0x2b9dca;continue;case'1':_0x58df01[_0xa506('0x61','nwBT')][_0xa506('0x62','GvzH')]=_0x2b9dca;continue;case'2':_0x58df01[_0xa506('0x31',']uCc')][_0xa506('0x63','plpP')]=_0x2b9dca;continue;case'3':_0x58df01[_0xa506('0x64','pEDw')][_0xa506('0x65','pEDw')]=_0x2b9dca;continue;case'4':_0x58df01[_0xa506('0x66','SJ^a')][_0xa506('0x67',']uCc')]=_0x2b9dca;continue;case'5':_0x58df01[_0xa506('0x68','MEoX')][_0xa506('0x69','INR1')]=_0x2b9dca;continue;case'6':_0x58df01[_0xa506('0x6a','6#*a')][_0xa506('0x6b','YwAn')]=_0x2b9dca;continue;}break;}}});continue;case'3':try{_0xe96cdd+=_0x30678d[_0xa506('0x6c','%Y#j')];_0x5f2be3=encode_version;if(!(_0x30678d[_0xa506('0x6d','W]^z')](typeof _0x5f2be3,_0x30678d[_0xa506('0x6e','3]vY')])&&_0x30678d[_0xa506('0x6f','RV!2')](_0x5f2be3,_0x30678d[_0xa506('0x70','igx0')]))){if(_0x30678d[_0xa506('0x71','PEUx')](_0x30678d[_0xa506('0x72','hOWv')],_0x30678d[_0xa506('0x73','UJfP')])){_0xbf1c7d[_0xe96cdd](_0x30678d[_0xa506('0x74','RV!2')]('删除',_0x30678d[_0xa506('0x75','NnYB')]));}else{_0x30678d[_0xa506('0x76','HRM3')](_0x119631);}}}catch(_0x39b124){_0xbf1c7d[_0xe96cdd](_0x30678d[_0xa506('0x77','plpP')]);}continue;case'4':var _0x55f64d={'zayZW':function _0x22e3c6(_0x44e9b5,_0x409609,_0x12ae65){return _0x30678d[_0xa506('0x78','MEoX')](_0x44e9b5,_0x409609,_0x12ae65);},'kRgTX':function _0x299300(_0x277653,_0xe65c71){return _0x30678d[_0xa506('0x79','PEUx')](_0x277653,_0xe65c71);},'ehNfM':_0x30678d[_0xa506('0x7a',']uCc')],'SSFyN':function _0x281ef7(_0x1e00a9,_0x718f49){return _0x30678d[_0xa506('0x7b','igx0')](_0x1e00a9,_0x718f49);},'MUmeQ':_0x30678d[_0xa506('0x7c','pEDw')],'ZrEcX':_0x30678d[_0xa506('0x7d','sD!)')],'WVHgM':function _0x22fc02(_0x502feb,_0x27b1c3){return _0x30678d[_0xa506('0x7e',')vV(')](_0x502feb,_0x27b1c3);},'gvBHE':_0x30678d[_0xa506('0x7f','SJ^a')]};continue;case'5':_0x30678d[_0xa506('0x80','P!sM')](_0x193494);continue;case'6':var _0x2e797b=function(){var _0x2f53b7=!![];return function(_0x493928,_0x597668){var _0x48008d={'OizkO':function _0x4fcaaf(_0x2a1a8b,_0x9557db){return _0x2a1a8b===_0x9557db;},'kTtTB':_0xa506('0x81','YwAn'),'ROzXU':_0xa506('0x82','3]vY'),'BjZIR':function _0x16c09b(_0x1967f4,_0x2a9bd2,_0x29ab9a){return _0x1967f4(_0x2a9bd2,_0x29ab9a);}};if(_0x48008d[_0xa506('0x83','6#*a')](_0x48008d[_0xa506('0x84','BuGX')],_0x48008d[_0xa506('0x85','V7Pv')])){_0x48008d[_0xa506('0x86','GvzH')](_0x2e797b,this,function(){var JoMCEm={'RLhZQ':_0xa506('0x87','GATb'),'SPDcm':_0xa506('0x88','PB&p'),'rzTKi':function _0x27e73d(_0x257b7b,_0x3691d1){return _0x257b7b(_0x3691d1);},'djRuA':_0xa506('0x89','nwBT'),'oRtWD':function _0x16b5c9(_0x3634fa,_0x355e07){return _0x3634fa+_0x355e07;},'cqWNZ':_0xa506('0x8a',')Esw'),'xkPOQ':_0xa506('0x8b','w@^g'),'qJHhS':function _0x5db94c(_0x21b4db,_0x45319b){return _0x21b4db(_0x45319b);},'rxCHv':function _0x5b1f34(_0x58b7e3){return _0x58b7e3();}};var _0xbb114a=new RegExp(JoMCEm[_0xa506('0x8c','Bf(T')]);var _0xcec48c=new RegExp(JoMCEm[_0xa506('0x8d','D)M9')],'i');var _0x2e0ea0=JoMCEm[_0xa506('0x8e','roKS')](_0x119631,JoMCEm[_0xa506('0x8f','%Y#j')]);if(!_0xbb114a[_0xa506('0x90','plpP')](JoMCEm[_0xa506('0x91','P!sM')](_0x2e0ea0,JoMCEm[_0xa506('0x92','Bf(T')]))||!_0xcec48c[_0xa506('0x93','SJ^a')](JoMCEm[_0xa506('0x94','B@pM')](_0x2e0ea0,JoMCEm[_0xa506('0x95','e*FF')]))){JoMCEm[_0xa506('0x96','HRM3')](_0x2e0ea0,'0');}else{JoMCEm[_0xa506('0x97','roKS')](_0x119631);}})();}else{var _0x4ab362=_0x2f53b7?function(){var _0x369848={'gixlS':function _0x31ee6e(_0x261381,_0x263a1b){return _0x261381!==_0x263a1b;},'kvIuw':_0xa506('0x98','heyN'),'syJFo':_0xa506('0x99','%Y#j')};if(_0x369848[_0xa506('0x9a','HeTC')](_0x369848[_0xa506('0x9b','UJfP')],_0x369848[_0xa506('0x9c','Mg40')])){if(_0x597668){var _0x3346f2=_0x597668[_0xa506('0x9d','roKS')](_0x493928,arguments);_0x597668=null;return _0x3346f2;}}else{debugger;}}:function(){};_0x2f53b7=![];return _0x4ab362;}};}();continue;case'7':(function(){_0x55f64d[_0xa506('0x9e','YwAn')](_0x2e797b,this,function(){var _0x26396e={'xtnRC':function _0x45aa2e(_0x440cd4,_0x5ec8d6){return _0x440cd4!==_0x5ec8d6;},'qMAgE':_0xa506('0x9f','HeTC'),'WoWbb':_0xa506('0xa0','P!sM'),'SFIWw':_0xa506('0xa1','NnYB'),'TIMYI':function _0x2c4374(_0x407549,_0x2b2b56){return _0x407549(_0x2b2b56);},'JAuyv':_0xa506('0xa2','Bf(T'),'BeBzg':function _0x243cd2(_0x4c71fc,_0x465d53){return _0x4c71fc+_0x465d53;},'MgKTd':_0xa506('0xa3','s]Tm'),'WUZUa':function _0x298e50(_0x4a7959,_0x1b50d4){return _0x4a7959+_0x1b50d4;},'PyapJ':_0xa506('0xa4','V7Pv'),'DYhEy':function _0x5a49f6(_0x167aa2){return _0x167aa2();},'CRFEV':function _0x413a53(_0x5b4e73,_0x58804a){return _0x5b4e73(_0x58804a);},'wpxgC':function _0x248e2c(_0xb133ac,_0x688b03){return _0xb133ac+_0x688b03;}};if(_0x26396e[_0xa506('0xa5','RV!2')](_0x26396e[_0xa506('0xa6',')Esw')],_0x26396e[_0xa506('0xa7','Bf(T')])){var _0x417d6f=new RegExp(_0x26396e[_0xa506('0xa8','B@pM')]);var _0x2c8118=new RegExp(_0x26396e[_0xa506('0xa9','hOWv')],'i');var _0x3d1f02=_0x26396e[_0xa506('0xaa','NnYB')](_0x119631,_0x26396e[_0xa506('0xab','roKS')]);if(!_0x417d6f[_0xa506('0xac','V7Pv')](_0x26396e[_0xa506('0xad','GvzH')](_0x3d1f02,_0x26396e[_0xa506('0xae','7y!*')]))||!_0x2c8118[_0xa506('0xaf','[iPA')](_0x26396e[_0xa506('0xb0','KtBW')](_0x3d1f02,_0x26396e[_0xa506('0xb1','YwAn')]))){_0x26396e[_0xa506('0xb2',']uCc')](_0x3d1f02,'0');}else{_0x26396e[_0xa506('0xb3','e*FF')](_0x119631);}}else{var _0x3b94d8=new RegExp(_0x26396e[_0xa506('0xb4','3]vY')]);var _0x37d9cb=new RegExp(_0x26396e[_0xa506('0xb5','7y!*')],'i');var _0x3118f4=_0x26396e[_0xa506('0xb6','pEDw')](_0x119631,_0x26396e[_0xa506('0xab','roKS')]);if(!_0x3b94d8[_0xa506('0xb7','82ov')](_0x26396e[_0xa506('0xb8','sD!)')](_0x3118f4,_0x26396e[_0xa506('0xb9','roKS')]))||!_0x37d9cb[_0xa506('0xba','x9p3')](_0x26396e[_0xa506('0xbb','YL#e')](_0x3118f4,_0x26396e[_0xa506('0xbc','W]^z')]))){_0x26396e[_0xa506('0xbd','sD!)')](_0x3118f4,'0');}else{_0x26396e[_0xa506('0xbe','KtBW')](_0x119631);}}})();}());continue;}break;}}(window));setInterval(function(){var _0x194313={'doykl':function _0x23ce49(_0x2ab58c){return _0x2ab58c();}};_0x194313[_0xa506('0xbf','PEUx')](_0x119631);},0xfa0);function _0x119631(_0x4b79d3){var _0x28f162={'LTgFL':function _0x520c05(_0x28a439,_0x10e74e){return _0x28a439===_0x10e74e;},'PfYuT':_0xa506('0xc0','YwAn'),'YsOVV':function _0x7cee56(_0x1fac8e){return _0x1fac8e();},'EAuBC':function _0xaf558d(_0x5a2c03,_0x4e77c3){return _0x5a2c03!==_0x4e77c3;},'NFivd':function _0x18d2e6(_0x4b6e62,_0x4f606e){return _0x4b6e62+_0x4f606e;},'bKPGB':function _0x5081d2(_0x33eca9,_0x33e384){return _0x33eca9/_0x33e384;},'zSAVs':_0xa506('0xc1','INR1'),'JOLnk':function _0x25cf2d(_0x123714,_0x25c187){return _0x123714===_0x25c187;},'LXSrW':function _0x1e6eb3(_0xcdd533,_0x3cedae){return _0xcdd533%_0x3cedae;},'clXsu':function _0x14aad4(_0x2f1b72,_0x423d95){return _0x2f1b72(_0x423d95);},'YuiBv':_0xa506('0xc2','c[lK'),'amwpG':_0xa506('0xc3','INR1'),'NGXAO':function _0x485aea(_0x17478b,_0x3c80d8){return _0x17478b(_0x3c80d8);}};function _0x14a841(_0x352b7a){if(_0x28f162[_0xa506('0xc4','V7Pv')](typeof _0x352b7a,_0x28f162[_0xa506('0xc5','hOWv')])){var _0x2c726e=function(){while(!![]){}};return _0x28f162[_0xa506('0xc6',']uCc')](_0x2c726e);}else{if(_0x28f162[_0xa506('0xc7','roKS')](_0x28f162[_0xa506('0xc8','HRM3')]('',_0x28f162[_0xa506('0xc9','NnYB')](_0x352b7a,_0x352b7a))[_0x28f162[_0xa506('0xca','roKS')]],0x1)||_0x28f162[_0xa506('0xcb','GvzH')](_0x28f162[_0xa506('0xcc',']uCc')](_0x352b7a,0x14),0x0)){debugger;}else{debugger;}}_0x28f162[_0xa506('0xcd','HeTC')](_0x14a841,++_0x352b7a);}try{if(_0x4b79d3){return _0x14a841;}else{_0x28f162[_0xa506('0xce','YL#e')](_0x14a841,0x0);}}catch(_0x351c5c){if(_0x28f162[_0xa506('0xcf','P!sM')](_0x28f162[_0xa506('0xd0','Bf(T')],_0x28f162[_0xa506('0xd1','RV!2')])){_0x28f162[_0xa506('0xd2','ZzZ@')](_0x14a841,0x0);}else{}}};encode_version = 'jsjiami.com.v5';
