// PulsePM Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = !mobileMenu.classList.contains('hidden');
      if (isExpanded) {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      }
    });

    // Close mobile menu on nav link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      });
    });
  }
});

// 2. Interactive Walkthrough Tab Switcher
function switchWalkthrough(tabName) {
  const tabs = ['dashboard', 'project', 'tasks', 'team', 'chat', 'notifications'];

  tabs.forEach(tab => {
    const pane = document.getElementById(`pane-${tab}`);
    const btn = document.getElementById(`tab-btn-${tab}`);

    if (pane && btn) {
      if (tab === tabName) {
        pane.classList.remove('hidden');
        btn.classList.add('active');
        btn.classList.remove('text-slate-400');
        btn.classList.add('text-white');
      } else {
        pane.classList.add('hidden');
        btn.classList.remove('active');
        btn.classList.add('text-slate-400');
        btn.classList.remove('text-white');
      }
    }
  });
}
