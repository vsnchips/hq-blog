(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const l={title:"VMPW: Visual Music Performannce Workstation",tags:["software"],content:`
  Visual Music Performance Workstation is a new tool for VJs, aiming for the sweet spot between TouchDesigner and Resolume. 
  `,visible:!0},a=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),c={title:"Oasis 2025",tags:["upcoming","event","oasis"],post_date:"2025-06-14",content:`Oasis is back for 2025!
    `,visible:!0},u=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),f={title:"Upcoming Event: Tech Conference 2025",tags:["upcoming event"],content:"Join us for the annual tech conference...",visible:!0},d=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),g={title:"Interview with a Software Engineer",tags:["interview"],content:"Insights into the life of a software engineer...",visible:!1},_=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),p={title:"Cable Management Presents: Unfolding",tags:["upcoming","event","ikona","nani"],post_date:"2025-06-14",content:`Cable Management is the new event series hatched by Nani and Peter Ikona.
  `,visible:!0},b=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),v=Object.values([a,u,d,_,b]).map(t=>t.default).filter(t=>t!==void 0),m=t=>t.visible?`
    <div class="blog-post">
      <h2>${t.title}</h2>
      <p>${t.content}</p>
      <div class="tags">
        ${t.tags.map(n=>`<span class="tag">${n}</span>`).join(" ")}
      </div>
    </div>
  `:"",y=()=>{const t=document.querySelector("#app");t.innerHTML=`
    <div class="blog-wall">
      ${v.map(m).join("")}
    </div>
  `};y();
