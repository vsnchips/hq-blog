(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l={title:"An Interview with 4EVA",tags:["interview"],content:`	
    Eve aka 4EVA is an up an coming VJ
    `,visible:!0},a=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),c={title:"Into The Vortex 2025",tags:["event","oasis"],post_date:"2025-06-14",content:`Into The Vortex, Mar 7-9 2025.
    `,visible:!0,image:"ext_assets/events/Into The Vortex/doco/20250308_071350.jpg"},u=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),_={title:"Oasis 2025",tags:["upcoming","event","oasis"],post_date:"2025-06-14",content:`Oasis is back for 2025!
    `,visible:!0},g=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),d={title:"Upcoming Event: Tech Conference 2025",tags:["upcoming event"],content:"Join us for the annual tech conference...",visible:!0},f=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),b={title:"LightSmith Visuals",tags:["interview"],content:`	
  Jesse Hermans Aka LightSmith Visuals is a Wellington based VJ.
  Here, we dive into his background, his work, and his thoughts on the VJ scene.
  `,visible:!0},p=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),m={title:"Cable Management Presents: Unfolding",tags:["upcoming","event","ikona","nani"],post_date:"2025-06-14",content:`Cable Management is the new event series hatched by Nani and Peter Ikona.
  `,visible:!0},v=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),h={title:"VMPW: Visual Music Performance Workstation",tags:["software"],content:`
  Visual Music Performance Workstation is a new tool for VJs, aiming for the sweet spot between TouchDesigner and Resolume. 
  `,visible:!0},y=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),O=Object.values([a,u,g,f,p,v,y]).map(t=>t.default).filter(t=>t!==void 0),P=t=>{const n=t.image?`<img class="post-image" src="/${t.image}" alt="${t.title} image" />`:"";return t.visible?`
    <div class="blog-post">
      <h2>${t.title}</h2>
      ${n}
      <p>${t.content}</p>
      <div class="tags">
        ${t.tags.map(i=>`<span class="tag">${i}</span>`).join(" ")}
      </div>
    </div>
  `:""},j=()=>{const t=document.querySelector("#app");t.innerHTML=`
    <div class="blog-wall">
      ${O.map(P).join("")}
    </div>
  `};j();
