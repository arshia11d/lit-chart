import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-bubble')
export class ChartBubble<TData, TLabel = string> extends Chart<'bubble', TData, TLabel> {
	override readonly type = 'bubble'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-bubble': ChartBubble<unknown>
	}
}