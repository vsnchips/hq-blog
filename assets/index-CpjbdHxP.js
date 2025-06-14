(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const u={title:"An Interview with 4EVA",tags:["interview"],content:`	
    Eve aka 4EVA is a Wellington based VJ
    `,visible:!1},d=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),g={title:"Into The Vortex 2025",tags:["event","oasis"],post_date:"2025-06-14",content:`Into The Vortex, Mar 7-9 2025.
    `,visible:!0,image:"ext_assets/events/Into The Vortex/doco/20250308_071350.jpg"},f=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),_={title:"Oasis 2025",tags:["upcoming","event","oasis"],post_date:"2025-06-14",content:`Oasis is back for 2025!
    `,visible:!0},v=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),b={title:"Upcoming Event: Tech Conference 2025",tags:["upcoming event"],content:"Join us for the annual tech conference...",visible:!0},p=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),m={title:"LightSmith Visuals",tags:["interview"],content:`	
  Jesse Hermans Aka LightSmith Visuals is a Wellington based VJ.
  Here, we dive into his background, his work, and his thoughts on the VJ scene.
  `,visible:!0},h=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),y={title:"Cable Management Presents: Unfolding",tags:["upcoming","event","ikona","nani"],post_date:"2025-06-14",content:`Cable Management is the new event series hatched by Nani and Peter Ikona.
  `,visible:!0},O=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),S={title:"VMPW: Visual Music Performance Workstation",tags:["software"],content:`
  Visual Music Performance Workstation is a new tool for VJs, aiming for the sweet spot between TouchDesigner and Resolume. 
  `,visible:!0},w=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),P=Object.values([d,f,v,p,h,O,w]).map(e=>e.default).filter(e=>e!==void 0),c=["upcoming","event","interview","software"];let i=new Set(c);function j(){return`
    <nav class="main-nav">
      <a href="#" class="nav-logo"><span class="logo-text">HQ</span></a>
      <div class="nav-links">
        <a href="#" class="nav-link active">blog</a>
        <a href="#about" class="nav-link">about</a>
        <a href="#network" class="nav-link">network</a>
      </div>
    </nav>
  `}function M(){return`
    <div class="tag-filters">
      ${c.map(e=>`
        <label class="tag-checkbox">
          <input type="checkbox" value="${e}" ${i.has(e)?"checked":""} />
          <span>${e}</span>
        </label>
      `).join("")}
      <button class="clear-filters" type="button">Clear Filters</button>
    </div>
  `}const T=e=>{if(i.size>0&&!e.tags.some(s=>i.has(s)))return"";const n=e.image?`<img class="post-image" src="/${e.image}" alt="${e.title} image" />`:"";return e.visible?`
    <div class="blog-post">
      <h2>${e.title}</h2>
      ${n}
      <p>${e.content}</p>
      <div class="tags">
        ${e.tags.map(s=>`<span class="tag">${s}</span>`).join(" ")}
      </div>
    </div>
  `:""};function l(){const e=document.querySelector("#app");e.innerHTML=`
    <div class="hq-hero">
      <div class="hero-logo">
        <span class="logo-text">Hyperqualia HQ</span>
      </div>
      ${j()}
      ${M()}
    </div>
    <div class="blog-wall">
      ${P.map(T).join("")}
    </div>
  `,document.querySelectorAll('.tag-checkbox input[type="checkbox"]').forEach(s=>{s.addEventListener("change",a=>{const t=a.target;t.checked?i.add(t.value):i.delete(t.value),l()})});const n=document.querySelector(".clear-filters");n&&n.addEventListener("click",()=>{i=new Set,l()})}l();
