class Accordion {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.activeIndex = 0;

        this.init();
    }

    init() {
        // isValidSelector
        // isValidData

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: nerasta vieta...');
            return false;
        }

        this.render();
        this.addEvents();
    }

    render() {
        let HTML = '';

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            HTML += `<div class="item ${i === this.activeIndex ? 'active' : ''}">
                        <div class="top">
                            <div class="title">${item.title}</div>
                            <div class="icons">
                                <div class="expand">+</div>
                                <div class="collaps">-</div>
                            </div>
                        </div>
                        <div class="bottom">${item.content}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
        this.DOM.classList.add('accordion');
    }

    addEvents() {
        const allTopDOM = this.DOM.querySelectorAll('.item > .top');

        for (let i = 0; i < allTopDOM.length; i++) {
            const top = allTopDOM[i];

            top.addEventListener('click', () => {
                this.updateAccordion(allTopDOM, top, i);
            });

            // top.addEventListener('click', () => {
            //     allTopDOM[this.activeIndex].closest('.item').classList.remove('active');
            //     top.closest('.item').classList.add('active');
            //     this.activeIndex = i;
            // });
        }
    }

    updateAccordion(allTopDOM, top, i) {
        allTopDOM[this.activeIndex].closest('.item').classList.remove('active');
        top.closest('.item').classList.add('active');
        this.activeIndex = i;
    }
}

export { Accordion }