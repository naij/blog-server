KISSY.add("app/util/calendar/calendar",function(e,a,r,t){var n={};return e.mix(n,{dateParse:function(e,a){return t.Date.parse(e,a||"-")},dateFormat:function(e,a){return t.Date.format(e,a||"yyyy-mm-dd")},dateRecent:function(e,a){var r=864e5,t=a||new Date,n=t.getTime();return new Date(n+r*e)}}),n},{requires:["magix/vframe","magix/vom","brix/gallery/datepicker/index"]});