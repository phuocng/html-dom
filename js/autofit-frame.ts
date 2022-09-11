import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './autofit-frame.styles';

const FRAME_RESIZE_KEY = 'FRAME_RESIZE';

@customElement('autofit-frame')
export class AutofitFrame extends LitElement {
    static styles = styles;

    @property({ type: String })
    src: string = "";

    @query('.frame')
    private _containerEle!: HTMLElement;

    @query('.frame__frame')
    private _frameEle!: HTMLIFrameElement;

    private _bindWindowMessage: (e: MessageEvent) => void = () => {};

    constructor() {
        super();
        this._bindWindowMessage = this._handleWindowMessage.bind(this);
    }

    private _updateHeight() {
        const container = this._containerEle;
        const frameEle = this._frameEle;
        if (!container || !frameEle) {
            return;
        }
        const frameDoc = frameEle.contentDocument;
        if (!frameDoc) {
            return;
        }
        const height = frameDoc.documentElement.scrollHeight;
        if (height > 0) {
            container.style.height = `${height}px`;
        }
    };

    private _handleFrameLoad() {
        const doc = this._frameEle.contentDocument;
        console.log(doc);
        if (!doc) {
            return;
        }
        const script = doc.createElement('script');
        script.append(`
const io = new ResizeObserver(entries => {
    entries.forEach((entry) => {
        window.parent.postMessage({
            channel: '${FRAME_RESIZE_KEY}',
            sender: '${this.src}',
            data: true,
        }, window.location.origin);
    });
});
io.observe(document.body);`);
        doc.documentElement.appendChild(script);

        // Fit the frame
        this._updateHeight();
    }

    private _handleWindowMessage(e: MessageEvent) {
        if (e.data.channel === FRAME_RESIZE_KEY && e.data.sender === this.src) {
            this._updateHeight();
        }
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('message', this._bindWindowMessage);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('message', this._bindWindowMessage);
    }

    render() {
        return html`
            <div class="frame">
                <iframe
                    class="frame__frame"
                    src="${this.src}"
                    @load=${this._handleFrameLoad}
                />
            </div>
            `;
    }
}
