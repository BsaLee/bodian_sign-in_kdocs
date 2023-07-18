//2023-07-18
// 这是一个多ID的波点音乐签到程序
// 虽然活动入口已经没有了，但是签到还可领取会员
// 只需要修改第5行的ID，其他不要动
// ↓↓↓↓↓↓下边这个数组中的数字改为你要签到的ID↓↓↓↓↓↓↓
var uidArray = [12345, 23456, 33333, 55668];
for (var i = 0; i < uidArray.length; i++) {
  var url = "https://bd-api.kuwo.cn/api/ucenter/vip/give/popup?action=play&uid=" + uidArray[i] + "&token=137acd3e6d8876020741da2ef35a316b";
  let resp = HTTP.get(url, {
    headers: {
      plat: "ip",
      channel: "appstore",
      brand: "iPhone13,1",
      devid: "7A03C7BC-26F2-4482-9031-E14CFC11CF33",
      ver: "3.2.3"
    },
    body: JSON.stringify({ foo: "bar" })
  });
  console.log(resp.text());
  Time.sleep(1000)
}
