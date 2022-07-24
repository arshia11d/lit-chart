import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-doughnut')
export class ChartDoughnut<TData, TLabel = string> extends Chart<'doughnut', TData, TLabel> {
	override readonly type = 'doughnut'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-doughnut': ChartDoughnut<unknown>
	}
}