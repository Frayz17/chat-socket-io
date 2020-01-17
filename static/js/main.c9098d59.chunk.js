(this["webpackJsonpchat-socket-io-client"]=this["webpackJsonpchat-socket-io-client"]||[]).push([[0],{135:function(e,a){},180:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),l=t(28),s=t(23),i=t(18),m=t(83),u=t(181),f=t(214),E=t(222),p=t(182),h=t(221),g=t(223),v=Object(m.a)((function(e){return{root:{alignItems:"center",justifyContent:"center"},paper:{width:350,minHeight:300},box:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",minHeight:300}}}));var b=function(){var e=r.a.useState(""),a=Object(i.a)(e,2),t=a[0],n=a[1],c=r.a.useState(""),o=Object(i.a)(c,2),s=o[0],m=o[1],b=v();return r.a.createElement(f.a,{container:!0,className:b.root},r.a.createElement(u.a,{className:b.paper},r.a.createElement(E.a,{className:b.box},r.a.createElement(p.a,{variant:"h4"},"Join"),r.a.createElement(h.a,{label:"Name",variant:"outlined",value:t,onChange:function(e){n(e.target.value)}}),r.a.createElement(h.a,{label:"Room",variant:"outlined",value:s,onChange:function(e){m(e.target.value)}}),r.a.createElement(g.a,{color:"primary",component:l.b,onClick:function(e){return t&&s?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(s)},"Sign In"))))},d=t(13),x=t(85),j=t.n(x),N=t(86),y=t.n(N),O=t(216),k=t(217),w=t(218),C=t(88),S=t.n(C),I=t(87),D=t.n(I),M=Object(m.a)((function(e){return{root:{position:"static",backgroundColor:D.a[800]},link:{display:"flex"},closeIcon:{fontSize:25,color:"white"},title:{marginLeft:5,flexGrow:1}}}));var G=function(e){var a=e.room,t=M();return r.a.createElement(O.a,{className:t.root},r.a.createElement(k.a,null,r.a.createElement(p.a,{className:t.title,variant:"h6"},a),r.a.createElement(w.a,{color:"secondary",className:t.link,href:"/"},r.a.createElement(S.a,{className:t.closeIcon}))))},J=t(89),z=t.n(J),B=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",padding:5,marginBottom:5}}}));var H=function(e){var a=e.message,t=a.text,n=a.user,c=e.name,o=!1,l=B(),s=c.trim().toLowerCase();return n===s&&(o=!0),o?r.a.createElement(E.a,{className:l.root},r.a.createElement(p.a,{variant:"subtitle2"},s),r.a.createElement(E.a,null,r.a.createElement(p.a,{variant:"body2"},t))):r.a.createElement(E.a,{className:l.root},r.a.createElement(E.a,null,r.a.createElement(p.a,{variant:"body2"},t)),r.a.createElement(p.a,{variant:"subtitle2"},n))},L=Object(m.a)((function(e){return{root:{height:381},"@media (max-width: 599px)":{root:{height:389}}}}));var F=function(e){var a=e.messages,t=e.name,n=L();return r.a.createElement(z.a,{className:n.root},a.map((function(e,a){return r.a.createElement(H,{key:a,message:e,name:t})})))},K=Object(m.a)((function(e){return{root:{display:"flex"},input:{flexGrow:10},btn:{flexGrow:2}}}));var P,R=function(e){var a=e.setMessage,t=e.sendMessage,n=e.message,c=K();return r.a.createElement(E.a,null,r.a.createElement("form",{className:c.root},r.a.createElement(h.a,{className:c.input,value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null},label:"message...",variant:"outlined"}),r.a.createElement(g.a,{className:c.btn,onClick:function(e){return t(e)}},"send")))},T=t(219),W=Object(m.a)((function(e){return{root:{height:"500px"},paper:{height:"inherit",display:"flex",flexDirection:"column"}}}));var q=function(e){var a=e.location,t=r.a.useState(""),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(""),m=Object(i.a)(l,2),f=m[0],E=m[1],p=r.a.useState(""),h=Object(i.a)(p,2),g=h[0],v=h[1],b=r.a.useState([]),x=Object(i.a)(b,2),N=x[0],O=x[1],k=W(),w="https://frayz-chat.herokuapp.com/";return a=Object(s.e)(),r.a.useEffect((function(){var e=y.a.parse(a.search),t=e.name,n=e.room;P=j()(w),o(t),E(n),P.emit("join",{name:t,room:n},(function(e){e&&alert(e)}))}),[a.search,w]),r.a.useEffect((function(){return P.on("message",(function(e){O([].concat(Object(d.a)(N),[e]))})),function(){P.emit("disconnect"),P.off()}}),[N]),r.a.createElement(T.a,{className:k.root},r.a.createElement(u.a,{className:k.paper},r.a.createElement(G,{room:f}),r.a.createElement(F,{messages:N,name:c}),r.a.createElement(R,{message:g,setMessage:v,sendMessage:function(e){e.preventDefault(),g&&P.emit("sendMessage",g,(function(){return v("")}))}})))},A=t(220),Q=(t(179),Object(m.a)((function(e){return{root:{marginTop:"10vh"}}})));o.a.render(r.a.createElement(l.a,null,r.a.createElement((function(){var e=Q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null),r.a.createElement(T.a,{maxWidth:"md",className:e.root},r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(b,null)),r.a.createElement(s.a,{exact:!0,path:"/chat"},r.a.createElement(q,null))))}),null)),document.getElementById("root"))},99:function(e,a,t){e.exports=t(180)}},[[99,1,2]]]);
//# sourceMappingURL=main.c9098d59.chunk.js.map