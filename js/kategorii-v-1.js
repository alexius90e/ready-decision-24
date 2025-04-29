const kategoriiV1More = document.querySelector('.kategorii-v-1__more');

const kategoriiV1Collapsed = document.querySelector('.kategorii-v-1__collapsed');

if (kategoriiV1More && kategoriiV1Collapsed) {
  kategoriiV1More.addEventListener('click', (event) => {
    const isMoreButton = event.target.classList.contains('kategorii-v-1__more-button');

    if (isMoreButton) {
      kategoriiV1Collapsed.classList.add('active');
      event.currentTarget.classList.add('hidden');
    }
  });
}
