!function(){function n(n){return new Function("return "+n)()}var t=document.getElementsByTagName("script"),e=t[t.length-1],i=n(e.getAttribute("boot-config"));KISSY.use("magix/magix",function(n,t){n.config({packages:[{name:"app",path:i.tbcdn,debug:i.debug}]}),t.start({appRoot:i.tbcdn,iniFile:"app/ini",extensions:["app/extview"]})}),window.UserInfo={}}();