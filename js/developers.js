
var innerContent = document.getElementsByClassName("neebaniy-neobema")[0]
let news = [
    {
        id: 1,
        title: `Артём Епифанцев <a href=\"https://vk.com/j.rojers\" style=\"color: rgb(255, 0, 0); text-decoration: none; font-weight: bold;\">[VK]</a> `,
        desc: '<b>' + "Умеет писать скрипты на:" + '</b> \n LUA, JS \n <b>' +  "О себе:" + '</b> \n Бывший администратор сервера Arizona | Red-Rock, основатель семьи <a href=\"discord.gg/bWqMJSUy3z" style=\"color: rgb(255, 0, 0); text-decoration: none; font-weight: bold;\">Rojers 💸 Squad</a> \n <b>' +  "Контакты" + '</b> \n <a href=\"https://github.com/rojerscripts" style=\"color: rgb(255, 0, 0); text-decoration: none; font-weight: bold;\">github</a> \n <a href=\"https://www.youtube.com/channel/UCpwj8anXkmOOfnsjmJ-rHbA" style=\"color: rgb(255, 0, 0); text-decoration: none; font-weight: bold;\">youtube</a>',
    },
]

if(innerContent) {
    for (var i = 0; i < news.length; i++) {
        var newsObj = news[i]
        var newsStr = `<div class="news-element" id="news-${newsObj.id}">
    <p class="title">${newsObj.title}</p>
    ${newsObj.desc.replace(/\n/g,"<br>")}
</div>`
        innerContent.innerHTML += newsStr
    }
}