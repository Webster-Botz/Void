const {default: makeWASocket,delay,DisconnectReason,BufferJSON, useMultiFileAuthState} = require('@whiskeysockets/baileys')
const  mk = require('@hapi/boom')
const CFonts = require('cfonts')
const { color } = require('./lib/color')
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const axios = require('axios')
const bot1 = require('./void')
const pino = require('pino')


CFonts.say('Group Bot', {
        font: 'block',
        align: 'center',
        gradient: ['blue', 'magenta']
        })

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

readline.question(`ENTER LOGIN: `, (name) => {

    console.log(`LOGGING ON ${name}! to port -> ws://localhost:6000`)
    readline.close()


async function connectToWhatsApp () {
    
const { state, saveCreds } = await useMultiFileAuthState(`./session/${name}.session`)


const bot =   makeWASocket({logger:pino({level:'silent'}),printQRInTerminal: true,auth: state})

bot.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(connection === 'close') {
    const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
    console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
    // reconnect if not logged out
    if(shouldReconnect) {
        connectToWhatsApp()
    }
} else if(connection === 'open') {
    console.log(`${name} HAS BEEN SUCCESSFULLY CONNECTED TO WHATSAPP SERVER`)
    
}
})

bot.ev.on('messages.upsert', async (mek) => {
msg = mek.messages[0]
mek = mek.messages[0]
bot1(bot ,msg, mek)
})


bot.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await bot.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
          grpmembernum = metadata.participants.length

                if (anu.action == 'add') {
                let WAuserName = num
                bottext = `Welcome to |   *${metadata.subject}*   | 

*@${WAuserName.split("@")[0]}*

Have fun with us✨

Group Description

${metadata.desc}
`
    let buttonMessage = {
    mentions: [num],
    text: bottext,
    }
bot.sendMessage(anu.id, buttonMessage)

                } else if (anu.action == 'remove') {
                	let WAuserName = num
                    astrotext = `GoodBye 👋, @${WAuserName.split("@")[0]} We wont miss you~!`

    let buttonMessage = {
    mentions: [num],
    text: bottext,
    }
    bot.sendMessage(anu.id, buttonMessage)}}
            } catch (err) {
                console.log(err)
            }
    })
    
	
	bot.ev.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

bot.ev.on ('creds.update', saveCreds)
}

connectToWhatsApp()

})