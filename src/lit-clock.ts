import {
  html,
  LitElement,
  ReactiveController,
  ReactiveControllerHost,
} from "lit";
import { customElement, state, query, property } from "lit/decorators.js";

export class ClockController implements ReactiveController {
  private readonly host: ReactiveControllerHost;
  private interval = 0;
  date = new Date();

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  hostConnected() {
    console.log("connectedCallback");
    this.interval = setInterval(() => this.tick(), 1000);
  }

  private tick() {
    this.date = new Date();
    this.host.requestUpdate();
  }

  hostDisconnected() {
    clearInterval(this.interval);
  }
}

@customElement("lit-clock")
export default class LitClock extends LitElement {
  private readonly clock = new ClockController(this); // Instantiate
  @query("#input") // Define the query
  inputEl!: HTMLInputElement; // Declare the prop

  @property({ type: Number })
  recordedstamp?: number;

  // Declare the click event listener
  onButtonClick() {
    // Use the query to focus
    const dry = new CustomEvent("time-record", {
      bubbles: true,
      detail: {
        time: this.clock.date,
      },
    });

    this.dispatchEvent(dry);
  }
  @state()
  private count = 1;

  private onCount() {
    this.count++;
  }

  protected firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    console.log("firstUpdated");
  }

  protected updated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    console.log("updated");
  }

  render() {
    return html` <section>
      time now ${this.clock.date}
      <div @click=${this.onCount}>${this.count}</div>
      <slot name="headerChildren"></slot>
      <slot name="slotWithDefault"> <div>swwd</div></slot>

      <br />
      <!-- Bind the click listener -->
      <button @click=${this.onButtonClick}>Click to record time!</button>
      <p>recordedstamp: ${this.recordedstamp}</p>
    </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-clock": LitClock;
  }
}
