(this.webpackJsonpfivcharts=this.webpackJsonpfivcharts||[]).push([[0],{226:function(e,t,a){e.exports=a(350)},231:function(e,t,a){},232:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),i=a.n(r),l=(a(231),a(14)),c=(a(232),a(38)),s=a(213),m=function(e){var t=e.data,a=e.keys,n=e.indexby,r=e.ytitle,i=e.xtitle,l=e.showLegends,m=e.isHorizontal,u=e.myonclick,d=e.margin,b=e.colors,p=e.axisBottomTickRotation,g=e.axisBottomlegendOffset;return o.a.createElement(s.a,{data:t,onClick:u,valueFormat:" >-,",keys:Object(c.a)(a),indexBy:n,margin:d||{top:50,right:50,bottom:50,left:80},padding:.3,layout:m?"horizontal":"vertical",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:b||{scheme:"blues"},colorBy:"indexValue",axisBottom:{tickSize:5,tickPadding:5,tickRotation:p||0,legend:i||n,legendPosition:"middle",legendOffset:g||32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:r,legendPosition:"middle",legendOffset:-40,format:function(e){return"".concat(isNaN(e)?e:Number(e).toLocaleString())}},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:l?[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]:[],role:"application",ariaLabel:"Nivo bar chart demo",barAriaLabel:function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}})},u=a(214),d=function(e){var t=e.data,a=e.colors;return o.a.createElement(u.a,{data:t,onClick:function(e){console.log(e)},valueFormat:" >-,",margin:{top:40,right:80,bottom:80,left:80},innerRadius:.7,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,colors:a||{scheme:"reds"},borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color",modifiers:[["darker",.8]]},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]}})},b=a(433),p=a(438),g=Object(b.a)((function(e){return{root:{height:"100%",width:"100%",boxShadow:e.shadows[2],borderRadius:5,backgroundColor:"white",position:"relative"},child:{height:"90%",width:"100%",position:"absolute",top:40,left:0},chartName:{position:"absolute",top:20,left:50}}})),f=function(e){var t=e.children,a=e.name,n=g();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:n.root},a&&o.a.createElement("span",{className:n.chartName},a),o.a.createElement("div",{className:n.child},t)))},h=a(446),v=a(450),E=a(447),_=a(448),y=a(440),j=a(436),O=Object(b.a)((function(e){return{root:{height:"100%",width:"100%",marginTop:e.spacing(6)}}})),x=function(e){var t=e.children,a=e.title,n=O();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:n.root},a&&o.a.createElement(j.a,{variant:"h4"},a),o.a.createElement("br",null),o.a.createElement(p.a,{container:!0,spacing:2},t)))},k=a(441),C=a(445),N=a(444),S=a(439),w=a(442),L=a(443),z=Object(b.a)({table:{minWidth:300}});function B(e){var t=e.rows,a=e.columns,n=e.align,r=e.caption,i=z();return a=a||[],t=t||[[]],n=n||"left",r=r||"",o.a.createElement(S.a,{component:y.a},o.a.createElement(k.a,{className:i.table,size:"small","aria-label":"caption table"},o.a.createElement("caption",null,r||"Table"),o.a.createElement(w.a,null,o.a.createElement(L.a,null,a.map((function(e){return o.a.createElement(N.a,{key:e,align:"left"},e)})))),o.a.createElement(C.a,null,t.map((function(e){return o.a.createElement(L.a,{key:e},e.map((function(e){return o.a.createElement(N.a,{key:e,align:"left"},e)})))})))))}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},H=Object(b.a)((function(e){return{root:{flexGrow:2,maxWidth:"100%",padding:"74px 35px"},paper:{padding:e.spacing(2),margin:3,textAlign:"center",color:e.palette.text.secondary},formControl:{margin:e.spacing(1),marginBottom:e.spacing(6),minWidth:200},selectEmpty:{marginTop:e.spacing(2)},tableContainer:{height:400,width:"100%"}}}));var M=function(){var e=H(),t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)({}),s=Object(l.a)(c,2),u=s[0],b=s[1],g=Object(n.useState)({}),j=Object(l.a)(g,2),O=(j[0],j[1]),k=Object(n.useState)({}),C=Object(l.a)(k,2),N=(C[0],C[1]),S=Object(n.useState)([]),w=Object(l.a)(S,2),L=w[0],z=w[1],M=Object(n.useState)({}),A=Object(l.a)(M,2),R=A[0],F=A[1],P=Object(n.useState)({}),W=Object(l.a)(P,2),V=W[0],I=W[1],U=Object(n.useState)({}),Y=Object(l.a)(U,2),D=Y[0],J=Y[1],K=Object(n.useState)({}),G=Object(l.a)(K,2),X=G[0],q=G[1],Q=Object(n.useState)([]),Z=Object(l.a)(Q,2),$=Z[0],ee=Z[1],te=Object(n.useState)([]),ae=Object(l.a)(te,2),ne=ae[0],oe=ae[1],re=Object(n.useState)([]),ie=Object(l.a)(re,2),le=ie[0],ce=ie[1];return Object(n.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e.solutions)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.root},r&&(null===r||void 0===r?void 0:r.length)>0&&o.a.createElement(h.a,{className:e.formControl},o.a.createElement(v.a,{id:"solutions-select-label"},"Select Solution"),o.a.createElement(E.a,{defaultValue:"",labelId:"solutions-select-label",id:"solutions-select",value:(null===u||void 0===u?void 0:u.solution_name)||"",onChange:function(e){return function(e){var t=r.find((function(t){return t.solution_name===e}));b(t),O(t.solution_name),N(t.reports.economic_report.income),function(){for(var e=[],a=0,n=Object.entries(t.reports.economic_report.project_cost);a<n.length;a++){var o=Object(l.a)(n[a],2),r=o[0],i=o[1];"total"!==r&&e.push({id:T(r),label:r,value:i.cost,ratio:i.ratio}),z(e)}}(),function(){for(var e=[],a=0,n=Object.entries(t.reports.economic_report.table_1_soft_costs);a<n.length;a++){var o=Object(l.a)(n[a],2),r=o[0],i=o[1];e.push({id:T(r),label:r,value:i.cost,ratio:i.ratio}),F(e)}}(),function(){for(var e=[],a=0,n=Object.entries(t.reports.economic_report.table_2_pre_construction);a<n.length;a++){var o=Object(l.a)(n[a],2),r=o[0],i=o[1];e.push({id:T(r),label:r,value:i.cost,ratio:i.ratio}),I(e)}}(),function(){for(var e=[],a=0,n=Object.entries(t.reports.economic_report.table_3_construction);a<n.length;a++){var o=Object(l.a)(n[a],2),r=(o[0],o[1]);e.push({id:r.name,label:r.name,value:r.cost,ratio:r.ratio}),J(e)}}(),function(){for(var e=[],a=0,n=Object.entries(t.reports.environmental_report.energy_consumtion.consumption_breakdown);a<n.length;a++){var o=Object(l.a)(n[a],2),r=o[0],i=o[1];e.push({id:T(r),label:T(r),value:i.total_kWh_year,normalized:i.normalised_kWh_year_m2}),q(e)}}(),function(){for(var e=[],a=0,n=Object.entries(t.reports.environmental_report.lca_dictionary.embodied_carbon_breakdown);a<n.length;a++){var o=Object(l.a)(n[a],2),r=o[0],i=o[1];e.push({id:T(r),label:T(r),value:i}),ee(e)}console.log("embodied carbon breakdown",e)}(),function(){for(var e=[],a=0,n=Object.entries(t.reports.units_report.graph_built_area);a<n.length;a++){var o=Object(l.a)(n[a],2),r=(o[0],o[1]);e.push({id:T(r.name),label:T(r.name),value:r.area_by_unit}),oe(e)}console.log("graph built area",e)}(),function(){for(var e=[],a=0,n=Object.entries(t.reports.units_report.table_2);a<n.length;a++){var o=Object(l.a)(n[a],2),r=(o[0],o[1]);e.push([r.name,r.number_of_units,r.ratio_by_num_of_units,r.ratio_by_nla,r.ratio_by_total_built_area])}ce(e),console.log("table 2",e)}(),console.log("state solution",t),console.log("project cost",L)}(e.target.value)}},r.map((function(e){return o.a.createElement(_.a,{value:e.solution_name,key:null===e||void 0===e?void 0:e.solution_name},T(e.solution_name))})))),r&&(null===r||void 0===r?void 0:r.length)>0&&o.a.createElement(p.a,{item:!0,xs:12,className:"Mydiv"},o.a.createElement(f,{name:"Solution Area Chart"},o.a.createElement(m,{className:e.paper,data:r.map((function(e){return{name:T(e.solution_name),area:e.reports.units_report.table_1.total_built_area,nla:e.reports.units_report.table_1.nla,efficiency:e.reports.units_report.table_1.efficiency}})),keys:["area"],indexby:"name",ytitle:"Area",xtitle:" ",showLegends:!1,isHorizontal:!1}))),o.a.createElement(p.a,{container:!0,spacing:3},ne&&(null===ne||void 0===ne?void 0:ne.length)>0&&o.a.createElement(x,{title:"Unit Reports"},o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Unit Built Area Chart"},o.a.createElement(d,{data:ne,colors:{scheme:"reds"}}))),o.a.createElement(p.a,{container:!0,spacing:3,item:!0,xs:12,sm:6,lg:6},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(y.a,{className:e.paper},"Efficiency ",u.reports.units_report.table_1.efficiency," %")),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(y.a,{className:e.paper},"NLA ",u.reports.units_report.table_1.nla," m2")),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(y.a,{className:e.paper},"Total Built Area ",u.reports.units_report.table_1.total_built_area," m2"))),o.a.createElement(p.a,{item:!0,xs:12,sm:12,lg:12,className:"Mydiv"},o.a.createElement(B,{rows:le,columns:["name","number_of_units","ratio_by_num_of_units","ratio_by_nla","ratio_by_total_built_area"],caption:"Units Table"}))),L&&L.length>0&&o.a.createElement(x,{title:"Economic Report"},o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Project Cost"},o.a.createElement(d,{data:L}))),o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Project Cost %"},o.a.createElement(m,{data:L,keys:["ratio"],indexby:"id",ytitle:"cost %",xtitle:"cost item",showLegends:!1,isHorizontal:!1}))),R&&(null===R||void 0===R?void 0:R.length)>0&&o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Soft Cost"},o.a.createElement(m,{data:R,keys:["value"],indexby:"id",ytitle:"",xtitle:"Soft Costs",showLegends:!1,isHorizontal:!0,margin:{top:50,right:30,bottom:50,left:120}}))),V&&(null===V||void 0===V?void 0:V.length)>0&&o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Pre Construction Cost"},o.a.createElement(m,{data:V,keys:["value"],indexby:"id",ytitle:"",xtitle:"Pre-construction cost",showLegends:!1,isHorizontal:!1}))),D&&(null===D||void 0===D?void 0:D.length)>0&&o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Construction Cost Chart"},o.a.createElement(m,{data:D,keys:["value"],indexby:"id",ytitle:"",xtitle:"Construction Cost",showLegends:!1,isHorizontal:!1}))),o.a.createElement("br",null)),X&&(null===X||void 0===X?void 0:X.length)>0&&o.a.createElement(x,{title:"Environmental Report"},o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Energy Consumption Breakdown KWH / Year"},o.a.createElement(d,{data:X,showLegends:!1,isHorizontal:!1,colors:{scheme:"greens"}}))),X&&(null===X||void 0===X?void 0:X.length)>0&&o.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,className:"Mydiv"},o.a.createElement(f,{name:"Energy Consumption Normalized KWH / Year / M2"},o.a.createElement(d,{data:X.map((function(e){return{id:e.id,label:e.label,value:e.normalized}})),showLegends:!1,isHorizontal:!1,colors:{scheme:"greens"}}))),$&&(null===$||void 0===$?void 0:$.length)>0&&o.a.createElement(p.a,{item:!0,xs:12,sm:6,className:"Mydiv"},o.a.createElement(f,{name:"Embodied Carbon Breakdown"},o.a.createElement(m,{data:$,keys:["value"],indexby:"id",ytitle:"",xtitle:" ",colors:{scheme:"greens"},showLegends:!1,isHorizontal:!1,axisBottomTickRotation:-45,margin:{top:10,right:3,bottom:100,left:60},axisBottomlegendOffset:50}))),$&&(null===$||void 0===$?void 0:$.length)>0&&o.a.createElement(p.a,{item:!0,xs:12,sm:6,className:e.tableContainer},o.a.createElement(B,{columns:["Item","Value"],rows:$.map((function(e){return[e.id,e.value]})),caption:"Embodied Carbon Breakdown Table"}))))))},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,452)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)}))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),A()}},[[226,1,2]]]);
//# sourceMappingURL=main.8bb527d6.chunk.js.map