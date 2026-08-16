(() => {
  // Wallet support matrix verified in August 2026.
  // Wallet icons are inline SVG: no external icon CDN is required.
  Object.assign(T.en,{copyOnly:'Copy address',copiedOpen:'Address copied — open your wallet and paste it',opensApp:'Opens wallet · address copied',prefilled:'Recipient prefilled'});
  Object.assign(T.ru,{copyOnly:'Скопировать адрес',copiedOpen:'Адрес скопирован — откройте кошелёк и вставьте его',opensApp:'Откроет кошелёк · адрес скопирован',prefilled:'Адрес получателя заполнен'});
  Object.assign(T.be,{copyOnly:'Скапіяваць адрас',copiedOpen:'Адрас скапіяваны — адкрыйце кашалёк і ўстаўце яго',opensApp:'Адкрые кашалёк · адрас скапіяваны',prefilled:'Адрас атрымальніка запоўнены'});
  Object.assign(T.de,{copyOnly:'Adresse kopieren',copiedOpen:'Adresse kopiert — Wallet öffnen und einfügen',opensApp:'Öffnet Wallet · Adresse kopiert',prefilled:'Empfänger vorausgefüllt'});
  Object.assign(T.pl,{copyOnly:'Kopiuj adres',copiedOpen:'Adres skopiowany — otwórz portfel i wklej go',opensApp:'Otwiera portfel · adres skopiowany',prefilled:'Odbiorca uzupełniony'});

  const walletIcons={
    trust:`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#3375BB"/><path fill="#fff" d="M16 4.8 25.5 8v7.1c0 6.2-3.8 10.4-9.5 12.8-5.7-2.4-9.5-6.6-9.5-12.8V8L16 4.8Zm0 4.1v14.8c3.4-1.9 5.5-4.7 5.5-8.5v-4.3L16 8.9Z"/></svg>`,
    metamask:`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#FFF4EA"/><path fill="#F6851B" d="m25.8 6.1-8.2 6.1 1.5-3.6 6.7-2.5ZM6.2 6.1l8.1 6.2-1.4-3.7-6.7-2.5Z"/><path fill="#E2761B" d="m22.8 20.2-2.2 3.4 4.7 1.3 1.4-4.6-3.9-.1ZM5.3 20.3l1.4 4.6 4.7-1.3-2.2-3.4-3.9.1Z"/><path fill="#E4761B" d="m11.1 14.6-1.3 2 4.7.2-.2-5-3.2 2.8Zm9.8 0-3.3-2.9-.1 5.1 4.7-.2-1.3-2Z"/><path fill="#D7C1B3" d="m11.4 23.6 2.8-1.4-2.4-1.9-.4 3.3Zm6.4-1.4 2.8 1.4-.4-3.3-2.4 1.9Z"/><path fill="#233447" d="m20.6 17.8-3.1.9 2.2 1 .9-1.9Zm-9.2 0 .9 1.9 2.2-1-3.1-.9Z"/><path fill="#CD6116" d="m11.4 23.6.4-3.4-2.6.1 2.2 3.3Zm8.8-3.4.4 3.4 2.2-3.3-2.6-.1Z"/><path fill="#E4751F" d="m22.2 16.6-4.7.2.4 2.1.7-1.1 1.9.2 1.7-1.4Zm-10.7 1.4 1.9-.2.7 1.1.4-2.1-4.7-.2 1.7 1.4Z"/><path fill="#F6851B" d="m9.8 16.6 2 3.7-.1-1.7-2-1.5.1-.5Zm12.4 0 .1.5-2 1.5-.1 1.7 2-3.7Z"/><path fill="#C0AD9E" d="m14.1 18.9.1 3.3.8-2.2-.5-1.3-.4.2Zm3.8 0-.4-.2-.5 1.3.8 2.2.1-3.3Z"/><path fill="#161616" d="m14.5 18.7.5 1.3-.7 2.1h3.5l-.8-2.1.5-1.3-1.5.7-1.5-.7Z"/><path fill="#763D16" d="m11.4 23.6 3.5 1.7-.7-3.1-2.8 1.4Zm6.4-1.4-.7 3.1 3.5-1.7-2.8-1.4Z"/><path fill="#F6851B" d="m17.1 25.3.7-3.1h-3.6l.7 3.1.1-2.1h2l.1 2.1Z"/></svg>`,
    phantom:`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#AB9FF2"/><path fill="#fff" d="M25.4 15.4c0 5.3-3.8 9.2-9.1 9.2-2.7 0-4.2-1.4-4.2-3.3 0-.5.1-.9.3-1.4-2.3.6-4.1-.2-4.1-1.9 0-1.3 1.1-2.5 2.8-3.2-.2-.5-.3-.9-.3-1.4 0-3.2 2.8-5.8 6.9-5.8 4.6 0 7.7 3 7.7 7.8Zm-10-2.1a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm4.8 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"/></svg>`,
    backpack:`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#E33E3F"/><path fill="#fff" d="M11 11V9.5a5 5 0 0 1 10 0V11h1.2c1 0 1.8.8 1.8 1.8v11.4c0 1-.8 1.8-1.8 1.8H9.8c-1 0-1.8-.8-1.8-1.8V12.8c0-1 .8-1.8 1.8-1.8H11Zm3 0h4V9.5a2 2 0 0 0-4 0V11Zm-2 4v6h8v-6h-8Z"/></svg>`,
    solflare:`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#111116"/><circle cx="16" cy="16" r="4.6" fill="#FC7C18"/><g stroke="#FC7C18" stroke-width="2" stroke-linecap="round"><path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.8 2.8M21 21l2.8 2.8M23.8 8.2 21 11M11 21l-2.8 2.8"/></g></svg>`,
    tronlink:`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M6 6 26 9.5 16.4 26 6 6Z" fill="none" stroke="#EF0027" stroke-width="2.3" stroke-linejoin="round"/><path d="m6.8 6.8 9.3 7.9 9.2-4.8M16.1 14.7l.3 10.4" fill="none" stroke="#EF0027" stroke-width="1.9" stroke-linejoin="round"/></svg>`,
    tonkeeper:`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#45AEF5"/><path fill="#fff" d="M7.1 10.5c.4-1.4 1.7-2.3 3.2-2.3h11.4c1.5 0 2.8.9 3.2 2.3.2.8.1 1.6-.4 2.4l-6.9 11.2c-.7 1.1-2.5 1.1-3.2 0L7.5 12.9c-.5-.8-.6-1.6-.4-2.4Zm3.2.7 5.7 9.2 5.7-9.2H10.3Z"/></svg>`,
    mywallet:`<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="mw" x1="3" y1="3" x2="29" y2="29"><stop stop-color="#6B5CFF"/><stop offset="1" stop-color="#16C7C1"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#mw)"/><path fill="#fff" d="M7.2 22.8V9.2h3.5l5.3 7 5.3-7h3.5v13.6h-3.7v-7.5L16 21.8l-5.1-6.5v7.5H7.2Z"/></svg>`
  };

  const walletNames={trust:'Trust Wallet',metamask:'MetaMask',phantom:'Phantom',backpack:'Backpack',solflare:'Solflare',tronlink:'TronLink',tonkeeper:'Tonkeeper',mywallet:'My Wallet'};

  const networkWallets={
    bnb:['metamask','trust','mywallet'],
    eth:['metamask','trust','phantom','backpack','mywallet'],
    btc:['metamask','trust','phantom'],
    tron:['tronlink','metamask','trust','mywallet'],
    arb:['metamask','trust','backpack','mywallet'],
    sol:['phantom','solflare','backpack','metamask','trust','mywallet'],
    base:['metamask','phantom','backpack','trust','mywallet'],
    poly:['metamask','phantom','backpack','trust','mywallet'],
    ton:['tonkeeper','mywallet','trust'],
    cosmos:['trust']
  };

  const pageUrl=()=>location.href.split('#')[0]+'#crypto';
  const walletSvg=key=>walletIcons[key]||'';

  function eligibleWallets(n,c){
    const out=[...(networkWallets[n.id]||[])];
    if(n.id==='tron'&&c?.[0]==='USDT')out.push('tonkeeper');
    return [...new Set(out)];
  }

  function metamaskEvmLink(n,c){
    const tok=token(c);
    if(tok)return `https://metamask.app.link/send/${tok}@${n.chain}/transfer?address=${encodeURIComponent(n.a)}`;
    return `https://metamask.app.link/send/${encodeURIComponent(n.a)}@${n.chain}`;
  }

  function launchInfo(key,n,c){
    const tok=token(c);
    if(key==='trust')return {url:trust(n,c),prefilled:true};
    if(key==='metamask'){
      if(n.f==='evm')return {url:metamaskEvmLink(n,c),prefilled:true};
      return {url:'https://link.metamask.io/',prefilled:false};
    }
    if(key==='phantom'){
      if(!['eth','btc','sol','base','poly'].includes(n.id))return null;
      return {url:`https://phantom.app/ul/browse/${encodeURIComponent(pageUrl())}?ref=${encodeURIComponent(location.origin)}`,prefilled:false};
    }
    if(key==='backpack'){
      if(!['eth','arb','sol','base','poly'].includes(n.id))return null;
      return {url:`https://backpack.app/ul/v1/browse/${encodeURIComponent(pageUrl())}?ref=${encodeURIComponent(location.origin)}`,prefilled:false};
    }
    if(key==='solflare'){
      if(n.id!=='sol')return null;
      return {url:`https://solflare.com/ul/v1/browse/${encodeURIComponent(pageUrl())}?ref=${encodeURIComponent(location.origin)}`,prefilled:false};
    }
    if(key==='tronlink'){
      if(n.id!=='tron')return null;
      const param=encodeURIComponent(JSON.stringify({action:'open',protocol:'TronLink',version:'1.0'}));
      return {url:`tronlinkoutside://pull.activity?param=${param}`,prefilled:false};
    }
    if(key==='tonkeeper'){
      if(n.id==='ton'){
        const base=`https://app.tonkeeper.com/transfer/${n.a}`;
        return {url:tok?`${base}?jetton=${encodeURIComponent(tok)}`:base,prefilled:true};
      }
      if(n.id==='tron'&&c?.[0]==='USDT')return {url:'https://app.tonkeeper.com/',prefilled:false};
      return null;
    }
    if(key==='mywallet'){
      if(!['bnb','eth','tron','arb','sol','base','poly','ton'].includes(n.id))return null;
      if(n.id==='ton'){
        const base=`https://my.tt/transfer/${n.a}`;
        return {url:tok?`${base}?jetton=${encodeURIComponent(tok)}`:base,prefilled:true};
      }
      return {url:'https://get.mywallet.io/',prefilled:false};
    }
    return null;
  }

  function copyNoWait(){if(!curN)return;try{navigator.clipboard?.writeText(curN.a)}catch(_){}}
  function iconMarkup(key){return walletSvg(key)||`<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="currentColor" opacity=".1"/><circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" stroke-width="2"/></svg>`}

  startWalletCycle=function(){
    clearInterval(cycleTimer);
    if(!curN||!curC)return;
    const keys=eligibleWallets(curN,curC).filter(k=>launchInfo(k,curN,curC));
    const el=$('#walletCycle');
    if(!keys.length){el.innerHTML='◌';return}
    let i=0;
    const draw=()=>animate(el,iconMarkup(keys[i++%keys.length]));
    draw();
    if(keys.length>1&&!matchMedia('(prefers-reduced-motion:reduce)').matches)cycleTimer=setInterval(draw,1350);
  };

  function renderWalletPicker(){
    if(!curN||!curC)return;
    $('#pickerSub').textContent=`${curC[0]} · ${curN.name}`;
    const list=$('#walletList');list.textContent='';
    const standard=['btc','evm','sol','ton'].includes(curN.f);
    const system=document.createElement('button');system.type='button';system.className='wallet-item';
    system.innerHTML=`<span class="wallet-logo wallet-generic" aria-hidden="true"><svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="currentColor" opacity=".09"/><path d="M8 11h16M8 16h16M8 21h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span><span class="wallet-copy"><span class="wallet-name">${standard?tr('anyWallet'):tr('copyOnly')}</span></span><span class="arrow">›</span>`;
    system.onclick=()=>{if(!standard){copyAddr(true);picker.close();setTimeout(()=>flash(tr('copiedOpen')),30);return}copyNoWait();const uri=payload(curN,curC);picker.close();location.href=uri};
    list.appendChild(system);

    eligibleWallets(curN,curC).forEach(key=>{
      const info=launchInfo(key,curN,curC);if(!info)return;
      const b=document.createElement('button');b.type='button';b.className='wallet-item';
      b.innerHTML=`<span class="wallet-logo" aria-hidden="true">${iconMarkup(key)}</span><span class="wallet-copy"><span class="wallet-name">${walletNames[key]}</span></span><span class="arrow">›</span>`;
      b.onclick=()=>{if(!info.prefilled)copyNoWait();picker.close();location.href=info.url};
      list.appendChild(b);
    });
    picker.showModal();
  }

  $('#openWallet').onclick=renderWalletPicker;
  const style=document.createElement('style');
  style.textContent='.wallet-logo svg,.wallet-cycle svg{width:100%;height:100%;display:block}.wallet-logo{padding:5px}.wallet-cycle{padding:4px}.wallet-copy{min-width:0;display:flex;align-items:center;align-self:stretch}.wallet-name{display:flex;align-items:center;height:100%}.wallet-item>.arrow{margin-left:auto}';
  document.head.appendChild(style);
})();
