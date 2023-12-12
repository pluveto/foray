(() => {
    const setupTitleSubs = () => {
        const subtitle = document.querySelector(".header-logo--site-subtitle")
        let state = false
        subtitle.addEventListener("click", function () {
            state = !state
            if (state) {
                subtitle.innerHTML = '{{ T "common.lessbug" }}'
            } else {
                subtitle.innerHTML = '{{ T "common.lessbug2" }}'
            }
        })
    }

    // const loadMostViews = () => {
    //     let url = "https://artalk.cloud.ry.rs/api/stat?type=pv_most_pages&limit=10";
    //     let method = "POST"
    //     fetch(url, {
    //         method: method,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     }).then(function (response) {
    //         return response.json();
    //     }).then(function (data) {
    //         let realData = data.data
    //         let limit = 5
    //         realData = realData.filter(item => item.url.startsWith("/posts")).slice(0, limit)
    //         console.log(realData);
    //         let html = ""
    //         realData.forEach(item => {
    //             html += `<li><a href="${item.url}">${item.title}</a> <span class="tiny-note">(${item.pv})</span></li>`
    //         })
    //         return html
    //     }).then(function (html) {
    //         const elem = document.querySelector("#most-views");
    //         if (elem) elem.innerHTML = html
    //     });
    // }

    // const loadRandomPages = () => {
    //     let url = "https://artalk.cloud.ry.rs/api/stat?type=rand_pages&limit=10";
    //     let method = "POST"
    //     fetch(url, {
    //         method: method,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     }).then(function (response) {
    //         return response.json();
    //     }).then(function (data) {
    //         let realData = data.data
    //         let limit = 5
    //         realData = realData.filter(item => item.url.startsWith("/posts")).slice(0, limit)
    //         console.log(realData);
    //         let html = ""
    //         realData.forEach(item => {
    //             html += `<li><a href="${item.url}">${item.title}</a> <span class="tiny-note">(${item.pv})</span></li>`
    //         })
    //         return html
    //     }).then(function (html) {
    //         const elem = document.querySelector("#rand-pages");
    //         if (elem) elem.innerHTML = html
    //     });
    // }

    document.addEventListener('DOMContentLoaded', function () {
        setupTitleSubs();
    }, false);

    // loadMostViews();
    // loadRandomPages();
})()

window.toggleExpand = function toggleExpand(who) {
    var next = who.nextElementSibling
    console.log(next.style.display)
    next.style.display = next.style.display == 'block' ? 'none' : 'block'
    next.classList.toggle('show')
    who.querySelector(".icon").classList.toggle('bx-rotate-90')
}
