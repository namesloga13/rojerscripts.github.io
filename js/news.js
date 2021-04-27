
var innerContent = document.getElementsByClassName("ebaniy-neobema")[0]
let repos = [
    {
        id: 1,
        title: `27.04.2021 | Релиз скрипта "Подсчёт онлайна из логов" `,
        desc: "Подробнее о скрипте - <a href=\"https://rojerscripts.github.io/downloads\" style=\"color: rgb(255, 0, 0); text-decoration: none; font-weight: bold;\">перейти</a>",
    },
]

if(innerContent) {
    for (var i = 0; i < repos.length; i++) {ы
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