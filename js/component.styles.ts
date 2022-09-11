import { css } from 'lit';

export const componentStyles = css`
    :host {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 16px;
    }
    :host *,
    :host *::before,
    :host *::after {
        box-sizing: inherit;
    }
`;
