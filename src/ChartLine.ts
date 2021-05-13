import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-line')
export class ChartLine<TData, TLabel = string> extends Chart<'line', TData, TLabel> {
	readonly type = 'line'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-line': ChartLine<unknown>
	}
}