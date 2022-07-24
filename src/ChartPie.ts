import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-pie')
export class ChartPie<TData, TLabel = string> extends Chart<'pie', TData, TLabel> {
	override readonly type = 'pie'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-pie': ChartPie<unknown>
	}
}