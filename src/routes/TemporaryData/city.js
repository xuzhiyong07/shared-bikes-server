/**
 * 模拟数据
 */
const city = {}
// 开通城市
city.openCity = [
    {
        key: 1,
        id: 12,
        name: '上海',
        mode: 1,
        op_mode: 1,
        franchisee_name: 'n',
        city_admins: [
            { name: 'xu', userId: '001' },
            { name: 'pang', userId: '002' }
        ],
        open_time: '2021-01-04 10:23:30',
        update_time: new Date(),
        sys_user_name: 'xuzhiy'
    },
    {
        key: 2,
        id: 13,
        name: '北京',
        mode: 1,
        op_mode: 1,
        franchisee_name: 'bj',
        city_admins: [
            { name: 'xu', userId: '001' },
            { name: 'pang', userId: '002' }
        ],
        open_time: '2021-01-04 10:23:30',
        update_time: new Date(),
        sys_user_name: 'xuzhiy'
    }
]

module.exports = city
