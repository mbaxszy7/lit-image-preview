import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("image-modal")
export default class ImageModal extends LitElement {
  static styles = css`
    .lit-image-preview-mask {
      position: fixed;
      inset: 0;
      z-index: 1000;
      height: 100%;
      background-color: #00000073;
    }
    .lit-image-preview-wrap {
      width: 90%;
      max-width: 1024px;
      margin: 0 auto;
      margin-top: 28px;
    }
    .lit-image-preview-image {
      position: relative;
      padding-bottom: 56%;
      z-index: 1000;
    }
    .lit-image-preview-image img {
      width: 100%;
      background: white;
      position: absolute;
    }
    @keyframes lit-image-preview-ani {
      from {
        transform: scale(0);
        transform-origin: center center;
      }
      to {
        transform: scale(1);
        transform-origin: center center;
      }
    }
  `;
  @property({ type: String })
  image = "";

  @property({ type: Boolean })
  showWithAnimation = false;

  @property({ type: Boolean })
  visible = false;

  @state()
  private show = false;

  private onPreview() {
    this.show = !this.show;
    console.log(this.show, "onPreview");
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.show = this.visible;
  }

  willUpdate(_changedProperties: Map<string | number | symbol, unknown>): void {
    if (_changedProperties.has("visible")) {
      this.show = this.visible;
    }
  }

  render() {
    if (!this.show) return "";
    return html`
      <div class="lit-image-preview-root">
        <div class="lit-image-preview-mask" @click=${this.onPreview}></div>
        <div class="lit-image-preview-wrap">
          <div class="lit-image-preview-image">
            <img
              src=${this.image}
              style=${styleMap(
                this.showWithAnimation
                  ? {
                      animation: "lit-image-preview-ani 0.2s ease-out",
                    }
                  : {}
              )}
            />
          </div>
        </div>
      </div>
    `;
  }
}
