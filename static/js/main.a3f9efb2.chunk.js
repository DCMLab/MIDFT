(this.webpackJsonpmidft=this.webpackJsonpmidft||[]).push([[0],{197:function(e,t){},207:function(e,t,i){"use strict";i.r(t);var a=i(0),o=i.n(a),s=i(68),r=i.n(s),n=i(29),c=i(2);function u(){return Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("h1",{children:"MIDFT"}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(n.b,{to:"/",children:"Home"}),Object(c.jsx)(n.b,{to:"/visualization",children:"App"})]})]})}var l=i(4);function d(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Home - Theory and analysis"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, architecto temporibus laboriosam, atque veniam quod provident minus eos aspernatur ipsa ad nihil veritatis ea, eaque amet! Itaque cupiditate laudantium neque voluptas necessitatibus quidem perspiciatis molestias dolores possimus. Veritatis perferendis, quidem molestiae ipsa reprehenderit aperiam harum iste obcaecati doloribus, recusandae adipisci et saepe non qui illum ratione nemo amet voluptates dolore exercitationem provident. Ea sed incidunt cum eum excepturi vitae consequuntur eius quam earum? Repudiandae explicabo incidunt molestiae animi. Quibusdam veniam rerum minima error, quos voluptas incidunt. Est ex nesciunt ea id, dolor harum nemo quo quibusdam molestias dicta quae modi inventore. Sit dicta iure voluptatum modi. Recusandae harum blanditiis in dolore quasi officiis minus quos veritatis eveniet corporis eaque odio esse deserunt dolorum quod qui tempore, asperiores repellat numquam dolorem nobis! Provident soluta officiis temporibus optio, sapiente aspernatur accusantium ipsam velit necessitatibus natus placeat obcaecati consectetur quia. Reiciendis ipsum tempora non, dicta quod nesciunt. Magni, harum laudantium inventore omnis fugiat quia explicabo temporibus itaque officiis minus autem cumque! Necessitatibus dolorum aliquid omnis, sed ullam voluptatem reiciendis voluptate. Ad minima voluptatem praesentium totam eum consequuntur reiciendis quae soluta ipsam cupiditate? Officia labore modi illum libero error ad fugit sit nostrum, totam esse magnam doloremque repellendus. Similique, iure sed voluptatem quia molestiae aut incidunt facilis sequi! Veniam cupiditate optio magnam officiis cumque beatae laudantium, quas natus at aliquid nostrum, voluptatem aliquam quia doloremque, fugit fuga facere esse. Nostrum numquam nam, praesentium iusto accusamus quasi delectus rem vero laborum, optio blanditiis commodi id quidem beatae in. Laudantium fugit aspernatur impedit quam maiores officiis! Odit, est quae obcaecati repudiandae modi aliquid corporis natus dolores harum porro perferendis magni nam. Aperiam provident accusamus soluta optio eaque incidunt, quos modi nulla eligendi quo unde ipsa. Maxime distinctio minus beatae consequuntur assumenda ab vitae pariatur. Commodi maiores eius esse totam accusantium molestiae accusamus quas fugiat placeat quaerat voluptate corrupti architecto sapiente reiciendis obcaecati molestias, at tempore quisquam! Quam ratione aliquid quo illo delectus eaque quae reiciendis dicta corporis obcaecati, nesciunt veritatis molestiae impedit ut mollitia nam quisquam in aut quia nemo. Ducimus nulla assumenda numquam debitis recusandae dicta quam amet dolores, reprehenderit reiciendis ipsum sapiente sit alias obcaecati praesentium consequatur ipsa natus iste distinctio officia vel fugiat dolore delectus. Molestiae vero omnis blanditiis perspiciatis quibusdam, ipsam quo fugiat sunt pariatur minima aperiam ratione, unde distinctio porro incidunt praesentium repellendus aliquam autem dolores natus. Ab corporis earum veniam corrupti neque aperiam! Perferendis, eligendi, praesentium totam quia excepturi exercitationem dolores debitis cumque optio consectetur et suscipit cupiditate fuga nam commodi minima molestiae odit consequatur id enim aut quisquam eum. Modi dolores fuga neque praesentium repellendus, aspernatur ea quod? Corporis quaerat, nobis culpa quod nesciunt eum distinctio itaque cumque molestias impedit, deleniti delectus. Eum repellat architecto velit delectus eius praesentium, temporibus a nobis ad unde quaerat minus illum eos culpa earum possimus? Doloribus nostrum, impedit aut, officia amet at fuga velit minima tempora, harum molestiae non nisi quia maxime? Odio quo reiciendis nostrum repudiandae, alias delectus aut ullam quisquam. Eius?"})]})}var f=i(9),m=i(10),p=i(15),h=i(209),b=p.c().domain([0,1]).range(p.b(0,255,1)),v=function(e){var t,i,a;return e>=0&&e<h.f/3?(t=1,i=3*e/h.f,a=0):e>=h.f/3&&e<2*h.f/3?(t=2-3*e/h.f,i=1,a=0):e>=2*h.f/3&&e<h.f?(t=0,i=1,a=3*e/h.f-2):e>=h.f&&e<4*h.f/3?(t=0,i=4-3*e/h.f,a=1):e>=4*h.f/3&&e<5*h.f/3?(t=3*e/h.f-4,i=0,a=1):e>=5*h.f/3&&e<2*h.f&&(t=1,i=0,a=6-3*e/h.f),t=b(t),i=b(i),a=b(a),"rgb(".concat(t,", ").concat(i,", ").concat(a,")")};function y(e){var t=e.toPolar(),i=t.phi,a=t.r;i<0&&(i+=2*h.f);var o=v(i).slice(3,-1);return"rgba".concat(o,", ").concat(a,")")}var x=function(e){var t=e.printablePitchClasses,i=300,a=270,o=2*h.f/30,s=p.b(0,2*h.f,o),r=p.b(0,1,1/15);return p.b(0,6,1).map((function(e){return Object(c.jsxs)("svg",{width:i,height:300,children:[Object(c.jsx)("g",{transform:"translate(".concat(150,",").concat(150,")"),children:r.map((function(t){return s.map((function(i,s){return function(e,t,i,s){var r=-h.f/2,n=p.a().innerRadius(s*a/2).outerRadius((s+1/15)*a/2).startAngle(-(e+r)).endAngle(-(e+o+r));return Object(c.jsx)("path",{fill:v(e),fillOpacity:s,stroke:v(e),strokeOpacity:s/10,d:n()},"".concat(i,".").concat(t))}(i,s,e,t)}))}))}),Object(c.jsx)("g",{transform:"translate(".concat(150,",").concat(150,")"),children:t.map((function(t){return t.coeff.includes(e+1)?function(e){var t=p.a().innerRadius(7.5).outerRadius(9).startAngle(0).endAngle(2*h.f);return Object(c.jsx)("path",{transform:"translate(".concat(e.x*a/2,",").concat(e.y*a/2,")"),fill:"grey",d:t()},e.id)}(t):null}))})]},"circle".concat(e))}))},j=function(e){var t=e.wavescapeMatrix,i=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=i.current,a=e.getContext("2d"),o=[100,100],s=[e.width-o[0],e.height-o[1]],r=t[0].length;t.length>0&&(a.clearRect(0,0,a.canvas.width,a.canvas.height),a.setTransform(1,0,0,-1,0,a.canvas.height),function(e,t,i){for(var a=0;a<e.length-1;a++)for(var o=0;o<e[a].length-1;o++)0===a?(t.beginPath(),t.moveTo(e[a][o].x,e[a][o].y),t.lineTo(e[a][o+1].x,e[a][o+1].y),t.lineTo(e[a+1][o].x,e[a+1][o].y),t.fillStyle=i[a][o],t.fill()):(t.beginPath(),t.moveTo(e[a][o].x,e[a][o].y),t.lineTo(e[a-1][o+1].x,e[a-1][o+1].y),t.lineTo(e[a][o+1].x,e[a][o+1].y),t.lineTo(e[a+1][o].x,e[a+1][o].y),t.fillStyle=i[a][o],t.fill())}(function(e,t,i,a,o){for(var s=e/i,r=[],n=0;n<i+1;n++){for(var c=[],u=0;u<i+1;u++)n<=u&&c.push({x:(u-n)*s+n*s/2+a,y:n*s+o});r.push(c)}return r}(s[0],0,r,o[0],o[1]),a,t))}),[t]),Object(c.jsx)("canvas",{width:500,height:500,ref:i})};var q=[{coeff:"123456",label:"\u03a9",id:"123456.\u03a9",x:0,y:0,isPrototype:!0},{coeff:"15",label:"C",id:"15.C",x:1,y:0,isPrototype:!0},{coeff:"15",label:"C#",id:"15.C#",x:.866,y:-.5,isPrototype:!0},{coeff:"15",label:"D",id:"15.D",x:.5,y:-.866,isPrototype:!0},{coeff:"15",label:"D#",id:"15.D#",x:0,y:-1,isPrototype:!0},{coeff:"15",label:"E",id:"15.E",x:-.5,y:-.866,isPrototype:!0},{coeff:"15",label:"F",id:"15.F",x:-.866,y:-.5,isPrototype:!0},{coeff:"15",label:"F#",id:"15.F#",x:-1,y:0,isPrototype:!0},{coeff:"15",label:"G",id:"15.G",x:-.866,y:.5,isPrototype:!0},{coeff:"15",label:"G#",id:"15.G#",x:-.5,y:.866,isPrototype:!0},{coeff:"15",label:"A",id:"15.A",x:0,y:1,isPrototype:!0},{coeff:"15",label:"Bb",id:"15.Bb",x:.5,y:.866,isPrototype:!0},{coeff:"15",label:"B",id:"15.B",x:.866,y:.5,isPrototype:!0},{coeff:"2",label:"T_0",id:"2.T_0",x:1,y:0,isPrototype:!0},{coeff:"2",label:"T_1",id:"2.T_1",x:.5,y:-.866,isPrototype:!0},{coeff:"2",label:"T_2",id:"2.T_2",x:-.5,y:-.866,isPrototype:!0},{coeff:"2",label:"T_3",id:"2.T_3",x:-1,y:0,isPrototype:!0},{coeff:"2",label:"T_4",id:"2.T_4",x:-.5,y:.866,isPrototype:!0},{coeff:"2",label:"T_5",id:"2.T_5",x:.5,y:.866,isPrototype:!0},{coeff:"3",label:"C+",id:"3.C+",x:1,y:0,isPrototype:!0},{coeff:"3",label:"C#+",id:"3.C#+",x:0,y:-1,isPrototype:!0},{coeff:"3",label:"D+",id:"3.D+",x:-1,y:0,isPrototype:!0},{coeff:"3",label:"D#+",id:"3.D#+",x:0,y:1,isPrototype:!0},{coeff:"3",label:"H_0,3",id:"3.H_0,3",x:.5,y:.5,isPrototype:!0},{coeff:"3",label:"H_0,1",id:"3.H_0,1",x:.5,y:-.5,isPrototype:!0},{coeff:"3",label:"H_1,2",id:"3.H_1,2",x:-.5,y:-.5,isPrototype:!0},{coeff:"3",label:"H_2,3",id:"3.H_2,3",x:-.5,y:.5,isPrototype:!0},{coeff:"4",label:"C^o7",id:"4.C^o7",x:1,y:0,isPrototype:!0},{coeff:"4",label:"C#^o7",id:"4.C#^o7",x:-.5,y:-.866,isPrototype:!0},{coeff:"4",label:"D^o7",id:"4.D^o7",x:-.5,y:.866,isPrototype:!0},{coeff:"4",label:"O_0,2",id:"4.O_0,2",x:.25,y:.433,isPrototype:!0},{coeff:"4",label:"O_0,1",id:"4.O_0,1",x:.25,y:-.433,isPrototype:!0},{coeff:"4",label:"O_1,2",id:"4.O_1,2",x:-.5,y:0,isPrototype:!0},{coeff:"5",label:"\u266e",id:"5.\u266e",x:.267,y:.462,isPrototype:!0},{coeff:"5",label:"\u266d",id:"5.\u266d",x:0,y:-.533,isPrototype:!0},{coeff:"5",label:"2\u266d",id:"5.2\u266d",x:-.267,y:.462,isPrototype:!0},{coeff:"5",label:"3\u266d",id:"5.3\u266d",x:.462,y:-.267,isPrototype:!0},{coeff:"5",label:"4\u266d",id:"5.4\u266d",x:-.533,y:0,isPrototype:!0},{coeff:"5",label:"5\u266d",id:"5.5\u266d",x:.462,y:.267,isPrototype:!0},{coeff:"5",label:"6\u266f",id:"5.6\u266f",x:-.267,y:-.462,isPrototype:!0},{coeff:"5",label:"5\u266f",id:"5.5\u266f",x:0,y:.533,isPrototype:!0},{coeff:"5",label:"4\u266f",id:"5.4\u266f",x:.267,y:-.462,isPrototype:!0},{coeff:"5",label:"3\u266f",id:"5.3\u266f",x:-.462,y:.267,isPrototype:!0},{coeff:"5",label:"2\u266f",id:"5.2\u266f",x:.533,y:0,isPrototype:!0},{coeff:"5",label:"\u266f",id:"5.\u266f",x:-.462,y:-.267,isPrototype:!0},{coeff:"6",label:"WT_1",id:"6.WT_1",x:1,y:0,isPrototype:!0},{coeff:"6",label:"WT_2",id:"6.WT_2",x:-1,y:0,isPrototype:!0}],g=i(33),O=i(34),P=i(70);function C(e){for(var t=e[0],i=1;i<e.length;i++){for(var a=[],o=0;o<e[i].length;o++)a.push(h.a(t[o],e[i][o]));t=a.slice()}var s=t[0];return t=t.map((function(e){return h.b(e,s)}))}var T=function(){function e(){Object(g.a)(this,e),this.C=0,this.Cs=0,this.D=0,this.Ds=0,this.E=0,this.F=0,this.Fs=0,this.G=0,this.Gs=0,this.A=0,this.As=0,this.B=0}return Object(O.a)(e,[{key:"addNoteDuration",value:function(e,t){switch(e){case"C":this.C+=t;break;case"C#":this.Cs+=t;break;case"D":this.D+=t;break;case"D#":this.Ds+=t;break;case"E":this.E+=t;break;case"F":this.F+=t;break;case"F#":this.Fs+=t;break;case"G":this.G+=t;break;case"Gs":this.Gs+=t;break;case"A":this.A+=t;break;case"A#":this.As+=t;break;case"B":this.B+=t}}},{key:"getPcvAsArray",value:function(){return[this.C,this.Cs,this.D,this.Ds,this.E,this.F,this.Fs,this.G,this.Gs,this.A,this.As,this.B]}},{key:"add",value:function(e){this.C=e.C,this.Cs=e.Cs,this.D=e.D,this.Ds=e.Ds,this.E=e.E,this.F=e.F,this.Fs=e.Fs,this.G=e.G,this.Gs=e.Gs,this.A=e.A,this.As=e.As,this.B=e.B}}]),e}();function D(e,t){var i=new P.Midi(e),a=i.duration,o=[];i.tracks.forEach((function(e){o.push(function(e,t,i){for(var a=[],o=t,s=function(t){var i=[];e.forEach((function(e){var a=e.time,s=e.duration;if(function(e,t,i,a){if(e>i&&e<i+a||e+t>i&&e+t<i+a||e<=i&&e+t>=i+a)return!0;return!1}(a,s,t,o)){var r={pitch:e.pitch};r.duration=a<t?a+s<t+o?a+s-t:o:a+s<=t+o?s:t+o-a,i.push(r)}})),a.push(i)},r=0;r<i;r+=t)s(r);return a}(e.notes,t,a))}));for(var s=[],r=0;r<o[0].length;r++)s.push(new T);for(var n=0;n<o.length;n++)for(var c=0;c<o[n].length;c++)for(var u=0;u<o[n][c].length;u++){var l=o[n][c][u],d=l.pitch,f=l.duration;s[c].addNoteDuration(d,f)}var m=s.map((function(e){return function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=e.length,s=[],r=0;r<o/2+1;r++){for(var n=0,c=0;c<o;c++)n=h.a(h.e(e[c],h.c(h.e(h.d,-2*h.f*r*c/o))),n);s.push(n)}if(s=s.slice(),t){var u=s[0];s=s.map((function(e){return h.b(e,u)}))}return i&&s.forEach((function(e){e.re=Math.round(1e4*e.re)/1e4,e.im=Math.round(1e4*e.im)/1e4})),a&&(s=s.map((function(e){return e.toPolar()}))),s}(e.getPcvAsArray())})),p=[];p.push(m);for(var b=m.length,v=m.length,x=2,j=1;j<b;j++){for(var q=[],g=0;g+x<=v;g++){var O=p[0].slice(g,g+x);q.push(C(O))}x++,p.push(q)}for(var D=[],A=0;A<6;A++){for(var _=[],F=0;F<p.length;F++){for(var k=[],S=0;S<p[F].length;S++)k.push("");_.push(k)}D.push(_)}for(var E=0;E<p.length;E++)for(var w=0;w<p[E].length;w++)for(var G=1;G<p[E][w].length;G++)D[G-1][E][w]=y(p[E][w][G]);return D}var A=[{name:"Single Tone",pcv:[1,0,0,0,0,0,0,0,0,0,0,0]},{name:"Tritone",pcv:[1,0,0,0,0,0,1,0,0,0,0,0]},{name:"Major Triad",pcv:[1,0,0,0,1,0,0,1,0,0,0,0]},{name:"Aug Triad",pcv:[1,0,0,0,1,0,0,0,1,0,0,0]},{name:"Maj7",pcv:[1,0,0,0,1,0,0,1,0,0,0,1]},{name:"Min7",pcv:[1,0,0,1,0,0,0,1,0,0,1,0]},{name:"Half-Dim7",pcv:[1,0,0,1,0,0,1,0,0,0,1,0]},{name:"Dim7",pcv:[1,0,0,1,0,0,1,0,0,1,0,0]},{name:"Pentatonic",pcv:[1,0,1,0,1,0,0,1,0,1,0,0]},{name:"Guido's Hexachord",pcv:[1,0,1,0,1,1,0,1,0,1,0,0]},{name:"Whole-Tone Scale",pcv:[1,0,1,0,1,0,1,0,1,0,1,0]},{name:"6 chromatic Tones6",pcv:[1,1,1,1,1,1,0,0,0,0,0,0]},{name:"Diatonic Scale",pcv:[1,0,1,0,1,1,0,1,0,1,0,1]},{name:"3 chromatic tritones",pcv:[1,1,1,0,0,0,1,1,1,0,0,0]},{name:"Hexatonic Scale",pcv:[1,0,0,1,1,0,0,1,1,0,0,1]},{name:"Octatonic Scale",pcv:[1,0,1,1,0,1,1,0,1,1,0,1]},{name:"All Tones",pcv:[1,1,1,1,1,1,1,1,1,1,1,1]}];function _(){var e=Object(a.useState)(q),t=Object(m.a)(e,2),i=t[0],o=t[1],s=Object(a.useState)([]),r=Object(m.a)(s,2),n=r[0],u=r[1],l=Object(a.useState)(!0),d=Object(m.a)(l,2),p=d[0],h=d[1],b=Object(a.useState)(""),v=Object(m.a)(b,2),y=v[0],g=v[1];Object(a.useEffect)((function(){var e=document.getElementById("file").files[0];if(e){var t=new FileReader;t.readAsArrayBuffer(e),t.onload=function(e){return u(D(e.target.result,1.5))}}}),[y]);var O=function(e){e.preventDefault()};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"showPrototypes",children:"Show prototypes: "}),Object(c.jsx)("input",{type:"checkbox",id:"showPrototypes",name:"showPrototypes",onChange:function(){return function(e){var t,a=i.slice();e?(t=a).push.apply(t,Object(f.a)(q)):a=a.filter((function(e){return!1===e.isPrototype})),o(a),h(e)}(!p)},checked:p})]}),Object(c.jsxs)("form",{onSubmit:O,children:[Object(c.jsx)("label",{htmlFor:"pitchClass",children:"Set class: "}),Object(c.jsx)("select",{name:"pitchClass",id:"pitchClass",onChange:function(e){return o(e.target.value)},children:A.map((function(e){return Object(c.jsx)("option",{value:e.name,children:e.name},e.name)}))}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]}),Object(c.jsx)("form",{onSubmit:O,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"file",children:"Select a MIDI file: "}),Object(c.jsx)("input",{type:"file",id:"file",name:"file",value:y,onChange:function(e){return g(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(c.jsx)(x,{printablePitchClasses:i}),n.map((function(e,t){return Object(c.jsx)(j,{wavescapeMatrix:e},"wavescape".concat(t))}))]})}var F=function(){return Object(c.jsxs)(n.a,{basename:"/MIDFT",children:[Object(c.jsx)(u,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(d,{})}),Object(c.jsx)(l.a,{path:"/visualization",children:Object(c.jsx)(_,{})}),Object(c.jsx)(l.a,{component:d,status:404})]})]})};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.a3f9efb2.chunk.js.map