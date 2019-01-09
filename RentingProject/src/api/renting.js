import request from '@/utils/request'

export function getHouseList(data) { // 分页获取房屋列表
  return request({
    url: '/api/houses',
    method: 'get',
    params: data
  })
}

export function getOneHouseInfo(id) { // 根据单个房屋ID获取详细房屋信息
  return request({
    url: '/api/house',
    method: 'get',
    params: {
      id
    }
  })
}

export function addHouse(data) { // 插入单个房屋信息
  return request({
    url: '/api/auth/house',
    method: 'post',
    data: data
  })
}

export function editHouse(data) { // 插入单个房屋信息
  return request({
    url: '/api/auth/house',
    method: 'put',
    data: data
  })
}

export function delHouse(data) { // 删除单个房屋信息
  return request({
    url: '/api/auth/house',
    method: 'delete',
    data: data
  })
}

export function orderRoom(data) { // 预约房子
  return request({
    url: '/api/auth/order',
    method: 'post',
    data: data
  })
}

export function getOrderRoom(data) { // 获取预约列表
  return request({
    url: '/api/auth/user/orders',
    method: 'get',
    params: data
  })
}
