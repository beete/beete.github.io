(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[878],{27312:function(B,H,h){"use strict";h.r(H),h.d(H,{default:function(){return z}});var F=h(39428),Z=h(11849),S=h(3182),x=h(14965),I=h(44449),g=h(27484),T=h.n(g),$=h(85893),E=I.Z.RangePicker,y=[{title:"\u7B5B\u9009",dataIndex:"keyword",hideInTable:!0},{title:"\u5E8F\u53F7",dataIndex:"key",hideInForm:!0,hideInTable:!0,hideInSearch:!0},{title:"\u5546\u54C1ID",dataIndex:"id",hideInForm:!0,hideInSearch:!0},{title:"\u5546\u54C1\u578B\u53F7",dataIndex:"model",hideInForm:!0,hideInSearch:!0},{title:"\u5546\u54C1\u6807\u9898",dataIndex:"title",hideInForm:!0,hideInSearch:!0},{title:"\u5546\u54C1\u6587\u6848\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateDate",hideInForm:!0,hideInSearch:!0},{title:"\u65F6\u95F4",dataIndex:"updateDate23",hideInTable:!0,renderFormItem:function(){return(0,$.jsx)(E,{placeholder:"",defaultValue:[T()().add(-7,"days"),T()()]})}},{title:"\u64CD\u4F5C",dataIndex:"operator",hideInForm:!0,hideInSearch:!0}];function w(p,M){return L.apply(this,arguments)}function L(){return L=(0,S.Z)((0,F.Z)().mark(function p(M,A){var Y,O,c;return(0,F.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:for(Y={id:"734484974194",model:"E900C61\u5957\u88C5",title:"\u6D77\u5C14\u8D85\u8584\u901F\u5438\u9876\u4FA7\u53CC\u5438\u53D8\u9891\u6CB9\u70DF\u673A\u5957\u88C5E900C61\u5957\u88C5",brand:"\u6D77\u5C14/Haier",locale:"\u56FD\u4EA7",cytpe:"\u5BB6\u7535",subType:"\u6CB9\u70DF\u673A",updateDate:"2023-09-26  14:00",operator:"\u59D3\u540D"},O=[],c=1;c<=10;c+=1)O.push((0,Z.Z)({key:c},Y));return D.abrupt("return",{data:O,total:100,success:!0});case 4:case"end":return D.stop()}},p)})),L.apply(this,arguments)}var U=h(67294),J=h(75362),V=h(29209),W=function(){var M=(0,U.useRef)();return y.forEach(function(A){A.align="center"}),(0,$.jsx)(J.ZP,{children:(0,$.jsx)(V.ZP,{headerTitle:"\u54C1\u724C\u77E5\u8BC6\u5217\u8868",actionRef:M,rowKey:"key",search:{labelWidth:120},request:w,columns:y})})},z=W},27484:function(B){(function(H,h){B.exports=h()})(this,function(){"use strict";var H=1e3,h=6e4,F=36e5,Z="millisecond",S="second",x="minute",I="hour",g="day",T="week",$="month",E="quarter",y="year",w="date",L="Invalid Date",U=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,J=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},W=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},z={s:W,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+W(r,2,"0")+":"+W(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,$),a=t-e<0,s=n.clone().add(r+(a?-1:1),$);return+(-(r+(t-e)/(a?e-s:s-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:$,y,w:T,d:g,D:w,h:I,m:x,s:S,ms:Z,Q:E}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},p="en",M={};M[p]=V;var A="$isDayjsObject",Y=function(i){return i instanceof D||!(!i||!i[A])},O=function i(n,t,r){var e;if(!n)return p;if(typeof n=="string"){var a=n.toLowerCase();M[a]&&(e=a),t&&(M[a]=t,e=a);var s=n.split("-");if(!e&&s.length>1)return i(s[0])}else{var o=n.name;M[o]=n,e=o}return!r&&e&&(p=e),e||!r&&p},c=function(i,n){if(Y(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new D(t)},u=z;u.l=O,u.i=Y,u.w=function(i,n){return c(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var D=function(){function i(t){this.$L=O(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[A]=!0}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,a=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(U);if(s){var o=s[2]-1||0,d=(s[7]||"0").substring(0,3);return a?new Date(Date.UTC(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,d)):new Date(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,d)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==L},n.isSame=function(t,r){var e=c(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return c(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<c(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,a=!!u.u(r)||r,s=u.p(t),o=function(k,m){var b=u.w(e.$u?Date.UTC(e.$y,m,k):new Date(e.$y,m,k),e);return a?b:b.endOf(g)},d=function(k,m){return u.w(e.toDate()[k].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(m)),e)},f=this.$W,l=this.$M,v=this.$D,j="set"+(this.$u?"UTC":"");switch(s){case y:return a?o(1,0):o(31,11);case $:return a?o(1,l):o(0,l+1);case T:var C=this.$locale().weekStart||0,P=(f<C?f+7:f)-C;return o(a?v-P:v+(6-P),l);case g:case w:return d(j+"Hours",0);case I:return d(j+"Minutes",1);case x:return d(j+"Seconds",2);case S:return d(j+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,a=u.p(t),s="set"+(this.$u?"UTC":""),o=(e={},e[g]=s+"Date",e[w]=s+"Date",e[$]=s+"Month",e[y]=s+"FullYear",e[I]=s+"Hours",e[x]=s+"Minutes",e[S]=s+"Seconds",e[Z]=s+"Milliseconds",e)[a],d=a===g?this.$D+(r-this.$W):r;if(a===$||a===y){var f=this.clone().set(w,1);f.$d[o](d),f.init(),this.$d=f.set(w,Math.min(this.$D,f.daysInMonth())).$d}else o&&this.$d[o](d);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,a=this;t=Number(t);var s=u.p(r),o=function(l){var v=c(a);return u.w(v.date(v.date()+Math.round(l*t)),a)};if(s===$)return this.set($,this.$M+t);if(s===y)return this.set(y,this.$y+t);if(s===g)return o(1);if(s===T)return o(7);var d=(e={},e[x]=h,e[I]=F,e[S]=H,e)[s]||1,f=this.$d.getTime()+t*d;return u.w(f,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||L;var a=t||"YYYY-MM-DDTHH:mm:ssZ",s=u.z(this),o=this.$H,d=this.$m,f=this.$M,l=e.weekdays,v=e.months,j=e.meridiem,C=function(m,b,R,N){return m&&(m[b]||m(r,a))||R[b].slice(0,N)},P=function(m){return u.s(o%12||12,m,"0")},k=j||function(m,b,R){var N=m<12?"AM":"PM";return R?N.toLowerCase():N};return a.replace(J,function(m,b){return b||function(R){switch(R){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return f+1;case"MM":return u.s(f+1,2,"0");case"MMM":return C(e.monthsShort,f,v,3);case"MMMM":return C(v,f);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return C(e.weekdaysMin,r.$W,l,2);case"ddd":return C(e.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return P(1);case"hh":return P(2);case"a":return k(o,d,!0);case"A":return k(o,d,!1);case"m":return String(d);case"mm":return u.s(d,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return s}return null}(m)||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var a,s=this,o=u.p(r),d=c(t),f=(d.utcOffset()-this.utcOffset())*h,l=this-d,v=function(){return u.m(s,d)};switch(o){case y:a=v()/12;break;case $:a=v();break;case E:a=v()/3;break;case T:a=(l-f)/6048e5;break;case g:a=(l-f)/864e5;break;case I:a=l/F;break;case x:a=l/h;break;case S:a=l/H;break;default:a=l}return e?a:u.a(a)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return M[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),a=O(t,r,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),G=D.prototype;return c.prototype=G,[["$ms",Z],["$s",S],["$m",x],["$H",I],["$W",g],["$M",$],["$y",y],["$D",w]].forEach(function(i){G[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),c.extend=function(i,n){return i.$i||(i(n,D,c),i.$i=!0),c},c.locale=O,c.isDayjs=Y,c.unix=function(i){return c(1e3*i)},c.en=M[p],c.Ls=M,c.p={},c})}}]);
