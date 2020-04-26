//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click', showWindowHref);

function showWindowHref() {
    let begin = url.value.indexOf("name=") + 5;
    let end = url.value.indexOf("&");
    url_result.value = url.value.substring(begin, end);
}

//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
mul.value = 1;
let minute = new Date().getMinutes();
let times = 0;
const time = window.setInterval("timeTest()", 5000);

function timeTest() {
    times++;
    if (times <= 10 && new Date().getMinutes() === minute) {
        mul.value *= 2;
    } else window.clearInterval(time);
}

//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click', arrSameStr);

function arrSameStr() {
    let most_char = [[most.value.charAt(0),0]];
    let most_char_position = 0;
    for(let i = 0 ; i < most.value.length ; i++){
    	let times = 0;
        for(let j = 0 ; j< most_char.length ; j++){
            if(most.value.charAt(i) === most_char[j][0]){
            	most_char[j][1]++;
            	times++;
            }
            else times = 0;
        }
        if(times === 0 ){
        	most_char.push([most.value.charAt(i), 1]);
        }
    }

    for(let i=0 ; i<most_char.length ; i++){
    	if(most_char[i][1]>most_char[most_char_position][1]){
    		most_char_position = i;
    	}
    }
    result.value = "";
    for(let i=0 ; i<most_char.length ; i++){
    	if(most_char[i][1]===most_char[most_char_position][1]){
        result.value += "The most character is:" + most_char[i][0] + "    times:" + most_char[i][1] +"   ";
        }
    }
}
