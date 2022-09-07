import{d as r,r as d,c as i,a as p,o as v}from"./index.22b80f40.js";const C=r({__name:"index",setup(m){const s=d([{title:"\u8D2D\u7269",start:"2022-09-11 10:00:00",end:"2022-09-13 12:00:00",editable:!0},{title:"\u5B66\u4E60",start:"2022-09-15 08:00:00",end:"2022-09-15 16:00:00"}]),c=e=>{const t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"\u5403\u996D"};s.value.push(t),console.log(e)},o=e=>{console.log(e)},u=e=>{const t=document.createElement("div"),n=e.timeText.split(" - "),a=n[0].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6",""),l=n[1].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6","");return t.innerHTML=`
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>\u5F00\u59CB\u65F6\u95F4: ${a}</div>
         <div>\u7ED3\u675F\u65F6\u95F4: ${l}</div>
         <div>\u6807\u9898: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=p("m-calendar");return v(),i(n,{events:s.value,"event-content":u,"display-event-end":"",onEventClick:o,onDateClick:c},null,8,["events"])}}});export{C as default};
