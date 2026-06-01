import './accordion.scss';

export class Accordion {
    private container: HTMLElement;
    private items: NodeListOf<HTMLElement>;

    constructor(container: HTMLElement) {
        this.container = container;
        this.items = this.container.querySelectorAll('.accordion-item');
        this.initialize();
    }

    private initialize() {
        this.items.forEach(item => {
            const header = item.querySelector('.accordion-header') as HTMLElement;
            const content = item.querySelector('.accordion-content') as HTMLElement;

            header.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                this.closeAll();
                if (!isOpen) {
                    item.classList.add('open');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }

    private closeAll() {
        this.items.forEach(item => {
            item.classList.remove('open');
            const content = item.querySelector('.accordion-content') as HTMLElement;
            content.style.maxHeight = '0';
        });
    }
}