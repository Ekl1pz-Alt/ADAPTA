/* Abre cada tema en una pantalla completa, igual que la guía de TDAH. */
(() => {
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-topic]');
    if(!button||button.dataset.topic==='tdah')return;
    const topic=(window.ADAPTA_CONTENT?.topics||[]).find(item=>item.id===button.dataset.topic);
    if(!topic?.info)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    localStorage.setItem('adaptaTopic',topic.id);
    localStorage.setItem('adaptaView','topic');
    sessionStorage.setItem('adaptaSkipLaunch','1');
    window.location.reload();
  },true);
})();
