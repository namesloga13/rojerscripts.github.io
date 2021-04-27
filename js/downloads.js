
var innerContent = document.getElementsByClassName("ebaniy-obema")[0]
let repos = [
    {
        id: 1,
        title: "Подсчёт онлайна из логов",
        desc: "Помощник в подсчёте онлайна администрации, лидеров и остальных игроков.",
        desc: "[WARNING] Для правильной работы скрипта вам нужно выключить антивирус.",
        url: "/scripts/online.rar",
    },
]

if(innerContent) {
    for (var i = 0; i < repos.length; i++) {
        var reposObj = repos[i]
        var reposStr = `<div class="repos-element" id="repos-${reposObj.id}">
    <div class="info">
        <p class="title">${reposObj.title}</p>
        ${reposObj.desc.replace(/\n/g,"<br>")}
    </div>
    <a class="download" href="${reposObj.url}" download>Скачать</a>
</div>`
        innerContent.innerHTML += reposStr
    }
}