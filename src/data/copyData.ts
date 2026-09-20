import { BonusItem, RecipeCategory, TestimonialItem, FaqItem, PricingPlan } from '../types';

export const COPY_DATA_RO = {
  headerBanner: {
    urgentText: '🚨 OFERTĂ CU TIMP LIMITAT PENTRU PRIMII 50 DE CUMPĂRĂTORI',
    countdownText: 'OFERTĂ SPECIALĂ: Reducere 79% + 4 Bonusuri Gratuite',
    timerLabel: 'Expiră în:',
  },
  hero: {
    badge: '🚨 O oportunitate pe care nu o poți rata! 🥗👇',
    headlineMain: 'PROTOCOLUL DE CONSERVARE ENZIMATICĂ:',
    headlineSub: 'CEL MAI MARE KIT DE REȚETE ȘI PREGĂTIRE METABOLICĂ DIN ROMÂNIA (200+ COMBINAȚII ACTIVE)',
    storyText: 'Nu mai încerca să ghicești ce funcționează. Primește mașinăria completă pentru a debloca metabolismul și a transforma legumele banale în salate de lux de înaltă sațietate, care se epuizează din farfurie în câteva minute. Totul mură-n gură: de la lista inteligentă de cumpărături din supermarketurile locale până la sosurile lipolitice de activare.',
    ctaButton: 'VREAU SĂ-MI REINSTALEZ SĂNĂTATEA ACUM',
    vslNotice: '⚠️ Privește acest scurt video demonstrativ înainte ca accesul să fie închis',
    videoClickAudio: '🔊 Clic pentru a asculta cu sunet',
    videoPlaying: 'Video în redare activă...',
    stats: {
      recipesCount: '200+',
      recipesLabel: 'Rețete Active',
      satisfactionRate: '99.4%',
      satisfactionLabel: 'Satisfacție',
      prepTime: '3-5 min',
      prepLabel: 'Timp Pregătire',
      freshness: '7 Zile',
      freshnessLabel: 'Prospețime Garantată',
    }
  },

  painSection: {
    headline: '💔 Mănânci salate, dar nu reușești să slăbești? Iată de ce NU este vina ta!',
    p1: 'Ai încercat vreodată să mănânci „sănătos”, doar pentru a descoperi că legumele cumpărate se ofilesc, devin mizerabile și murchie în doar 2 zile în frigider? Sau mai rău: mănânci o farfurie mare de salată și, după doar o oră, simți o foame de lup și o poftă necontrolată de dulciuri?',
    truthBadge: 'Adevărul pe care nimeni nu ți-l spune:',
    p2: 'Problema nu este lipsa ta de voință. Problema este „Sindromul Salatei Moarte”. Când tai legumele în mod tradițional, ele suferă o oxidare celulară accelerată. Mănânci frunze biologic „moarte”, fără enzime active, care îți blochează metabolismul și îți stârnesc foamea.',
    solutionCallout: 'Cu Protocolul de Conservare Enzimatică, vei bloca oxidarea și vei consuma legume cu enzime 100% active, păstrând hrana proaspătă timp de 7 zile!',
    ctaButton: 'VREAU SĂ SCAP DE SINDROMUL SALATEI MOARTE'
  },

  deliverables: {
    sectionTitle: 'CE VEI PRIMI (LIVRARE IMEDIATĂ)',
    sectionSubtitle: 'Acces instantaneu la întregul ecosistem de conservare metabolică direct pe telefonul sau laptopul tău',
    items: [
      {
        icon: 'salad',
        title: '✅ 200 DE COMBINAȚII DE SALATE ENZIMATICE ACTIVE',
        description: 'Cea mai mare bibliotecă de rețete metabolice din România. Opțiuni Detox, Sănătate, Fitness și de Înaltă Sațietate. Doar prepari, pui în straturi și arzi grăsimea.',
        badge: 'Bibliotecă Completă',
      },
      {
        icon: 'book',
        title: '📦 GHIDUL SALATEI PERFECTE (Metoda Anti-Oxidare a Salatei Moarte)',
        description: 'Cum să prepari legumele în ordinea biologică corectă? Îți dau harta exactă pentru a opri descompunerea și a bloca oxigenarea celulară care murește legumele și îți încetinește digestia.',
        badge: 'Metodă Brevetată',
      },
      {
        icon: 'platform',
        title: '📲 PLATFORMA VIP (Acces Imediat)',
        description: 'Acces instant de pe telefon, tabletă sau calculator. Înveți direct din bucătăria ta, când vrei, pentru totdeauna.',
        badge: 'Multi-Device',
      },
      {
        icon: 'infinity',
        title: '♾️ ACCES PE VIAȚĂ + ACTUALIZĂRI GRATUITE',
        description: 'Plătești o singură dată și primești noi combinații și rețete de sosuri lipolitice în fiecare lună, fără să mai plătești vreun ban în plus.',
        badge: 'Fără Abonamente',
      },
    ],
    ctaButton: 'ELIBEREAZĂ ACCESUL MEU ACUM',
  },

  bonuses: {
    sectionBadge: '🎁 CADOURI EXCLUSIVE PENTRU ACȚIUNE RAPIDĂ',
    sectionTitle: 'BONURI EXPLOZIVE (DOAR ASTĂZI)',
    sectionSubtitle: 'Dacă comanzi astăzi, primești gratuit aceste 4 ghiduri practice evaluate la 50.60 € (249 RON)',
    saveBadge: 'ECONOMISEȘTI 249 RON DOAR ÎN BONURI',
    bonusNotice: 'Toate cele 4 bonusuri sunt adăugate automat în contul tău la Planul Complet',
    list: [
      {
        id: 1,
        badge: 'BÔNUS 1',
        title: '🥗 BÔNUS 1: SOSURILE LIPOLITICE SECRETE',
        description: '50 de rețete de sosuri speciale cremoase care transformă orice frunză banală într-o masă gourmet delicioasă, care îți oprește pofta de dulce instantaneu prin activarea hormonului sațietății (GLP-1).',
        normalPriceEur: '19.90 €',
        normalPriceRon: '99 RON',
        iconName: 'sparkles',
      },
      {
        id: 2,
        badge: 'BÔNUS 2',
        title: '📅 BÔNUS 2: CRONOGRAMA DETOX "RESET 7 ZILE"',
        description: 'Ghidul pas cu pas pentru a desumfla abdomenul și a curăța ficatul de toxine în prima săptămână, folosind doar ingrediente simple din Kaufland, Lidl sau Mega Image.',
        normalPriceEur: '9.90 €',
        normalPriceRon: '49 RON',
        iconName: 'calendar',
      },
      {
        id: 3,
        badge: 'BÔNUS 3',
        title: '🛒 BÔNUS 3: CALCULATORUL DE ECONOMII PENTRU SUPERMARKET',
        description: 'O metodă matematică simplă pentru a-ți planifica cumpărăturile săptămânale. Economisește până la 150 RON pe săptămână eliminând risipa de alimente murchie aruncate la gunoi.',
        normalPriceEur: '7.90 €',
        normalPriceRon: '39 RON',
        iconName: 'calculator',
      },
      {
        id: 4,
        badge: 'BÔNUS 4',
        title: '🏷️ BÔNUS 4: GHIDUL DE ORGANIZARE SĂPTĂMÂNALĂ "ZERO FRICȚIUNE"',
        description: 'Cum să pregătești salatele pentru toată săptămâna în doar 30 de minute duminica, salvând timp prețios în zilele aglomerate de muncă.',
        normalPriceEur: '12.90 €',
        normalPriceRon: '64 RON',
        iconName: 'clock',
      },
    ] as BonusItem[],
    ctaButton: 'VREAU TOATE ACESTE BONURI',
    freeLabel: 'GRATUIT ASTĂZI',
    valueLabel: 'Valoare normală:',
  },

  recipes: {
    sectionBadge: '🌱 STRUCTURA REȚETELOR ȘI PROTOCOLUL',
    sectionTitle: 'COMBINAȚIILE CARE ÎȚI VOR ACTIVA ARDEREA GRĂSIMILOR',
    sectionSubtitle: 'Fiecare combinație este calibrată bio-chimic pentru a genera sațietate profundă și absorbție maximă a nutrienților.',
    items: [
      {
        id: '1',
        icon: '🥑',
        title: 'Salate de Înaltă Sațietate (Anti-Compulsiune)',
        description: 'Combinații bogate în grăsimi sănătoase și fibre active care trimit semnale instantanee de plinătate creierului tău. Pentru a mânca bine fără să numeri calorii.',
        tag: 'Control Foame & GLP-1',
      },
      {
        id: '2',
        icon: '🍋',
        title: 'Combinații Detox Enzimatice Active',
        description: 'Rețete speciale care folosesc fitonutrienți din legume verzi pentru a curăța sistemul digestiv și a stimula metabolismul adormit.',
        tag: 'Detox Ficat & Colon',
      },
      {
        id: '3',
        icon: '💪',
        title: 'Salate Proteice de Construcție și Energie',
        description: 'Combinații echilibrate pentru prânzuri rapide care îți oferă energie curată pentru întreaga zi, fără acea somnolență de după-amiază.',
        tag: 'Energie Fără Căderi',
      },
      {
        id: '4',
        icon: '🥗',
        title: 'Sosuri Termogenice de Activare',
        description: 'Sosuri rapide preparate acasă care acționează ca un catalizator metabolic, accelerând descompunerea grăsimilor datorită enzimelor active.',
        tag: 'Catalizator Metabolic',
      },
      {
        id: '5',
        icon: '🥒',
        title: 'Combinații Hipocalorice de Volum Mare',
        description: 'Farfurii uriașe pe care le poți mânca fără vinovăție. Volum masiv, calorii minime și nutriție maximă.',
        tag: 'Volum Maxim / Zero Vinovăție',
      },
      {
        id: '6',
        icon: '🍅',
        title: 'Salate Rapide "Gata în 5 minute"',
        description: 'Combinații ultra-practice cu ingrediente pe care le ai deja în frigider, ideale pentru cinele târzii când ești obosit.',
        tag: 'Expres 5 Minute',
      },
      {
        id: '7',
        icon: '🏺',
        title: 'Metoda de Montare în Straturi Biologice',
        description: 'Tehnica de așezare a ingredientelor în borcan de sticlă care izolează aerul și menține frunzele proaspete și neatinse de aciditatea sosului.',
        tag: 'Prospețime 7 Zile',
      },
      {
        id: '8',
        icon: '🥦',
        title: 'Salate de Echilibru Intestinal',
        description: 'Rețete specifice cu prebiotice naturale care combat instantaneu balonarea și reglează tranzitul intestinal în doar 48 de ore.',
        tag: 'Antibalorare 48h',
      },
      {
        id: '9',
        icon: '🧼',
        title: 'Protocolul de Igienizare și Scurgere Rapidă',
        description: 'Secretul crucial pentru a elimina bacteriile fără a lăsa frunzele umede (umezeala este motivul principal pentru care salatele putrezesc în gelă).',
        tag: 'Zero Mucegai / Zero Umezeală',
      },
      {
        id: '10',
        icon: '💡',
        title: 'ȘI MULTE ALTELE...',
        description: 'Noi rețete, ghiduri și combinații sunt adăugate constant în zona de membri pe viață!',
        tag: 'Actualizări Lunare Gratuite',
      },
    ] as RecipeCategory[],
    specialNotice: '⚠️ În plus, vei învăța cum să aplici „Protocolul de Conservare Enzimatică” pe orice legumă pe care o ai deja în frigider, transformând-o într-o sursă de energie vie în doar 3 minute.',
    ctaButton: 'VREAU SĂ ÎNVĂȚ TOATE ACESTEA',
  },

  socialProof: {
    audioTag: 'CLIC PENTRU A ASCULTA CU AUDIO',
    sectionTitle: 'CE SPUN CEI CARE DEJA REUȘESC',
    sectionSubtitle: 'Peste 1.480 de români și-au resetat metabolismul și au eliminat risipa din bucătărie',
    swipeNotice: '← Trageți în lateral pentru a vedea mai multe depoziții →',
    verifiedBuyer: 'Cumpărător Verificat',
    testimonials: [
      {
        id: 1,
        name: 'Ioana S.',
        age: 42,
        city: 'Cluj-Napoca',
        text: 'Am încercat zeci de diete în care mâncam frunze mizerabile și murchie care îmi făceau foame după o oră. Cu acest Protocol, pregătesc duminică 5 borcane în jumătate de oră. Vineri salata mea este la fel de proaspătă ca duminică! Am slăbit 6 kg în 20 de zile fără să sufăr deloc.',
        audioDuration: '0:42',
        rating: 5,
        highlight: '„Am slăbit 6 kg în 20 de zile fără să sufăr deloc”',
      },
      {
        id: 2,
        name: 'Mihai T.',
        age: 35,
        city: 'București',
        text: 'Aruncam zeci de lei în fiecare săptămână pe salate la pungă care se stricau în două zile în frigider. Bânusul de economii m-a ajutat să reduc risipa la zero. Sosurile acelea speciale sunt geniale, nu pot să cred că mănânc salate cu atâta plăcere.',
        audioDuration: '0:38',
        rating: 5,
        highlight: '„Am redus risipa la zero și mănânc salate cu atâta plăcere”',
      },
      {
        id: 3,
        name: 'Elena D.',
        age: 29,
        city: 'Timișoara',
        text: 'Problema mea era balonarea. Cu Salatele de Echilibru Intestinal, burtica mea s-a aplatizat în primele 3 zile. Este cel mai bun ghid pe care l-am cumpărat vreodată!',
        audioDuration: '0:51',
        rating: 5,
        highlight: '„Burtica mea s-a aplatizat în primele 3 zile”',
      },
    ] as TestimonialItem[],
  },

  summaryPillars: {
    title: '📝 Nu ai timp să citești tot? Aici este un rezumat rapid pentru tine:',
    subtitle: 'Dacă vrei să scapi de dietele fără gust, să economisești bani la supermarket și să vezi abdomenul cum se desumflă fără să suferi de foame, iată ce primești astăzi:',
    pillars: [
      {
        title: '200+ Rețete de Salate Metabolice:',
        desc: 'Combinații de înaltă sațietate gata în câteva minute.'
      },
      {
        title: 'Protocolul Anti-Oxidare:',
        desc: 'Tehnica de montare în straturi care păstrează salatele proaspete și crocante timp de 7 zile în frigider.'
      },
      {
        title: '50 de Sosuri Lipolitice de Activare:',
        desc: 'Sosurile secrete care transformă orice frunză banală într-o masă gourmet și opresc pofta de dulce instant.'
      },
      {
        title: 'Ghidurile de Economie și Organizare:',
        desc: 'Pregătește mâncarea pentru toată săptămâna în doar 30 de minute duminica și economisește până la 150 RON pe săptămână.'
      }
    ],
    ctaText: 'VEZI OFERTELE SPECIALE MAI JOS ↓'
  },

  pricing: {
    sectionBadge: '💎 OFERTĂ CU TIMP LIMITAT',
    sectionTitle: 'Ofertă Specială: Alege planul tău de deblocare metabolică astăzi.',
    sectionSubtitle: 'Preț unic de lansare. Fără taxe ascunse sau abonamente recurente.',
    recommendedBadge: 'CEL MAI RECOMANDAT • ECONOMISEȘTI 79%',
    savingsPrefix: 'Economisești',
    todayText: 'astăzi',
    totalValueLabel: 'VALOARE TOTALĂ:',
    onlyForLabel: 'PRIN DOAR:',
    oneTimePayment: 'PLATĂ UNICĂ',
    plans: [
      {
        id: 'basic',
        name: 'OPȚIUNEA 1: PLANUL DE BAZĂ',
        tagline: 'Ideal pentru cei care vor doar rețetele esențiale pentru a începe.',
        priceEur: '7,90 €',
        priceRon: '39 RON',
        originalPriceEur: '19.90 €',
        originalPriceRon: '99 RON',
        isPopular: false,
        features: [
          { included: true, text: 'Manualul Principal: 200+ Rețete de Salate Active' },
          { included: true, text: 'Ghidul de Conservare Enzimatică (Salate Proaspete 7 Zile)' },
          { included: false, text: 'FĂRĂ cele 50 de Sosuri Lipolitice de Activare' },
          { included: false, text: 'FĂRĂ Bonusurile de organizare și economisire' },
          { included: true, text: 'Acces pe Viață' },
        ],
        ctaText: 'ALEGE PLANUL DE BAZĂ →',
      },
      {
        id: 'complete',
        name: 'OPȚIUNEA 2: PLANUL COMPLET METABOLIC',
        tagline: 'Aparatul complet pentru a slăbi cu plăcere, fără înfometare și fără risipă.',
        priceEur: '14,90 €',
        priceRon: '74 RON',
        originalPriceEur: '69.90 €',
        originalPriceRon: '347 RON',
        isPopular: true,
        features: [
          { included: true, text: 'Manualul Principal: 200+ Rețete de Salate Active' },
          { included: true, text: 'Ghidul de Conservare Enzimatică (Salate Proaspete 7 Zile)' },
          { included: true, text: 'Ghidul Sosurilor Lipolitice de Activare (50 Rețete)' },
          { included: true, text: 'Ghidul de Cumpărături Inteligente pentru Supermarket' },
          { included: true, text: 'Calculatorul de Economii Săptămânale' },
          { included: true, text: 'Cronograma Detox "Reset 7 Zile"' },
          { included: true, text: 'Ghidul de Organizare Săptămânală "Zero Fricțiune"' },
          { included: true, text: '🎁 Toate bônusurile de acțiune rapidă incluse' },
          { included: true, text: 'Acces pe Viață și Actualizări Gratuite' },
        ],
        ctaText: 'REZERVĂ LOCUL COMPLET ACUM →',
      },
    ] as PricingPlan[],
    paymentTrust: '',
    accessTrust: 'Plată unică · Acces Imediat',
  },

  guarantee: {
    title: 'GARANȚIA „REZULTAT SAU BANII ÎNAPOI ÎN 15 ZILE”',
    bodyText: 'Am atâta încredere în eficacitatea acestui metodă încât îți ofer 15 zile de testare complet gratuită. Dacă descarci ghidurile, prepari salatele conform protocolului și simți că nu îți reduc foamea, nu își mențin prospețimea timp de 7 zile sau că nu vei economisi bani din prima săptămână, trimite-ne un e-mail simplu. Îți returnăm fiecare leu imediat, fără întrebări și fără birocrație. Riscul este 100% al meu, nu al tău.',
    secureTitle: 'ACHIZIȚIE 100% SECURIZATĂ',
    bullets: [
      'Garanție de rambursare 100% fără bătăi de cap',
      'Criptare SSL 256-bit pentru plăți securizate',
      'Descărcare instantanee a materialelor pe adresa ta de email',
    ]
  },

  faq: {
    title: 'Încă ai dubii?',
    rationalization: 'Dacă mănânci O SINGURĂ SALATĂ preparată acasă în loc să comanzi mâncare în oraș sau să cumperi fast-food o singură dată pe săptămână, ai recuperat întreaga investiție în acest ghid și deja ești pe profit de bani și de sănătate.',
    items: [
      {
        question: 'Cum voi primi accesul după efectuarea plății?',
        answer: 'Imediat după confirmarea plății, vei primi pe e-mail un link direct de acces la Platforma VIP și toate ghidurile în format digital (PDF de înaltă rezoluție, optimizat pentru telefon, tabletă sau imprimare). Îți poți salva fișierele pentru totdeauna.',
      },
      {
        question: 'Găsesc ingredientele necesare în magazinele din România?',
        answer: 'Absolut DA! Toate rețetele au fost create special pentru supermarketurile din România (Kaufland, Lidl, Mega Image, Carrefour, Penny, piețe locale). Nu ai nevoie de ingrediente exotice scumpe sau greu de găsit.',
      },
      {
        question: 'Cât timp îmi ia să pregătesc o salată?',
        answer: 'Cu metoda borcanelor în straturi biologice și ghidul de organizare duminicală, pregătești toate salatele pentru 5-7 zile în doar 30 de minute. Dacă vrei să faci o salată proaspătă pe loc, rețetele expres durează între 3 și 5 minute.',
      },
      {
        question: 'Ce se întâmplă dacă metoda nu funcționează pentru mine?',
        answer: 'Ești acoperit de Garanția Noastră Blindată de 15 Zile. Dacă nu ești complet încântat(ă) de rezultate, prospețimea salatelor sau economiile făcute, ne trimiți un e-mail simplu și primești toți banii înapoi fără întrebări.',
      },
      {
        question: 'Plata este sigură și se face o singură dată?',
        answer: 'Da, plata se face o singură dată prin procesatori securizați la nivel bancar (Card, Apple Pay, Google Pay). Nu există niciun fel de abonament recurent sau cost ascuns.',
      },
    ] as FaqItem[],
    ctaButton: 'VREAU SĂ ÎNCEP ACUM',
    whatsappButton: 'ASISTENȚĂ WHATSAPP',
    footerCopyright: '© PROTOCOLUL DE CONSERVARE ENZIMATICĂ. Toate Drepturile Rezervate.',
  },

  stickyBar: {
    discountBadge: 'Reducere 79%',
    startingFrom: 'De la',
    oneTimeText: 'Plată unică • 4 Bonusuri',
    ctaText: 'REZERVĂ ACUM',
  },

  checkoutModal: {
    secureTitle: 'FINALIZARE COMANDĂ SECURIZATĂ',
    subHeader: 'Acces digital instantaneu pe e-mail imediat după plată',
    successTitle: 'Felicitări, comanda ta este confirmată! 🎉',
    successText: 'Am trimis linkul de acces imediat și ghidurile PDF la adresa',
    nextStepsTitle: 'Ce urmează acum:',
    nextSteps: [
      '1. Verifică Inbox-ul sau dosarul Spam/Promotions',
      '2. Deschide Ghidul de Start Rapid și pregătește lista de cumpărături',
      '3. Salvează fișierele pe telefon sau tabletă'
    ],
    closeButton: 'Închide și Mergi la Lectură',
    planBasicTab: 'Plan de Bază (39 RON)',
    planCompleteTab: 'Plan Complet (74 RON) ⭐',
    savingsLabel: 'Economisești',
    bonusIncludedText: 'Include toate cele 4 Bonusuri Gratuite (evaluate la 249 RON)',
    nameLabel: 'Nume și Prenume *',
    namePlaceholder: 'ex: Maria Popescu',
    emailLabel: 'Adresă de Email (unde primești accesul) *',
    emailPlaceholder: 'ex: maria.popescu@gmail.com',
    phoneLabel: 'Număr de Telefon (pentru asistență SMS / WhatsApp)',
    phonePlaceholder: 'ex: 0722 000 000',
    paymentMethodLabel: 'Metodă de Plată Securizată',
    cardLabel: 'Card Bancar',
    payButtonPrefix: 'PLĂTEȘTE ÎN SIGURANȚĂ',
    guaranteeText: 'Garanție 15 Zile',
    sslText: 'Criptare SSL 256-bit',
  },

  whatsAppModal: {
    title: 'Asistență Directă WhatsApp',
    statusOnline: 'Echipa noastră este online acum',
    sentTitle: 'Se deschide conversația WhatsApp...',
    sentSub: 'Vei fi redirecționat către consultantul nostru specialist în nutriție metabolică.',
    introText: 'Ai întrebări despre rețete, livrare sau metode de plată? Scrie-ne și îți răspundem în mai puțin de 5 minute:',
    placeholder: 'Scrie întrebarea ta aici (ex: Cum funcționează descărcarea ghidului?)...',
    sendButton: 'Trimite Mesaj pe WhatsApp',
    guaranteeNote: 'Asistență confidențială în limba română',
  }
};

export const COPY_DATA_PT = {
  headerBanner: {
    urgentText: '🚨 OFERTA POR TEMPO LIMITADO PARA OS PRIMEIROS 50 COMPRADORES',
    countdownText: 'OFERTA ESPECIAL: Desconto de 79% + 4 Bônus Gratuitos',
    timerLabel: 'Expira em:',
  },
  hero: {
    badge: '🚨 Você não pode perder essa oportunidade! 🥗👇',
    headlineMain: 'PROTOCOLO DE PRESERVAÇÃO ENZIMÁTICA:',
    headlineSub: 'O MAIOR PACK DE RECEITAS E PREPARAÇÃO METABÓLICA DA ROMÊNIA (200+ COMBINAÇÕES ATIVAS)',
    storyText: 'Pare de tentar adivinhar o que funciona. Receba a máquina completa para destravar seu metabolismo e transformar vegetais banais em saladas de luxo de alta saciedade que somem do prato em minutos. Tudo mastigado: da lista de compras inteligente nos supermercados locais aos molhos lipolíticos de ativação.',
    ctaButton: 'QUERO REINSTALAR MINHA SAÚDE AGORA',
    vslNotice: '⚠️ Assista a este breve vídeo demonstrativo antes que o acesso seja encerrado',
    videoClickAudio: '🔊 Clique para ouvir com áudio',
    videoPlaying: 'Vídeo em reprodução...',
    stats: {
      recipesCount: '200+',
      recipesLabel: 'Receitas Ativas',
      satisfactionRate: '99.4%',
      satisfactionLabel: 'Satisfação',
      prepTime: '3-5 min',
      prepLabel: 'Preparo Rápido',
      freshness: '7 Dias',
      freshnessLabel: 'Frescor Garantido',
    }
  },

  painSection: {
    headline: '💔 Come saladas, mas não consegue emagrecer? Eis o porquê NÃO é sua culpa!',
    p1: 'Você já tentou comer "saudável", só para ver os vegetais comprados murcharem e estragarem em apenas 2 dias na geladeira? Ou pior: come um prato enorme de salada e, apenas uma hora depois, sente uma fome de leão e uma vontade incontrolável de doces?',
    truthBadge: 'A verdade que ninguém te conta:',
    p2: 'O problema não é a sua falta de vontade. O problema é a "Síndrome da Salada Morta". Quando você corta os vegetais do jeito tradicional, eles sofrem uma oxidação celular acelerada. Você come folhas biologicamente "mortas", sem enzimas ativas, que travam seu metabolismo e despertam sua fome.',
    solutionCallout: 'Com o Protocolo de Preservação Enzimática, você vai bloquear a oxidação e consumir vegetais com enzimas 100% ativas, mantendo tudo fresco por 7 dias!',
    ctaButton: 'QUERO ME LIVRAR DA SÍNDROME DA SALADA MORTA'
  },

  deliverables: {
    sectionTitle: 'O QUE VOCÊ VAI RECEBER (ENTREGA IMEDIATA)',
    sectionSubtitle: 'Acesso instantâneo a todo o ecossistema de preservação metabólica direto no seu celular ou computador',
    items: [
      {
        icon: 'salad',
        title: '✅ 200 COMBINAÇÕES DE SALADAS ENZIMÁTICAS ATIVAS',
        description: 'A maior biblioteca de receitas metabólicas da Romênia. Opções Detox, Saúde, Fitness e Alta Saciedade. É só preparar, colocar em camadas e queimar gordura.',
        badge: 'Biblioteca Completa',
      },
      {
        icon: 'book',
        title: '📦 GUIA DA SALADA PERFEITA (Método Anti-Oxidação da Salada Morta)',
        description: 'Como preparar os vegetais na ordem biológica correta? Eu te dou o mapa exato para interromper a decomposição e bloquear a oxidação celular (a "Síndrome da Salada Morta") que destrói os nutrientes e desacelera sua digestão.',
        badge: 'Método Exclusivo',
      },
      {
        icon: 'platform',
        title: '📲 PLATAFORMA VIP (Acesso Imediato)',
        description: 'Acesso por celular, tablet ou computador. Assista diretamente da sua cozinha, quando quiser, para sempre.',
        badge: 'Multi-Dispositivos',
      },
      {
        icon: 'infinity',
        title: '♾️ ACESSO VITALÍCIO + ATUALIZAÇÕES GRATUITAS',
        description: 'Você paga uma vez e recebe novas combinações e receitas de molhos lipolíticos todos os meses, sem pagar nem um centavo a mais.',
        badge: 'Sem Mensalidades',
      },
    ],
    ctaButton: 'LIBERAR MEU ACESSO AGORA',
  },

  bonuses: {
    sectionBadge: '🎁 PRESENTES EXCLUSIVOS PARA AÇÃO RÁPIDA',
    sectionTitle: 'BÔNUS EXPLOSIVOS (APENAS HOJE)',
    sectionSubtitle: 'Se você comprar hoje, recebe gratuitamente estes 4 guias práticos avaliados em 50.60 € (249 RON)',
    saveBadge: 'VOCÊ ECONOMIZA 249 RON SÓ EM BÔNUS',
    bonusNotice: 'Todos os 4 bônus são adicionados automaticamente na sua conta no Plano Completo',
    list: [
      {
        id: 1,
        badge: 'BÔNUS 1',
        title: '🥗 BÔNUS 1: OS MOLHOS LIPOLÍTICOS SECRETOS',
        description: '50 receitas de molhos especiais cremosos que transformam qualquer folha sem graça em uma refeição gourmet deliciosa que desliga sua vontade de doce instantaneamente pela ativação do hormônio da saciedade (GLP-1).',
        normalPriceEur: '19.90 €',
        normalPriceRon: '99 RON',
        iconName: 'sparkles',
      },
      {
        id: 2,
        badge: 'BÔNUS 2',
        title: '📅 BÔNUS 2: CRONOGRAMA DETOX "RESET 7 DIAS"',
        description: 'O passo a passo exato para desinchar o abdômen e limpar o fígado de toxinas na primeira semana usando apenas ingredientes simples do Kaufland, Lidl ou Mega Image.',
        normalPriceEur: '9.90 €',
        normalPriceRon: '49 RON',
        iconName: 'calendar',
      },
      {
        id: 3,
        badge: 'BÔNUS 3',
        title: '🛒 BÔNUS 3: CALCULADORA DE ECONOMIA PARA SUPERMERCADO',
        description: 'Uma ferramenta matemática simples para planejar suas compras semanais. Economize até 150 RON por semana eliminando o desperdício de vegetais murchos jogados no lixo.',
        normalPriceEur: '7.90 €',
        normalPriceRon: '39 RON',
        iconName: 'calculator',
      },
      {
        id: 4,
        badge: 'BÔNUS 4',
        title: '🏷️ BÔNUS 4: GUIA DE ORGANIZAÇÃO SEMANAL "ZERO FRICÇÃO"',
        description: 'Como planejar e preparar as saladas de uma semana inteira em apenas 30 minutos no domingo, eliminando a fricção e economizando horas na cozinha nos dias de correria.',
        normalPriceEur: '12.90 €',
        normalPriceRon: '64 RON',
        iconName: 'clock',
      },
    ] as BonusItem[],
    ctaButton: 'QUERO TODOS OS BÔNUS',
    freeLabel: 'GRÁTIS HOJE',
    valueLabel: 'Valor normal:',
  },

  recipes: {
    sectionBadge: '🌱 ESTRUTURA DAS RECEITAS E PROTOCOLO',
    sectionTitle: 'AS COMBINAÇÕES QUE VÃO ATIVAR SUA QUEIMA DE GORDURA',
    sectionSubtitle: 'Cada combinação é calibrada bioquimicamente para gerar saciedade profunda e absorção máxima de nutrientes.',
    items: [
      {
        id: '1',
        icon: '🥑',
        title: 'Saladas de Alta Saciedade (Anti-Compulsão)',
        description: 'Combinações ricas em gorduras boas e fibras ativas que enviam sinais instantâneos de saciedade ao seu cérebro. Para comer bem sem contar calorias.',
        tag: 'Controle de Fome & GLP-1',
      },
      {
        id: '2',
        icon: '🍋',
        title: 'Combinações Detox Enzimáticas Ativas',
        description: 'Receitas especiais usando fitonutrientes de folhas verdes para limpar o sistema digestivo e estimular o metabolismo adormecido.',
        tag: 'Detox Fígado & Cólon',
      },
      {
        id: '3',
        icon: '💪',
        title: 'Saladas Proteicas de Construção e Energia',
        description: 'Combinações equilibradas para almoços rápidos que oferecem energia limpa para o dia todo, sem aquela sonolência pós-almoço.',
        tag: 'Energia Sem Quedas',
      },
      {
        id: '4',
        icon: '🥗',
        title: 'Molhos Termogênicos de Ativação',
        description: 'Molhos caseiros rápidos que atuam como acelerador metabólico, potencializando a queima de gordura através de enzimas ativas.',
        tag: 'Catalisador Metabólico',
      },
      {
        id: '5',
        icon: '🥒',
        title: 'Combinações Hipocalóricas de Alto Volume',
        description: 'Pratos enormes que você pode comer sem culpa. Volume maciço, calorias mínimas e nutrição máxima.',
        tag: 'Volume Máximo / Zero Culpa',
      },
      {
        id: '6',
        icon: '🍅',
        title: 'Saladas Rápidas "Prontas em 5 Minutos"',
        description: 'Combinações ultra-práticas com ingredientes comuns que você já tem na geladeira, ideais para jantares tardios.',
        tag: 'Express 5 Minutos',
      },
      {
        id: '7',
        icon: '🏺',
        title: 'Método de Montagem em Camadas Biológicas',
        description: 'Técnica de disposição dos ingredientes no pote de vidro que isola o ar e mantém as folhas frescas sem contato precoce com a acidez do molho.',
        tag: 'Frescor por 7 Dias',
      },
      {
        id: '8',
        icon: '🥦',
        title: 'Saladas de Equilíbrio Intestinal',
        description: 'Receitas específicas com prebióticos naturais que combatem o inchaço e regulam o trânsito intestinal em 48 horas.',
        tag: 'Anti-Inchaço 48h',
      },
      {
        id: '9',
        icon: '🧼',
        title: 'Protocolo de Higienização e Secagem Rápida',
        description: 'O segredo crucial para eliminar bactérias sem deixar umidade nas folhas (a umidade é o motivo número 1 de as folhas apodrecerem na geladeira).',
        tag: 'Zero Mofo / Zero Umidade',
      },
      {
        id: '10',
        icon: '💡',
        title: 'E MUITO MAIS...',
        description: 'Novas receitas, guias e combinações adicionadas constantemente na área de membros vitalícia!',
        tag: 'Atualizações Mensais Grátis',
      },
    ] as RecipeCategory[],
    specialNotice: '⚠️ Além disso, você vai aprender a aplicar o "Protocolo de Preservação Enzimática" em qualquer vegetal comum que já tem na geladeira, transformando-o em uma refeição gourmet em 3 minutos.',
    ctaButton: 'QUERO APRENDER TUDO ISSO',
  },

  socialProof: {
    audioTag: 'CLIQUE PARA OUVIR COM ÁUDIO',
    sectionTitle: 'O QUE DIZEM AS PESSOAS QUE JÁ ESTÃO TENDO RESULTADOS',
    sectionSubtitle: 'Mais de 1.480 pessoas já destravaram o metabolismo e eliminaram o desperdício na cozinha',
    swipeNotice: '← Arraste para o lado para ver mais depoimentos →',
    verifiedBuyer: 'Comprador Verificado',
    testimonials: [
      {
        id: 1,
        name: 'Ioana S.',
        age: 42,
        city: 'Cluj-Napoca',
        text: 'Tentei dezenas de dietas comendo folhas murchas que me davam fome depois de uma hora. Com este Protocolo, preparo no domingo 5 potes em meia hora. Na sexta-feira minha salada está tão fresca quanto no domingo! Emagreci 6 kg em 20 dias sem sofrer nada.',
        audioDuration: '0:42',
        rating: 5,
        highlight: '„Emagreci 6 kg em 20 dias sem sofrer nada”',
      },
      {
        id: 2,
        name: 'Mihai T.',
        age: 35,
        city: 'Bucareste',
        text: 'Jogava fora dezenas de reais toda semana em saladas de saquinho que estragavam em 2 dias na geladeira. O bônus de economia me ajudou a zerar o desperdício. Esses molhos especiais são geniais, não acredito que estou comendo salada com tanto prazer.',
        audioDuration: '0:38',
        rating: 5,
        highlight: '„Zerei o desperdício e como salada com tanto prazer”',
      },
      {
        id: 3,
        name: 'Elena D.',
        age: 29,
        city: 'Timișoara',
        text: 'Meu problema era inchaço. Com as Saladas de Equilíbrio Intestinal, minha barriga desinchou nos primeiros 3 dias. É o melhor guia que já comprei!',
        audioDuration: '0:51',
        rating: 5,
        highlight: '„Minha barriga desinchou nos primeiros 3 dias”',
      },
    ] as TestimonialItem[],
  },

  summaryPillars: {
    title: '📝 Não tem tempo de ler tudo? Aqui está um resumo rápido para você:',
    subtitle: 'Se você quer fugir de dietas sem graça, economizar dinheiro no supermercado e ver a barriga desinchar sem passar fome, eis o que você recebe hoje:',
    pillars: [
      {
        title: '200+ Receitas de Saladas Metabólicas:',
        desc: 'Combinações de alta saciedade prontas em minutos.'
      },
      {
        title: 'Protocolo Anti-Oxidação:',
        desc: 'A técnica de montagem em camadas que mantém as saladas frescas e crocantes por 7 dias na geladeira.'
      },
      {
        title: '50 Molhos Lipolíticos de Ativação:',
        desc: 'Molhos secretos que transformam qualquer folha sem graça em uma refeição gourmet e desligam a vontade de doce instantaneamente.'
      },
      {
        title: 'Guias de Economia e Organização:',
        desc: 'Prepare as refeições da semana inteira em apenas 30 minutos no domingo e economize até 150 RON por semana.'
      }
    ],
    ctaText: 'VER AS OFERTAS ESPECIAIS ABAIXO ↓'
  },

  pricing: {
    sectionBadge: '💎 OFERTA POR TEMPO LIMITADO',
    sectionTitle: 'Oferta Especial: Escolha seu plano de destravamento metabólico hoje.',
    sectionSubtitle: 'Preço único de lançamento. Sem taxas ocultas nem assinaturas recorrentes.',
    recommendedBadge: 'MAIS RECOMENDADO • ECONOMIZE 79%',
    savingsPrefix: 'Economia de',
    todayText: 'hoje',
    totalValueLabel: 'VALOR TOTAL:',
    onlyForLabel: 'POR APENAS:',
    oneTimePayment: 'PAGAMENTO ÚNICO',
    plans: [
      {
        id: 'basic',
        name: 'OPÇÃO 1: PLANO BÁSICO',
        tagline: 'Ideal para quem deseja apenas as receitas essenciais para começar.',
        priceEur: '7,90 €',
        priceRon: '39 RON',
        originalPriceEur: '19.90 €',
        originalPriceRon: '99 RON',
        isPopular: false,
        features: [
          { included: true, text: 'Manual Principal: 200+ Receitas de Saladas Ativas' },
          { included: true, text: 'Guia de Preservação Enzimática (Saladas Frescas 7 Dias)' },
          { included: false, text: 'SEM os 50 Molhos Lipolíticos de Ativação' },
          { included: false, text: 'SEM os Bônus de organização e economia' },
          { included: true, text: 'Acesso Vitalício' },
        ],
        ctaText: 'ESCOLHER PLANO BÁSICO →',
      },
      {
        id: 'complete',
        name: 'OPÇÃO 2: PLANO COMPLETO METABÓLICO',
        tagline: 'A máquina completa para emagrecer com prazer, sem fome e sem desperdício.',
        priceEur: '14,90 €',
        priceRon: '74 RON',
        originalPriceEur: '69.90 €',
        originalPriceRon: '347 RON',
        isPopular: true,
        features: [
          { included: true, text: 'Manual Principal: 200+ Receitas de Saladas Ativas' },
          { included: true, text: 'Guia de Preservação Enzimática (Saladas Frescas 7 Dias)' },
          { included: true, text: 'Guia de Molhos Lipolíticos de Ativação (50 Receitas)' },
          { included: true, text: 'Guia de Compras Inteligentes no Supermercado' },
          { included: true, text: 'Calculadora de Economia Semanal' },
          { included: true, text: 'Cronograma Detox "Reset 7 Dias"' },
          { included: true, text: 'Guia de Organização Semanal "Zero Fricção"' },
          { included: true, text: '🎁 Todos os 4 bônus de ação rápida inclusos' },
          { included: true, text: 'Acesso Vitalício e Atualizações Gratuitas' },
        ],
        ctaText: 'GARANTIR VAGA COMPLETA AGORA →',
      },
    ] as PricingPlan[],
    paymentTrust: '',
    accessTrust: 'Pagamento Único · Acesso Imediato',
  },

  guarantee: {
    title: 'GARANTIA „RESULTADO OU SEU DINHEIRO DE VOLTA EM 15 DIAS”',
    bodyText: 'Eu confio tanto na eficácia deste método que te dou 15 dias de teste completo gratuito. Se você baixar os guias, preparar as saladas conforme o protocolo e sentir que elas não reduzem sua fome, não duram 7 dias frescas ou que você não economizou dinheiro já na primeira semana, basta nos enviar um e-mail simples. Devolvemos cada centavo imediatamente, sem perguntas e sem burocracia. O risco é 100% meu, não seu.',
    secureTitle: 'COMPRA 100% SEGURA',
    bullets: [
      'Garantia de reembolso de 100% sem complicações',
      'Criptografia SSL 256-bit para transações seguras',
      'Download instantâneo dos materiais no seu e-mail',
    ]
  },

  faq: {
    title: 'Ainda com dúvida?',
    rationalization: 'Se você comer UMA ÚNICA SALADA preparada em casa em vez de pedir delivery ou comer fast-food uma única vez na semana, você já recuperou todo o investimento neste guia e já está no lucro de dinheiro e de saúde.',
    items: [
      {
        question: 'Como vou receber o acesso após o pagamento?',
        answer: 'Imediatamente após a confirmação do pagamento, você receberá por e-mail um link direto de acesso à Plataforma VIP com todos os guias em formato digital (PDF de alta resolução, otimizado para celular, tablet ou impressão). Você pode salvar os arquivos para sempre.',
      },
      {
        question: 'Encontro os ingredientes necessários facilmente?',
        answer: 'Com certeza SIM! Todas as receitas foram criadas com ingredientes simples e acessíveis disponíveis em qualquer supermercado comum ou feira. Você não precisa de ingredientes caros ou exóticos.',
      },
      {
        question: 'Quanto tempo leva para preparar uma salada?',
        answer: 'Com o método dos potes em camadas biológicas e o guia de organização de domingo, você prepara todas as saladas para 5 a 7 dias em apenas 30 minutos. Se preferir fazer na hora, as receitas express levam de 3 a 5 minutos.',
      },
      {
        question: 'E se o método não funcionar para mim?',
        answer: 'Você está protegido pela nossa Garantia Blindada de 15 Dias. Se você não ficar 100% encantado(a) com os resultados, o frescor das saladas ou a economia gerada, envie um e-mail simples e você receberá todo o seu dinheiro de volta sem perguntas.',
      },
      {
        question: 'O pagamento é seguro e é cobrado apenas uma vez?',
        answer: 'Sim, o pagamento é único através de processadores de segurança bancária (Cartão, Apple Pay, Google Pay). Não existe nenhum tipo de mensalidade recorrente nem cobrança escondida.',
      },
    ] as FaqItem[],
    ctaButton: 'QUERO COMEÇAR AGORA',
    whatsappButton: 'SUPORTE WHATSAPP',
    footerCopyright: '© PROTOCOLO DE PRESERVAÇÃO ENZIMÁTICA. Todos os Direitos Reservados.',
  },

  stickyBar: {
    discountBadge: 'Desconto 79%',
    startingFrom: 'A partir de',
    oneTimeText: 'Pagamento único • 4 Bônus',
    ctaText: 'RESERVAR AGORA',
  },

  checkoutModal: {
    secureTitle: 'FINALIZAÇÃO DE PEDIDO SEGURA',
    subHeader: 'Acesso digital instantâneo no e-mail logo após o pagamento',
    successTitle: 'Parabéns, seu pedido está confirmado! 🎉',
    successText: 'Enviamos o link de acesso imediato e os guias em PDF para o e-mail',
    nextStepsTitle: 'O que fazer agora:',
    nextSteps: [
      '1. Verifique sua Caixa de Entrada ou pasta de Spam/Promoções',
      '2. Abra o Guia de Início Rápido e prepare sua lista de compras',
      '3. Salve os arquivos no seu celular ou computador'
    ],
    closeButton: 'Fechar e Acessar os Guias',
    planBasicTab: 'Plano Básico (39 RON)',
    planCompleteTab: 'Plano Completo (74 RON) ⭐',
    savingsLabel: 'Você economiza',
    bonusIncludedText: 'Inclui todos os 4 Bônus Gratuitos (avaliados em 249 RON)',
    nameLabel: 'Nome e Sobrenome *',
    namePlaceholder: 'ex: Maria Silva',
    emailLabel: 'Endereço de E-mail (onde receberá o acesso) *',
    emailPlaceholder: 'ex: maria.silva@gmail.com',
    phoneLabel: 'Número de WhatsApp (para suporte rápido)',
    phonePlaceholder: 'ex: (11) 99999-9999',
    paymentMethodLabel: 'Método de Pagamento Seguro',
    cardLabel: 'Cartão de Crédito',
    payButtonPrefix: 'PAGAR COM SEGURANÇA',
    guaranteeText: 'Garantia 15 Dias',
    sslText: 'Criptografia SSL 256-bit',
  },

  whatsAppModal: {
    title: 'Suporte Direto WhatsApp',
    statusOnline: 'Nossa equipe está online agora',
    sentTitle: 'Abrindo a conversa no WhatsApp...',
    sentSub: 'Você será redirecionado para o nosso consultor especialista.',
    introText: 'Tem dúvidas sobre as receitas, entrega ou formas de pagamento? Escreva para nós e responderemos em menos de 5 minutos:',
    placeholder: 'Escreva sua dúvida aqui (ex: Como funciona o download dos guias?)...',
    sendButton: 'Enviar Mensagem no WhatsApp',
    guaranteeNote: 'Atendimento confidencial e humanizado',
  }
};

export const COPY_DATA = COPY_DATA_RO;
