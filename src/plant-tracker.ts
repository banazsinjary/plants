import {
  html,
  css,
  LitElement,
  property,
  customElement,
  query,
} from 'lit-element';

interface WaterEntry {
  day: string;
  time: string;
  plant: string;
}
@customElement('plant-tracker')
export class YourWebComponent extends LitElement {
  @property({ type: Array }) entries: WaterEntry[] = [
    { day: 'Monday', time: 'Morning', plant: 'Aloe' },
  ];

  @query('#day-input') private dayInput!: HTMLInputElement;

  @query('#time-input') private timeInput!: HTMLInputElement;

  @query('#plant-input') private plantInput!: HTMLInputElement;

  private addEntry() {
    const newEntry = {
      day: this.dayInput.value,
      time: this.timeInput.value,
      plant: this.plantInput.value,
    };
    this.entries = [...this.entries, newEntry];
  }

  render() {
    return html`
      Day: <input type="text" id="day-input" /> Time:
      <input type="text" id="time-input" /> Plant:
      <input type="text" id="plant-input" />
      <input type="button" value="submit" @click=${this.addEntry} />

      <table>
        <tr>
          <td>day</td>
          <td>time</td>
          <td>plant</td>
        </tr>
        ${this.entries.map(
          entry =>
            html`<tr>
              <td>${entry.day}</td>
              <td>${entry.time}</td>
              <td>${entry.plant}</td>
            </tr>`
        )}
      </table>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--your-webcomponent-text-color, #000);
    }
  `;
}
