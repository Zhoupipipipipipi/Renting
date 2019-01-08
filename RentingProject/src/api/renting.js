import request from '@/utils/request'

export function getHouseList({ pageSize, page, userId }) { // 分页获取房屋列表
  console.log(userId)
  return request({
    url: '/api/houses',
    method: 'get',
    params: {
      pageSize, page, userId
    }
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
