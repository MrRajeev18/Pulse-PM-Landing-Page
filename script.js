// PulsePM Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = !mobileMenu.classList.contains('hidden');
      if (isExpanded) {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // 2. Role Tabs Switcher
  const roleTabButtons = document.querySelectorAll('.role-tab-btn');
  const rolePanes = {
    pm: document.getElementById('role-content-pm'),
    eng: document.getElementById('role-content-eng'),
    leadership: document.getElementById('role-content-leadership')
  };

  roleTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');

      // Update button active state
      roleTabButtons.forEach(b => {
        b.classList.remove('bg-gradient-to-r', 'from-teal-500', 'to-cyan-500', 'text-slate-950', 'shadow-md');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.add('bg-gradient-to-r', 'from-teal-500', 'to-cyan-500', 'text-slate-950', 'shadow-md');
      btn.classList.remove('bg-slate-800', 'text-slate-300');

      // Update pane visibility
      Object.keys(rolePanes).forEach(key => {
        if (rolePanes[key]) {
          if (key === target) {
            rolePanes[key].classList.remove('hidden');
          } else {
            rolePanes[key].classList.add('hidden');
          }
        }
      });
    });
  });

  // 3. Interactive Simulator Engine
  const simBtnNormal = document.getElementById('sim-btn-normal');
  const simBtnBlocker = document.getElementById('sim-btn-blocker');
  const simBtnSuper = document.getElementById('sim-btn-supercharge');

  const simBpm = document.getElementById('sim-bpm');
  const simBpmStatus = document.getElementById('sim-bpm-status');
  const simHealth = document.getElementById('sim-health');
  const simHealthStatus = document.getElementById('sim-health-status');
  const simBlockers = document.getElementById('sim-blockers');
  const simBlockerStatus = document.getElementById('sim-blocker-status');
  const simEta = document.getElementById('sim-eta');
  const simEtaStatus = document.getElementById('sim-eta-status');

  const simPath = document.getElementById('sim-path');
  const simCardioLabel = document.getElementById('sim-cardio-label');
  const simIndicator = document.getElementById('sim-indicator');
  const simLog = document.getElementById('sim-log');
  const simScanner = document.getElementById('sim-scanner');

  const speedSlider = document.getElementById('speed-slider');
  const sliderLabel = document.getElementById('slider-label');

  function resetSimButtons() {
    [simBtnNormal, simBtnBlocker, simBtnSuper].forEach(btn => {
      if (btn) {
        btn.className = "sim-state-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white transition-all";
      }
    });
  }

  // Steady State
  function applyNormalState() {
    resetSimButtons();
    if (simBtnNormal) simBtnNormal.className = "sim-state-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 transition-all";

    if (simBpm) simBpm.textContent = "74 BPM";
    if (simBpm) simBpm.className = "text-2xl sm:text-3xl font-extrabold text-teal-400 mt-1 block";
    if (simBpmStatus) { simBpmStatus.textContent = "Synchronized"; simBpmStatus.className = "text-[10px] text-teal-300 font-mono"; }

    if (simHealth) { simHealth.textContent = "96%"; simHealth.className = "text-2xl sm:text-3xl font-extrabold text-white mt-1 block"; }
    if (simHealthStatus) { simHealthStatus.textContent = "Optimal"; simHealthStatus.className = "text-[10px] text-emerald-400 font-mono"; }

    if (simBlockers) { simBlockers.textContent = "0"; simBlockers.className = "text-2xl sm:text-3xl font-extrabold text-white mt-1 block"; }
    if (simBlockerStatus) { simBlockerStatus.textContent = "Clear Runway"; simBlockerStatus.className = "text-[10px] text-slate-400 font-mono"; }

    if (simEta) { simEta.textContent = "On Time"; simEta.className = "text-2xl sm:text-3xl font-extrabold text-cyan-300 mt-1 block"; }
    if (simEtaStatus) { simEtaStatus.textContent = "Friday 4:00 PM"; simEtaStatus.className = "text-[10px] text-cyan-400 font-mono"; }

    if (simCardioLabel) simCardioLabel.textContent = "REAL-TIME SPRINT ECG WAVEFORM: NORMAL SINUS RHYTHM";
    if (simIndicator) { simIndicator.textContent = "FLOW STATE ACTIVE"; simIndicator.className = "text-teal-400 font-bold"; }

    if (simPath) {
      simPath.setAttribute("stroke", "#00e5a3");
      simPath.setAttribute("d", "M 0,50 L 100,50 L 115,35 L 130,65 L 145,50 L 220,50 L 240,15 L 260,85 L 275,30 L 290,60 L 305,50 L 420,50 L 440,20 L 460,80 L 475,50 L 590,50 L 610,10 L 630,90 L 650,30 L 665,50 L 800,50");
    }

    if (simLog) {
      simLog.innerHTML = `<span class="text-teal-400">[12:44:02]</span> All 14 pull requests progressing cleanly. Test coverage at 88.4%. No critical impediments detected.`;
    }

    if (simScanner) simScanner.style.animationDuration = "2.6s";
  }

  // Blocker Injected State
  function applyBlockerState() {
    resetSimButtons();
    if (simBtnBlocker) simBtnBlocker.className = "sim-state-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-rose-500 text-white transition-all";

    if (simBpm) simBpm.textContent = "41 BPM";
    if (simBpm) simBpm.className = "text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1 block";
    if (simBpmStatus) { simBpmStatus.textContent = "Arrhythmia (Stalled)"; simBpmStatus.className = "text-[10px] text-rose-400 font-mono"; }

    if (simHealth) { simHealth.textContent = "62%"; simHealth.className = "text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1 block"; }
    if (simHealthStatus) { simHealthStatus.textContent = "Critical Risk"; simHealthStatus.className = "text-[10px] text-rose-400 font-mono"; }

    if (simBlockers) { simBlockers.textContent = "2"; simBlockers.className = "text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1 block"; }
    if (simBlockerStatus) { simBlockerStatus.textContent = "Auth Schema & CI Drift"; simBlockerStatus.className = "text-[10px] text-rose-300 font-mono"; }

    if (simEta) { simEta.textContent = "+3 Days"; simEta.className = "text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1 block"; }
    if (simEtaStatus) { simEtaStatus.textContent = "Slipping to Next Tuesday"; simEtaStatus.className = "text-[10px] text-rose-400 font-mono"; }

    if (simCardioLabel) simCardioLabel.textContent = "REAL-TIME SPRINT ECG WAVEFORM: BRADYARRHYTHMIA (STALLED PRs)";
    if (simIndicator) { simIndicator.textContent = "⚠️ IMPEDIMENT DETECTED"; simIndicator.className = "text-rose-400 font-bold animate-pulse"; }

    if (simPath) {
      simPath.setAttribute("stroke", "#f43f5e");
      // Flatlined / irregular stuttered wave
      simPath.setAttribute("d", "M 0,50 L 150,50 L 160,48 L 170,52 L 280,50 L 300,35 L 320,65 L 340,50 L 520,50 L 530,48 L 540,52 L 680,50 L 700,40 L 715,60 L 800,50");
    }

    if (simLog) {
      simLog.innerHTML = `<span class="text-rose-400">[12:44:19] ALERT:</span> PR #483 unreviewed for 48h (Auth DB Schema). <strong>PulsePM Autonomous Action:</strong> Pinged Lead Architect (@elena) in Slack #war-room to unblock downstream API tests.`;
    }

    if (simScanner) simScanner.style.animationDuration = "5.0s";
  }

  // Supercharged State
  function applySuperState() {
    resetSimButtons();
    if (simBtnSuper) simBtnSuper.className = "sim-state-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-bold transition-all";

    if (simBpm) simBpm.textContent = "118 BPM";
    if (simBpm) simBpm.className = "text-2xl sm:text-3xl font-extrabold text-cyan-300 mt-1 block";
    if (simBpmStatus) { simBpmStatus.textContent = "Hyper-Velocity Flow"; simBpmStatus.className = "text-[10px] text-cyan-300 font-mono"; }

    if (simHealth) { simHealth.textContent = "100%"; simHealth.className = "text-2xl sm:text-3xl font-extrabold text-teal-300 mt-1 block"; }
    if (simHealthStatus) { simHealthStatus.textContent = "Flawless"; simHealthStatus.className = "text-[10px] text-teal-300 font-mono"; }

    if (simBlockers) { simBlockers.textContent = "0"; simBlockers.className = "text-2xl sm:text-3xl font-extrabold text-teal-300 mt-1 block"; }
    if (simBlockerStatus) { simBlockerStatus.textContent = "All Green Verified"; simBlockerStatus.className = "text-[10px] text-teal-300 font-mono"; }

    if (simEta) { simEta.textContent = "-1 Day Early"; simEta.className = "text-2xl sm:text-3xl font-extrabold text-teal-300 mt-1 block"; }
    if (simEtaStatus) { simEtaStatus.textContent = "Ready Thursday 2:00 PM"; simEtaStatus.className = "text-[10px] text-teal-300 font-mono"; }

    if (simCardioLabel) simCardioLabel.textContent = "REAL-TIME SPRINT ECG WAVEFORM: HIGH-FREQUENCY CADENCE";
    if (simIndicator) { simIndicator.textContent = "⚡ PEAK PRODUCTIVITY"; simIndicator.className = "text-cyan-300 font-bold"; }

    if (simPath) {
      simPath.setAttribute("stroke", "#00d2ff");
      simPath.setAttribute("d", "M 0,50 L 60,50 L 75,20 L 90,80 L 105,50 L 180,50 L 195,10 L 210,90 L 225,50 L 300,50 L 315,15 L 330,85 L 345,50 L 420,50 L 435,10 L 450,90 L 465,50 L 540,50 L 555,20 L 570,80 L 585,50 L 660,50 L 675,10 L 690,90 L 705,50 L 780,50 L 800,50");
    }

    if (simLog) {
      simLog.innerHTML = `<span class="text-cyan-400">[12:44:33] ACCELERATION:</span> 6 PRs merged, 18 checkmarks verified in parallel. Automated test suite finished in 1m 42s. Release build ready for staging.`;
    }

    if (simScanner) simScanner.style.animationDuration = "1.4s";
  }

  if (simBtnNormal) simBtnNormal.addEventListener('click', applyNormalState);
  if (simBtnBlocker) simBtnBlocker.addEventListener('click', applyBlockerState);
  if (simBtnSuper) simBtnSuper.addEventListener('click', applySuperState);

  // Speed Slider Listener
  if (speedSlider) {
    speedSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (sliderLabel) {
        sliderLabel.textContent = `${val.toFixed(1)}x (${val < 1.0 ? 'Delayed' : val === 1.0 ? 'Standard' : 'Accelerated'})`;
      }
      if (simScanner) {
        const baseSpeed = 2.6;
        simScanner.style.animationDuration = `${(baseSpeed / val).toFixed(2)}s`;
      }
    });
  }

  // 4. Billing Toggle (Annual vs Monthly)
  const billingToggle = document.getElementById('billing-toggle');
  const toggleThumb = document.getElementById('toggle-thumb');
  const priceStarter = document.querySelector('.price-starter');
  const pricePro = document.querySelector('.price-pro');
  let isAnnual = true;

  if (billingToggle) {
    billingToggle.addEventListener('click', () => {
      isAnnual = !isAnnual;
      if (isAnnual) {
        toggleThumb.classList.remove('translate-x-1');
        toggleThumb.classList.add('translate-x-7');
        if (priceStarter) priceStarter.textContent = '$19';
        if (pricePro) pricePro.textContent = '$39';
      } else {
        toggleThumb.classList.remove('translate-x-7');
        toggleThumb.classList.add('translate-x-1');
        if (priceStarter) priceStarter.textContent = '$24';
        if (pricePro) pricePro.textContent = '$49';
      }
    });
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('button');
    const answer = item.querySelector('.faq-answer');
    const chevron = item.querySelector('.faq-chevron');

    btn.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');
      // Close all other FAQs
      faqItems.forEach(other => {
        other.querySelector('.faq-answer').classList.add('hidden');
        other.querySelector('.faq-chevron').classList.remove('rotate-180');
      });

      if (!isOpen) {
        answer.classList.remove('hidden');
        chevron.classList.add('rotate-180');
      }
    });
  });

});

// 6. Success Modal Functions
function showSuccessModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}
