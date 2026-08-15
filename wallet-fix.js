(() => {
  // Wallet launcher hardening: only show wallets with a currently documented launch flow.
  const extraText = {
    en: { copyOnly: 'Copy address', copiedOpen: 'Address copied — open your wallet and paste it' },
    ru: { copyOnly: 'Скопировать адрес', copiedOpen: 'Адрес скопирован — откройте кошелёк и вставьте его' },
    be: { copyOnly: 'Скапіяваць адрас', copiedOpen: 'Адрас скапіяваны — адкрыйце кашалёк і ўстаўце яго' },
    de: { copyOnly: 'Adresse kopieren', copiedOpen: 'Adresse kopiert — Wallet öffnen und einfügen' },
    pl: { copyOnly: 'Kopiuj adres', copiedOpen: 'Adres skopiowany — otwórz portfel i wklej go' }
  };
  Object.entries(extraText).forEach(([lang, text]) => Object.assign(translations[lang], text));

  const walletArt = {
    trust: `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#3375BB" d="M16 3 27 7v8.2C27 22.5 22.3 27.3 16 30 9.7 27.3 5 22.5 5 15.2V7l11-4Z"/><path fill="#fff" d="M16 7.1v18.3c4.2-2.2 6.8-5.5 6.8-10.1V9.9L16 7.1Z" opacity=".95"/></svg>`,
    tronlink: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5.2 5.1 27 9.1 16.2 27 5.2 5.1Z" fill="none" stroke="#EF0027" stroke-width="2.4" stroke-linejoin="round"/><path d="m5.8 5.8 9.9 8.7L27 9.4M15.7 14.5l.5 12" fill="none" stroke="#EF0027" stroke-width="2" stroke-linejoin="round"/></svg>`,
    phantom: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#AB9FF2"/><path fill="#fff" d="M25.2 15.1c0 5.6-4 9.8-9.6 9.8-2.9 0-4.4-1.5-4.4-3.5 0-.5.1-1 .3-1.5-2.4.7-4.4-.1-4.4-2 0-1.4 1.2-2.7 3-3.4-.2-.5-.3-1-.3-1.5 0-3.4 3-6.1 7.3-6.1 4.9 0 8.1 3.2 8.1 8.2Zm-10.5-2.2c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4-1.4.6-1.4 1.4.6 1.4 1.4 1.4Zm5.1 0c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4-1.4.6-1.4 1.4.6 1.4 1.4 1.4Z"/></svg>`,
    solflare: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#101014"/><circle cx="16" cy="16" r="5" fill="#FC7C18"/><g stroke="#FC7C18" stroke-width="2.1" stroke-linecap="round"><path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.8 2.8M21 21l2.8 2.8M23.8 8.2 21 11M11 21l-2.8 2.8"/></g></svg>`,
    backpack: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#E33E3F"/><path fill="#fff" d="M11 10.5V9a5 5 0 0 1 10 0v1.5h1.2c1 0 1.8.8 1.8 1.8v12.2c0 1-.8 1.8-1.8 1.8H9.8c-1 0-1.8-.8-1.8-1.8V12.3c0-1 .8-1.8 1.8-1.8H11Zm3 0h4V9a2 2 0 0 0-4 0v1.5Zm-2 5v6h8v-6h-8Z"/></svg>`,
    tonkeeper: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#45AEF5"/><path fill="#fff" d="M7.1 10.4c.4-1.4 1.7-2.3 3.2-2.3h11.4c1.5 0 2.8.9 3.2 2.3.2.8.1 1.7-.4 2.4L17.6 24c-.7 1.1-2.5 1.1-3.2 0L7.5 12.8c-.5-.7-.6-1.6-.4-2.4Zm3.2.7 5.7 9.2 5.7-9.2H10.3Z"/></svg>`,
    mytonwallet: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#0098EA"/><path fill="#fff" d="M7 22V10h3.4l5.6 7.2 5.6-7.2H25v12h-3.6v-6.6L16 22l-5.4-6.6V22H7Z"/></svg>`
  };

  Object.keys(walletCatalog).forEach(key => delete walletCatalog[key]);
  Object.assign(walletCatalog, {
    trust: { name: 'Trust Wallet' },
    tronlink: { name: 'TronLink' },
    phantom: { name: 'Phantom' },
    solflare: { name: 'Solflare' },
    backpack: { name: 'Backpack' },
    tonkeeper: { name: 'Tonkeeper' },
    mytonwallet: { name: 'MyTonWallet' }
  });
  Object.assign(walletSets, {
    evm: ['trust'],
    bitcoin: ['trust'],
    tron: ['tronlink', 'trust'],
    solana: ['phantom', 'solflare', 'backpack', 'trust'],
    ton: ['tonkeeper', 'mytonwallet', 'trust'],
    cosmos: ['trust']
  });

  walletIconMarkup = function (wallet) {
    return walletArt[wallet.id] || `<span class="fallback" style="display:inline">${wallet.name.slice(0, 2)}</span>`;
  };

  const hasStandardWalletUri = network => ['bitcoin', 'evm', 'solana', 'ton'].includes(network.family);
  const pageInsideWalletUrl = () => location.href.split('#')[0] + '#crypto';

  walletLaunchUrl = function (wallet, network, coin) {
    const token = assetContract(coin);
    if (wallet.id === 'trust') return trustPaymentLink(network, coin);
    if (wallet.id === 'tronlink' && network.family === 'tron') {
      const param = encodeURIComponent(JSON.stringify({ action: 'open', protocol: 'TronLink', version: '1.0' }));
      return `tronlinkoutside://pull.activity?param=${param}`;
    }
    if (wallet.id === 'phantom' && network.family === 'solana') {
      return `https://phantom.app/ul/browse/${encodeURIComponent(pageInsideWalletUrl())}?ref=${encodeURIComponent(location.origin)}`;
    }
    if (wallet.id === 'solflare' && network.family === 'solana') {
      return `https://solflare.com/ul/v1/browse/${encodeURIComponent(pageInsideWalletUrl())}?ref=${encodeURIComponent(location.origin)}`;
    }
    if (wallet.id === 'backpack' && network.family === 'solana') {
      return `https://backpack.app/ul/v1/browse/${encodeURIComponent(pageInsideWalletUrl())}?ref=${encodeURIComponent(location.origin)}`;
    }
    if (wallet.id === 'mytonwallet' && network.family === 'ton') {
      const base = `https://my.tt/transfer/${network.address}`;
      return token ? `${base}?jetton=${encodeURIComponent(token)}` : base;
    }
    if (wallet.id === 'tonkeeper' && network.family === 'ton') return standardPaymentPayload(network, coin);
    return null;
  };

  function copyWithoutAwait() {
    if (!currentNetwork) return;
    try { navigator.clipboard?.writeText(currentNetwork.address); } catch (_) {}
  }

  renderWalletPicker = function () {
    if (!currentNetwork || !currentCoin) return;
    document.getElementById('walletPickerAsset').textContent = `${currentCoin.symbol} · ${currentNetwork.name}`;
    walletList.textContent = '';

    const standard = hasStandardWalletUri(currentNetwork);
    const system = document.createElement('button');
    system.type = 'button';
    system.className = 'wallet-item wallet-system';
    system.innerHTML = `<span class="wallet-logo" aria-hidden="true">${standard ? '◌' : '⧉'}</span><span class="wallet-name">${standard ? t('anyWallet') : t('copyOnly')}</span>`;
    system.onclick = () => {
      if (!standard) {
        copyCurrentAddress(true);
        walletPicker.close();
        flash(t('copiedOpen'));
        return;
      }
      copyWithoutAwait();
      const uri = standardPaymentPayload(currentNetwork, currentCoin);
      walletPicker.close();
      location.href = uri;
    };
    walletList.appendChild(system);

    walletsFor(currentNetwork).forEach(wallet => {
      const url = walletLaunchUrl(wallet, currentNetwork, currentCoin);
      if (!url) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'wallet-item';
      button.innerHTML = `<span class="wallet-logo" aria-hidden="true">${walletIconMarkup(wallet)}</span><span class="wallet-name">${wallet.name}</span><svg class="chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      button.querySelector('.chevron').style.marginLeft = 'auto';
      button.onclick = () => {
        copyWithoutAwait();
        walletPicker.close();
        location.href = url;
      };
      walletList.appendChild(button);
    });
  };

  const style = document.createElement('style');
  style.textContent = '.wallet-logo svg{width:25px;height:25px;display:block}.wallet-open-icons svg{width:20px;height:20px;display:block}';
  document.head.appendChild(style);
})();