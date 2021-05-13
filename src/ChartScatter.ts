import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-scatter')
export class ChartScatter<TData, TLabel = string> extends Chart<'scatter', TData, TLabel> {
	readonly type = 'scatter'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-scatter': ChartScatter<unknown>
	}
}