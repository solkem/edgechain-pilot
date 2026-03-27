const SECTION_TOTAL = 3;
const SECTION_FOUNDATIONS = 1;
const SECTION_WALLET = 2;
const SECTION_SENSOR = 3;
const STORAGE_KEY = 'edgechain-learning-flow-v3';
const KUTSAGA_CITATION =
  'Source: Kutsaga (Tobacco Research Board), Field Services Division - curing, irrigation, and soil pH guidance for tobacco.';

function createDefaultSimState() {
  return {
    day: 1,
    field: {
      soilMoisture: 44,
      airTemp: 27,
      humidity: 65,
      rainMm: 0,
      irrigationMm: 0,
    },
    curing: {
      stageIndex: 0,
      stageName: 'Idle',
      tempC: 30,
      humidity: 85,
    },
    badgeEarned: false,
  };
}

const OVERVIEW_TOPICS = [
  {
    id: 'edgechain_intro',
    label: 'EdgeChain',
    kicker: 'Topic 1',
    title: 'EdgeChain = Edge AI + Blockchain',
    summary: 'EdgeChain inobatanidza intelligence yepadhuze nemurimi ne trust verification lane.',
    points: [
      'Edge part: learning inoitika local padhuze nemurimi.',
      'Chain part: shared ledger inoita records zvive trusted.',
      'Zvese zviviri pamwe chete zvinoita privacy + proof + reward.',
    ],
    takeaway: 'Takeaway: EdgeChain is the bridge between smart farming and trusted value.',
    visual: {
      type: 'grid',
      items: [
        {
          title: 'EdgeChain',
          sub: 'System yese',
          callup: 'EdgeChain yakabva pakubatanidza Edge AI ne Blockchain.',
        },
        {
          title: 'Edge AI',
          sub: 'Local intelligence',
          callup:
            'Edge AI inodzidzisa model padhuze nemurimi; federated learning pano zvinoreva kuti raw farm data haribudi, zvinongofamba model updates.',
        },
        {
          title: 'Blockchain',
          sub: 'Shared ledger',
          callup:
            'Blockchain yakaita se accounting ledger yakagoverwa kune vakawanda, kwete office imwe chete.',
        },
      ],
    },
  },
  {
    id: 'edge_ai_intro',
    label: 'Edge AI',
    kicker: 'Topic 2',
    title: 'Edge AI (Robot Example)',
    summary: 'Funga AI se robot inodzidza from farm patterns uye yobatsira decision making.',
    points: [
      'Robot inotora sensor signals se moisture, humidity, ne temperature.',
      'Federated learning: model updates dzinofamba, raw data rinoramba local.',
      'Output yacho inobatsira farmer kuita better timing decisions.',
    ],
    takeaway: 'Takeaway: Edge AI inodzidza pedyo nemurimi, kwete kutumira raw data rese kure.',
    visual: {
      type: 'robot',
      note: 'Robot flow: Field data -> AI learning -> Farmer action.',
      items: [
        {
          title: 'Field Data',
          sub: 'Sensors from farm',
          callup: 'Field data rinopinda se local inputs kubva kusensors nemurimi.',
        },
        {
          title: 'AI Robot',
          sub: 'Learns patterns',
          callup: 'AI robot inodzidza ma patterns to improve predictions over time.',
        },
        {
          title: 'Farmer Action',
          sub: 'Better decisions',
          callup: 'Farmer anobva awana practical advice yekuita action panguva chaiyo.',
        },
      ],
    },
  },
  {
    id: 'blockchain_intro',
    label: 'Blockchain',
    kicker: 'Topic 3',
    title: 'Blockchain, ADA, and Midnight',
    summary: 'Chain part inopa shared ledger yekuvimba nayo, reward visibility, uye privacy verification.',
    points: [
      'Blockchain inochengeta ledger inotevereka uye isiri centralized.',
      'ADA inobatsira pa reward/value language inowanikwa mu ecosystem.',
      'Midnight inobatsira trustless verification while preserving privacy.',
    ],
    takeaway: 'Takeaway: Chain inobatsira kuti contribution ionekwe and trusted.',
    visual: {
      type: 'grid',
      items: [
        {
          title: 'ADA',
          sub: 'Value language',
          callup: 'EdgeChain reward inenge iri mu cryptocurrency inonzi ADA.',
        },
        {
          title: 'Midnight',
          sub: 'Private verify',
          callup: 'Mu EdgeChain verification inoitwa ne Midnight Network.',
        },
        {
          title: 'Chain Record',
          sub: 'Proof history',
          callup:
            'Chain record yakaita se line muledger inobatsira kuona nhoroondo isingachinjwi nyore.',
        },
      ],
    },
  },
];

const WALLET_TOPICS = [
  {
    id: 'what_wallet',
    label: 'What Is A Wallet?',
    kicker: 'Topic 1',
    title: 'What Is A Wallet?',
    summary: 'Wallet i digital pocket inochengeta access yako ku proof, rewards, uye identity.',
    points: [
      'Haisi bank building; i app/account yaunotonga pafoni yako.',
      'Inobata addresses and approvals, not your physical cash notes.',
      'Inokubvumira kugamuchira rewards from EdgeChain pilot flow.',
    ],
    takeaway: 'Takeaway: Wallet ndiyo gate yekupinda muEdgeChain ecosystem.',
    visual: {
      type: 'grid',
      items: [
        {
          title: 'Identity',
          sub: 'Farmer profile link',
          callup: 'Mu EdgeChain tinoshandisa wallet inonzi Lace.',
        },
        {
          title: 'Proofs',
          sub: 'Verified records',
          callup: 'Mu EdgeChain verification inoitwa ne Midnight Network.',
        },
        {
          title: 'Rewards',
          sub: 'Value inodzoka',
          callup: 'EdgeChain reward inenge iri mu cryptocurrency inonzi ADA.',
        },
      ],
    },
  },
  {
    id: 'wallet_vs_bank',
    label: 'Wallet vs Bank Account',
    kicker: 'Topic 2',
    title: 'Wallet vs Bank Account',
    summary: 'Zvese zviviri zvinochengeta value, asi control model yacho inosiyana.',
    points: [
      'Bank account: institution ndiyo primary custodian.',
      'Wallet: iwe ndiwe primary controller kana wachengeta keys zvakanaka.',
      'RBZ kana any bank, basa ravo guru ndere compliance nemutemo. Pa self-custody wallet, ma banking institutions haagone kungobvisa value yako vega pasina mvumo yako kana legal order.',
    ],
    takeaway: 'Takeaway: Wallet gives direct digital control, bank gives institutional custody.',
    visual: {
      type: 'compare',
      left: {
        heading: 'Bank Account',
        strong: 'Institution-led',
        note: 'Access depends on bank rails and approvals.',
      },
      right: {
        heading: 'Wallet',
        strong: 'Farmer-led',
        note: 'Access depends on your keys and device safety.',
      },
    },
  },
  {
    id: 'control_and_keys',
    label: 'Your Control & Keys',
    kicker: 'Topic 3',
    title: 'Your Control & Keys',
    summary: 'Seed phrase/private key ndiyo kiyi yako. Who has it, controls the wallet.',
    points: [
      'Kana kiyi iri newe chete, control iri newe.',
      'Usambofa wakatumira seed phrase paWhatsApp kana photo album.',
      'Backup phrase rinofanira kuchengetwa offline and private.',
    ],
    takeaway: 'Takeaway: Keys are power. Keep them private, always.',
    visual: {
      type: 'grid',
      items: [
        {
          title: 'Seed Phrase',
          sub: 'Master backup',
          callup:
            'Seed phrase i backup yekudzosera wallet yese kana phone yarasika kana yashanduka.',
        },
        {
          title: 'Private Key',
          sub: 'Signing power',
          callup:
            'Private key ndiyo cryptographic power yekusaina transactions. Ndiro rinoratidza kuti ndiwe muridzi wewallet.',
        },
        {
          title: 'PIN/Biometrics',
          sub: 'Daily lock',
          callup:
            'PIN/biometrics haisi ownership key. Iyo inongovhura app pafoni yako kuti usvike pawallet zviri nyore uye zvakachengeteka.',
        },
      ],
    },
  },
  {
    id: 'safety_basics',
    label: 'Safety Basics',
    kicker: 'Topic 4',
    title: 'Safety Basics',
    summary: 'Strong safety habits anochengetedza rewards neproof records dzako.',
    points: [
      'Use screen lock + app PIN nguva dzese.',
      'Never share codes with support accounts dzisiri official.',
      'Kana phone yarasika, restore wallet using seed phrase backup.',
    ],
    takeaway: 'Takeaway: Safety first, then usage. No key sharing, no shortcuts.',
    visual: {
      type: 'note',
      text: 'Golden Rule: If munhu akukumbira seed phrase rako, atori kuedza kukubira. Never share the seed phrase even ne vauno vimba navo.',
    },
  },
  {
    id: 'why_wallet_edgechain',
    label: 'Why Wallet In EdgeChain',
    kicker: 'Topic 5',
    title: 'Why Wallet In EdgeChain Pilot',
    summary: 'Rewards dzako dzinoramba dziri pasi pecontrol yako.',
    points: [
      'EdgeChain inobatsira verification flow.',
      'Asi ownership yemari inoramba iri newe.',
    ],
    takeaway: 'Takeaway: Your money stays yours, and you can move anytime.',
    visual: {
      type: 'freedom',
      items: [
        {
          title: 'Your Wallet, Your Keys',
          sub: 'Reward inouya kuwallet yako',
          callup:
            'Pasina PRIVATE KEY yako, hapana anokwanisa kubata mari yako, even EdgeChain haikwanise.',
        },
        {
          title: 'EdgeChain Verifies, Not Holds',
          sub: 'Platform inoita verify, haibati mari',
          callup:
            'Edgechain Platform inoona proof yema records, kwete ku controller ma funds ako.',
        },
        {
          title: 'Move Anytime',
          sub: 'Tumira ADA kune imwe wallet',
          callup: 'Wallet portability means you can choose alternatives pawadira.',
        },
        {
          title: 'No Lock-In',
          sub: 'Kubuda nefunds dzako zvinobvira',
          callup:
            'Kana ukafunga kusiya EdgeChain platform unoenda ne mari yako yese even to a different platform',
        },
      ],
    },
  },
];

const SENSOR_TOPICS = [
  {
    id: 'tobacco_data',
    label: '2.1 Tobacco Data',
    kicker: 'Topic 1',
    title: 'Tobacco Data That Matters',
    summary: 'Section 3 inoenderana necore business yefarmer: quality tobacco yield.',
    points: [
      'Soil moisture ndiyo number 1 pa leaf size, weight, uye quality.',
      'Air temperature + humidity zvinobatsira kuona stress ne disease windows.',
      'Curing barn temp + humidity ndizvo zvinochengeta quality after harvest.',
    ],
    takeaway: '',
    visual: {
      type: 'priority',
      items: [
        {
          title: 'Soil Moisture',
          sub: 'Yield + leaf spread',
          callup:
            'Kana moisture yakaderera pa grand growth, mashizha anoderera size. Kana yanyanya, waterlogging inokanganisa quality.',
        },
        {
          title: 'Rain + Irrigation',
          sub: 'Timing + mm applied',
          callup:
            'Kuziva kuti rain yabva kupi uye irrigation yawedzera papi kunobatsira kudzivisa overwatering.',
        },
        {
          title: 'Air Temp + RH',
          sub: 'Stress + disease risk',
          callup:
            'Warm + very humid windows anogona kusimudza disease risk. Tinoisa alerts kuti murimi aone nekukurumidza.',
        },
        {
          title: 'Curing Climate',
          sub: 'Temp + humidity stages',
          callup:
            'Curing quality inobva pa stage control: colouring, lamina drying, midrib drying.',
        },
      ],
    },
  },
  {
    id: 'field_dashboard',
    label: '2.2 Field Dashboard',
    kicker: 'Topic 2',
    title: 'Field Dashboard (Live Sim)',
    summary: 'Simulate ma readings ezuva nezuva: moisture, temp, humidity, rain, irrigation.',
    points: [
      'Green = OK, Amber = Watch, Red = Action now.',
      'Dzvanya Run Day kuti uwane readings nyowani.',
      'Add Irrigation inoratidza impact yacho pa soil moisture.',
    ],
    takeaway: '',
    visual: {
      type: 'field_dashboard',
    },
  },
  {
    id: 'curing_dashboard',
    label: '2.3 Curing Dashboard',
    kicker: 'Topic 3',
    title: 'Curing Dashboard (Live Sim)',
    summary: 'Curing simulation inotevera stages dzinodzidziswa ku tobacco farmers.',
    points: [
      'Colouring: about 30-40 C, high humidity.',
      'Lamina drying: about 40-50 C, humidity inodzikira.',
      'Midrib drying: about 65-70 C, humidity inoramba ichiderera.',
    ],
    takeaway: 'Zvino ndoitei? Fambisa curing stage uchiona kana temp/RH zviri mu lane.',
    visual: {
      type: 'curing_dashboard',
    },
  },
  {
    id: 'decisions_alerts',
    label: '2.4 Decisions & Alerts',
    kicker: 'Topic 4',
    title: 'Smart Decisions & Alerts',
    summary: 'Data rinopedzisira raita chinhu chimwe: clear farmer action panguva chaiyo.',
    points: [
      'System inopa short recommendation, kwete long report.',
      'Alerts dzinobva pa thresholds dziri practical ku tobacco.',
      'Farmer anoona action pakarepo: irrigate, wait, kana adjust curing.',
    ],
    takeaway: 'Zvino ndoitei? Use red/amber/green to decide next action fast.',
    visual: {
      type: 'decisions',
    },
  },
  {
    id: 'badge_wrap',
    label: '2.5 Challenge',
    kicker: 'Topic 5',
    title: 'Wrap-Up Challenge + Badge',
    summary: 'Short challenge yekusimbisa learning before next section.',
    points: [
      'Q1: Which data point ndiyo number 1 pa tobacco growth? (soil moisture)',
      'Q2: During midrib drying, temp should move higher than lamina stage.',
      'Q3: Which trusted source supports these tobacco stage decisions? (TRB)',
    ],
    takeaway: 'Zvino ndoitei? Complete challenge uwane badge reSection 3.',
    visual: {
      type: 'challenge',
    },
  },
];

const refs = {
  lessonIndex: document.getElementById('lesson-index'),
  subtopicIndex: document.getElementById('subtopic-index'),
  progressFill: document.getElementById('progress-fill'),

  stageKicker: document.getElementById('stage-kicker'),
  stageTitle: document.getElementById('stage-title'),
  stageSub: document.getElementById('stage-sub'),
  stageCitation: document.getElementById('stage-citation'),

  topicTabs: document.getElementById('topic-tabs'),

  tabKicker: document.getElementById('tab-kicker'),
  tabTitle: document.getElementById('tab-title'),
  tabSummary: document.getElementById('tab-summary'),
  tabVisual: document.getElementById('tab-visual'),
  clickCallout: document.getElementById('click-callout'),
  tabNotes: document.getElementById('tab-notes'),
  tabPoints: document.getElementById('tab-points'),
  tabTakeaway: document.getElementById('tab-takeaway'),
  contentCard: document.querySelector('.content-card'),

  btnPrevTab: document.getElementById('btn-prev-tab'),
  btnNextTab: document.getElementById('btn-next-tab'),
};

let state = loadState();
state = normalizeState(state);
if (shouldForceOverviewOnEntry()) {
  state.phase = 'overview';
  state.overviewIndex = 0;
  saveState();
}

wireEvents();
render();

function shouldForceOverviewOnEntry() {
  const params = new URLSearchParams(window.location.search);
  return params.get('start') === 'overview';
}

function wireEvents() {
  refs.topicTabs.addEventListener('click', (event) => {
    const target = event.target.closest('button.tab-btn');
    if (!target) {
      return;
    }

    const index = Number(target.dataset.index);
    if (!Number.isInteger(index)) {
      return;
    }

    setCurrentIndex(index);
    saveState();
    render();
  });

  refs.tabVisual.addEventListener('click', (event) => {
    const actionTarget = event.target.closest('button.sim-btn[data-action]');
    if (actionTarget) {
      handleSimAction(actionTarget.dataset.action);
      saveState();
      render();
      return;
    }

    const target = event.target.closest('button.action-step');
    if (!target) {
      return;
    }

    const itemIndex = Number(target.dataset.itemIndex);
    if (!Number.isInteger(itemIndex)) {
      return;
    }

    const topic = getCurrentTopic();
    if (!topic || !topic.visual || !Array.isArray(topic.visual.items)) {
      return;
    }

    const item = topic.visual.items[itemIndex];
    if (!item || !item.callup) {
      return;
    }

    showCallout(item.callup);
  });

  refs.btnPrevTab.addEventListener('click', () => {
    const topics = getCurrentTopics();
    const index = getCurrentIndex();

    if (state.phase === 'overview') {
      if (index === 0) {
        return;
      }

      setCurrentIndex(index - 1);
      saveState();
      render();
      return;
    }

    if (state.phase === 'wallet') {
      if (index > 0) {
        setCurrentIndex(index - 1);
      } else {
        state.phase = 'overview';
        state.overviewIndex = OVERVIEW_TOPICS.length - 1;
      }

      saveState();
      render();
      return;
    }

    if (index > 0) {
      setCurrentIndex(index - 1);
    } else {
      state.phase = 'wallet';
      state.walletIndex = WALLET_TOPICS.length - 1;
    }

    saveState();
    render();
  });

  refs.btnNextTab.addEventListener('click', () => {
    const topics = getCurrentTopics();
    const index = getCurrentIndex();
    const lastIndex = topics.length - 1;

    if (state.phase === 'overview') {
      if (index < lastIndex) {
        setCurrentIndex(index + 1);
      } else {
        state.phase = 'wallet';
        state.walletIndex = 0;
      }

      saveState();
      render();
      return;
    }

    if (state.phase === 'wallet') {
      if (index < lastIndex) {
        setCurrentIndex(index + 1);
      } else {
        state.phase = 'sensors';
        state.sensorIndex = 0;
      }

      saveState();
      render();
      return;
    }

    if (index < lastIndex) {
      setCurrentIndex(index + 1);
    }

    saveState();
    render();
  });
}

function render() {
  const sectionNumber = getSectionNumber();
  const topics = getCurrentTopics();
  const index = getCurrentIndex();
  const topic = topics[index];

  refs.lessonIndex.textContent = `Section ${sectionNumber} / ${SECTION_TOTAL}`;
  refs.subtopicIndex.textContent = `Topic ${index + 1} / ${topics.length}`;

  const progressPercent = Math.round((sectionNumber / SECTION_TOTAL) * 100);
  refs.progressFill.style.width = `${progressPercent}%`;

  refs.stageKicker.textContent = '';
  refs.stageKicker.classList.add('hidden');
  refs.stageSub.textContent = '';
  refs.stageSub.classList.add('hidden');

  if (state.phase === 'overview') {
    refs.stageTitle.textContent = 'Section 1 - EdgeChain Foundations';
    refs.stageCitation.classList.add('hidden');
  } else if (state.phase === 'wallet') {
    refs.stageTitle.textContent = 'Section 2 - Wallet Principles';
    refs.stageCitation.classList.add('hidden');
  } else {
    refs.stageTitle.textContent = 'Section 3 - Capture Sensor Readings';
    refs.stageCitation.textContent = KUTSAGA_CITATION;
    refs.stageCitation.classList.remove('hidden');
  }

  refs.topicTabs.innerHTML = topics
    .map((tab, tabIndex) => {
      const active = tabIndex === index ? ' active' : '';
      const danger = tab.id === 'safety_basics';
      const dangerClass = danger ? ' tab-danger' : '';
      const dangerIcon = danger ? '<span class="danger-icon" aria-hidden="true">!</span>' : '';
      return `<button class="tab-btn${active}${dangerClass}" type="button" data-index="${tabIndex}">${dangerIcon}<span>${escapeHtml(tab.label)}</span></button>`;
    })
    .join('');
  refs.topicTabs.classList.toggle('foundation-tabs', state.phase === 'overview');

  refs.tabKicker.textContent = topic.kicker;
  refs.tabTitle.innerHTML = formatTopicTitle(topic.title);
  refs.tabSummary.textContent = topic.summary;
  if (typeof topic.takeaway === 'string' && topic.takeaway.trim()) {
    refs.tabTakeaway.textContent = topic.takeaway;
    refs.tabTakeaway.classList.remove('hidden');
  } else {
    refs.tabTakeaway.textContent = '';
    refs.tabTakeaway.classList.add('hidden');
  }

  if (state.phase === 'sensors') {
    refs.tabPoints.classList.add('hidden');
    const biteNotes = renderBiteNotes(topic.points);
    if (biteNotes) {
      refs.tabNotes.innerHTML = biteNotes;
      refs.tabNotes.classList.remove('hidden');
    } else {
      refs.tabNotes.innerHTML = '';
      refs.tabNotes.classList.add('hidden');
    }
  } else {
    refs.tabPoints.classList.remove('hidden');
    refs.tabNotes.classList.add('hidden');
    refs.tabNotes.innerHTML = '';
    refs.tabPoints.innerHTML = topic.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('');
  }

  refs.tabVisual.innerHTML = renderVisual(topic.visual);
  refs.contentCard.classList.toggle('safety-highlight', topic.id === 'safety_basics');
  renderGuide(topic);

  if (state.phase === 'overview') {
    refs.btnPrevTab.disabled = index === 0;
    refs.btnPrevTab.textContent = 'Previous Topic';
    refs.btnNextTab.disabled = false;
    refs.btnNextTab.textContent = index === topics.length - 1 ? 'Go to Section 2' : 'Next Topic';
    return;
  }

  if (state.phase === 'wallet') {
    refs.btnPrevTab.disabled = false;
    refs.btnPrevTab.textContent = index === 0 ? 'Back to Section 1' : 'Previous Topic';
    refs.btnNextTab.disabled = false;
    refs.btnNextTab.textContent = index === topics.length - 1 ? 'Go to Section 3' : 'Next Topic';
    return;
  }

  refs.btnPrevTab.disabled = false;
  refs.btnPrevTab.textContent = index === 0 ? 'Back to Section 2' : 'Previous Topic';
  refs.btnNextTab.disabled = index === topics.length - 1;
  refs.btnNextTab.textContent = index === topics.length - 1 ? 'Section 4 Coming Soon' : 'Next Topic';
}

function renderBiteNotes(points) {
  if (!Array.isArray(points) || points.length === 0) {
    return '';
  }

  return `<details class="bite-notes">
    <summary>Open bite-size notes</summary>
    <ul class="bite-list">
      ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
    </ul>
  </details>`;
}

function renderVisual(visual) {
  if (visual.type === 'grid') {
    return `<div class="visual-grid">${visual.items
      .map((item, index) => renderVisualItem(item, index))
      .join('')}</div>`;
  }

  if (visual.type === 'freedom') {
    return `<div class="freedom-grid">${visual.items
      .map((item, index) => renderVisualItem(item, index))
      .join('')}</div>`;
  }

  if (visual.type === 'compare') {
    return `<div class="compare-grid">
      <article class="compare-card">
        <p>${escapeHtml(visual.left.heading)}</p>
        <strong>${escapeHtml(visual.left.strong)}</strong>
        <span>${escapeHtml(visual.left.note)}</span>
      </article>
      <article class="compare-card">
        <p>${escapeHtml(visual.right.heading)}</p>
        <strong>${escapeHtml(visual.right.strong)}</strong>
        <span>${escapeHtml(visual.right.note)}</span>
      </article>
    </div>`;
  }

  if (visual.type === 'robot') {
    const robotNodes = visual.items
      .map((item, index) => renderRobotItem(item, index))
      .join('<span class="robot-arrow">-></span>');

    return `<div class="robot-flow">${robotNodes}</div><p class="note-box">${escapeHtml(visual.note)}</p>`;
  }

  if (visual.type === 'priority') {
    return `<div class="priority-grid">${visual.items
      .map((item, index) => renderVisualItem(item, index))
      .join('')}</div>`;
  }

  if (visual.type === 'field_dashboard') {
    return renderFieldDashboard();
  }

  if (visual.type === 'curing_dashboard') {
    return renderCuringDashboard();
  }

  if (visual.type === 'decisions') {
    return renderDecisionBoard();
  }

  if (visual.type === 'challenge') {
    return renderChallenge();
  }

  return `<p class="note-box">${escapeHtml(visual.text)}</p>`;
}

function renderVisualItem(item, index) {
  if (item.callup) {
    return `<button class="visual-step action-step" type="button" data-item-index="${index}">
      <strong>${formatConceptHeading(item.title)}</strong>
      <span>${escapeHtml(item.sub)}</span>
      <em class="tap-mini">Tap for more</em>
    </button>`;
  }

  return `<article class="visual-step">
    <strong>${formatConceptHeading(item.title)}</strong>
    <span>${escapeHtml(item.sub)}</span>
  </article>`;
}

function renderRobotItem(item, index) {
  if (item.callup) {
    return `<button class="visual-step action-step robot-node" type="button" data-item-index="${index}">
      <strong>${formatConceptHeading(item.title)}</strong>
      <span>${escapeHtml(item.sub)}</span>
      <em class="tap-mini">Tap for more</em>
    </button>`;
  }

  return `<article class="visual-step robot-node">
    <strong>${formatConceptHeading(item.title)}</strong>
    <span>${escapeHtml(item.sub)}</span>
  </article>`;
}

function renderFieldDashboard() {
  const field = state.sim.field;
  const soilStatus = getSoilStatus(field.soilMoisture);
  const tempStatus = getTempStatus(field.airTemp);
  const humidityStatus = getHumidityStatus(field.humidity);
  const rainStatus = getRainStatus(field.rainMm);

  return `<div class="dash-grid">
      ${renderMetricCard('Soil Moisture', `${field.soilMoisture}%`, soilStatus, 'Root-zone trend')}
      ${renderMetricCard('Air Temp', `${field.airTemp} C`, tempStatus, 'Field temperature')}
      ${renderMetricCard('Humidity', `${field.humidity}%`, humidityStatus, 'Ambient RH')}
      ${renderMetricCard('Rain / Irrigation', `${field.rainMm} mm / ${field.irrigationMm} mm`, rainStatus, 'Today inputs')}
    </div>
    <details class="sim-pane">
      <summary>Open controls</summary>
      <div class="sim-actions">
        <button class="sim-btn primary" type="button" data-action="run_day">Run Day</button>
        <button class="sim-btn" type="button" data-action="add_irrigation">Add Irrigation (+12 mm)</button>
        <button class="sim-btn ghost" type="button" data-action="show_field_reco">See Recommendation</button>
      </div>
    </details>
    <p class="legend-strip">Day ${state.sim.day}: Green = OK, Amber = Watch, Red = Action now.</p>`;
}

function renderCuringDashboard() {
  const curing = state.sim.curing;
  const tempStatus = getCuringTempStatus(curing.tempC, curing.stageIndex);
  const humidityStatus = getCuringHumidityStatus(curing.humidity, curing.stageIndex);
  const actionLabel = curing.stageIndex === 0 ? 'Start Curing Cycle' : 'Next Curing Stage';

  return `<p class="curing-stage">Current stage: ${escapeHtml(curing.stageName)}</p>
    <div class="dash-grid">
      ${renderMetricCard('Barn Temp', `${curing.tempC} C`, tempStatus, 'Curing barn')}
      ${renderMetricCard('Barn Humidity', `${curing.humidity}%`, humidityStatus, 'Curing RH')}
    </div>
    <details class="sim-pane">
      <summary>Open controls</summary>
      <div class="sim-actions">
        <button class="sim-btn primary" type="button" data-action="start_curing_cycle">${actionLabel}</button>
        <button class="sim-btn ghost" type="button" data-action="show_curing_reco">See Recommendation</button>
      </div>
    </details>
    <p class="legend-strip">Curing stages: Colouring (30-40 C) -> Lamina (40-50 C) -> Midrib (65-70 C).</p>`;
}

function renderDecisionBoard() {
  const fieldReco = getFieldRecommendation();
  const curingReco = getCuringRecommendation();
  const risk = getOverallRisk();

  return `<div class="decision-grid">
      <article class="decision-card ${risk.field.className}">
        <h4>Field Water Decision</h4>
        <p>${escapeHtml(fieldReco)}</p>
      </article>
      <article class="decision-card ${risk.curing.className}">
        <h4>Curing Decision</h4>
        <p>${escapeHtml(curingReco)}</p>
      </article>
      <article class="decision-card ${risk.risk.className}">
        <h4>Disease / Stress Watch</h4>
        <p>${escapeHtml(risk.risk.text)}</p>
      </article>
    </div>
    <details class="sim-pane">
      <summary>Open recommendation</summary>
      <div class="sim-actions">
        <button class="sim-btn ghost" type="button" data-action="show_all_reco">See Recommendation</button>
      </div>
    </details>`;
}

function renderChallenge() {
  const statusText = state.sim.badgeEarned ? 'Badge Earned: Sensor Starter' : 'Badge pending';
  const buttonLabel = state.sim.badgeEarned ? 'Badge Earned' : 'Earn Section 3 Badge';

  return `<div class="badge-box">
      <p class="curing-stage">${escapeHtml(statusText)}</p>
      <ol class="badge-list">
        <li>Identify key tobacco metric: soil moisture.</li>
        <li>Identify curing order: colouring -> lamina -> midrib.</li>
        <li>State trusted source: Tobacco Research Board guidance.</li>
      </ol>
      <details class="sim-pane">
        <summary>Open challenge action</summary>
        <div class="sim-actions">
          <button class="sim-btn primary" type="button" data-action="claim_badge" ${
            state.sim.badgeEarned ? 'disabled' : ''
          }>${buttonLabel}</button>
        </div>
      </details>
    </div>`;
}

function renderMetricCard(title, value, status, sub) {
  return `<article class="metric-card">
      <div class="metric-head">
        <span class="metric-title">${escapeHtml(title)}</span>
        <span class="status-pill ${status.className}">${escapeHtml(status.label)}</span>
      </div>
      <p class="metric-value">${escapeHtml(value)}</p>
      <p class="metric-sub">${escapeHtml(sub)}</p>
    </article>`;
}

function handleSimAction(action) {
  if (!action || state.phase !== 'sensors') {
    return;
  }

  if (action === 'run_day') {
    runDaySimulation();
    return;
  }

  if (action === 'add_irrigation') {
    addIrrigation();
    showCallout('Irrigation yawedzerwa +12 mm. Tarisa soil moisture card kuona shanduko.');
    return;
  }

  if (action === 'show_field_reco') {
    showCallout(getFieldRecommendation());
    return;
  }

  if (action === 'start_curing_cycle') {
    advanceCuringStage();
    showCallout(getCuringRecommendation());
    return;
  }

  if (action === 'show_curing_reco') {
    showCallout(getCuringRecommendation());
    return;
  }

  if (action === 'show_all_reco') {
    const overall = getOverallRisk();
    showCallout(
      `Field: ${getFieldRecommendation()} Curing: ${getCuringRecommendation()} Risk: ${overall.risk.text}`
    );
    return;
  }

  if (action === 'claim_badge') {
    state.sim.badgeEarned = true;
    showCallout('Wakunda Section 3 badge: Sensor Starter. Wagona kushandisa data kuita decision.');
  }
}

function runDaySimulation() {
  const field = state.sim.field;
  state.sim.day += 1;

  const rain = randomInt(0, 16);
  const airTemp = randomInt(21, 35);
  const humidity = randomInt(45, 91);
  const evapLoss = airTemp >= 32 ? 7 : airTemp >= 28 ? 5 : 3;
  const moistureGain = Math.round(rain * 0.45);
  const nextSoilMoisture = clamp(field.soilMoisture + moistureGain - evapLoss, 18, 82);

  field.rainMm = rain;
  field.airTemp = airTemp;
  field.humidity = humidity;
  field.soilMoisture = nextSoilMoisture;
  field.irrigationMm = 0;
}

function addIrrigation() {
  const field = state.sim.field;
  field.irrigationMm = Math.min(40, field.irrigationMm + 12);
  field.soilMoisture = clamp(field.soilMoisture + 10, 18, 82);
}

function advanceCuringStage() {
  const stages = [
    { name: 'Idle', temp: 30, humidity: 85 },
    { name: 'Colouring', temp: 36, humidity: 85 },
    { name: 'Lamina Drying', temp: 45, humidity: 58 },
    { name: 'Midrib Drying', temp: 68, humidity: 35 },
  ];

  const nextIndex = state.sim.curing.stageIndex >= 3 ? 1 : state.sim.curing.stageIndex + 1;
  const stage = stages[nextIndex];

  state.sim.curing.stageIndex = nextIndex;
  state.sim.curing.stageName = stage.name;
  state.sim.curing.tempC = stage.temp;
  state.sim.curing.humidity = stage.humidity;
}

function getSoilStatus(value) {
  if (value < 30 || value > 72) {
    return { className: 'alert', label: 'ACTION' };
  }
  if (value < 40 || value > 64) {
    return { className: 'watch', label: 'WATCH' };
  }
  return { className: 'ok', label: 'OK' };
}

function getTempStatus(value) {
  if (value < 20 || value > 34) {
    return { className: 'alert', label: 'ACTION' };
  }
  if (value < 22 || value > 31) {
    return { className: 'watch', label: 'WATCH' };
  }
  return { className: 'ok', label: 'OK' };
}

function getHumidityStatus(value) {
  if (value > 88 || value < 35) {
    return { className: 'alert', label: 'ACTION' };
  }
  if (value > 80 || value < 45) {
    return { className: 'watch', label: 'WATCH' };
  }
  return { className: 'ok', label: 'OK' };
}

function getRainStatus(value) {
  if (value >= 14) {
    return { className: 'watch', label: 'WATCH' };
  }
  if (value === 0) {
    return { className: 'watch', label: 'WATCH' };
  }
  return { className: 'ok', label: 'OK' };
}

function getCuringTempStatus(tempC, stageIndex) {
  if (stageIndex === 0) {
    return { className: 'watch', label: 'WATCH' };
  }
  if (stageIndex === 1) {
    return tempC >= 30 && tempC <= 40
      ? { className: 'ok', label: 'OK' }
      : { className: 'alert', label: 'ACTION' };
  }
  if (stageIndex === 2) {
    return tempC >= 40 && tempC <= 50
      ? { className: 'ok', label: 'OK' }
      : { className: 'alert', label: 'ACTION' };
  }
  return tempC >= 65 && tempC <= 70
    ? { className: 'ok', label: 'OK' }
    : { className: 'alert', label: 'ACTION' };
}

function getCuringHumidityStatus(humidity, stageIndex) {
  if (stageIndex === 0) {
    return { className: 'watch', label: 'WATCH' };
  }
  if (stageIndex === 1) {
    return humidity >= 78 && humidity <= 90
      ? { className: 'ok', label: 'OK' }
      : { className: 'watch', label: 'WATCH' };
  }
  if (stageIndex === 2) {
    return humidity >= 45 && humidity <= 65
      ? { className: 'ok', label: 'OK' }
      : { className: 'watch', label: 'WATCH' };
  }
  return humidity >= 28 && humidity <= 45
    ? { className: 'ok', label: 'OK' }
    : { className: 'watch', label: 'WATCH' };
}

function getFieldRecommendation() {
  const field = state.sim.field;
  const soilStatus = getSoilStatus(field.soilMoisture);

  if (soilStatus.className === 'alert' && field.soilMoisture < 30) {
    return 'Soil moisture yakaderera. Wedzera irrigation nhasi uye re-check mangwana.';
  }

  if (soilStatus.className === 'alert' && field.soilMoisture > 72) {
    return 'Soil yanyanya kunyova. Mira irrigation uye tarisa drainage kuti udzivise waterlogging.';
  }

  if (field.humidity > 85 && field.airTemp > 30) {
    return 'Humidity + heat zviri kumusoro. Ita close scouting for disease signs mumunda.';
  }

  if (field.rainMm >= 12) {
    return 'Rain yakanaka nhasi. Skip extra irrigation unless soil moisture yadzikira.';
  }

  return 'Field lane yakanaka. Chengeta monitoring daily using traffic-light alerts.';
}

function getCuringRecommendation() {
  const curing = state.sim.curing;
  const tempStatus = getCuringTempStatus(curing.tempC, curing.stageIndex);

  if (curing.stageIndex === 0) {
    return 'Tanga ne Colouring stage kuti leaf physiology ifambe zvakanaka usati waomesa zvakanyanya.';
  }

  if (tempStatus.className === 'alert') {
    return `Temp ye ${curing.stageName} yabuda mu lane. Gadzirisa heat setting kuti quality isadonha.`;
  }

  return `${curing.stageName} iri mu lane. Enderera ne stage control zvine discipline.`;
}

function getOverallRisk() {
  const field = state.sim.field;
  const fieldStatus = getSoilStatus(field.soilMoisture);
  const curingStatus = getCuringTempStatus(state.sim.curing.tempC, state.sim.curing.stageIndex);
  const humidStress = field.humidity > 85 && field.airTemp > 30;
  const mapDecisionClass = (status) => (status.className === 'ok' ? 'good' : status.className);

  return {
    field: { ...fieldStatus, className: mapDecisionClass(fieldStatus) },
    curing: { ...curingStatus, className: mapDecisionClass(curingStatus) },
    risk: humidStress
      ? {
          className: 'alert',
          text: 'Warm + humid window. Increase scouting and keep water balance disciplined.',
        }
      : {
          className: 'good',
          text: 'No major stress signal now. Continue normal monitoring.',
        },
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderGuide(topic) {
  const hasTapTargets =
    topic &&
    topic.visual &&
    Array.isArray(topic.visual.items) &&
    topic.visual.items.some((item) => Boolean(item.callup));

  if (!hasTapTargets) {
    if (refs.clickCallout.textContent && !refs.clickCallout.classList.contains('guide')) {
      refs.clickCallout.classList.remove('hidden');
      return;
    }

    hideCallout();
    return;
  }

  const clickableNames = topic.visual.items
    .filter((item) => Boolean(item.callup))
    .map((item) => item.title);

  refs.clickCallout.textContent = `Guide: Dzvanya pa ${formatNameList(clickableNames)} kuti udzidze zvakawanda.`;
  refs.clickCallout.classList.add('guide');
  refs.clickCallout.classList.remove('hidden');
}

function formatNameList(names) {
  if (names.length === 0) return 'cards';
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} kana ${names[1]}`;
  const front = names.slice(0, -1).join(', ');
  const last = names[names.length - 1];
  return `${front}, kana ${last}`;
}

function formatTopicTitle(title) {
  if (title === 'EdgeChain = Edge AI + Blockchain') {
    return '<span class="flow-term edgechain">EdgeChain</span> = <span class="flow-term edge">Edge</span> <span class="flow-term ai">AI</span> + <span class="flow-term block">Block</span><span class="flow-term chain">chain</span>';
  }

  if (title === 'Safety Basics') {
    return '<span class="danger-title"><span class="danger-icon" aria-hidden="true">!</span> Safety Basics</span>';
  }

  return escapeHtml(title);
}

function formatConceptHeading(title) {
  if (title === 'EdgeChain') {
    return '<span class="flow-term edgechain">EdgeChain</span>';
  }

  if (title === 'Edge AI') {
    return '<span class="flow-term edge">Edge</span> <span class="flow-term ai">AI</span>';
  }

  if (title === 'Blockchain') {
    return '<span class="flow-term block">Block</span><span class="flow-term chain">chain</span>';
  }

  return escapeHtml(title);
}

function showCallout(text) {
  refs.clickCallout.textContent = text;
  refs.clickCallout.classList.remove('guide');
  refs.clickCallout.classList.remove('hidden');
}

function hideCallout() {
  refs.clickCallout.textContent = '';
  refs.clickCallout.classList.remove('guide');
  refs.clickCallout.classList.add('hidden');
}

function getCurrentTopics() {
  if (state.phase === 'overview') {
    return OVERVIEW_TOPICS;
  }

  if (state.phase === 'wallet') {
    return WALLET_TOPICS;
  }

  return SENSOR_TOPICS;
}

function getCurrentTopic() {
  const topics = getCurrentTopics();
  return topics[getCurrentIndex()];
}

function getCurrentIndex() {
  if (state.phase === 'overview') {
    return state.overviewIndex;
  }

  if (state.phase === 'wallet') {
    return state.walletIndex;
  }

  return state.sensorIndex;
}

function setCurrentIndex(index) {
  const topics = getCurrentTopics();
  const safeIndex = Math.max(0, Math.min(topics.length - 1, index));
  if (state.phase === 'overview') {
    state.overviewIndex = safeIndex;
  } else if (state.phase === 'wallet') {
    state.walletIndex = safeIndex;
  } else {
    state.sensorIndex = safeIndex;
  }
  hideCallout();
}

function getSectionNumber() {
  if (state.phase === 'overview') {
    return SECTION_FOUNDATIONS;
  }

  if (state.phase === 'wallet') {
    return SECTION_WALLET;
  }

  return SECTION_SENSOR;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage issues
  }
}

function loadState() {
  const fallback = {
    phase: 'overview',
    overviewIndex: 0,
    walletIndex: 0,
    sensorIndex: 0,
    sim: createDefaultSimState(),
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return fallback;
    }

    return {
      phase: ['overview', 'wallet', 'sensors'].includes(parsed.phase) ? parsed.phase : 'overview',
      overviewIndex: Number.isInteger(parsed.overviewIndex) ? parsed.overviewIndex : 0,
      walletIndex: Number.isInteger(parsed.walletIndex) ? parsed.walletIndex : 0,
      sensorIndex: Number.isInteger(parsed.sensorIndex) ? parsed.sensorIndex : 0,
      sim: parsed.sim && typeof parsed.sim === 'object' ? parsed.sim : createDefaultSimState(),
    };
  } catch {
    return fallback;
  }
}

function normalizeState(input) {
  const defaultSim = createDefaultSimState();
  const sim = input.sim && typeof input.sim === 'object' ? input.sim : defaultSim;
  const normalized = {
    phase: ['overview', 'wallet', 'sensors'].includes(input.phase) ? input.phase : 'overview',
    overviewIndex: Math.max(0, Math.min(OVERVIEW_TOPICS.length - 1, input.overviewIndex || 0)),
    walletIndex: Math.max(0, Math.min(WALLET_TOPICS.length - 1, input.walletIndex || 0)),
    sensorIndex: Math.max(0, Math.min(SENSOR_TOPICS.length - 1, input.sensorIndex || 0)),
    sim: {
      day: Number.isInteger(sim.day) ? Math.max(1, sim.day) : defaultSim.day,
      field: {
        soilMoisture: Number.isFinite(sim.field?.soilMoisture)
          ? sim.field.soilMoisture
          : defaultSim.field.soilMoisture,
        airTemp: Number.isFinite(sim.field?.airTemp) ? sim.field.airTemp : defaultSim.field.airTemp,
        humidity: Number.isFinite(sim.field?.humidity) ? sim.field.humidity : defaultSim.field.humidity,
        rainMm: Number.isFinite(sim.field?.rainMm) ? sim.field.rainMm : defaultSim.field.rainMm,
        irrigationMm: Number.isFinite(sim.field?.irrigationMm)
          ? sim.field.irrigationMm
          : defaultSim.field.irrigationMm,
      },
      curing: {
        stageIndex: Number.isInteger(sim.curing?.stageIndex)
          ? Math.max(0, Math.min(3, sim.curing.stageIndex))
          : defaultSim.curing.stageIndex,
        stageName: typeof sim.curing?.stageName === 'string'
          ? sim.curing.stageName
          : defaultSim.curing.stageName,
        tempC: Number.isFinite(sim.curing?.tempC) ? sim.curing.tempC : defaultSim.curing.tempC,
        humidity: Number.isFinite(sim.curing?.humidity)
          ? sim.curing.humidity
          : defaultSim.curing.humidity,
      },
      badgeEarned:
        typeof sim.badgeEarned === 'boolean' ? sim.badgeEarned : defaultSim.badgeEarned,
    },
  };

  return normalized;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
