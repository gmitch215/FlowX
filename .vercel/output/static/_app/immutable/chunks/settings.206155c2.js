var l=Object.defineProperty;var n=(i,t,e)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(n(i,typeof t!="symbol"?t+"":t,e),e);class r{constructor(t){o(this,"data");o(this,"callbacks",{any:[]});this.data=t}init(){this.loadFromLocalStorage()}setValue(t,e){if(this.data[t].value=e,this.callbacks[t])for(const a of this.callbacks[t])a(t);for(const a of this.callbacks.any)a(t)}subscribe(t,e){for(const a of t)this.callbacks[a]||(this.callbacks[a]=[]),this.callbacks[a].push(e),e(a);return()=>{for(const a of t)this.callbacks[a]=this.callbacks[a].filter(s=>s!=e)}}saveToLocalStorage(){const t={};for(const e in this.data)this.data[e].value!=this.data[e].auto&&(t[e]=this.data[e].value);localStorage.setItem("settings",JSON.stringify(t))}loadFromLocalStorage(){const t=localStorage.getItem("settings");if(t){const e=JSON.parse(t);try{for(const a in e)this.setValue(a,e[a])}catch{localStorage.setItem("settings",JSON.stringify({})),this.resetToAuto()}}}resetToAuto(){for(const t in this.data)this.setValue(t,this.data[t].auto)}randomize(){for(const t in this.data){const e=this.data[t];e.type=="slider"?this.setValue(t,e.detail.min+Math.random()*(e.detail.max-e.detail.min)):e.type=="radio"?this.setValue(t,Math.floor(Math.random()*e.detail.options.length)):e.type=="toggle"&&this.setValue(t,Math.random()<.5)}}}const d=new r({debateStyle:{name:"Debate Style",type:"radio",value:0,auto:0,detail:{options:["Policy","Public forum","Lincoln douglass"]},info:"Already created flows won't be affected by this setting"},colorTheme:{name:"Color theme",type:"radio",value:0,auto:0,detail:{options:["System default","Light theme","Dark theme"]}},columnWidth:{name:"Column width",type:"slider",value:150,auto:150,detail:{min:50,max:300,step:1}},accentHue:{name:"Primary color hue",type:"slider",value:192,auto:192,detail:{min:0,max:360,step:1,hue:!0},info:"This color will be used for aff"},accentSecondaryHue:{name:"Secondary color hue",type:"slider",value:26,auto:26,detail:{min:0,max:360,step:1,hue:!0},info:"This color will be used for neg"},transitionSpeed:{name:"Transition duration",type:"slider",value:300,auto:300,detail:{min:0,max:1e3,step:1}},useTooltips:{name:"Use tooltips",type:"toggle",value:!0,auto:!0},fontSize:{name:"Font size",type:"slider",value:.9,auto:.9,detail:{min:.2,max:2,step:.01}},fontWeight:{name:"Font weight",type:"slider",value:300,auto:300,detail:{min:100,max:900,step:50}},fontFamily:{name:"Font",type:"radio",value:0,auto:0,detail:{options:["Merriweather Sans","Helvetica","Georgia","Courier New"],customOption:!0,customOptionValue:""},info:"Type in a custom font name if it is installed on your computer"},borderRadius:{name:"Border radius",type:"slider",value:8,auto:8,detail:{min:0,max:30,step:1}},padding:{name:"Padding",value:8,auto:8,type:"slider",detail:{min:0,max:30,step:1}},gap:{name:"Grid Gap",value:8,auto:8,type:"slider",detail:{min:0,max:30,step:1}}});export{d as s};
