import request from '@/utils/request'

// 获取选择标签
export function fetchTableId(tableId) {
    return request({
      url: '/tableId/tableId',
      method: 'get',
      params: {
        tableId: tableId
      }
    })
}

export function getcontractbasisdataList(currencyType,deliveryTime,kType,marginType) {
    return request({
      url: '/contractbasisdata/list',
      method: 'get',
      params: {
        currencyType: currencyType,
        deliveryTime: deliveryTime,
        kType: kType,
        marginType: marginType
      }
    })
}