import { toggleModalScroll } from "./modal-scroll-behavior.js";

const modal = document.querySelector(".j_modal");
const modalBody = document.querySelector('.j_modal_body');
const closeBtn = document.querySelectorAll('.j_close_modal');

/**
 * Função para abrir a modal com o conteúdo específico e controlar o scroll do body
 * @param {string} content - O conteúdo a ser exibido na modal, pode ser um elemento HTML ou uma string HTML
 * @param {boolean} large - Indica se a modal deve ser exibida em tamanho grande (opcional)
 * @param {boolean} notScrolling - Indica se o scroll deve ser desativado (opcional, padrão é false)
 */
export const Modal = (content, large = false, notScrolling = false) => {
    modalBody.innerHTML = content;

    if (large) {
        modal.classList.add('wide');
    } else {
        modal.classList.remove('wide');
    }
    
    if (notScrolling) {
        modal.classList.add('not-scrolling');
    } else {
        modal.classList.remove('not-scrolling');
    }

    modal.classList.add('is-open');
    toggleModalScroll(true);

    closeBtn.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (e.target.classList.contains('j_close_modal')) {
                modal.classList.remove('is-open');
                toggleModalScroll(false);
            }
        }, { once: true }); // Garante que o evento seja adicionado apenas uma vez
    });
}