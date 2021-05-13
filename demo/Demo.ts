import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { labels, dataSets } from './data/data1'

@customElement('lit-chart-demo')
export class Demo extends LitElement {
	protected render() {
		return html`
			<style>
				:host {
					--min-width: 500px;
					display: flex;
					flex-direction: column;
					margin: auto;
				}
				div {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
					column-gap: 50px;
					row-gap: 50px;
				}
			</style>

			<div>
				<lit-chart-line .labels=${labels} .dataSets=${dataSets}></lit-chart-line>
				<lit-chart-bar .labels=${labels} .dataSets=${dataSets}></lit-chart-bar>
				<lit-chart-bubble .labels=${labels} .dataSets=${dataSets}></lit-chart-bubble>
				<lit-chart-doughnut .labels=${labels} .dataSets=${dataSets}></lit-chart-doughnut>
				<lit-chart-pie .labels=${labels} .dataSets=${dataSets}></lit-chart-pie>
				<lit-chart-polar-area .labels=${labels} .dataSets=${dataSets}></lit-chart-polar-area>
				<lit-chart-radar .labels=${labels} .dataSets=${dataSets}></lit-chart-radar>
				<lit-chart-scatter .labels=${labels} .dataSets=${dataSets}></lit-chart-scatter>
			</div>
		`
	}
}