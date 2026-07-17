const phase=document.querySelector('.phase-two');
if(phase){new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){phase.classList.add('is-visible')}}),{threshold:.3}).observe(phase)}
