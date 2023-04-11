require("./config.js")
const {default: makeWASocket,DisbotectReason,BufferJSON,MessageType, MessageOptions, Mimetype, useMultiFileAuthState, 
getContentType, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, downloadAndSaveMediaMessage } = require('@adiwajshing/baileys')
const axios = require('axios')
const color = require('./lib/color')
const { spawn, exec, execSync } = require("child_process");
const crypto = require('crypto')
const fs = require('fs')
const rio = require("yt-search")
const ytdl = require('ytdl-core')




module.exports = bot1 = async(bot, m, msg, mek, store) => {

     try {
        global.prefix
        global.blocked
        const prefix = '' //put your prefix of your choice



//=================================================//
    const { QuickDB } = require("quick.db");
    const db = new QuickDB(); // will make a json.sqlite in the root folder
    const tb = db
    const gp = tb
//=================================================//
    
    
const mek = msg



//=================================================//
const sotoy = [
  '🍊 : 🍒 : 🍐',
  '🍒 : 🔔 : 🍊',
  '🍇 : 🍇 : 🍐',
  '🍊 : 🍋 : 🔔', //ANKER
  '🔔 : 🍒 : 🍐',
  '🔔 : 🍒 : 🍊',
  '🍊 : 🍋 : ??',        
  '🍐 : 🍒 : 🍋',
  '🍐 : 🍒 : 🍐',
  '🍊 : 🍒 : 🍒',
  '🔔 : 🔔 : 🍇',
  '🍌 : 🍇 : 🔔',
  '🍐 : 🔔 : 🔔',
  '🍊 : 🍋 : 🍒',
  '🍋 : 🍋 : 🍋 Win👑',
  '🔔 : 🔔 : 🍇',
  '🔔 : 🍇 : 🍇', 
  '🔔 : 🍐 : 🔔',
  '🍌 : 🍌 : 🍌 Win👑'
  ]
 
//=================================================// 
 
 const cekUser = (users, id) => {     

var cek = null

Object.keys(user).forEach((i) => { 

if (user[i].id === id){ cek = i } })

if (cek !== null){ 

if (users == "id"){ return user[cek].id }

if (users == "ban"){ return user[cek].ban }

if (users == "premium"){ return user[cek].premium }

}

if (cek == null) return null

}

	
 
 
//=================================================//
  const from = mek.key.remoteJid
        const type = getContentType(msg.message)
    const body = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 
'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && 
mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && 
mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && 
mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && 
mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 
'templateButtonReplyMessage') && mek.message.templateButtonReplyMessage.selectedId ? 
mek.message.templateButtonReplyMessage.selectedId : ''
    const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''   
const sender = mek.key.participant
    const args = body.trim().split(/ +/).slice(1)
    const ter = args.join(' ')
    const isCmd = body.startsWith(prefix)               
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''    
   let text = body.replace(command, '')        
              .slice(1)
        .trim()
            const botNumber = bot.user.id.split(':')[0]   
 const isGroup = from.endsWith('@g.us')
 const ownerNumber = [`@s.whatsapp.net`]//Put your Number
 const isOwner = ownerNumber.includes(sender)
 const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
    const isQuoted = type == 'extendedTextMessage'
     const pushname = mek.pushName 
     const quoted = mek.quoted ? mek.quoted : mek
     const mime = (quoted.msg || quoted).mimetype || '';
const isMedia = /image|video|sticker|audio/.test(mime);
    const reply = async(teks) => {await bot.sendMessage(from,{text: teks},{quoted:msg})}        
    const moment = require('moment-timezone')
    const q = args.join(' ')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
        const isAntilink = isGroup ? antilink.includes(from) : false

             const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')   
         const groupMetadata = isGroup ? await  bot.groupMetadata(from) : ''   
         const groupMembers = isGroup ? groupMetadata.participants : "";
             const groupName = isGroup ? groupMetadata.subject : ''
         const participants = isGroup ? await groupMetadata.participants : ''   
         const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
         const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isGroupban = groupban.includes(from)
//=================================================//
          //DATABASE

const groupban = JSON.parse(fs.readFileSync('./groupban.json'))
const { mku, mk } = require("./database/dataschema.js");
//=================================================//   



//=================================================//
    if (isGroup) {
  try {
const getmemex = groupMembers.length
if (getmemex >= memberlimit) {
  await reply(`Bye 👋`)
bot.groupLeave(from) // ur cods

}

  } catch (e) {

console.log(e)

  }

}
//=================================================//

//=================================================//
          const antipig = JSON.parse(fs.readFileSync("./database/antipig.json"));
          const isAntipig = isGroup ? antipig.includes(from) : false;
          if (isGroup && isAntipig && !mek.key.fromMe) {
            if (sender.match("+1")) {
             reply(`Pig Detected\n@${sender.split("@")[0]}❗`);
              await
bot.groupParticipantsUpdate(from, [sender], 'remove')
           
            }

          }

          if (isGroup && isAntipig && !mek.key.fromMe) {

            if (sender.match("+92")) {
              reply(`Pig Detected\n@${sender.split("@")[0]}❗`);
              
              await
bot.groupParticipantsUpdate(from, [sender], 'remove')
            }

          }

          if (isGroup && isAntipig && !mek.key.fromMe) {

            if (sender.match("+212")) {

              reply(`Pig Detected\n@${sender.split("@")[0]}❗`);
              await
bot.groupParticipantsUpdate(from, [sender], 'remove')
            }

          }
//=================================================//
/////////// -  DM chatbot (Delete this part to turn off DM Chat Bot) - //////////////////
/*
if (!isGroup && !isCmd){
  const webreply = await axios.get(`http://api.brainshop.ai/get?bid=160318&key=YI5BtYzP7G9IE6F9&uid=[uid]&msg=[${budy}]`)
  txt = `${webreply.data.cnt}`
  reply(txt)
  }
*/
//////////////////////////////////////////////////////////////////////////////////////


//=================================================//


//=================================================//


await bot.updateProfileStatus(`3rinity Developed By Lexis`).catch((_) => _);
      
//========================//
//ANTILINK
if (isGroup && isAntilink && !mek.key.fromMe) {
    if (budy.includes("https://")) {
      if (isGroupAdmins) return reply("Only admin allowed");
      reply("Group Link Detected!!");
      
await bot.sendMessage(from,

			    {

			        delete: {

			            remoteJid: from,

			            fromMe: false,

			            id: mek.key.id,

			            participant: mek.key.participant

			        }

			    })


bot.groupParticipantsUpdate(from, [sender], 'remove')
    }
  }
   //=================================================// 
   
//=================================================//  

           if(isCmd){       

   const reactionMessage = {         

             react: {           

             text: `✅`,              

             key: mek.key,

            },

          };

               await bot.sendMessage(from, reactionMessage);

          }

         
//=================================================//          
          

          
//=================================================//
          /// SERIAL
        
//=================================================//


//=================================================//
    if (isCmd) console.log(color('[EXEC]'), color(time, 'white'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))

    if (!isCmd) console.log(color('[MESS]'), color(time, 'white'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
   

    if (budy.startsWith('>')) {
if (!isOwner) return reply('Only Legions can use.')
      
      try {
          let evaled = await eval(budy.slice(2))
          if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          await reply(evaled)
      } catch (err) {
          await reply(String(err))
      }
  }
//=================================================//  
let jd = rn[Math.floor(Math.random() * rn.length)];
    // =_=_=_=_=_=_=_=_=_=_=_  AUTO READ _=_=_=_=_ _=_=_=_=_ _=_=_=_=_ _=_=_=_=_ _=_=_=_=_
    // auto read
    if (command) {
      bot.sendPresenceUpdate(jd, from);
      bot.readMessages([mek.key]);
    }
    
//=================================================//

     switch (command){

      case '3rinity':

        if (!isGroup) return reply("This command can only be used in group!")
        reply(`Hello I was Built By Lexis😎`)

        break
         case 'gclimit':
    if (!isOwner) return reply('_Only Botadmins_')
        reply(`${groupName} Has:- ${memberlimit} Limit!`)
          break

        case 'set-gclimit':
     if (!isOwner) return reply('_Only Botadmins_')

         break
      case 'oleave':
     case 'o-l':
     case '👋':
   if (!isLegion) return reply('_Only Botadmins_')
      reply(`Good bye members of ${groupName}\n\nJoin our Support Group Below\nSupport:👉`)
   bot.groupLeave(from)
break

case 'play': case 'song': case 'ytplay': {

        if (!isGroup) return reply("This command can only be used in group!")
if(!text) return bot.sendMessage(from,{text:"Pls enter song name to play!"},{quoted:mek})
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[0]
let buttons = [
{buttonId: `${prefix}ytad ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `${prefix}ytvd ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}

]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `「  _3rinity Youtube Player 2.0_  」

*Title :* ${anu.title}

*Duration :* ${anu.timestamp}
*Viewers :* ${anu.views}
*Uploaded :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
footer: `🧣3rinity\nDeveloped By Lexis🧧`,
buttons: buttons,
headerType: 4,

}
bot.sendMessage(from, buttonMessage, { quoted: mek })
}
break

case 'ytad': case 'mp3': {
  const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
      if (args.length === 0) {
        reply(`❌ URL is empty! \nSend ${prefix}yta url`);
        return;
      }
      let urlYt = args[0];
      if (!urlYt.startsWith("http")) {
        reply(`❌ Give youtube link!`);
        return;
      }
      let infoYt = await ytdl.getInfo(urlYt);
      //30 MIN
      if (infoYt.videoDetails.lengthSeconds >= 1800) {
        reply(`❌ Video too big!`);
        return;
      }
      let titleYt = infoYt.videoDetails.title;
      let randomName = getRandom(".mp3");
    
      const stream = ytdl(urlYt, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
      }).pipe(fs.createWriteStream(`./Mp3/${randomName}`));
      console.log("Audio downloading ->", urlYt);
      // reply("Downloading.. This may take upto 5 min!");
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
      });
    
      let stats = fs.statSync(`./Mp3/${randomName}`);
      let fileSizeInBytes = stats.size;
      // Convert the file size to megabytes (optional)
      let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
      console.log("Audio downloaded ! Size: " + fileSizeInMegabytes);
      if (fileSizeInMegabytes <= 40) {
          bot.sendMessage(
           from,
          {
            audio: fs.readFileSync(`./Mp3/${randomName}`),
            fileName: titleYt + ".mp3",
            mimetype: "audio/mpeg",
          },
          { quoted:mek }
        );
      } else {
        reply(`❌ File size bigger than 40mb.`);
      }
     fs.unlinkSync(`./Mp3/${randomName}`);
  }
break 
case 'ytvd': case 'mp4': {
  const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
      if (args.length === 0) {
        reply(`❌ URL is empty! \nSend ${prefix}ytv url`);
        return;
      }
      let urlYt = args[0];
      if (!urlYt.startsWith("http")) {
        reply(`❌ Give youtube link!`);
        return;
      }
      let infoYt = await ytdl.getInfo(urlYt);
      //30 MIN
      if (infoYt.videoDetails.lengthSeconds >= 1800) {
        reply(`❌ Video file too big!`);
        return;
      }
      let titleYt = infoYt.videoDetails.title;
      let randomName = getRandom(".mp4");
    
      const stream = ytdl(urlYt, {
        filter: (info) => info.itag == 22 || info.itag == 18,
      }).pipe(fs.createWriteStream(`./Mp4/${randomName}`));
      //22 - 1080p/720p and 18 - 360p
      console.log("Video downloading ->", urlYt);
      // reply("Downloading.. This may take upto 5 min!");
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
      });
    
      let stats = fs.statSync(`./Mp4/${randomName}`);
      let fileSizeInBytes = stats.size;
      // Convert the file size to megabytes (optional)
      let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
      console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
      if (fileSizeInMegabytes <= 100) {
      bot.sendMessage(
          from,
          {
            video: fs.readFileSync(`./Mp4/${randomName}`),
            caption: `${titleYt}`,
          },
          { quoted: mek }
        );
      } else {
        reply(`❌ File size bigger than 40mb.`);
      }
    
      fs.unlinkSync(`./Mp4/${randomName}`);
  }
break

case "k":
        case "_":
          if (!isOwner) return reply('Only Legions can use.')
        if (!isGroup) return reply('this feature is only for groups');
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag the target you want to kick!");

        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;

        if (mentioned.length > 1) {
bot.groupParticipantsUpdate(from, [mentioned], 'remove')
          //bot.groupRemove(from, mentioned);

          reply('DONE!');

        } else if (mentioned.length < 1) {

          anu = mek.message.extendedTextMessage.contextInfo.participant;
bot.groupParticipantsUpdate(from, [anu], 'remove');
          //bot.groupRemove(from, [anu]);

          reply('DONE!');

        } else {
bot.groupParticipantsUpdate(from, [mentioned], 'remove')
          //bot.groupRemove(from, mentioned);

          reply('DONE!');

        }

        break;

        case 'opengc':

          case 'o':

       if (!isGroup) return reply('this feature is only for group')
         if (!isGroupAdmins) return reply('this feature is only for admins')
bot.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`DONE!`)).catch((err) => reply(jsonformat(err)))
         break

         case 'closegc':
                         case 'c':

         if (!isGroup) return reply('this feature is only for group')
         if (!isGroupAdmins) return reply('this feature is only for admins')
bot.groupSettingUpdate(from, 'announcement').then((res) => reply(`DONE!`)).catch((err) => reply(jsonformat(err)))
       break

       case 'tagall':
case 'ping':

if (!isGroup) return reply('This Command can only be used in Groups')

         if (!isGroupAdmins) return reply('Only admins are allowed to use this CMD')
if(q) { var Text =`📌 *Message - ${q}*\n*🍁 Group name - ${groupName}*` } else {  var Text = `*${groupName}*`}

let menText = `${Text}\n*💫 ping by - ${pushname}*\n*🕛 time - ${time}*\n\n`
for (let memNum of participants) {
    
    if( groupAdmins.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'} 
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
bot.sendMessage(from,{text:menText,mentions: participants.map(a => a.id)},{quoted:mek})
break

case 'bc': {
  if (!isOwner) return reply('Only Legions can use.')
                  if (!ter) return reply(" No query provided!")
                  const bct = ter
                  let getGroups = await bot.groupFetchAllParticipating()
                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                  let anu = groups.map(v => v.id)
                  reply(` Broadcasting in ${anu.length} Group Chat, in ${anu.length * 1.5} seconds`)
                  for (let i of anu) {
                      //await sleep(1500)
  
    let txt = `*3rinity Ai*\n\n🍀 *Author:* ${pushname}\n\n🔖 *Message:* ${bct}`
  await bot.sendMessage(i, { video: { url: "https://telegra.ph/file/3c3f94c8463e7f9c29d73.mp4" }, mimetype: 'video/mp4', fileName: `bc.mp4`, caption: `${txt}` })
                      }
                  reply(`Successfuly Broadcasted in ${anu.length} Groups`)
              }
              break  

              case 'gimage':case 'image': {

               if (!isGroup) return reply('This command only be used in groups')
                    if (!ter) return reply(` No query provided!`)
                    let gis = require('g-i-s')
                    gis(ter, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    bot.sendMessage(from, { image: { url: images }, caption: "Here you go" }, { quoted: mek })
                    })
                    }
                    break

                    case 'gamble':
if (isGroup) {

        let rn = Math.floor(Math.random() * 2) + 1
        const userExp = await tb.get(`${sender}.exp`)
        const userGold = await tb.get(`${sender}.gold`)
        if (userGold < 50) return reply('You must have 50 gold or more to gamble')
        const az = body.split(' ')
        let no = (Number(az[1])) ? Number(az[1]) : 0
        if (!az[1] || !az[2]) return reply('You must specify how much gold you want to gamble')
        if (!no) return reply( 'Wrong Format [Gold Amount not Specified]')
        console.log(az)
        if (az[2].toLowerCase().trim() !== 'left' && az[2].toLowerCase().trim() !== 'right') return reply('Wrong Format [L/R]')
        if (no < 50) return reply( 'You can\'t gamble less than 50 gold')
        if (userGold-no < 0) return reply( 'You don\'t have the specified amount of gold')
        if ((rn == 1 && az[2].toLowerCase().trim() == 'right') || (rn == 2 && az[2].toLowerCase().trim() == 'left')) { 
          const al = userGold+no
         await tb.set(`${sender}.gold`, al)
          return await reply( `🎊️ You won *${az[1]}* gold`)
        }
        const SW = (az[2] == 'right') ? 'left' : 'right' 
        const lg = userGold-no
       await tb.set(`${sender}.gold`, lg)
        return await reply(`🥀️ You lost *${az[1]}* gold`)
      }
        break

        case'wallet':

				if (!isGroup) return reply('this feature is only for groups')

        const ig = args.join(' ')
    const  e = await db.get(`${sender}.gold`, ig)
      const gold = (e) ? e : 0
      const  e3 = await db.get(`${sender}.diamonds`)
      const diamonds = (e3) ? e3 : 0


await bot.sendMessage(
  from, 
  { 
      video: fs.readFileSync("Media/wallet.mp4"), 
      caption: `@${sender.split("@")}'s Wallet

🪙 GOLD : ${gold}

💎 DIAMONDS : ${diamonds}
`,
      gifPlayback: true
  }
)
break
      


case 'report': case 'suggest ': {

      if (!isGroup) return reply('this feature is only for groups')
  if (!text) return reply(`please provide a report message you want to deliver`)
  if (text.length > 300) return reply(`Are you trying to send virus!`)
  const txtmsg = `*📮 Report Message*\n\n*Sender ➛* wa.me/${sender.split("@")[0]}\n\n*Group Name ➛* ${groupName}\n\n*Message ➛*  ${text}`
for (let mod of ownerNumber.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '2348149419403@s.whatsapp.net'))
await bot.sendMessage(`${mod}`, {text: `${txtmsg}`},  { quoted: mek })
await bot.sendMessage(`2348149419403@s.whatsapp.net`, {text: `${txtmsg}`, mentions: groupAdmins}, { quoted: mek })
  reply(`*✅ Your Report has been submitted Successfully to Support group & Owner*\n\n*You will get response shortly ♥️*`);

}
break 

case 'act':

     if (!isGroup) return reply('this feature is only for groups')
     if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
            
           const arg = body.trim().split(' ')
           if (isGroup)  {
            if (arg[1].toLowerCase() == 'cardgame') {
              if(card > 10) return reply(`cardgame is already active on ${groupName}`)
          henti3 = 12
          await tb.set(`${from}.card`, henti3)
          return reply(`cardgame is now registered on *${groupName}* `)
          
            }
        }
               break
 case 'grouplink': case 'gclink': {
				if (!isGroup) return reply('this feature is only for groups')
				if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
 let response = await bot.groupInviteCode(from)
 bot.sendMessage(from, {text:`*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 //mimetype: "image/jpeg",
 text: `lexes`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `webster`,
// "body": `${global.WaterMark}`,
 //"previewType": "PHOTO",
 //"thumbnailUrl": Thumb,
// "thumbnail": Thumb,
 //"sourceUrl": `${global.websitex}`
 }}}, { quoted: mek, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'revoke':
    case 'resetlink':
    case 'resetgrouplink':
    case 'resetgclink':
    case 'resetgruplink': {
				if (!isGroup) return reply('this feature is only for groups')
				if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
    bot.groupRevokeInvite(from)
    }
    reply('DONE!')
    break


       case 'add':{     			
				if (!isGroup) return reply('this feature is only for groups')
				if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
 let users = mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return reply(`Please write the number of the person you want to add to this group`)
  await bot.groupParticipantsUpdate(from, [users], 'add').then((res) => reply(`User Added Successfully!`)).catch((err) => reply(`Cannot add that user to this group!`))
 }
 break

case'deposit':
    if (!isGroup) return reply('this feature is only for groups')
                                
           if (body.includes('.') || body.includes('-')) return reply( 'The specified value should be a positive integer')
          
              let dep = Number(body.slice(9))
               if (!dep) return reply( 'Wrong Format! Value is not specified') 
               const user = await tb.get(`${sender}.bank`)
               const bal = (user) ? user : 0
               if(isGroup){
               const gold = await tb.get(`${sender}.gold`)
               const ug = (gold) ? gold : 0
               if (ug-dep < 0) return reply( 'You don\'t have enough gold for depostion') 
               const amt = dep + bal
               if (amt > 20000) return reply( 'You can\'t have more than *20000* gold in your bank') 
               await tb.set(`${sender}.bank`, amt)
               await tb.set(`${sender}.gold`, ug-dep)
               reply(`💰️*You deposited *${dep}* gold into your bank*`)
               }
               break

               case'withdraw':
				if (!isGroup) return reply('this feature is only for groups')

 if (body.includes('.') || body.includes('-')) return reply( 'The specified value should be a positive integer')
   let wit = Number(body.slice(10))
   if (!wit) return reply( 'Wrong Format! Value is not specified') 
   if(isGroup){
   const user = await tb.get(`${sender}.bank`)
   const bal = (user) ? user : 0
   const gold = await tb.get(`${sender}.gold`)
   const ug = (gold) ? gold : 0
   if (bal-wit < 0) return reply( 'You don\'t have enough gold for withdrawal') 
   const gol = wit + ug
   await tb.set(`${sender}.bank`, bal-wit)
   await tb.set(`${sender}.gold`, gol)
   }
reply(`You withdrew *${wit}* gold from your bank`);
 //mek.reply(button1)
   break

   case'bet':

   const mention = mek
    if(isGroup){
        
       
   
        const mentionedJidList = mention.mentionedIds
       
        let user = await tb.get(`${sender}.gold`)
       
        user = (user) ? user : 0
      
        let p = Math.floor(Math.random() * 4)
        if (user < 4000) return reply('You must have *7000* gold or more to bet')
       
        let st = Math.floor(Math.random() * 7000) + 7000
      
        if (p == 3) {
            await tb.set(`${sender}.gold`, user+st)
            
            return reply( `You won *${st}* gold`)
        } else {
             await tb.set(`${sender}.gold`, user-st)
        
            return reply(`You lost *${st}* gold don't bet if you can't win😂`)
        }
    
    
    } 
  
break

    case'bank':
				if (!isGroup) return reply('this feature is only for groups')

    if(isGroup){
    
      const  e3 = await db.get(`${sender}.bank`)
      const bank = (e3) ? e3 : 0
    const mkg = `${pushname}'s bank
    
🪙 GOLD : ${bank}/200000`
    reply(mkg)
    }
    break

case 'join': {
                if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                if (!ter) return reply("Please provide the group link")
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await bot.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Invalid 📘 *URL: ${q}*`))
            }
            break

        case "kick":
        if (!isGroup) return reply('this feature is only for groups');

        if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin can use this feature');

        //if (!isBotGroupAdmins) return reply("Bot not admin");

        if (

          mek.message.extendedTextMessage === undefined ||

          mek.message.extendedTextMessage === null

        )

          return reply("Tag the target you want to kick!");

        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;

        if (mentioned.length > 1) {
bot.groupParticipantsUpdate(from, [mentioned], 'remove')
          //bot.groupRemove(from, mentioned);

          reply('DONE!');

        } else if (mentioned.length < 1) {

          anu = mek.message.extendedTextMessage.contextInfo.participant;
bot.groupParticipantsUpdate(from, [anu], 'remove');
          //bot.groupRemove(from, [anu]);

          reply('DONE!');

        } else {
bot.groupParticipantsUpdate(from, [mentioned], 'remove')
          //bot.groupRemove(from, mentioned);

          reply('DONE!');

        }

        break;
    
    case 'hidetag': {
if (!isGroup) return reply("This command can only be used in group!")
bot.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: mek })
}
break

case'bs':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
        const mj = 'BOT STAT\n\nMODE:- BOT IS ONLINE'
        return reply('BOT STAT\n\nMODE:- BOT IS ONLINE')
        console.log(mj)

        

//FUN SIDE
case "quote":
  if (!isGroup) return reply("This command can only be used in group!")
try {
quoo = await axios.get(`https://favqs.com/api/qotd`)
const reply = `
📝 *Content:* ${quoo.data.quote.body}
*✍️ Author:* ${quoo.data.quote.author}
              `
bot.sendMessage(from, { text:reply },  {quoted:mek})
} catch (err) {
console.log(err)
return reply (`* Something went wrong.*`)
    }
break 
case 'fact':{
  if (!isGroup) return reply("This command can only be used in group!")
				 await axios
            .get(`https://nekos.life/api/v2/fact`)
            .then((response) => {
                // console.log(response);
                const tet = `📛 *Fact:* ${response.data.fact}`
                reply(tet)
            })
            .catch((err) => {
                reply(`✖  An error occurred.`)
            })
			}
				break
							case 'advice':{
if (!isGroup) return reply("This command can only be used in group!")
                await axios
            .get(`https://api.adviceslip.com/advice`)
            .then((response) => {
                // console.log(response);
                const tet = `*Advice for you🔖:* ${response.data.slip.advice}`
                reply(tet)
            })
            .catch((err) => {
                reply(`🔍 Error: ${err}`)
            })
							}
				break
			case 'bot':{
        if (!isGroup) return reply("This command can only be used in group!")
				        if (!q) return reply(' *Baka!* ')
        await axios.get(`https://api.simsimi.net/v2/?text=${q}&lc=en`)
        .then((response) => {
                // console.log(response);
                const txt = `🤖 *Bot*:  ${response.data.success}`
                reply(txt);
            }).catch(err => {
                reply(`Sorry ${pushname} I did not get you`)
            }
            )
			}
				break

case 'yts': case 'ytsearch': {
if (!isGroup) return reply("This command can only be used in group!")

        const term = text;

        const {

            videos

        } = await rio(term);

        if (!videos || videos.length <= 0) {

            reply(`No Matching videos found for : *${term}*!!`)

            return;

        }

        const length = videos.length < 10 ? videos.length : 10;

        let tex = `☆☆💥 YOUTUBE SEARCH💥☆☆\n🔍 Term ~> ${term}\n\n`;

        for (let i = 0; i < length; i++) {

            tex += `🌐 Link ~> ${videos[i].url}\n👤 Channel ~> ${videos[i].author.name}\n🖥 Title ~> ${videos[i].title}\n\n`;

        }

        reply(tex)

        return;

    }

    break
//=================================================//

       case 'snk':
       default:
          const yo = [
            {buttonId: ':help', buttonText: {displayText: 'Help🕷️'}, type: 1}
    ]          
         const buttonMessage56 = {
                     text: "BAKA!! , The bot will only listen to commands specified in the command list. if you dont want to be blocked. ",
              footer: '3rintiy Ai',
              buttons:yo, 
              headerType: 1
           }

          await bot.sendMessage(from, buttonMessage56)    

  console.log(color('[UNLISTED]', 'red'), color(time, 'yellow'), 'Unregistered Command from',color(pushname))

               }


    
              

            
     

               } catch (e) {



                    console.log(e)

                    }

                    }
