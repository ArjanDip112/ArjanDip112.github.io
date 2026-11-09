const $=(s,root=document)=>root.querySelector(s), $$=(s,root=document)=>[...root.querySelectorAll(s)];
const progress=$('#progress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'},{passive:true});
$('#year').textContent=new Date().getFullYear();

const themeToggle=$('#themeToggle');
const savedTheme=localStorage.getItem('arjan-theme');
if(savedTheme==='light')document.body.classList.add('light');
themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('arjan-theme',document.body.classList.contains('light')?'light':'dark')});

const menuToggle=$('#menuToggle'), nav=$('#nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open))});
$$('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));

const sections=$$('main section[id]');
const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){$$('.nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>navObserver.observe(s));

$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  $$('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const filter=btn.dataset.filter;
  $$('.project-card').forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter));
}));

const projectData={
  lte:{eyebrow:'TELECOM ENGINEERING / AUTOMATION',title:'Huawei LTE Power Automation',body:`<p><strong>Problem context</strong><br>LTE hardware and cell-level configuration relationships can make power planning and redistribution a repetitive, error-prone engineering task.</p><h3>Approach</h3><ul><li>Map Huawei hardware resources to site- and cell-level configurations.</li><li>Calculate existing cell power and model redistribution for a target configuration.</li><li>Generate configuration guidance to support controlled implementation.</li></ul><h3>Reported trial outcome</h3><p>A trial across 2,355 cells was reported with downlink throughput improvements of 15.2% versus D-1 and 23.9% versus D-7. These figures are historical, user-reported comparisons and should be published only after the baseline, measurement window, sample selection and confounding factors are validated.</p><div class="modal-tags"><span>Python</span><span>Huawei LTE</span><span>Power allocation</span><span>Automation</span></div>`},
  load:{eyebrow:'TELECOM ENGINEERING / CAPACITY',title:'RAN Load Balancing Automation',body:`<p><strong>Objective</strong><br>Support more systematic identification of load distribution opportunities across the radio access network.</p><h3>Potential workflow</h3><ul><li>Collect cell-level traffic and performance indicators.</li><li>Identify candidate cells and neighboring capacity relationships.</li><li>Prepare recommendations and monitor post-change KPIs.</li></ul><p>Add the exact algorithm, vendor scope, operational safeguards and validated before/after results when the case study is ready.</p><div class="modal-tags"><span>Python</span><span>RAN KPIs</span><span>Load balancing</span></div>`},
  analytics:{eyebrow:'DATA / ANALYTICS',title:'Telecom KPI Analytics',body:`<p><strong>Objective</strong><br>Make recurring network performance analysis faster, consistent and easier to inspect.</p><h3>Technology and workflow</h3><ul><li>Use Python and Pandas to clean, transform and aggregate network KPI data.</li><li>Use SQL for structured data retrieval and repeatable analysis.</li><li>Use Streamlit and visualization tools to expose useful summaries and trends.</li></ul><p>Add a sanitized dashboard screenshot, data-flow diagram and examples of the decisions this tool supports.</p><div class="modal-tags"><span>Python</span><span>Pandas</span><span>SQL</span><span>Streamlit</span></div>`},
  geo:{eyebrow:'GEOSPATIAL / VISUALIZATION',title:'Telecom Site Visualization',body:`<p><strong>Objective</strong><br>Make telecom infrastructure information easier to explore through geographic context.</p><h3>Approach</h3><ul><li>Organize site and location data for map-based exploration.</li><li>Use geospatial tools to visualize infrastructure and support operational lookup.</li><li>Present information through an accessible interface for internal users.</li></ul><p>Before publishing, remove confidential site coordinates, network identifiers and any proprietary map layers.</p><div class="modal-tags"><span>QGIS</span><span>Geospatial</span><span>AppSheet</span></div>`}
};
const modal=$('#projectModal');
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
$$('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{const p=projectData[btn.dataset.project];$('#modalEyebrow').textContent=p.eyebrow;$('#modalTitle').textContent=p.title;$('#modalBody').innerHTML=p.body;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('.modal-close').focus()}));
$$('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
