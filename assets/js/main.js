(() => {
  'use strict';
  const cfg = window.BOZKURT_CONFIG || {};
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];
  const waUrl = message => `https://wa.me/${String(cfg.whatsappNumber || '').replace(/\D/g,'')}?text=${encodeURIComponent(message)}`;

  function bindConfig(){
    $$('[data-config]').forEach(el => {
      const key=el.dataset.config;
      if(Object.prototype.hasOwnProperty.call(cfg,key)) el.textContent=cfg[key];
    });
    $$('[data-config-link]').forEach(el => {
      const type=el.dataset.configLink;
      if(type==='phone') el.href=`tel:+${String(cfg.phoneRaw||'').replace(/\D/g,'')}`;
      if(type==='email') el.href=`mailto:${cfg.email||''}`;
      if(type==='instagram') el.href=cfg.instagramUrl||'';
      if(type==='maps') el.href=cfg.mapsUrl||'';
    });
    $$('[data-wa-message]').forEach(el => el.href=waUrl(el.dataset.waMessage));
    const schema=$('#business-schema');
    if(schema){
      try{
        const data=JSON.parse(schema.textContent);
        data.name=cfg.brandName||data.name; data.url=cfg.domain||data.url;
        data.telephone=`+${String(cfg.phoneRaw||'').replace(/\D/g,'')}`; data.email=cfg.email||data.email;
        data.address.streetAddress=cfg.address||data.address.streetAddress; data.sameAs=[cfg.instagramUrl].filter(Boolean);
        schema.textContent=JSON.stringify(data);
      }catch(_e){}
    }
    const notice=$('#configNotice');
    if(notice && cfg.address && !cfg.address.toLocaleLowerCase('tr').includes('buraya')) notice.hidden=true;
  }

  function mobileMenu(){
    const drawer=$('#mobileMenu'), toggle=$('#menuToggle');
    if(!drawer || !toggle) return;
    const panel=$('.drawer-panel',drawer), close=$('.drawer-close',drawer), backdrop=$('.drawer-backdrop',drawer);
    let lastFocus=null;
    const focusables=()=>$$('a[href],button:not([disabled])',panel);
    const open=()=>{lastFocus=document.activeElement;drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');toggle.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');setTimeout(()=>close.focus(),100)};
    const shut=()=>{drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true');toggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');if(lastFocus) lastFocus.focus()};
    toggle.addEventListener('click',open); close.addEventListener('click',shut); backdrop.addEventListener('click',shut);
    $$('.drawer-nav a',drawer).forEach(a=>a.addEventListener('click',shut));
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'&&drawer.classList.contains('is-open')) shut();
      if(e.key==='Tab'&&drawer.classList.contains('is-open')){
        const f=focusables(), first=f[0], last=f[f.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      }
    });
    if(new URLSearchParams(location.search).get('previewMenu')==='1') open();
  }

  function header(){
    const h=$('#siteHeader'); if(!h) return;
    const onScroll=()=>h.classList.toggle('is-sticky',window.scrollY>40);
    onScroll(); addEventListener('scroll',onScroll,{passive:true});
  }

  function navState(){
    const links=$$('.desktop-nav a'); const sections=links.map(a=>$(a.getAttribute('href'))).filter(Boolean);
    if(!('IntersectionObserver' in window)) return;
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')===`#${entry.target.id}`))}
    }),{rootMargin:'-35% 0px -60% 0px'}); sections.forEach(s=>io.observe(s));
  }

  function finish(){
    const loader=$('.site-loader'); if(loader) setTimeout(()=>loader.classList.add('is-hidden'),150);
    const year=$('#currentYear'); if(year) year.textContent=new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded',()=>{bindConfig();mobileMenu();header();navState();finish()});
})();