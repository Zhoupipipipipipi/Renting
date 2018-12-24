/* eslint-disable indent */
import request from '@/utils/request'
// 根据查询高校名字的接口
export function getSearchSchool(name) {
  return request({
    url: 'http://119.29.166.254:9090/api/university/getByUniversityName?name=' + name,
    method: 'get'
  })
}

export function CityToSchool(cityname) {
    return request({
      url: 'http://119.29.166.254:9090/api/university/getUniversityByCityName?name=' + cityname,
      method: 'get'
    })
  }
