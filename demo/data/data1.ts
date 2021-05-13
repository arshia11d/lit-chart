import { ChartDataset } from 'chart.js'

export const labels = ['1', '2', '3', '4']

export const dataSets: Array<ChartDataset> = [
	{
		label: 'Increasing',
		data: [1, 2, 3, 4],
		borderColor: 'teal',
	},
	{
		label: 'Decreasing',
		data: [4, 3, 2, 1],
		borderColor: 'red',
	},
]