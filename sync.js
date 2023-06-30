if (!isSecureContext) {  
  location.protocol = 'http:';
}
(async() => {
  window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js');
    }
  });
  
  if (window.matchMedia('(display-mode: standalone)').matches) {
    document.querySelector('#BOWinstallApp').hidden = true;
    document.querySelector('#BOWprotocol').hidden = false;
  }else{
    document.querySelector('#BOWinstallApp').hidden = false;
  }
  
  const search = decodeURIComponent(location.search);
  if (search.includes('bow')) {
    document.querySelector('#BOWframe').hidden = false;
  } else if (search.includes('ott')) {
    document.querySelector('#OTTframe').hidden = false;
  }
  
  document.querySelector('#BOWregProto').addEventListener('click', () => {
    navigator.registerProtocolHandler('fdp', 'api/fdp/%s');
    navigator.registerProtocolHandler('otsl', 'api/otsl/%s');
  });
})();
