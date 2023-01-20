(() => {
    const setupTitleSubs = () => {
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
    }

    const loadMostViews = () => {
        let url = "https://artalk.cloud.ry.rs/api/stat?type=pv_most_pages&limit=10";
        let method = "POST"
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            let realData = data.data
            let limit = 5
            realData = realData.filter(item => item.url.startsWith("/posts")).slice(0, limit)
            console.log(realData);
            let html = ""
            realData.forEach(item => {
                html += `<li><a href="${item.url}">${item.title}</a> <span class="tiny-note">(${item.pv})</span></li>`
            })
            return html
        }).then(function (html) {
            const elem = document.querySelector("#most-views");
            if (elem) elem.innerHTML = html
        });
    }

    const loadRandomPages = () => {
        let url = "https://artalk.cloud.ry.rs/api/stat?type=rand_pages&limit=10";
        let method = "POST"
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            let realData = data.data
            let limit = 5
            realData = realData.filter(item => item.url.startsWith("/posts")).slice(0, limit)
            console.log(realData);
            let html = ""
            realData.forEach(item => {
                html += `<li><a href="${item.url}">${item.title}</a> <span class="tiny-note">(${item.pv})</span></li>`
            })
            return html
        }).then(function (html) {
            const elem = document.querySelector("#rand-pages");
            if (elem) elem.innerHTML = html
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupTitleSubs();
        loadMostViews();
        loadRandomPages();
    }, false);
})()