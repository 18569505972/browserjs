const browserType = null
// 针对360与谷歌做出区分
let _mime = (option, value) => {
    let mimeTypes = navigator.mimeTypes;
    for (let mt in mimeTypes) {
        if (mimeTypes[mt][option] == value) {
            return true;
        }
    }
    return false;
}

let getBrowserInfo = (u) => {
    let ua = u.toLocaleLowerCase();
    let browserType = null;
    if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
        browserType = "IE";
    } else if (ua.match(/firefox/) != null) {
        browserType = "火狐";
    } else if (ua.match(/alipay/) != null) {
        browserType = "支付宝";
    } else if (ua.match(/weibo/) != null) {
        browserType = "微博";
    } else if (ua.match(/ucbrowser/) != null) {
        browserType = "UC";
    } else if (ua.match(/opera/) != null || ua.match(/opr/) != null) {
        browserType = "欧朋";
    } else if (ua.match(/baidu/) != null) {
        browserType = "百度";
    } else if (ua.match(/metasr/) != null || ua.match(/sogo/) != null) {
        browserType = "搜狗";
    } else if (ua.match(/liebao/) != null) {
        browserType = "猎豹";
    } else if (ua.match(/2345/) != null) {
        browserType = "2345";
    } else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowser/) != null) {
        if (ua.match(/micromessenger/) == 'micromessenger') {
            browserType = "微信";
            return
        }
        browserType = "QQ";
    } else if (ua.match(/maxthon/) != null) {
        browserType = "遨游";
    } else if (ua.match(/chrome/) != null) {
        let is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
        if (is360) {
            browserType = '360';
        } else {
            browserType = '谷歌';
        }
    } else if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && ua.match(/safari/) != null) {
        browserType = "Safari";
    } else {
        browserType = '未知'
    }
    return browserType
}

export default getBrowserInfo