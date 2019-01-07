import request from '@/utils/request'

export function getHouseList({ pageSize, page, userId }) {
  console.log(userId)
  return request({
    url: '/api/houses',
    method: 'get',
    params: {
      pageSize, page, userId
    }
  })
}
