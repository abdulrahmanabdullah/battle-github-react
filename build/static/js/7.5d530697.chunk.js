(this["webpackJsonpgithub-battle"]=this["webpackJsonpgithub-battle"]||[]).push([[7],{150:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(105),o=n(37),c=n(38),i=n(40),s=n(39),l=n(41),u=n(0),m=n.n(u),g=n(139),f={root:{width:"100%",textAlign:"center",margin:"0 auto",position:"absolute",top:"50%"}};function d(){return m.a.createElement("div",{style:f.root},m.a.createElement(g.a,{variant:"indeterminate"}))}var h=n(18),p=n(66),b=n(149),E=n(140),v=n(141),y=n(142),w=n(143),j=n(120),z=n(144),O=n(145),L=n(86),_=n(146),C=n(28),k=n(45),x=n(97),N=n(106),S=n(96);function U(e){var t=e.selectedLang,n=e.onUpdateLang,a=["All","js","Python","ruby","react"],r=["all",m.a.createElement(x.g,{size:25}),m.a.createElement(x.h,{size:25}),m.a.createElement(N.a,{size:25}),m.a.createElement(x.i,{size:25})];return m.a.createElement(h.a,null,(function(e){e.theme;return m.a.createElement(p.a,{square:!0,elevation:1},m.a.createElement(b.a,{centered:!0,variant:"fullWidth",value:a.indexOf(t),indicatorColor:"primary",textColor:"primary",style:{height:"70px"},onChange:function(){return n(t)}},a.map((function(e,t){return m.a.createElement(E.a,{icon:0===t?null:r[t],label:e,key:t,onClick:function(){return n(e)}})}))))}))}n.d(t,"default",(function(){return A}));var A=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={selectLanguage:"All",repo:{},error:null},n.onUpdateLang=function(e){n.setState({selectLanguage:e}),n.state.repo[e]||Object(S.b)(e).then((function(t){n.setState((function(n){var o=n.repo;return{repo:Object(r.a)({},o,Object(a.a)({},e,t))}}))})).catch((function(e){console.warn(e),n.setState({error:e})}))},n.isLoading=function(){var e=n.state,t=e.selectLanguage,a=e.repo,r=e.error;return!a[t]&&null===r},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.onUpdateLang(this.state.selectLanguage)}},{key:"render",value:function(){var e=this.state,t=e.selectLanguage,n=e.repo;return m.a.createElement(m.a.Fragment,null,m.a.createElement(U,{selectedLang:t,onUpdateLang:this.onUpdateLang}),this.isLoading()&&m.a.createElement(d,null),n[t]&&m.a.createElement(R,{repo:n[t]}))}}]),t}(u.Component),I=Object(k.a)((function(e){return{grid:{margin:"0 auto",padding:e.spacing(1)},card:{maxWidth:300},hash:{backgroundColor:C.a[500]},media:{heigh:0,width:100,margin:"0 auto",padding:"52.5%"},title:{fontSize:14},cardContent:{margin:0,padding:"10px"},listRoot:{display:"flex",alignItems:"center",justifyContent:"space-around"},listIconStyle:{display:"flex",margin:0,padding:0}}}));function R(e){var t=e.repo,n=I();return m.a.createElement(v.a,{container:!0,justify:"center",alignItems:"center",spacing:4,className:n.grid},t.map((function(e,t){var a=e.name,r=e.stargazers_count,o=e.watchers_count,c=e.owner,i=e.html_url,s=e.description,l=e.open_issues,u=e.forks,g=c.avatar_url;return m.a.createElement(v.a,{item:!0,xs:!0,sm:!0,md:!0,key:t,className:n.subGrid},m.a.createElement(y.a,{className:n.card},m.a.createElement(w.a,{avatar:m.a.createElement(j.a,{className:n.hash}," ",t+1," "),title:a}),m.a.createElement("a",{href:i},m.a.createElement(z.a,{title:"avatar",component:"image",image:g,className:n.media})),m.a.createElement(O.a,null,m.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,noWrap:!0},s)),m.a.createElement(O.a,{className:n.cardContent},m.a.createElement(P,{watchers_count:o,stargazers_count:r,open_issues:l,forks:u}))))})))}function P(e){var t=e.stargazers_count,n=e.watchers_count,a=e.open_issues,r=e.forks,o=I();return m.a.createElement("div",{className:o.listRoot},m.a.createElement(_.a,{badgeContent:n,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"}},m.a.createElement(x.e,{size:29,color:"rgb(255,191,116)"})),m.a.createElement(_.a,{badgeContent:t.toLocaleString(),color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"}},m.a.createElement(x.j,{size:29,color:"rgb(255,215,0)"})),m.a.createElement(_.a,{badgeContent:r,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"}},m.a.createElement(x.b,{size:29,color:"rgb(129,195,245)"})),m.a.createElement(_.a,{badgeContent:a.toLocaleString(),color:"secondary",overlap:"rectangle",anchorOrigin:{vertical:"bottom",horizontal:"left"}},m.a.createElement(x.d,{size:29,color:"rgb(249,138,147)"})))}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(99),r="?client_id=".concat("c3e5586e80700304c7ff","?client_secret=").concat("a6473f631dc126db53fbed59aee3bd11f5f49458");function o(e,t){return"NOT FOUND"===e?" ".concat(t," doesn't exist"):e}function c(e){return fetch("https://api.github.com/users/".concat(e).concat(r)).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(o(t.message,e));return t}))}function i(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(r,"&per_page=100")).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(o(t.message,e));return t}))}function s(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function l(e){return Promise.all([c(e),i(e)]).then((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return{profile:n,score:s(n.followers,r)}}))}function u(e){return Promise.all([l(e[0]),l(e[1])]).then((function(e){return function(e){return e.sort((function(e,t){return t.score-e.score}))}(e)}))}function m(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}}}]);
//# sourceMappingURL=7.5d530697.chunk.js.map