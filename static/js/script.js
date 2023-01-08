document.addEventListener('DOMContentLoaded', function () {
    const subtitle = document.querySelector(".header-logo--site-subtitle")
    let state = false
    subtitle.addEventListener("click", function () {
        state = !state
        if (state) {
            subtitle.innerHTML = '消灭幺蛾子！'
        } else {
            subtitle.innerHTML = '消灭<s>幺蛾子</s>！'
        }
    })
}, false);