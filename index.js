import{S as p,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o,i){return fetch(`https://pixabay.com/api/?key=${o}&q=${i}&image_type=photo&orientation=horisontal&safesearch=true`)}function u(o){return o.map(({webformatURL:i,largeImageURL:s,tags:r,likes:e,views:t,comments:n,downloads:c})=>`<li class="list-item">
  <a class="list-item-link" href="${s}">
    <img
      class="list-item-image"
      src="${i}"
      alt="${r}"
    />
  </a>
  <ul class="wrap-in-list-item">
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Likes</h3>
              <p class="item-in-wrap-text">${e}</p>
            </li>
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Views</h3>
              <p class="item-in-wrap-text">${t}</p>
            </li>
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Comments</h3>
              <p class="item-in-wrap-text">${n}</p>
            </li>
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Downloads</h3>
              <p class="item-in-wrap-text">${c}</p>
            </li>
          </ul>
  
</li>`).join("")}const f="44769616-4ffe0cee5617f53d3e1075857",l={form:document.querySelector(".search-form"),list:document.querySelector(".list"),input:document.querySelector(".search-input")};l.form.addEventListener("submit",h);function h(o){o.preventDefault(),l.list.innerHTML="";const i=o.target.elements.input.value.trim();if(i!==""){l.form.insertAdjacentHTML("afterend",' <span class="loader"></span>');const s=document.querySelector(".loader");m(f,i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const e=r.hits;e.length!==0?(l.list.insertAdjacentHTML("beforeend",u(e)),new p(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):a.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:error,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:'"Sorry, there are no images matching your search query. Please try again!"'})}).catch(r=>console.error("Fetch Error:",r)).finally(()=>s.style.display="none"),l.form.reset()}else a.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:error,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Form field must be filled in"})}
//# sourceMappingURL=index.js.map
