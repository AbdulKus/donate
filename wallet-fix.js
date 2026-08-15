(() => {
  // 2026-08 verified wallet launcher layer for the current single-page build.
  // No external icon CDN is used for wallet icons.

  Object.assign(T.en, {copyOnly:'Copy address', copiedOpen:'Address copied — open your wallet and paste it'});
  Object.assign(T.ru, {copyOnly:'Скопировать адрес', copiedOpen:'Адрес скопирован — откройте кошелёк и вставьте его'});
  Object.assign(T.be, {copyOnly:'Скапіяваць адрас', copiedOpen:'Адрас скапіяваны — адкрыйце кашалёк і ўстаўце яго'});
  Object.assign(T.de, {copyOnly:'Adresse kopieren', copiedOpen:'Adresse kopiert — Wallet öffnen und einfügen'});
  Object.assign(T.pl, {copyOnly:'Kopiuj adres', copiedOpen:'Adres skopiowany — otwórz portfel i wklej go'});

  const walletIcons = {
    trust: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#3375BB"/><path fill="#fff" d="M16 4.8 25.5 8v7.1c0 6.2-3.8 10.4-9.5 12.8-5.7-2.4-9.5-6.6-9.5-12.8V8L16 4.8Zm0 4.1v14.8c3.4-1.9 5.5-4.7 5.5-8.5v-4.3L16 8.9Z"/></svg>`,
    tronlink: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M6 6 26 9.5 16.4 26 6 6Z" fill="none" stroke="#EF0027" stroke-width="2.3" stroke-linejoin="round"/><path d="m6.8 6.8 9.3 7.9 9.2-4.8M16.1 14.7l.3 10.4" fill="none" stroke="#EF0027" stroke-width="1.9" stroke-linejoin="round"/></svg>`,
    phantom: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#AB9FF2"/><path fill="#fff" d="M25.4 15.4c0 5.3-3.8 9.2-9.1 9.2-2.7 0-4.2-1.4-4.2-3.3 0-.5.1-.9.3-1.4-2.3.6-4.1-.2-4.1-1.9 0-1.3 1.1-2.5 2.8-3.2-.2-.5-.3-.9-.3-1.4 0-3.2 2.8-5.8 6.9-5.8 4.6 0 7.7 3 7.7 7.8Zm-10-2.1a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm4.8 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"/></svg>`,
    solflare: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#111116"/><circle cx="16" cy="16" r="4.6" fill="#FC7C18"/><g stroke="#FC7C18" stroke-width="2" stroke-linecap="round"><path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.8 2.8M21 21l2.8 2.8M23.8 8.2 21 11M11 21l-2.8 2.8"/></g></svg>`,
    backpack: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#E33E3F"/><path fill="#fff" d="M11 11V9.5a5 5 0 0 1 10 0V11h1.2c1 0 1.8.8 1.8 1.8v11.4c0 1-.8 1.8-1.8 1.8H9.8c-1 0-1.8-.8-1.8-1.8V12.8c0-1 .8-1.8 1.8-1.8H11Zm3 0h4V9.5a2 2 0 0 0-4 0V11Zm-2 4v6h8v-6h-8Z"/></svg>`,
    tonkeeper: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#45AEF5"/><path fill="#fff" d="M7.1 10.5c.4-1.4 1.7-2.3 3.2-2.3h11.4c1.5 0 2.8.9 3.2 2.3.2.8.1 1.6-.4 2.4l-6.9 11.2c-.7 1.1-2.5 1.1-3.2 0L7.5 12.9c-.5-.8-.6-1.6-.4-2.4Zm3.2.7 5.7 9.2 5.7-9.2H10.3Z"/></svg>`,
    myton: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#0098EA"/><path fill="#fff" d="M7 22V10h3.4l5.6 7.1 5.6-7.1H25v12h-3.6v-6.5L16 22l-5.4-6.5V22H7Z"/></svg>`
  };

  const verifiedWallets = {
    trust: {name:'Trust Wallet'},
    tronlink: {name:'TronLink'},
    phantom: {name:'Phantom'},
    solflare: {name:'Solflare'},
    backpack: {name:'Backpack'},
    tonkeeper: {name:'Tonkeeper'},
    myton: {name:'MyTonWallet'}
  };

  Object.keys(W).forEach(k => delete W[k]);
  Object.entries(verifiedWallets).forEach(([k,v]) => { W[k] = [v.name, '', '']; });
  WS.evm = ['trust'];
  WS.btc = ['trust'];
  WS.tron = ['tronlink','trust'];
  WS.sol = ['phantom','solflare','backpack','trust'];
  WS.ton = ['tonkeeper','myton','trust'];
  WS.cosmos = ['trust'];

  const walletSvg = key => walletIcons[key] || `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="currentColor" opacity=".12"/><circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
  const walletName = key => verifiedWallets[key]?.name || key;
  const supportsStandard = n => ['btc','evm','sol','ton'].includes(n.f);
  const pageUrl = () => location.href.split('#')[0] + '#crypto';

  function walletLaunch(key, n, c) {
    const tok = token(c);
    if (key === 'trust') return trust(n,c);
    if (key === 'tronlink' && n.f === 'tron') {
      const param = encodeURIComponent(JSON.stringify({action:'open',protocol:'TronLink',version:'1.0'}));
      return `tronlinkoutside://pull.activity?param=${param}`;
    }
    if (key === 'phantom' && n.f === 'sol') {
      return `https://phantom.app/ul/browse/${encodeURIComponent(pageUrl())}?ref=${encodeURIComponent(location.origin)}`;
    }
    if (key === 'solflare' && n.f === 'sol') {
      return `https://solflare.com/ul/v1/browse/${encodeURIComponent(pageUrl())}?ref=${encodeURIComponent(location.origin)}`;
    }
    if (key === 'backpack' && n.f === 'sol') {
      return `https://backpack.app/ul/v1/browse/${encodeURIComponent(pageUrl())}?ref=${encodeURIComponent(location.origin)}`;
    }
    if (key === 'tonkeeper' && n.f === 'ton') {
      const base = `https://app.tonkeeper.com/transfer/${n.a}`;
      return tok ? `${base}?jetton=${encodeURIComponent(tok)}` : base;
    }
    if (key === 'myton' && n.f === 'ton') {
      const base = `https://my.tt/transfer/${n.a}`;
      return tok ? `${base}?jetton=${encodeURIComponent(tok)}` : base;
    }
    return null;
  }

  startWalletCycle = function () {
    clearInterval(cycleTimer);
    if (!curN) return;
    const keys = (WS[curN.f] || []).filter(k => walletLaunch(k,curN,curC));
    const el = $('#walletCycle');
    if (!keys.length) {
      el.innerHTML = '◌';
      return;
    }
    let i = 0;
    const draw = () => animate(el, walletSvg(keys[i++ % keys.length]));
    draw();
    if (keys.length > 1 && !matchMedia('(prefers-reduced-motion:reduce)').matches) cycleTimer = setInterval(draw, 1350);
  };

  function copyNoWait() {
    if (!curN) return;
    try { navigator.clipboard?.writeText(curN.a); } catch (_) {}
  }

  function renderVerifiedPicker() {
    if (!curN || !curC) return;
    $('#pickerSub').textContent = `${curC[0]} · ${curN.name}`;
    const list = $('#walletList');
    list.textContent = '';

    const system = document.createElement('button');
    system.type = 'button';
    system.className = 'wallet-item';
    const standard = supportsStandard(curN);
    system.innerHTML = `<span class="wallet-logo"><svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="currentColor" opacity=".09"/><path d="M8 11h16M8 16h16M8 21h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span><span class="wallet-name">${standard ? tr('anyWallet') : tr('copyOnly')}</span><span class="arrow">›</span>`;
    system.onclick = () => {
      if (!standard) {
        copyAddr(true);
        picker.close();
        setTimeout(() => flash(tr('copiedOpen')), 30);
        return;
      }
      copyNoWait();
      const uri = payload(curN,curC);
      picker.close();
      location.href = uri;
    };
    list.appendChild(system);

    (WS[curN.f] || []).forEach(key => {
      const url = walletLaunch(key,curN,curC);
      if (!url) return;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'wallet-item';
      b.innerHTML = `<span class="wallet-logo">${walletSvg(key)}</span><span class="wallet-name">${walletName(key)}</span><span class="arrow">›</span>`;
      b.onclick = () => {
        copyNoWait();
        picker.close();
        location.href = url;
      };
      list.appendChild(b);
    });
    picker.showModal();
  }

  $('#openWallet').onclick = renderVerifiedPicker;

  const style = document.createElement('style');
  style.textContent = `.wallet-logo svg,.wallet-cycle svg{width:100%;height:100%;display:block}.wallet-logo{padding:5px}.wallet-cycle{padding:4px}`;
  document.head.appendChild(style);
})();
