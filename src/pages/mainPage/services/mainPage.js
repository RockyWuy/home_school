/* !
* @author xjq
* date 11/02/2018
* 兑换码service
*/
import qs from 'qs';

// 获取兑换记录列表
export function GetDataSource(params) {
    console.log("GetDataSource")
    return window.requestData(`${window.BASE_URL}/ac-crm/exchange-detail?${qs.stringify(params)}`, {
        method: 'get'
    });
}



// 获取兑换记录统计
export function GetDataTotal(params) {
    return window.requestData(`${window.BASE_URL}/ac-crm/exchange-detail/getStatic?${qs.stringify(params)}`, {
        method: 'get'
    });
}


// 兑换码列表
export function ExchangeCodeList(params) {
    return window.requestData(`${window.BASE_URL}/ac-crm/exchange-code/listStatic?${qs.stringify(params)}`, {
        method: 'get'
    });
}
// 兑换码详情
export function ExchangeDetail(params) {
    return window.requestData(`${window.BASE_URL}/ac-crm/exchange-code?${qs.stringify(params)}`, {
        method: 'get'
    });
}

// 新增兑换码
export function AddExchangeCode(params) {
    return window.requestData(`${window.BASE_URL}/ac-crm/exchange-code`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
}

// 退兑
export function CancelExchange(params) {
    let format_params = params || {};
    let id = format_params.id;
    delete format_params.id;

    return window.requestData(`${window.BASE_URL}/ac-crm/exchange-detail/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(format_params),
    });
}
