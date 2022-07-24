import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-radar')
export class ChartRadar<TData, TLabel = string> extends Chart<'radar', TData, TLabel> {
	override readonly type = 'radar'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-radar': ChartRadar<unknown>
	}
}