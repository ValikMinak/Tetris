(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{12:function(n,e,t){n.exports=t.p+"static/media/bg.2810fe6b.png"},13:function(n,e,t){n.exports=t.p+"static/media/bg.2810fe6b.png"},15:function(n,e,t){n.exports=t(23)},20:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=(t(20),t(1)),u=function(){return Array.from(Array(20),(function(){return Array(12).fill([0,"clear"])}))},l=function(n,e,t){for(var r=t.x,o=t.y,a=0;a<n.tetromino.length;a+=1)for(var c=0;c<n.tetromino[a].length;c+=1)if(0!==n.tetromino[a][c]&&(!e[a+n.pos.y+o]||!e[a+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[a+n.pos.y+o][c+n.pos.x+r][1]))return!0;return!1},f={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},d=function(){var n="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return f[n]},s=t(2),p=t(3);function b(){var n=Object(s.a)(["\n  width: auto;\n  /* border-radius: 5px; */\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return b=function(){return n},n}var m=p.a.div(b(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),v=o.a.memo((function(n){var e=n.type;return o.a.createElement(m,{type:e,color:f[e].color},console.log("rerender cell"))}));function x(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return x=function(){return n},n}var g=p.a.div(x(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),h=function(n){var e=n.stage;return o.a.createElement(g,{width:e[0].length,height:e.length},e.map((function(n){return n.map((function(n,e){return o.a.createElement(v,{key:e,type:n[0]})}))})))};function O(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return O=function(){return n},n}var y=p.a.div(O(),(function(n){return n.gameOver?"red":"#999"})),j=function(n){var e=n.gameOver,t=n.text;return o.a.createElement(y,{gameOver:e},t)};function w(){var n=Object(s.a)(["\n  box-sizing: border-box;\n\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return w=function(){return n},n}var E=p.a.button(w()),k=function(n){var e=n.callback;return o.a.createElement(E,{onClick:e},"Start Game")},S=t(14),I=function(n,e){var t=Object(r.useState)(u()),o=Object(i.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),d=f[0],s=f[1];return Object(r.useEffect)((function(){s(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(s((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n.collided,n.pos.x,n.pos.y,n.tetromino,e]),[a,c,d]};var J=t(12),A=t.n(J);function L(){var n=Object(s.a)(["\ndisplay:flex;\nalign-items:flex-start;\npadding:40px;\nmargin:0 auto;\nmax-width:900px;\n\n    aside {\n    width:100%;\n    max-width:200px;\n    display:block;\n    padding:0 20px;\n    }\n"]);return L=function(){return n},n}function T(){var n=Object(s.a)(["\nwidth:100vw;\nheight:100vh;\nbackground:url(",") #000;\nbackground-size:cover;\noverflow:hidden;\n"]);return T=function(){return n},n}var Z=p.a.div(T(),A.a),z=(p.a.div(L()),t(13)),C=t.n(z);function G(){var n=Object(s.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return G=function(){return n},n}function M(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return M=function(){return n},n}p.a.div(M(),C.a);var N=p.a.div(G()),H=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(!1),s=Object(i.a)(c,2),p=s[0],b=s[1],m=function(){var n=Object(r.useState)({pos:{x:0,y:0},tetromino:f[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],o=e[1];function a(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()}var c=Object(r.useCallback)((function(){o({pos:{x:4,y:0},tetromino:d().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,t=n.y,r=n.collided;o((function(n){return Object(S.a)({},n,{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:r})}))},c,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tetromino=a(r.tetromino,e);for(var c=r.pos.x,i=1;l(r,n,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-e),void(r.pos.x=c);o(r)}]}(),v=Object(i.a)(m,4),x=v[0],g=v[1],O=v[2],y=v[3],w=I(x,O),E=Object(i.a)(w,3),J=E[0],A=E[1],L=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],d=Object(r.useState)(0),s=Object(i.a)(d,2),p=s[0],b=s[1],m=[40,100,300,1200],v=Object(r.useCallback)((function(){n>0&&(a((function(e){return e+m[n-1]*(p+1)})),f((function(e){return e+n})))}),[p,m,n]);return Object(r.useEffect)((function(){v()}),[v,n,o]),[o,a,l,f,p,b]}(E[2]),T=Object(i.a)(L,6),z=T[0],C=T[1],G=T[2],M=T[3],H=T[4],K=T[5];console.log("re-render");var P=function(n){l(x,J,{x:n,y:0})||g({x:n,y:0})},R=function(){G>10*(H+1)&&(K((function(n){return n+1})),a(1e3/(H+1)+200)),l(x,J,{x:0,y:1})?(x.pos.y<1&&(console.log("GAME OVER!!!"),b(!0),a(null)),g({x:0,y:0,collided:!0})):g({x:0,y:1,collided:!1})};!function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){R()}),t);var B=function(n){var e=n.keyCode;p||(37===e?P(-1):39===e?P(1):40===e?(a(null),R()):38===e&&y(J,1))};return o.a.createElement(Z,{role:"button",tabIndex:"0",onKeyDown:function(n){return B(n)},onKeyUp:function(n){var e=n.keyCode;p||40===e&&a(1e3/(H+1))}},o.a.createElement(N,null,o.a.createElement(h,{stage:J}),o.a.createElement("aside",null,p?o.a.createElement(j,{gameOver:p,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(j,{text:"Score: ".concat(z)}),o.a.createElement(j,{text:"rows: ".concat(G)}),o.a.createElement(j,{text:"Level: ".concat(H)})),o.a.createElement(k,{callback:function(){A(u()),a(1e3),O(),C(0),K(0),M(0),b(!1)}}))))},K=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(H,null))};c.a.render(o.a.createElement(K,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ff8c7bff.chunk.js.map