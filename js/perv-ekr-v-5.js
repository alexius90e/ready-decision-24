
const pervEkrV5ModalConsult = document.querySelector('.perv-ekr-v-5__modal-consult');
const pervEkrV5ModalConsultForm = document.querySelector('.perv-ekr-v-5__modal-consult-form');
const pervEkrV5ConsultButtons = document.querySelectorAll(
  '.perv-ekr-v-5__buttons-consult'
);

if (pervEkrV5ModalConsult && pervEkrV5ModalConsultForm) {
  pervEkrV5ConsultButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pervEkrV5ModalConsult.classList.add('active');
    });
  });

  pervEkrV5ModalConsult.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('perv-ekr-v-5__modal-consult-close-button');
    if (isLayout || isClose) pervEkrV5ModalConsult.classList.remove('active');
  });

  pervEkrV5ModalConsultForm.addEventListener('submit', (event) => {
    event.preventDefault();
    pervEkrV5ModalConsult.classList.remove('active');
  });
}


const pervEkrV5ModalProposal = document.querySelector('.perv-ekr-v-5__modal-proposal');
const pervEkrV5ModalProposalForm = document.querySelector('.perv-ekr-v-5__modal-proposal-form');
const pervEkrV5ModalProposalButtons = document.querySelectorAll(
  '.perv-ekr-v-5__buttons-proposal'
);

if (pervEkrV5ModalProposal && pervEkrV5ModalProposalForm) {
  pervEkrV5ModalProposalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pervEkrV5ModalProposal.classList.add('active');
    });
  });

  pervEkrV5ModalProposal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('perv-ekr-v-5__modal-consult-close-button');
    if (isLayout || isClose) pervEkrV5ModalProposal.classList.remove('active');
  });

  pervEkrV5ModalProposalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    pervEkrV5ModalProposal.classList.remove('active');
  });
}

