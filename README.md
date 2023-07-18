# 波点音乐自动每日签到领取vip
# 无需服务器
# 抄袭的隔壁阿里云盘签到~
# 1、进入金山文档网页版 https://www.kdocs.cn/
# 2、随便新建一个空表格，点击【效率】-【高级开发】-【AirScript脚本编辑器】
# 3、点击【创建脚本】-【文档共享脚本】
# 4、创建成功后随便命名，我这里命名为：波点签到
# 5、点击【服务】-【添加服务】
# 6、添加网络API服务就行
# 7、将以下代码复制到编辑器中
```JavaScript
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
```
# 8、去波点音乐app看自己的id【波点音乐-我的-头像-编辑资料-ID】
# 9、将ID填写到第6行的数组中
# 10、脚本中，点击上方的【保存】按钮，再点击【运行】按钮
# 11、关闭代码编辑框，点击【效率】-【高级开发】-【定时任务】
# 12、点击【创建任务】
# 13、设置每天运行的时间，选择刚刚选择的脚本，保存，大功告成
![alt text]([/path/to/img.jpg](https://github.com/BsaLee/bodian_sign-in_kdocs/blob/main/aa1dba530c1f056a86971d751d2983a.jpg?raw=true)https://github.com/BsaLee/bodian_sign-in_kdocs/blob/main/aa1dba530c1f056a86971d751d2983a.jpg?raw=true "Title")
