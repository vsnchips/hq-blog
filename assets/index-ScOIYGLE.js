(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const f={title:"An Interview with 4EVA",tags:["interview"],content:`	
    Eve aka 4EVA is a Wellington based VJ
    `,visible:!1},v=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),p={title:"Into The Vortex 2025",tags:["event","oasis"],post_date:"2025-06-14",content:`Into The Vortex, Mar 7-9 2025.
    `,visible:!0,image:"ext_assets/events/Into The Vortex/doco/20250308_071350.jpg"},b=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),m={title:"Oasis 2025",tags:["upcoming","event","oasis"],post_date:"2025-06-14",content:`Oasis is back for 2025!
    `,visible:!0},_=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),h={title:"LightSmith Visuals",tags:["interview"],content:`	
  Jesse Hermans Aka LightSmith Visuals is a Wellington based VJ.
  Here, we dive into his background, his work, and his thoughts on the VJ scene.
  `,visible:!1},y=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),w={title:"Cable Management Presents: Unfolding",tags:["upcoming","event","ikona","nani"],post_date:"2025-06-14",content:`Cable Management is the new event series hatched by Nani and Peter Ikona.
  `,visible:!1},k=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),$={title:"VMPW: Visual Music Performance Workstation",tags:["software"],content:`
  Visual Music Performance Workstation is a new tool for VJs, aiming for the sweet spot between TouchDesigner and Resolume. 
  `,visible:!0},P=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),d={title:"About Hyperqualia HQ",content:`
    <p>Hyperqualia HQ is a blog about immersive and experiential media, visual music, and event production in New Zealand and beyond.</p>
    <p>Our mission is to celebrate the work of local and international practitioners, and to foster a vibrant creative community.</p>
    <p>This site features articles, interviews, and a directory of featured associates.</p>
  `},u={title:"Network Directory",content:`
    <p>Welcome to the Hyperqualia HQ Network Directory.</p>
    <p>Here you'll find profiles of featured associates, artists, and collaborators who are shaping the future of immersive and experiential media.</p>
    <ul>
      <li><strong>Jesse Hermans (LightSmith Visuals)</strong> – Wellington-based VJ and visual artist.</li>
      <li><strong>Eve (4EVA)</strong> – Up and coming VJ and creative technologist.</li>
      <li><strong>Nani & Peter Ikona</strong> – Event producers and founders of Cable Management.</li>
      <!-- Add more profiles as needed -->
    </ul>
  `};console.log("Running in production mode");const g=Object.values([v,b,_,y,k,P]).map(e=>e.default).filter(e=>e!==void 0),S=g.filter(e=>e.visible!==!1);g.forEach(e=>{console.log(`Loaded post: ${e.title} (visible: ${e.visible})`)});const O=["upcoming","event","interview","software"];let s=new Set,r="blog";function M(){return`
    <nav class="main-nav">
      <a href="#" class="nav-logo"><span class="logo-text">HQ</span></a>
      <div class="nav-links">
        <a href="#" class="nav-link${r==="blog"?" active":""}" data-page="blog">blog</a>
        <a href="#about" class="nav-link${r==="about"?" active":""}" data-page="about">about</a>
        <a href="#network" class="nav-link${r==="network"?" active":""}" data-page="network">network</a>
      </div>
    </nav>
  `}function V(){return`
    <div class="tag-filters">
      ${O.map(e=>`
        <label class="tag-checkbox" data-tag="${e}">
          <input type="checkbox" value="${e}" ${s.has(e)?"checked":""} />
          <span>${e}</span>
        </label>
      `).join("")}
      <button class="clear-filters" type="button">Clear Filters</button>
    </div>
  `}const j=e=>{if(s.size>0&&!e.tags.some(n=>s.has(n)))return"";const a=e.image?`<img class="post-image" src="/${e.image}" alt="${e.title} image" />`:"";return`
    <div class="blog-post${e.visible===!1?" draft-post":""}">
      <h2>${e.title}</h2>
      ${a}
      <p>${e.content}</p>
      <div class="tags">
        ${e.tags.map(n=>`<span class="tag">${n}</span>`).join(" ")}
      </div>
      
    </div>
  `};function A(){return`
    <div class="about-page">
      <h2>${d.title}</h2>
      <div class="about-content">${d.content}</div>
    </div>
  `}function L(){return`
    <div class="network-page">
      <h2>${u.title}</h2>
      <div class="network-content">${u.content}</div>
    </div>
  `}function l(){const e=document.querySelector("#app");let a="";if(r==="about"?a=A():r==="network"?a=L():a=`
      <div class="tag-filters-container">${V()}</div>
      <div class="blog-wall">
        ${S.map(j).join("")}
      </div>
    `,e.innerHTML=`
    <div class="hq-hero">
      <div class="hero-logo">
        <span class="logo-text">Hyperqualia HQ</span>
      </div>
      ${M()}
    </div>
    ${a}
  `,document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault();const t=i.target.getAttribute("data-page");t&&(r=t,l())})}),r==="blog"){document.querySelectorAll(".tag-checkbox").forEach(i=>{i.addEventListener("click",t=>{if(t.target.tagName.toLowerCase()!=="input"){const o=i.getAttribute("data-tag");if(!o)return;s.size===1&&s.has(o)?s.clear():s=new Set([o]),l()}})}),document.querySelectorAll('.tag-checkbox input[type="checkbox"]').forEach(i=>{i.addEventListener("click",t=>{t.stopPropagation();const o=t.target;o.checked?s.add(o.value):s.delete(o.value),l()})});const n=document.querySelector(".clear-filters");n&&n.addEventListener("click",()=>{s=new Set,l()})}}l();
