(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l={title:"An Interview with 4EVA",tags:["interview"],content:`	
    Eve aka 4EVA is an up an coming VJ
    `,visible:!0},a=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),c={title:"Oasis 2025",tags:["upcoming","event","oasis"],post_date:"2025-06-14",content:`Oasis is back for 2025!
    `,visible:!0},u=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),d={title:"Upcoming Event: Tech Conference 2025",tags:["upcoming event"],content:"Join us for the annual tech conference...",visible:!0},g=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),f={title:"LightSmith Visuals",tags:["interview"],content:`	
  Jesse Hermans Aka LightSmith Visuals is a Wellington based VJ.
  Here, we dive into his background, his work, and his thoughts on the VJ scene.
  `,visible:!0},_=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),b={title:"Cable Management Presents: Unfolding",tags:["upcoming","event","ikona","nani"],post_date:"2025-06-14",content:`Cable Management is the new event series hatched by Nani and Peter Ikona.
  `,visible:!0},p=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),v={title:"VMPW: Visual Music Performance Workstation",tags:["software"],content:`
  Visual Music Performance Workstation is a new tool for VJs, aiming for the sweet spot between TouchDesigner and Resolume. 
  `,visible:!0},m=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),h=Object.values([a,u,g,_,p,m]).map(t=>t.default).filter(t=>t!==void 0),y=t=>t.visible?`
    <div class="blog-post">
      <h2>${t.title}</h2>
      <p>${t.content}</p>
      <div class="tags">
        ${t.tags.map(n=>`<span class="tag">${n}</span>`).join(" ")}
      </div>
    </div>
  `:"",O=()=>{const t=document.querySelector("#app");t.innerHTML=`
    <div class="blog-wall">
      ${h.map(y).join("")}
    </div>
  `};O();
