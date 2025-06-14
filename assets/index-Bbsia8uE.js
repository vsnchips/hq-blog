(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const f={title:"An Interview with 4EVA",tags:["interview"],content:`	
    Eve aka 4EVA is a Wellington based VJ
    `,visible:!1},v=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),p={title:"Into The Vortex 2025",tags:["event","oasis"],post_date:"2025-06-14",content:`Into The Vortex, Mar 7-9 2025.
    `,visible:!0,image:"ext_assets/events/Into The Vortex/doco/20250308_071350.jpg"},b=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),_={title:"Oasis 2025",tags:["upcoming","event","oasis"],post_date:"2025-06-14",content:`Oasis is back for 2025!
    `,visible:!0},m=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),h={title:"Upcoming Event: Tech Conference 2025",tags:["upcoming event"],content:"Join us for the annual tech conference...",visible:!0},y=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),w={title:"LightSmith Visuals",tags:["interview"],content:`	
  Jesse Hermans Aka LightSmith Visuals is a Wellington based VJ.
  Here, we dive into his background, his work, and his thoughts on the VJ scene.
  `,visible:!0},k=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),P={title:"Cable Management Presents: Unfolding",tags:["upcoming","event","ikona","nani"],post_date:"2025-06-14",content:`Cable Management is the new event series hatched by Nani and Peter Ikona.
  `,visible:!0},S=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),O={title:"VMPW: Visual Music Performance Workstation",tags:["software"],content:`
  Visual Music Performance Workstation is a new tool for VJs, aiming for the sweet spot between TouchDesigner and Resolume. 
  `,visible:!0},$=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),u={title:"About Hyperqualia HQ",content:`
    <p>Hyperqualia HQ is a blog about immersive and experiential media, visual music, and event production in New Zealand and beyond.</p>
    <p>Our mission is to celebrate the work of local and international practitioners, and to foster a vibrant creative community.</p>
    <p>This site features articles, interviews, and a directory of featured associates.</p>
  `},d={title:"Network Directory",content:`
    <p>Welcome to the Hyperqualia HQ Network Directory.</p>
    <p>Here you'll find profiles of featured associates, artists, and collaborators who are shaping the future of immersive and experiential media.</p>
    <ul>
      <li><strong>Jesse Hermans (LightSmith Visuals)</strong> – Wellington-based VJ and visual artist.</li>
      <li><strong>Eve (4EVA)</strong> – Up and coming VJ and creative technologist.</li>
      <li><strong>Nani & Peter Ikona</strong> – Event producers and founders of Cable Management.</li>
      <!-- Add more profiles as needed -->
    </ul>
  `},j=Object.values([v,b,m,y,k,S,$]).map(t=>t.default).filter(t=>t!==void 0),g=["upcoming","event","interview","software"];let r=new Set(g),s="blog";function M(){return`
    <nav class="main-nav">
      <a href="#" class="nav-logo"><span class="logo-text">HQ</span></a>
      <div class="nav-links">
        <a href="#" class="nav-link${s==="blog"?" active":""}" data-page="blog">blog</a>
        <a href="#about" class="nav-link${s==="about"?" active":""}" data-page="about">about</a>
        <a href="#network" class="nav-link${s==="network"?" active":""}" data-page="network">network</a>
      </div>
    </nav>
  `}function T(){return`
    <div class="tag-filters">
      ${g.map(t=>`
        <label class="tag-checkbox">
          <input type="checkbox" value="${t}" ${r.has(t)?"checked":""} />
          <span>${t}</span>
        </label>
      `).join("")}
      <button class="clear-filters" type="button">Clear Filters</button>
    </div>
  `}const V=t=>{if(r.size>0&&!t.tags.some(a=>r.has(a)))return"";const o=t.image?`<img class="post-image" src="/${t.image}" alt="${t.title} image" />`:"";return t.visible?`
    <div class="blog-post">
      <h2>${t.title}</h2>
      ${o}
      <p>${t.content}</p>
      <div class="tags">
        ${t.tags.map(a=>`<span class="tag">${a}</span>`).join(" ")}
      </div>
    </div>
  `:""};function H(){return`
    <div class="about-page">
      <h2>${u.title}</h2>
      <div class="about-content">${u.content}</div>
    </div>
  `}function A(){return`
    <div class="network-page">
      <h2>${d.title}</h2>
      <div class="network-content">${d.content}</div>
    </div>
  `}function l(){const t=document.querySelector("#app");let o="";if(s==="about"?o=H():s==="network"?o=A():o=`
      <div class="tag-filters-container">${T()}</div>
      <div class="blog-wall">
        ${j.map(V).join("")}
      </div>
    `,t.innerHTML=`
    <div class="hq-hero">
      <div class="hero-logo">
        <span class="logo-text">Hyperqualia HQ</span>
      </div>
      ${M()}
    </div>
    ${o}
  `,document.querySelectorAll(".nav-link").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault();const e=i.target.getAttribute("data-page");e&&(s=e,l())})}),s==="blog"){document.querySelectorAll('.tag-checkbox input[type="checkbox"]').forEach(i=>{i.addEventListener("change",e=>{const n=e.target;n.checked?r.add(n.value):r.delete(n.value),l()})});const a=document.querySelector(".clear-filters");a&&a.addEventListener("click",()=>{r=new Set,l()})}}l();
