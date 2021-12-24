import { customElement, state } from "lit/decorators.js";
import { html, LitElement } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("clock-wrapper")
export default class ClockWrapper extends LitElement {
  private time: Date | null = null;

  @state()
  private recordedstamp?: number;

  private onRecordTime(e: CustomEvent<{ time: Date }>) {
    this.time = e.detail.time;
    this.recordedstamp = Date.now();
  }
  render() {
    const nowTime = this.time ? `<div>time recorded: ${this.time}</div>` : "";
    return html`${nowTime}
      <div @time-record=${this.onRecordTime}>
        <lit-clock recordedstamp=${ifDefined(this.recordedstamp)}></lit-clock>
      </div> `;
  }
}
