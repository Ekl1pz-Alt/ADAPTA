(() => {
  const paths={
    family:'<circle cx="12" cy="7" r="3"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/><path d="M4 11a3 3 0 0 0-2 3v2m18-5a3 3 0 0 1 2 3v2"/>',
    teacher:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M7 20h10M12 16v4M7 8h7M7 11h4"/>',
    professional:'<circle cx="12" cy="8" r="3"/><path d="M5 21v-1a7 7 0 0 1 14 0v1M18 8h3m-1.5-1.5v3"/>',
    explore:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    observe:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
    guide:'<path d="M9 18h6M10 22h4M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.8-1.5 1.6-1.5 3.5h-4c0-1.9-.6-2.7-1.5-3.5Z"/>',
    plan:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6v3H9zM9 12l1.5 1.5L14 10m-5 7h6"/>',
    exchange:'<path d="M4 7h12v8H9l-4 3v-3H4zM20 9v8h-2v3l-4-3h-2"/>',
    mind:'<path d="M9 4.5a4 4 0 0 0-3 6.6A4.5 4.5 0 0 0 8 19.5h8a4.5 4.5 0 0 0 2-8.4A4 4 0 0 0 15 4.5a4 4 0 0 0-6 0Z"/><path d="M12 5v14M8 9h4m0 5h4"/>',
    book:'<path d="M4 5.5A3.5 3.5 0 0 1 7.5 4H12v16H7.5A3.5 3.5 0 0 0 4 23zM20 5.5A3.5 3.5 0 0 0 16.5 4H12v16h4.5A3.5 3.5 0 0 1 20 23z"/>',
    tdah:'<path d="M10 4.5a3.8 3.8 0 0 0-3.7 4.7A4.5 4.5 0 0 0 8.5 18h6.8a4.2 4.2 0 0 0 2-7.9A3.8 3.8 0 0 0 13.8 5a3.5 3.5 0 0 0-3.8-.5Z"/><path d="M9 11.5 11.5 9l2 2 2-2M9.5 15h5"/><circle cx="18.5" cy="5.5" r="1.5"/><path d="m17.3 6.7-2.1 2.1M18.5 2v1.5M22 5.5h-1.5"/>',
    tea:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="1.5"/><circle cx="18" cy="9" r="1.5"/><circle cx="16.5" cy="16" r="1.5"/><circle cx="7.5" cy="16" r="1.5"/><circle cx="6" cy="9" r="1.5"/><path d="m12 6.5 5 2M17 10.5l-1 4M15 17l-5 0M8 14.5l-1-4M7 8.5l5-2"/>',
    dyslexia:'<path d="M4 5.5A3.5 3.5 0 0 1 7.5 4H12v16H7.5A3.5 3.5 0 0 0 4 23zM20 5.5A3.5 3.5 0 0 0 16.5 4H12v16h4.5A3.5 3.5 0 0 1 20 23z"/><path d="M8 9h2m4 0h2M8 13h2m4 0h2"/>',
    language:'<path d="M5 5h14v10H9l-4 4z"/><path d="M9 9h6m-6 3h4"/>',
    executive:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5M8 17h3m6-4 2 2 3-4"/>',
    emotion:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/><path d="M9 12h.01M15 12h.01M10 15c1.2 1 2.8 1 4 0"/>',
    neurodiversity:'<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7zM5 16l.6 1.8L7.5 18l-1.9.6L5 20.5l-.6-1.9L2.5 18l1.9-.6z"/>',
    generic:'<circle cx="12" cy="12" r="8"/><path d="M12 8v8m-4-4h8"/>'
  };
  const map={FAM:'family',EDU:'teacher',PRO:'professional',EXP:'explore',OBS:'observe',GUI:'guide',PLAN:'plan','F+E':'exchange',TDAH:'mind',NVO:'book',A:'mind',I:'generic'};
  const icon=name=>`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]||paths.generic}</svg>`;
  function apply(root=document){const items=[];if(root.nodeType===1&&root.matches?.('.initial'))items.push(root);items.push(...root.querySelectorAll?.('.initial')||[]);items.forEach(element=>{if(element.dataset.iconReady)return;const type=element.closest('[data-topic]')?.dataset.topic||map[element.textContent.trim()]||'generic';element.textContent='';element.classList.add('app-icon');element.dataset.iconReady='1';element.setAttribute('aria-hidden','true');element.innerHTML=icon(type)})}
  apply();
  new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{if(node.nodeType===1)apply(node)}))).observe(document.body,{childList:true,subtree:true});
})();
