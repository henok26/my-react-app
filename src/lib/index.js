// export function getOrderStatus(status) {
// 	switch (status) {
// 		case 'INSUFFICIENT':
// 			return (
// 				<span className="capitalize py-1 px-2 rounded-md text-xs text-black bg-green-700">
// 					{status.replaceAll('_', ' ').toLowerCase()}
// 				</span>
// 			)
// 		case 'SUFFICIENT':
// 			return (
// 				<span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
// 					{status.replaceAll('_', ' ').toLowerCase()}
// 				</span>
// 			)
// 		// case 'SHIPPED':
// 		// 	return (
// 		// 		<span className="capitalize py-1 px-2 rounded-md text-xs text-black bg-green">
// 		// 			{status.replaceAll('_', ' ').toLowerCase()}
// 		// 		</span>
// 		// 	)
// 		// case 'OUT_FOR_DELIVERY':
// 		// 	return (
// 		// 		<span className="capitalize py-1 px-2 rounded-md text-xs text-red-600 bg-green-100">
// 		// 			{status.replaceAll('_', ' ').toLowerCase()}
// 		// 		</span>
// 		// 	)
// 		// case 'DELIVERED':
// 		// 	return (
// 		// 		<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
// 		// 			{status.replaceAll('_', ' ').toLowerCase()}
// 		// 		</span>
// 		// 	)
// 		default:
// 			return (
// 				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
// 					{status.replaceAll('_', ' ').toLowerCase()}
// 				</span>
// 			)
// 	}
// }