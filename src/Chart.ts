import { LitElement, html, PropertyValues } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { Chart as ChartJS, ChartDataset, ChartOptions, ChartType, Plugin } from 'chart.js'

@customElement('lit-chart')
export class Chart<TType extends ChartType, TData, TLabel = string> extends LitElement {
	private static readonly chartRelatedProperties = new Array<keyof typeof Chart.prototype>('type', 'labels', 'dataSets', 'options', 'plugins')

	@property({ type: String }) type!: ChartType

	@property({ type: Array }) labels = new Array<TLabel>()

	@property({ type: Array }) dataSets = new Array<ChartDataset<TType, Array<TData>>>()

	@property({ type: Object }) options?: ChartOptions<TType>

	@property({ type: Array }) plugins?: Array<Plugin<TType>>

	protected updated(changedProperties: PropertyValues<this>) {
		const shallUpgradeChart = Array.from(changedProperties.keys())
			.some(key => Chart.chartRelatedProperties.includes(key as keyof typeof Chart.prototype))

		if (shallUpgradeChart) {
			this.upgradeChart()
		}

		super.updated(changedProperties)
	}

	private _chart?: ChartJS<TType, Array<TData>, TLabel>
	protected get chart() { return this._chart }

	@query('canvas') protected readonly canvasElement!: HTMLCanvasElement

	protected render() {
		return html`
			<style>
				:host {
					position: relative;
					display: block;
				}
			</style>
			<canvas></canvas>
		`
	}

	protected upgradeChart() {
		if (!this.type)
			return

		this._chart = new ChartJS(this.canvasElement, {
			type: this.type as TType,
			data: {
				labels: this.labels,
				datasets: this.dataSets,
			},
			options: this.options,
			plugins: this.plugins
		})
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart': Chart<ChartType, unknown>
	}
}