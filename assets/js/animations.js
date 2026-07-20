(() => {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const items=[...document.querySelectorAll('.reveal:not(.is-visible)')];
    if(matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)){
      items.forEach(el=>el.classList.add('is-visible')); return;
    }
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})
    },{threshold:.12,rootMargin:'0px 0px -45px'});
    items.forEach(el=>observer.observe(el));
  });
})();