import { LitElement } from "lit";
export default class ImageModal extends LitElement {
    static styles: import("lit").CSSResult;
    image: string;
    showWithAnimation: boolean;
    visible: boolean;
    private show;
    connectedCallback(): void;
    willUpdate(_changedProperties: Map<string | number | symbol, unknown>): void;
    onMaskClick(): void;
    render(): "" | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-image-preview": ImageModal;
    }
}
