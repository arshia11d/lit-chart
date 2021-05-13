import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-bar')
export class ChartBar<TData, TLabel = string> extends Chart<'bar', TData, TLabel> {
	readonly type = 'bar'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-bar': ChartBar<unknown>
	}
}