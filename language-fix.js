(() => {
  const translations = {
    en:{title:'Support the developer',lead:'Choose a way to support the developer.',card:'Card payment',crypto:'Crypto',networks:'10 networks',choose:'Choose a network and coin',address:'Wallet address',copy:'Copy',copied:'Copied',openWallet:'Open in wallet',chooseWallet:'Choose wallet',anyWallet:'Any compatible wallet',warn:'Send {coin} only through the {network} network.',copyOnly:'Copy address',copiedOpen:'Address copied — open your wallet and paste it'},
    ru:{title:'Поддержать разработчика',lead:'Выберите удобный способ поддержать разработчика.',card:'Оплата картой',crypto:'Криптовалюта',networks:'10 сетей',choose:'Выберите сеть и монету',address:'Адрес кошелька',copy:'Копировать',copied:'Скопировано',openWallet:'Открыть в кошельке',chooseWallet:'Выберите кошелёк',anyWallet:'Любой совместимый кошелёк',warn:'Отправляйте {coin} только через сеть {network}.',copyOnly:'Скопировать адрес',copiedOpen:'Адрес скопирован — откройте кошелёк и вставьте его'},
    de:{title:'Entwickler unterstützen',lead:'Wähle eine Möglichkeit, den Entwickler zu unterstützen.',card:'Kartenzahlung',crypto:'Krypto',networks:'10 Netzwerke',choose:'Netzwerk und Coin auswählen',address:'Wallet-Adresse',copy:'Kopieren',copied:'Kopiert',openWallet:'In Wallet öffnen',chooseWallet:'Wallet auswählen',anyWallet:'Beliebiges kompatibles Wallet',warn:'{coin} nur über das Netzwerk {network} senden.',copyOnly:'Adresse kopieren',copiedOpen:'Adresse kopiert — Wallet öffnen und einfügen'},
    fr:{title:'Soutenir le développeur',lead:'Choisissez une façon de soutenir le développeur.',card:'Paiement par carte',crypto:'Crypto',networks:'10 réseaux',choose:'Choisissez un réseau et une monnaie',address:'Adresse du portefeuille',copy:'Copier',copied:'Copié',openWallet:'Ouvrir dans un portefeuille',chooseWallet:'Choisissez un portefeuille',anyWallet:'Tout portefeuille compatible',warn:'Envoyez {coin} uniquement via le réseau {network}.',copyOnly:'Copier l’adresse',copiedOpen:'Adresse copiée — ouvrez votre portefeuille et collez-la'},
    pl:{title:'Wesprzyj dewelopera',lead:'Wybierz sposób wsparcia dewelopera.',card:'Płatność kartą',crypto:'Krypto',networks:'10 sieci',choose:'Wybierz sieć i monetę',address:'Adres portfela',copy:'Kopiuj',copied:'Skopiowano',openWallet:'Otwórz w portfelu',chooseWallet:'Wybierz portfel',anyWallet:'Dowolny zgodny portfel',warn:'Wysyłaj {coin} wyłącznie przez sieć {network}.',copyOnly:'Kopiuj adres',copiedOpen:'Adres skopiowany — otwórz portfel i wklej go'},
    ua:{title:'Підтримати розробника',lead:'Оберіть зручний спосіб підтримати розробника.',card:'Оплата карткою',crypto:'Криптовалюта',networks:'10 мереж',choose:'Оберіть мережу та монету',address:'Адреса гаманця',copy:'Копіювати',copied:'Скопійовано',openWallet:'Відкрити в гаманці',chooseWallet:'Оберіть гаманець',anyWallet:'Будь-який сумісний гаманець',warn:'Надсилайте {coin} лише через мережу {network}.',copyOnly:'Скопіювати адресу',copiedOpen:'Адресу скопійовано — відкрийте гаманець і вставте її'},
    hi:{title:'डेवलपर का समर्थन करें',lead:'डेवलपर का समर्थन करने का तरीका चुनें।',card:'कार्ड भुगतान',crypto:'क्रिप्टो',networks:'10 नेटवर्क',choose:'नेटवर्क और कॉइन चुनें',address:'वॉलेट पता',copy:'कॉपी करें',copied:'कॉपी हो गया',openWallet:'वॉलेट में खोलें',chooseWallet:'वॉलेट चुनें',anyWallet:'कोई भी संगत वॉलेट',warn:'{coin} केवल {network} नेटवर्क के माध्यम से भेजें।',copyOnly:'पता कॉपी करें',copiedOpen:'पता कॉपी हो गया — अपना वॉलेट खोलें और पेस्ट करें'},
    ch:{title:'支持开发者',lead:'选择一种方式支持开发者。',card:'银行卡支付',crypto:'加密货币',networks:'10 个网络',choose:'选择网络和币种',address:'钱包地址',copy:'复制',copied:'已复制',openWallet:'在钱包中打开',chooseWallet:'选择钱包',anyWallet:'任意兼容钱包',warn:'请仅通过 {network} 网络发送 {coin}。',copyOnly:'复制地址',copiedOpen:'地址已复制 — 打开钱包并粘贴'},
    jp:{title:'開発者を支援',lead:'開発者を支援する方法を選択してください。',card:'カード決済',crypto:'暗号資産',networks:'10 ネットワーク',choose:'ネットワークとコインを選択',address:'ウォレットアドレス',copy:'コピー',copied:'コピーしました',openWallet:'ウォレットで開く',chooseWallet:'ウォレットを選択',anyWallet:'対応ウォレット',warn:'{coin} は {network} ネットワークでのみ送信してください。',copyOnly:'アドレスをコピー',copiedOpen:'アドレスをコピーしました — ウォレットを開いて貼り付けてください'},
    ko:{title:'개발자 후원하기',lead:'개발자를 후원할 방법을 선택하세요.',card:'카드 결제',crypto:'암호화폐',networks:'10개 네트워크',choose:'네트워크와 코인을 선택하세요',address:'지갑 주소',copy:'복사',copied:'복사됨',openWallet:'지갑에서 열기',chooseWallet:'지갑 선택',anyWallet:'호환되는 지갑',warn:'{coin}은(는) {network} 네트워크로만 보내세요.',copyOnly:'주소 복사',copiedOpen:'주소가 복사되었습니다 — 지갑을 열고 붙여넣으세요'}
  };

  Object.keys(T).forEach(key => delete T[key]);
  Object.assign(T, translations);

  const languageButtons = [
    ['en','EN'],['ru','RU'],['de','DE'],['fr','FR'],['pl','PL'],
    ['ua','UA'],['hi','HI'],['ch','CH'],['jp','JP'],['ko','KO']
  ];
  const nav = document.querySelector('.langs');
  nav.textContent = '';
  languageButtons.forEach(([key,label], index) => {
    if (index) {
      const sep = document.createElement('span');
      sep.className = 'lang-sep';
      sep.textContent = '·';
      nav.appendChild(sep);
    }
    const button = document.createElement('button');
    button.className = 'lang';
    button.dataset.lang = key;
    button.textContent = label;
    button.onclick = () => setLang(key);
    nav.appendChild(button);
  });

  const browserMap = {uk:'ua',zh:'ch',ja:'jp',ko:'ko',hi:'hi',fr:'fr',de:'de',pl:'pl',ru:'ru',en:'en'};
  function detectLanguage() {
    const saved = localStorage.getItem('donate-language');
    if (T[saved]) return saved;
    for (const item of navigator.languages || [navigator.language]) {
      const code = (item || 'en').split('-')[0].toLowerCase();
      const mapped = browserMap[code];
      if (mapped && T[mapped]) return mapped;
    }
    return 'en';
  }

  const style = document.createElement('style');
  style.textContent = '.langs{gap:5px}.lang{padding:7px 5px}.lang-sep{color:var(--muted);font-size:11px;opacity:.55;align-self:center;user-select:none}';
  document.head.appendChild(style);
  setLang(detectLanguage(), false);
})();
