import{a as f,i as u,S as d}from"./assets/vendor-DOXgIUil.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const p="44822102-6d1d7649cda1a595bd957c97f",m="https://pixabay.com/api/",h=15;async function y(e,n=1){try{return(await f.get(m,{params:{key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:h}})).data}catch(s){throw console.error("Error fetching images:",s),s}}function a(e){u.error({title:"Error",message:e,position:"topRight"})}function g(e){u.info({title:"Info",message:e,position:"topRight"})}function b(e,n){const s=n.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-item">
          <div class="image-card">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
            <div class="info">
              <p><b>Likes:</b> ${r.likes}</p>
              <p><b>Views:</b> ${r.views}</p>
              <p><b>Comments:</b> ${r.comments}</p>
              <p><b>Downloads:</b> ${r.downloads}</p>
            </div>
          </div>
        </a>
      `).join("");e.insertAdjacentHTML("beforeend",s)}function L(e){e.innerHTML=""}function w(e){e.style.display="block"}function P(e){e.style.display="none"}const v=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let E=new d(".gallery a",{captionsData:"alt",captionDelay:250});v.addEventListener("submit",S);function S(e){e.preventDefault();const n=e.currentTarget,s=n.elements.input.value.trim();if(!s){a("Please enter something!");return}L(c),w(l),y(s).then(r=>{r.hits.length===0?g("Sorry, there are no images matching your search query. Please try again!"):(b(c,r.hits),E.refresh())}).catch(r=>{console.error(r),a("An error occurred while fetching images. Please try again later.")}).finally(()=>{P(l),n.reset()})}
//# sourceMappingURL=index.js.map
