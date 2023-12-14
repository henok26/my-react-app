export function getOrderStatus(status) {
	switch (status) {
		case 'INSUFFICIENT':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-black bg-red-500">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'SUFFICIENT':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-black bg-green-500">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'SHIPPED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'OUT_FOR_DELIVERY':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'DELIVERED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}