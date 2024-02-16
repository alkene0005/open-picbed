// ==UserScript==
// @name         Baidu Test
// @namespace    http://tampermonkey.net/
// @version      5
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/v/popular/rank/all
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    // Your code here...
    const lis = Array.from(document.querySelectorAll('#app > div > div.rank-container > div.rank-list-wrap > ul > li'))

    lis.filter((x, i) => {
        let title = x.querySelector('a.title').innerText
        let up = x.querySelector('span.up-name').innerText
        return title.includes('原神') || up.includes('Warma')
        // 星穹铁道
    }).forEach(x => x.remove())
})();