(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[362],{64335:function(ne,K,n){"use strict";var O=n(67294),w=(0,O.createContext)({});K.Z=w},85224:function(ne,K,n){"use strict";var O=n(28991),w=n(84305),C=n(39559),D=n(81253),U=n(85893),Q=n(94184),Z=n.n(Q),$=n(97435),j=n(67294),N=n(64335),T=n(56264),H=n.n(T),ee=["children","className","extra","style","renderContent"],l=function(S){var _=S.children,X=S.className,Y=S.extra,oe=S.style,V=S.renderContent,ie=(0,D.Z)(S,ee),ue=(0,j.useContext)(C.ZP.ConfigContext),ve=ue.getPrefixCls,k=S.prefixCls||ve("pro"),me="".concat(k,"-footer-bar"),p=(0,j.useContext)(N.Z),le=(0,j.useMemo)(function(){var te=p.hasSiderMenu,q=p.isMobile,re=p.siderWidth;if(!!te)return re?q?"100%":"calc(100% - ".concat(re,"px)"):"100%"},[p.collapsed,p.hasSiderMenu,p.isMobile,p.siderWidth]),se=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("div",{className:"".concat(me,"-left"),children:Y}),(0,U.jsx)("div",{className:"".concat(me,"-right"),children:_})]});return(0,j.useEffect)(function(){return!p||!(p==null?void 0:p.setHasFooterToolbar)?function(){}:(p==null||p.setHasFooterToolbar(!0),function(){var te;p==null||(te=p.setHasFooterToolbar)===null||te===void 0||te.call(p,!1)})},[]),(0,U.jsx)("div",(0,O.Z)((0,O.Z)({className:Z()(X,"".concat(me)),style:(0,O.Z)({width:le},oe)},(0,$.Z)(ie,["prefixCls"])),{},{children:V?V((0,O.Z)((0,O.Z)((0,O.Z)({},S),p),{},{leftWidth:le}),se):se}))};K.Z=l},21349:function(ne,K,n){"use strict";var O=n(84305),w=n(39559),C=n(85893),D=n(94184),U=n.n(D),Q=n(67294),Z=n(64335),$=n(53645),j=n.n($),N=function(H){var ee=(0,Q.useContext)(Z.Z),l=H.children,A=H.contentWidth,S=H.className,_=H.style,X=(0,Q.useContext)(w.ZP.ConfigContext),Y=X.getPrefixCls,oe=H.prefixCls||Y("pro"),V=A||ee.contentWidth,ie="".concat(oe,"-grid-content");return(0,C.jsx)("div",{className:U()(ie,S,{wide:V==="Fixed"}),style:_,children:(0,C.jsx)("div",{className:"".concat(oe,"-grid-content-children"),children:l})})};K.Z=N},75362:function(ne,K,n){"use strict";n.d(K,{ZP:function(){return Dt}});var O=n(38663),w=n(70883),C=n(22122),D=n(96156),U=n(6610),Q=n(5991),Z=n(10379),$=n(54070),j=n(90484),N=n(94184),T=n.n(N),H=n(48717),ee=n(98423),l=n(67294),A=n(53124),S=n(85061),_=n(75164);function X(o){var e,r=function(i){return function(){e=null,o.apply(void 0,(0,S.Z)(i))}},t=function(){if(e==null){for(var i=arguments.length,s=new Array(i),d=0;d<i;d++)s[d]=arguments[d];e=(0,_.Z)(r(s))}};return t.cancel=function(){_.Z.cancel(e),e=null},t}function Y(){return function(e,r,t){var a=t.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(r))return a;var d=X(a.bind(this));return i=!0,Object.defineProperty(this,r,{value:d,configurable:!0,writable:!0}),i=!1,d}}}}var oe=n(64019);function V(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ie(o,e,r){if(r!==void 0&&e.top>o.top-r)return r+e.top}function ue(o,e,r){if(r!==void 0&&e.bottom<o.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var ve=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],k=[];function me(){return k}function p(o,e){if(!!o){var r=k.find(function(t){return t.target===o});r?r.affixList.push(e):(r={target:o,affixList:[e],eventHandlers:{}},k.push(r),ve.forEach(function(t){r.eventHandlers[t]=(0,oe.Z)(o,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function le(o){var e=k.find(function(r){var t=r.affixList.some(function(a){return a===o});return t&&(r.affixList=r.affixList.filter(function(a){return a!==o})),t});e&&e.affixList.length===0&&(k=k.filter(function(r){return r!==e}),ve.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var se=function(o,e,r,t){var a=arguments.length,i=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,s;if((typeof Reflect=="undefined"?"undefined":(0,j.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,r,t);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(i=(a<3?s(i):a>3?s(e,r,i):s(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i};function te(){return typeof window!="undefined"?window:null}var q;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(q||(q={}));var re=function(o){(0,Z.Z)(r,o);var e=(0,$.Z)(r);function r(){var t;return(0,U.Z)(this,r),t=e.apply(this,arguments),t.state={status:q.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,i=a.offsetBottom,s=a.offsetTop;return i===void 0&&s===void 0?0:s},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,i=a.status,s=a.lastAffix,d=t.props.onChange,v=t.getTargetFunc();if(!(i!==q.Prepare||!t.fixedNode||!t.placeholderNode||!v)){var u=t.getOffsetTop(),h=t.getOffsetBottom(),g=v();if(!!g){var f={status:q.None},b=V(g),c=V(t.placeholderNode),y=ie(c,b,u),x=ue(c,b,h);c.top===0&&c.left===0&&c.width===0&&c.height===0||(y!==void 0?(f.affixStyle={position:"fixed",top:y,width:c.width,height:c.height},f.placeholderStyle={width:c.width,height:c.height}):x!==void 0&&(f.affixStyle={position:"fixed",bottom:x,width:c.width,height:c.height},f.placeholderStyle={width:c.width,height:c.height}),f.lastAffix=!!f.affixStyle,d&&s!==f.lastAffix&&d(f.lastAffix),t.setState(f))}}},t.prepareMeasure=function(){if(t.setState({status:q.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t}return(0,Q.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:a!=null?a:te}},{key:"componentDidMount",value:function(){var a=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){p(i(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var i=this.state.prevTarget,s=this.getTargetFunc(),d=(s==null?void 0:s())||null;i!==d&&(le(this),d&&(p(d,this),this.updatePosition()),this.setState({prevTarget:d})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),le(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),i=this.state.affixStyle;if(a&&i){var s=this.getOffsetTop(),d=this.getOffsetBottom(),v=a();if(v&&this.placeholderNode){var u=V(v),h=V(this.placeholderNode),g=ie(h,u,s),f=ue(h,u,d);if(g!==void 0&&i.top===g||f!==void 0&&i.bottom===f)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,i=this.state,s=i.affixStyle,d=i.placeholderStyle,v=this.props,u=v.affixPrefixCls,h=v.children,g=T()((0,D.Z)({},u,!!s)),f=(0,ee.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return l.createElement(H.Z,{onResize:function(){a.updatePosition()}},l.createElement("div",(0,C.Z)({},f,{ref:this.savePlaceholderNode}),s&&l.createElement("div",{style:d,"aria-hidden":"true"}),l.createElement("div",{className:g,ref:this.saveFixedNode,style:s},l.createElement(H.Z,{onResize:function(){a.updatePosition()}},h))))}}]),r}(l.Component);re.contextType=A.E_,se([Y()],re.prototype,"updatePosition",null),se([Y()],re.prototype,"lazyUpdatePosition",null);var We=l.forwardRef(function(o,e){var r=o.prefixCls,t=l.useContext(A.E_),a=t.getPrefixCls,i=a("affix",r),s=(0,C.Z)((0,C.Z)({},o),{affixPrefixCls:i});return l.createElement(re,(0,C.Z)({},s,{ref:e}))}),Fe=We,Gt=n(84305),ge=n(39559),Xt=n(59903),Yt=n(94233),Vt=n(81262),Jt=n(59250),Qt=n(30887),kt=n(49111),xe=n(28481),m=n(28991),Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},we=Ke,Ce=n(27029),Pe=function(e,r){return l.createElement(Ce.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:r,icon:we}))};Pe.displayName="ArrowLeftOutlined";var He=l.forwardRef(Pe),ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},_e=ze,be=function(e,r){return l.createElement(Ce.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:r,icon:_e}))};be.displayName="ArrowRightOutlined";var $e=l.forwardRef(be),Ge=n(30470),Xe=n(51890),Ye=n(50344),Ve=n(18515),Je=n(96159),Qe=n(57254),ke=n(81555),qe=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(o);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(o,t[a])&&(r[t[a]]=o[t[a]]);return r},ye=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,i=e.children,s=e.menu,d=e.overlay,v=e.dropdownProps,u=qe(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),h=l.useContext(A.E_),g=h.getPrefixCls,f=g("breadcrumb",r),b=function(x){if(s||d){var E=(0,C.Z)({},v);return"overlay"in e&&(E.overlay=d),l.createElement(ke.Z,(0,C.Z)({menu:s,placement:"bottom"},E),l.createElement("span",{className:"".concat(f,"-overlay-link")},x,l.createElement(Qe.Z,null)))}return x},c;return"href"in u?c=l.createElement("a",(0,C.Z)({className:"".concat(f,"-link")},u),i):c=l.createElement("span",(0,C.Z)({className:"".concat(f,"-link")},u),i),c=b(c),i!=null?l.createElement("li",null,c,a&&l.createElement("span",{className:"".concat(f,"-separator")},a)):null};ye.__ANT_BREADCRUMB_ITEM=!0;var Ee=ye,pe=function(e){var r=e.children,t=l.useContext(A.E_),a=t.getPrefixCls,i=a("breadcrumb");return l.createElement("span",{className:"".concat(i,"-separator")},r||"/")};pe.__ANT_BREADCRUMB_SEPARATOR=!0;var et=pe,tt=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(o);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(o,t[a])&&(r[t[a]]=o[t[a]]);return r};function rt(o,e){if(!o.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=o.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,i){return e[i]||a});return t}function at(o,e,r,t){var a=r.indexOf(o)===r.length-1,i=rt(o,e);return a?l.createElement("span",null,i):l.createElement("a",{href:"#/".concat(t.join("/"))},i)}var Oe=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},nt=function(e,r,t){var a=(0,S.Z)(e),i=Oe(r||"",t);return i&&a.push(i),a},he=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,i=e.style,s=e.className,d=e.routes,v=e.children,u=e.itemRender,h=u===void 0?at:u,g=e.params,f=g===void 0?{}:g,b=tt(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),c=l.useContext(A.E_),y=c.getPrefixCls,x=c.direction,E,L=y("breadcrumb",r);if(d&&d.length>0){var M=[];E=d.map(function(B){var W=Oe(B.path,f);W&&M.push(W);var z;B.children&&B.children.length&&(z=l.createElement(Ve.Z,{items:B.children.map(function(F){return{key:F.path||F.breadcrumbName,label:h(F,f,d,nt(M,F.path,f))}})}));var G={separator:a};return z&&(G.overlay=z),l.createElement(Ee,(0,C.Z)({},G,{key:W||B.breadcrumbName}),h(B,f,d,M))})}else v&&(E=(0,Ye.Z)(v).map(function(B,W){return B&&(0,Je.Tm)(B,{separator:a,key:W})}));var R=T()(L,(0,D.Z)({},"".concat(L,"-rtl"),x==="rtl"),s);return l.createElement("nav",(0,C.Z)({className:R,style:i},b),l.createElement("ol",null,E))};he.Item=Ee,he.Separator=et;var ot=he,it=ot,lt=n(42051),st=n(19650),dt=n(34952),ct=function(e,r,t){return!r||!t?null:l.createElement(lt.Z,{componentName:"PageHeader"},function(a){return l.createElement("div",{className:"".concat(e,"-back")},l.createElement(dt.Z,{onClick:function(s){t==null||t(s)},className:"".concat(e,"-back-button"),"aria-label":a.back},r))})},ft=function(e){return l.createElement(it,(0,C.Z)({},e))},ut=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?l.createElement($e,null):l.createElement(He,null)},vt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,i=r.avatar,s=r.subTitle,d=r.tags,v=r.extra,u=r.onBack,h="".concat(e,"-heading"),g=a||s||d||v;if(!g)return null;var f=ut(r,t),b=ct(e,f,u),c=b||i||g;return l.createElement("div",{className:h},c&&l.createElement("div",{className:"".concat(h,"-left")},b,i&&l.createElement(Xe.C,(0,C.Z)({},i)),a&&l.createElement("span",{className:"".concat(h,"-title"),title:typeof a=="string"?a:void 0},a),s&&l.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof s=="string"?s:void 0},s),d&&l.createElement("span",{className:"".concat(h,"-tags")},d)),v&&l.createElement("span",{className:"".concat(h,"-extra")},l.createElement(st.Z,null,v)))},mt=function(e,r){return r?l.createElement("div",{className:"".concat(e,"-footer")},r):null},ht=function(e,r){return l.createElement("div",{className:"".concat(e,"-content")},r)},gt=function(e){var r=(0,Ge.Z)(!1),t=(0,xe.Z)(r,2),a=t[0],i=t[1],s=function(v){var u=v.width;i(u<768,!0)};return l.createElement(A.C,null,function(d){var v=d.getPrefixCls,u=d.pageHeader,h=d.direction,g,f=e.prefixCls,b=e.style,c=e.footer,y=e.children,x=e.breadcrumb,E=e.breadcrumbRender,L=e.className,M=!0;"ghost"in e?M=e.ghost:u&&"ghost"in u&&(M=u.ghost);var R=v("page-header",f),B=function(){return(x==null?void 0:x.routes)?ft(x):null},W=B(),z=x&&"props"in x,G=(g=E==null?void 0:E(e,W))!==null&&g!==void 0?g:W,F=z?x:G,I=T()(R,L,(0,D.Z)((0,D.Z)((0,D.Z)({"has-breadcrumb":!!F,"has-footer":!!c},"".concat(R,"-ghost"),M),"".concat(R,"-rtl"),h==="rtl"),"".concat(R,"-compact"),a));return l.createElement(H.Z,{onResize:s},l.createElement("div",{className:I,style:b},F,vt(R,e,h),y&&ht(R,y),mt(R,c)))})},xt=gt,Ze=n(81253),qt=n(18106),Re=n(63885),P=n(85893),Ne=n(64335),Ct=n(85224),Pt=n(21349),bt=n(83832),yt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Et=function(e){var r=e.children,t=e.style,a=e.className,i=e.markStyle,s=e.markClassName,d=e.zIndex,v=d===void 0?9:d,u=e.gapX,h=u===void 0?212:u,g=e.gapY,f=g===void 0?222:g,b=e.width,c=b===void 0?120:b,y=e.height,x=y===void 0?64:y,E=e.rotate,L=E===void 0?-22:E,M=e.image,R=e.content,B=e.offsetLeft,W=e.offsetTop,z=e.fontStyle,G=z===void 0?"normal":z,F=e.fontWeight,I=F===void 0?"normal":F,de=e.fontColor,Te=de===void 0?"rgba(0,0,0,.15)":de,Me=e.fontSize,Be=Me===void 0?16:Me,De=e.fontFamily,Ae=De===void 0?"sans-serif":De,At=e.prefixCls,St=(0,l.useContext)(ge.ZP.ConfigContext),jt=St.getPrefixCls,Se=jt("pro-layout-watermark",At),Lt=T()("".concat(Se,"-wrapper"),a),It=T()(Se,s),Ut=(0,l.useState)(""),je=(0,xe.Z)(Ut,2),Le=je[0],Ie=je[1];return(0,l.useEffect)(function(){var ce=document.createElement("canvas"),J=ce.getContext("2d"),ae=yt(J),Wt="".concat((h+c)*ae,"px"),Ft="".concat((f+x)*ae,"px"),Kt=B||h/2,wt=W||f/2;if(ce.setAttribute("width",Wt),ce.setAttribute("height",Ft),J){J.translate(Kt*ae,wt*ae),J.rotate(Math.PI/180*Number(L));var Ht=c*ae,Ue=x*ae;if(M){var fe=new Image;fe.crossOrigin="anonymous",fe.referrerPolicy="no-referrer",fe.src=M,fe.onload=function(){J.drawImage(fe,0,0,Ht,Ue),Ie(ce.toDataURL())}}else if(R){var zt=Number(Be)*ae;J.font="".concat(G," normal ").concat(I," ").concat(zt,"px/").concat(Ue,"px ").concat(Ae),J.fillStyle=Te,Array.isArray(R)?R==null||R.forEach(function(_t,$t){return J.fillText(_t,0,$t*50)}):J.fillText(R,0,0),Ie(ce.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[h,f,B,W,L,G,I,c,x,Ae,Te,M,R,Be]),(0,P.jsxs)("div",{style:(0,m.Z)({position:"relative"},t),className:Lt,children:[r,(0,P.jsx)("div",{className:It,style:(0,m.Z)((0,m.Z)({zIndex:v,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(h+c,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},Le?{backgroundImage:"url('".concat(Le,"')")}:null),i)})]})},pt=Et,er=n(12395),Ot=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Zt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Rt(o){return(0,j.Z)(o)==="object"?o:{spinning:o}}var Nt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,i=e.tabBarExtraContent,s=e.tabProps,d=e.prefixedClassName;return Array.isArray(r)||i?(0,P.jsx)(Re.Z,(0,m.Z)((0,m.Z)({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(u){a&&a(u)},tabBarExtraContent:i},s),{},{children:r==null?void 0:r.map(function(v,u){return(0,l.createElement)(Re.Z.TabPane,(0,m.Z)((0,m.Z)({},v),{},{tab:v.tab,key:v.key||u}))})})):null},Tt=function(e,r,t){return!e&&!r?null:(0,P.jsx)("div",{className:"".concat(t,"-detail"),children:(0,P.jsx)("div",{className:"".concat(t,"-main"),children:(0,P.jsxs)("div",{className:"".concat(t,"-row"),children:[e&&(0,P.jsx)("div",{className:"".concat(t,"-content"),children:e}),r&&(0,P.jsx)("div",{className:"".concat(t,"-extraContent"),children:r})]})})})},tr=function(e){var r=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(_Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},r==null?void 0:r.breadcrumb),r==null?void 0:r.breadcrumbProps),e))})},Mt=function(e){var r,t=(0,l.useContext)(Ne.Z),a=e.title,i=e.content,s=e.pageHeaderRender,d=e.header,v=e.prefixedClassName,u=e.extraContent,h=e.style,g=e.prefixCls,f=e.breadcrumbRender,b=(0,Ze.Z)(e,Ot),c=(0,l.useMemo)(function(){if(!!f)return f},[f]);if(s===!1)return null;if(s)return(0,P.jsxs)(P.Fragment,{children:[" ",s((0,m.Z)((0,m.Z)({},e),t))]});var y=a;!a&&a!==!1&&(y=t.title);var x=(0,m.Z)((0,m.Z)((0,m.Z)({},t),{},{title:y},b),{},{footer:Nt((0,m.Z)((0,m.Z)({},b),{},{breadcrumbRender:f,prefixedClassName:v}))},d),E=x.breadcrumb,L=(!E||!(E==null?void 0:E.itemRender)&&!(E==null||(r=E.routes)===null||r===void 0?void 0:r.length))&&!f;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(M){return!x[M]})&&L&&!i&&!u?null:(0,P.jsx)("div",{className:"".concat(v,"-warp"),children:(0,P.jsx)(xt,(0,m.Z)((0,m.Z)({},x),{},{breadcrumb:f===!1?void 0:(0,m.Z)((0,m.Z)({},x.breadcrumb),t.breadcrumbProps),breadcrumbRender:c,prefixCls:g,children:(d==null?void 0:d.children)||Tt(i,u,v)}))})},Bt=function(e){var r,t,a=e.children,i=e.loading,s=i===void 0?!1:i,d=e.className,v=e.style,u=e.footer,h=e.affixProps,g=e.ghost,f=e.fixedHeader,b=e.breadcrumbRender,c=(0,Ze.Z)(e,Zt),y=(0,l.useContext)(Ne.Z),x=(0,l.useContext)(ge.ZP.ConfigContext),E=x.getPrefixCls,L=e.prefixCls||E("pro"),M="".concat(L,"-page-container"),R=T()(M,d,(r={},(0,D.Z)(r,"".concat(L,"-page-container-ghost"),g),(0,D.Z)(r,"".concat(L,"-page-container-with-footer"),u),r)),B=(0,l.useMemo)(function(){return a?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:"".concat(M,"-children-content"),children:a}),y.hasFooterToolbar&&(0,P.jsx)("div",{style:{height:48,marginTop:24}})]}):null},[a,M,y.hasFooterToolbar]),W=(0,l.useMemo)(function(){var I;return b==!1?!1:b||(c==null||(I=c.header)===null||I===void 0?void 0:I.breadcrumbRender)},[b,c==null||(t=c.header)===null||t===void 0?void 0:t.breadcrumbRender]),z=(0,P.jsx)(Mt,(0,m.Z)((0,m.Z)({},c),{},{breadcrumbRender:W,ghost:g,prefixCls:void 0,prefixedClassName:M})),G=(0,l.useMemo)(function(){if(l.isValidElement(s))return s;if(typeof s=="boolean"&&!s)return null;var I=Rt(s);return I.spinning?(0,P.jsx)(bt.Z,(0,m.Z)({},I)):null},[s]),F=(0,l.useMemo)(function(){var I=G||B;if(e.waterMarkProps||y.waterMarkProps){var de=(0,m.Z)((0,m.Z)({},y.waterMarkProps),e.waterMarkProps);return(0,P.jsx)(pt,(0,m.Z)((0,m.Z)({},de),{},{children:I}))}return I},[e.waterMarkProps,y.waterMarkProps,G,B]);return(0,P.jsxs)("div",{style:v,className:R,children:[f&&z?(0,P.jsx)(Fe,(0,m.Z)((0,m.Z)({offsetTop:y.hasHeader&&y.fixedHeader?y.headerHeight:0},h),{},{children:z})):z,F&&(0,P.jsx)(Pt.Z,{children:F}),u&&(0,P.jsx)(Ct.Z,{prefixCls:L,children:u})]})},Dt=Bt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},33508:function(){},59903:function(){},34952:function(ne,K,n){"use strict";var O=n(22122),w=n(15105),C=n(67294),D=function(Z,$){var j={};for(var N in Z)Object.prototype.hasOwnProperty.call(Z,N)&&$.indexOf(N)<0&&(j[N]=Z[N]);if(Z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,N=Object.getOwnPropertySymbols(Z);T<N.length;T++)$.indexOf(N[T])<0&&Object.prototype.propertyIsEnumerable.call(Z,N[T])&&(j[N[T]]=Z[N[T]]);return j},U={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Q=C.forwardRef(function(Z,$){var j=function(_){var X=_.keyCode;X===w.Z.ENTER&&_.preventDefault()},N=function(_){var X=_.keyCode,Y=Z.onClick;X===w.Z.ENTER&&Y&&Y()},T=Z.style,H=Z.noStyle,ee=Z.disabled,l=D(Z,["style","noStyle","disabled"]),A={};return H||(A=(0,O.Z)({},U)),ee&&(A.pointerEvents="none"),A=(0,O.Z)((0,O.Z)({},A),T),C.createElement("div",(0,O.Z)({role:"button",tabIndex:0,ref:$},l,{onKeyDown:j,onKeyUp:N,style:A}))});K.Z=Q},84305:function(ne,K,n){"use strict";var O=n(33508),w=n.n(O)},97435:function(ne,K){"use strict";function n(O,w){for(var C=Object.assign({},O),D=0;D<w.length;D+=1){var U=w[D];delete C[U]}return C}K.Z=n}}]);
