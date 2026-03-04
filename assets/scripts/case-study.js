import { Modal } from "./modal.js";
import { projects } from "./portfolio.js";

const projectTriggers = () => document.querySelectorAll('.j_case_study');

/**
 * Conteúdo HTML para a modal de estudo de caso, gerado dinamicamente com base no projeto selecionado
 * @param {{id: number, name: string, description: string, url: string, images: {thumbnail: string, mobile: string, tablet: string, desktop: string}, details: string}} project - Objeto contendo as informações do projeto para preencher a modal
 * @returns {string} HTML string para o conteúdo da modal de estudo de caso
 */
const caseStudyContainer = (project) => {
    return `
        <div class="krv-case-study">
            <div class="krv-case-study__content">
                <div class="krv-case-study__image">
                    <a href="${project.url}" target="_blank" title="Visitar site">
                        <picture>
                            <source media="(min-width: 992px)" srcset="/assets/images/portfolio/${project.images.desktop}">
                            <source media="(min-width: 576px)" srcset="/assets/images/portfolio/${project.images.tablet}">
                            <img src="/assets/images/portfolio/${project.images.mobile}" alt="${project.name} - ${project.description}">
                        </picture>
                    </a>
                </div>

                <div class="krv-case-study__info">
                    <div class="krv-case-study__details">
                        <h2 class="krv-case-study__title">${project.name}</h2>
                        <div class="krv-case-study__description">
                            ${project.details}
                        </div>
                    </div>
                    <div class="krv-case-study__action-inside">
                        <a href="${project.url}" target="_blank" class="krv-button">Visitar Site</a>
                    </div>
                </div>
            </div>

            <div class="krv-case-study__action-outside">
                <a href="${project.url}" target="_blank" class="krv-button">Visitar Site</a>
            </div>
        </div>
    `;
}

/**
 * Função para abrir modal de estudo de caso ao clicar em um projeto
 */
export const CaseStudy = () => {
    projectTriggers().forEach(trigger => {
        trigger.addEventListener('click', () => {
            const projectId = parseInt(trigger.dataset.id); // Supondo que cada trigger tenha um data-id correspondente ao projeto
            const project = projects.find(p => p.id === projectId); // Busca o projeto pelo ID

            if (project) {
                const content = caseStudyContainer(project);
                Modal(content, true, true);
            }
        });
    });
}