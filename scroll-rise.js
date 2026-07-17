const revealSections=document.querySelectorAll('main > section');
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-inview');sectionObserver.unobserve(entry.target)}
}),{threshold:.12});
revealSections.forEach(section=>{if(!section.classList.contains('staking-hero')){section.classList.add('scroll-rise');sectionObserver.observe(section)}});
