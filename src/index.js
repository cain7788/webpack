
import './style.css';

import './style2.less';

// 导入图片
import logo from "../images/111.png"




var element = document.createElement("div")

element.innerHTML = `<div class="autoColor colorBlue">
    hello webpack
    <span>hello word</span>
    </div>
    <img src="${logo}" alt=""> 
`

document.body.appendChild(element);