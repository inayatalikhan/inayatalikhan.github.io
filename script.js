// Minimal progressive enhancement: mobile navigation, publication filters,
// active navigation state, subtle reveal animations, and image fallbacks.
const toggle=document.querySelector('.nav-toggle');const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');const category=button.dataset.filter;document.querySelectorAll('.publication.compact').forEach(item=>item.classList.toggle('hidden',category!=='all'&&item.dataset.category!==category))}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')];const navItems=[...document.querySelectorAll('.nav-links a')];
new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-35% 0px -55%'}).observe?.(sections[0]);
sections.slice(1).forEach(s=>new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55%'}).observe(s));
document.querySelectorAll('.portrait-frame img,.gallery-item img').forEach(img=>img.addEventListener('error',()=>{img.style.display='none'}));
document.getElementById('current-year').textContent=new Date().getFullYear();
