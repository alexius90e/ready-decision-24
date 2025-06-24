const tabyV1ControlsButtons = document.querySelectorAll('.taby-v-1__controls-button');
const tabyV1TabsItems = document.querySelectorAll('.taby-v-1__tabs-item');

tabyV1ControlsButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetTabItemId = event.currentTarget.dataset.tabid;
    updateTabsV1(targetTabItemId);
  });
});

function updateTabsV1(id) {
  const firstTabItemEl = tabyV1TabsItems[0];
  const targetTabItemEl = document.getElementById(id);
  const resultTabEl = targetTabItemEl || firstTabItemEl || null;

  if (resultTabEl) {
    tabyV1TabsItems.forEach((tabItem) => tabItem.classList.remove('active'));
    resultTabEl.classList.add('active');
  }
}

updateTabsV1();
