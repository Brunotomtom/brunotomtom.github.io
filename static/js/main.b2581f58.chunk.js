(this["webpackJsonpcubos-player"]=this["webpackJsonpcubos-player"]||[]).push([[0],[,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(4),r=s.n(n),c=(s(10),s(5)),o=s(2),l=(s(11),s(12),s.p+"static/media/logo.737fb174.svg"),d=s(0);var u=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{className:"logo",src:l,alt:"logo"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"avatar",src:"https://avatars.githubusercontent.com/u/96790889",alt:"user"}),Object(d.jsx)("span",{children:"Welcome, Bruno"})]})]})};s(14);var p=function(e){var t=e.title,s=(e.artist,e.description),i=(e.url,e.cover),a=e.handleMusic,n=e.music;return Object(d.jsxs)("div",{className:"card",onClick:function(){return a(n)},children:[Object(d.jsx)("img",{src:i,alt:"album cover"}),Object(d.jsx)("h4",{children:t}),Object(d.jsx)("p",{children:s})]})},m=(s(15),[{id:1,title:"Viol\xe3o Ac\xfastico",artist:"Mayer Bronkx",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img1.jpg"},{id:2,title:"Just Things",artist:"John Cris",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/Bay%20Street%20Billionaires%20-%20Squadda%20B.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img2.jpg"},{id:3,title:"Maybe Other",artist:"Eva Garden",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/North%20Oakland%20Extasy%20-%20Squadda%20B.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img4.jpg"},{id:4,title:"It's simple",artist:"Emily C. M.",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/One%20Time%20-%20Jeremy%20Black.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img5.jpg"}]);s(16);var g=function(e){var t=e.className,s=e.src,i=e.alt,a=e.onClick,n=e.value;return Object(d.jsx)("img",{className:t,src:s,alt:i,onClick:function(){return a(n)}})},j=s.p+"static/media/next.f2e40fc9.svg",h=s.p+"static/media/pause.2e5d08b2.svg",b=s.p+"static/media/play.6233e861.svg",v=s.p+"static/media/previous.184d8033.svg",f=s.p+"static/media/stop.c30597e9.svg";var y=function(e){var t=e.id,s=e.title,a=e.artist,n=(e.description,e.url),r=(e.cover,e.handleMusic),c=Object(i.useState)(!1),l=Object(o.a)(c,2),u=l[0],p=l[1];function y(e){var s=m.findIndex((function(e){return e.id===t}))+e;s>=m.length&&(s=0),s<0&&(s=m.length-1);var i={id:m[s].id,title:m[s].title,artist:m[s].artist,description:m[s].description,url:m[s].url,cover:m[s].cover};r(i),p(!1)}return Object(d.jsxs)("footer",{children:[Object(d.jsxs)("div",{className:"player",children:[Object(d.jsx)("p",{children:s}),Object(d.jsx)("span",{children:a}),Object(d.jsx)("audio",{src:n,type:"audio/mp3"})]}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsxs)("div",{className:"controls__buttons",children:[Object(d.jsx)(g,{className:"btn",src:f,alt:"stop",onClick:function(){return document.querySelector("audio").pause(),document.querySelector("audio").currentTime=0,p(!1)}}),Object(d.jsx)(g,{className:"btn",src:v,alt:"previous music",onClick:y,value:-1}),Object(d.jsx)(g,{className:"btn-main",src:u?h:b,alt:"play and pause",onClick:function(){return u?(document.querySelector("audio").pause(),p(!1)):(document.querySelector("audio").play(),p(!0))}}),Object(d.jsx)(g,{className:"btn",src:j,alt:"next music",onClick:y,value:1})]}),Object(d.jsx)("div",{className:"controls__bar"})]})]})};var x=function(){var e=Object(i.useState)({}),t=Object(o.a)(e,2),s=t[0],a=t[1];function n(e){a(Object(c.a)({},e))}return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{}),Object(d.jsx)("main",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"The best play list"}),Object(d.jsx)("div",{className:"card-container",children:m.map((function(e){return Object(d.jsx)(p,{title:e.title,artist:e.artist,description:e.description,url:e.url,cover:e.cover,handleMusic:n,music:e},e.id)}))})]})}),Object(d.jsx)(y,{id:s.id,title:s.title,artist:s.artist,description:s.description,url:s.url,cover:s.cover,handleMusic:n})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.b2581f58.chunk.js.map