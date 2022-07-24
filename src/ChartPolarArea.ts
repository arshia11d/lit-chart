import { customElement } from 'lit/decorators.js'
import { Chart } from './Chart'

@customElement('lit-chart-polar-area')
export class ChartPolarArea<TData, TLabel = string> extends Chart<'polarArea', TData, TLabel> {
	override readonly type = 'polarArea'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-polar-area': ChartPolarArea<unknown>
	}
}