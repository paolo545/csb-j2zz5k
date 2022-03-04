(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{53:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var r=c(0),i=c(41),a=c.n(i),l=c(7),s=(c(53),c(81)),j=c(79),n=c(82),d=c(1);function b(){var e,t=r.useState("web"),c=Object(l.a)(t,2),i=c[0],a=c[1],b=r.useState("web"),o=Object(l.a)(b,2),x=o[0],h=o[1],O=r.useState("web"),u=Object(l.a)(O,2),p=u[0],v=u[1],m=r.useState("web"),w=Object(l.a)(m,2),g=w[0],F=w[1],f=r.useState("web"),y=Object(l.a)(f,2),S=y[0],k=y[1];"0.35"===S?e=0:"0.40"===S?e=1:"0.50"===S?e=2:"0.60"===S?e=3:"0.70"===S&&(e=4);var P=r.useState("web"),R=Object(l.a)(P,2),C=R[0],E=R[1],A=1;function M(t){t.drawstate;var c,r=S/(parseFloat(p)*C)+g/x,a=0;"2"===i?(a=r*(6/i),c="USP"):(a=4*r,c="DSP");var l,s,j,n=2.75*r,b=1*r,o=r*(2.5/x),h=a+n+b,O=a+o;"2"===x?(l=h/(2.5*(1+parseFloat(p)-g)),s="GR"):(l=h/(2*(1+parseFloat(p)-g)),s="SR"),j="2"===x?O/(2.5*(1+parseFloat(p)-g)):O/(2*(1+parseFloat(p)-g));var u=(h+l)/(parseFloat(p)+(1-g)/parseFloat(p)),v=(O+j)/(parseFloat(p)+(1-g)/parseFloat(p));return C>0?"USP"===c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Estimations"}),Object(d.jsxs)("label",{children:["Projected time for the ",s," product\xa0",c," phase ",e,": ",a.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:[" ","Projected time for the ",s," media: ",o.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["Total projected building time for ",c," completion:"," ",O.toFixed(2)," weeks or ",(7*O).toFixed(2),"\xa0calendar days"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["Internal review projected time: ",j.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["External approval projected time: ",v.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["From beginning to the end, it has been:"," ",(O+j+v).toFixed(2)," weeks or"," ",(7*(O+j+v)).toFixed(2)," calendar days"]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Estimations"}),Object(d.jsxs)("div",{style:{textAlign:"justify",justify:"center",align:"center",margin:"auto",width:"800px",border:"2px solid lightgrey",padding:"5px"},children:[Object(d.jsxs)("label",{children:["Projected time for the ",s," product\xa0",c," phase ",e,": ",a.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{location:"left",alignment:"left",children:[" ","Projected time for the ",s," buffers: ",n.toFixed(2)," ","weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["Projected time for the ",s," column preparation:"," ",b.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["Total projected building time for ",c," completion:"," ",h.toFixed(2)," weeks or ",(7*h).toFixed(2),"\xa0calendar days"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["Internal review projected time: ",l.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["External approval projected time: ",u.toFixed(2)," weeks"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["From beginning to the end, it has been:"," ",(h+l+u).toFixed(2)," weeks or"," ",(7*(h+l+u)).toFixed(2)," calendar days"]})]})]}):Object(d.jsx)("label",{children:"empty options"})}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:" Welcome to REBCA v.1.1 ! "}),Object(d.jsx)("h2",{children:"(Recipe BASECAMP 2.0 Calculator)"}),Object(d.jsx)("h4",{children:"Recipe Stage"}),Object(d.jsx)("div",{align:"center",children:Object(d.jsx)(s.a,{sx:{width:250},children:Object(d.jsxs)(n.a,{color:"primary",value:i,exclusive:!0,onChange:function(e,t){a(t)},children:[Object(d.jsx)(j.a,{value:"2",children:"USP"}),Object(d.jsx)(j.a,{value:"1",children:"DSP"})]})})}),Object(d.jsx)("h4",{children:"Recipe Type"}),Object(d.jsx)("div",{align:"center",children:Object(d.jsx)(s.a,{sx:{width:250},children:Object(d.jsxs)(n.a,{color:"primary",value:x,exclusive:!0,onChange:function(e,t){h(t)},children:[Object(d.jsx)(j.a,{value:"2",children:"GR"}),Object(d.jsx)(j.a,{value:"1",children:"SR"})]})})}),Object(d.jsxs)("div",{align:"center",children:[Object(d.jsx)("h4",{children:"Recipe builder experience"}),Object(d.jsx)(s.a,{sx:{width:250},children:Object(d.jsxs)(n.a,{color:"primary",value:p,exclusive:!0,onChange:function(e,t){v(t)},children:[Object(d.jsx)(j.a,{value:"1",children:"New"}),Object(d.jsx)(j.a,{value:"1.50",children:"Middle"}),Object(d.jsx)(j.a,{value:"1.75",children:"Advanced"})]})})]}),Object(d.jsxs)("div",{align:"center",children:[Object(d.jsx)("h4",{children:"Resistance"}),Object(d.jsx)(s.a,{sx:{width:250},children:Object(d.jsxs)(n.a,{color:"primary",value:g,exclusive:!0,onChange:function(e,t){F(t)},children:[Object(d.jsx)(j.a,{value:"0.30",children:"Low"}),Object(d.jsx)(j.a,{value:"0.45",children:"Moderate"}),Object(d.jsx)(j.a,{value:"0.75",children:"High"})]})})]}),Object(d.jsxs)("div",{align:"center",children:[Object(d.jsx)("h4",{children:"Development Phase"}),Object(d.jsx)(s.a,{sx:{width:250},children:Object(d.jsxs)(n.a,{color:"primary",value:S,exclusive:!0,onChange:function(e,t){k(t)},children:[Object(d.jsx)(j.a,{value:"0.35",children:"Early"}),Object(d.jsx)(j.a,{value:"0.40",children:"1"}),Object(d.jsx)(j.a,{value:"0.50",children:"2"}),Object(d.jsx)(j.a,{value:"0.60",children:"3"}),Object(d.jsx)(j.a,{value:"0.70",children:"Legacy"})]})})]}),Object(d.jsxs)("div",{align:"center",children:[Object(d.jsx)("h4",{children:"Level of Priority"}),Object(d.jsx)(s.a,{sx:{width:250},children:Object(d.jsxs)(n.a,{color:"primary",value:C,exclusive:!0,onChange:function(e,t){E(t)},children:[Object(d.jsx)(j.a,{value:"1",children:"Normal"}),Object(d.jsx)(j.a,{value:"1.25",children:"High"})]})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{align:"center"}),Object(d.jsx)(M,{drawstate:A})]})}var o=document.getElementById("root");a.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(b,{})}),o)}},[[61,1,2]]]);
//# sourceMappingURL=main.50a84a0a.chunk.js.map