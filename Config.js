const fs = require('fs')
const chalk = require('chalk')

//contact details
global.Owner = ['4915753109114', '436509353999399', '4915222099047'];
global.ownernumber =  ['4915753109114', '436509353999399', '4915222099047'];
global.ownername = 'ꪶ1͢͡3͢3͢7͜͡ꫂ|𝔅𝔯𝔦𝔫𝔤 𝔦𝔱 𝔬𝔫'; // Owner Name
global.ytname = "YT: Soon"
global.socialm = "GitHub: Bring it on"
global.location = "Germany"

global.botname = '1337 Bot' //name of the bot

//sticker details
global.stickername = '1337'
global.packname = 'Sticker By'
global.author = 'ꪶ1͢͡3͢3͢7͜͡ꫂ|𝔅𝔯𝔦𝔫𝔤 𝔦𝔱 𝔬𝔫'
//console view/theme
global.themeemoji = '👑'
global.wm = "ꪶ1͢͡3͢3͢7͜͡ꫂ|𝔅𝔯𝔦𝔫𝔤 𝔦𝔱 𝔬𝔫"

//theme link
global.link = 'https://chat.whatsapp.com/KRKvxj4y5SRD8uqLBFnVjo'

//custom prefix
global.prefa = ['/']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story
global.multiplier = 100


//reply messages
global.mess = {
    done: '*Erledigt!* \n\n*Hail 1337*\n\n*Bot link:* \nhttps://telegra.ph/file/9fb77b8a49fdfd5d55661.jpg\n',
    prem: '*Dieser Befehl kann nur von Premium-Nutzern verwendet werden.*',
    admin: '*Dieser Befehl kann nur von einem Admin verwendet werden.*',
    botAdmin: '*Dieser Befehl kann nur verwendet werden wenn der Bot Gruppenadmin ist.* ',
    owner: '*Dieser Befehl kann nur vom Besitzer des Bots verwendet werden.*',
    group: '*Dieser Befehl ist nur für Gruppen verfügbar.*',
    private: '*Dieser Befehl ist nur für private Chats verfügbar.*',
    wait: '*Bitte warten...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
