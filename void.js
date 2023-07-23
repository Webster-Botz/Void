//Use latest fork to get latest features.
//dear user update your repo to get new updates.

require("./config.js")
const {default: makeWASocket,
delay,DisbotectReason,BufferJSON,MessageType, MessageOptions, Mimetype, useMultiFileAuthState, 
getContentType, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, downloadAndSaveMediaMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const color = require('./lib/color')
const { spawn, exec, execSync } = require("child_process");
const crypto = require('crypto')
const fs = require('fs')
const rio = require("yt-search")
const ytdl = require('ytdl-core')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const hx = require("hxz-api")
const canvacord = require("canvacord");
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, bytesToSize } = require('./lib/myfunc')
const { Exif } = require("wa-sticker-formatter");
const { ICharacter, Character, animeCharacter } = require('@shineiichijo/marika')

const pTable = require("ptable"); 
const npt = require("node-periodic-table");
module.exports = bot1 = async(bot, m, msg, mek, store) => {

     try {
        global.prefix
        global.blocked
        const prefix = '!' //put your prefix of your choice



//=================================================//

    const { QuickDB } = require("quick.db");
    const db = new QuickDB(); // will make a json.sqlite in the root folder
    const tb = db

    const mek = msg
//=================================================//



//=================================================//

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
const qmsg = mek.hasQuotedMsg
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
 const ownerNumber = [`2349041368361@s.whatsapp.net`, `2348106542427@s.whatsapp.net`]//Put your Number
 const isOwner = ownerNumber.includes(sender)
    const isQuoted = type == 'extendedTextMessage'
     const pushname = mek.pushName 
     const quoted = m.quoted ? m.quoted : m;

    const mime = (quoted.msg || m.msg).mimetype || " ";

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
const ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const AntiNsfw = isGroup ? ntnsfw.includes(from) : false
const iCmd = body.startsWith(prefix)
//=================================================//
          //DATABASE


          
//=================================================//   



//=================================================//
     
//=================================================//

//=================================================//
          const antipig = JSON.parse(fs.readFileSync("./database/antipig.json"));
          const isAntipig = isGroup ? antipig.includes(from) : false;
          if (isGroup && isAntipig && !mek.key.fromMe) {
            if (sender.match("1")) {
             reply(`Pig Detected\n@${sender.split("@")[0]}❗`);
              await
bot.groupParticipantsUpdate(from, [sender], 'remove')
           
            }

          }

          if (isGroup && isAntipig && !mek.key.fromMe) {

            if (sender.match("92")) {
              reply(`Pig Detected\n@${sender.split("@")[0]}❗`);
              
              await
bot.groupParticipantsUpdate(from, [sender], 'remove')
            }

          }

          if (isGroup && isAntipig && !mek.key.fromMe) {

            if (sender.match("212")) {

              reply(`Pig Detected\n@${sender.split("@")[0]}❗`);
              await
bot.groupParticipantsUpdate(from, [sender], 'remove')
            }

          }
//=================================================//
/////////// -  DM chatbot (Delete this part to turn off DM Chat Bot) - //////////////////
/*
if (!isGroup && !isCmd){
  const webreply = await axios.get(``) //Using bot Chat Api
  txt = `${webreply.data.cnt}`
  reply(txt)
  }
  */
//////////////////////////////////////////////////////////////////////////////////////


//=================================================//





//=================================================//



      
//========================//
//ANTILINK
if (isGroup && isAntilink && !mek.key.fromMe) {
    if (budy.includes("https://chat.whatsapp.com/")) {
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
   if (isCmd ) console.log(color('[MESS]'), color(time, 'white'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//=================================================//  

//=================================================//          
          

          
//=================================================//

        
//=================================================//

//=================================================//
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

   if(iCmd&&!isGroup) return reply("You cannot use any command in dm")
   
//=================================================//


//==============================================//

     switch (command){
         
         case 'set-gender':
        if(isGroup){
            const igj = args.join(' ')
        await tb.set(`${sender}.gender`,igj)
       reply(`${sender} gender has been set to ${igj}`)
        }

    break
    
    

    case 'ppcouple':
      let shibam = await axios.get('https://smiling-hosiery-bear.cyclic.app/weeb/couplepp');

    bot.sendMessage(from, { image: { url: shibam.data.male }, caption: `_For Him..._` }, { quoted: m })

      bot.sendMessage(from, { image: { url: shibam.data.female }, caption: `_For Her..._` }, { quoted: m })

  break


  

case 'define':
if (!q) return reply(`Please give me text.`)
try {
rayyy = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!rayyy) return reply(`❌ Error`)
const reply = `
*🔠 Word:* ${q}
*📖 Definition:* ${rayyy.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*💭 Example:* ${rayyy.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
               `
   bot.sendMessage(from,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
break


    

case 'play': case 'song': 
const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const downloadSong = async (randomName, query) => {
  try {
    const INFO_URL = "https://slider.kz/vk_auth.php?q=";
    const DOWNLOAD_URL = "https://slider.kz/download/";
    let { data } = await axios.get(INFO_URL + query);

    if (data["audios"][""].length <= 1) {
      console.log("==[ SONG NOT FOUND! ]==");
      return { info: "NF" };
    }

    //avoid remix,revisited,mix
    let i = 0;
    let track = data["audios"][""][i];
    while (/remix|revisited|mix/i.test(track.tit_art)) {
      i += 1;
      track = data["audios"][""][i];
    }
    //if reach the end then select the first song
    if (!track) {
      track = data["audios"][""][0];
    }

    // let link = DOWNLOAD_URL + track.id + "/";
    // link = link + track.duration + "/";
    // link = link + track.url + "/";
    // link = link + track.tit_art + ".mp3" + "?extra=";
    // link = link + track.extra;
    let link = track.url;
    link = encodeURI(link); //to replace unescaped characters from link

    let songName = track.tit_art;
    songName =
      songName =
      songName =
        songName.replace(/\?|<|>|\*|"|:|\||\/|\\/g, ""); //removing special characters which are not allowed in file name
    // console.log(link);
    // download(songName, link);
    const res = await axios({
      method: "GET",
      url: link,
      responseType: "stream",
    });
    data = res.data;
    const path = `./${randomName}`;
    const writer = fs.createWriteStream(path);
    data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on("finish", () => resolve(songName));
      writer.on("error", () => reject);
    });
  } catch (err) {
    console.log(err);
    return { info: "ERR", err: err.stack };
  }
};

//const handler = async (bot, msg, msgInfoObj) => {
  //let { prefix, reply, args, from } = msgInfoObj;

  if (args.length === 0) {
    await reply(`❌ Query is empty! \nSend ${prefix}song query`);
    return;
  }
  let randomName = getRandom(".mp3");
  let query = args.join("%20");
  let response = await downloadSong(randomName, query);
  if (response && response.info == "NF") {
    await reply(
      `❌ Song not found!\nTry to put correct spelling of song along with singer name.\n[Better use ${prefix}yta command to download correct song from youtube]`
    );
    return;
  }
  if (response && response.info === "ERR") {
    await reply(response.err);
    return;
  }
  console.log(`song saved-> ./${randomName}`, response);

  await bot.sendMessage(
    from,
    {
      document: fs.readFileSync(`./${randomName}`),
      fileName: response + ".mp3",
      mimetype: "audio/mpeg",
      mediaUploadTimeoutMs: 1000 * 30,
    },
    { quoted: msg }
  );
  fs.unlinkSync(`./${randomName}`);

break

  case 'loli':
  
reply('wait...')	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 /* var wbuttsssr = [
    {buttonId: `${prefix}loli`, buttonText: {displayText: `>>`}, type: 1},
    ] */
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'Dont be a lolicon !',
      /*  buttons: wbuttsssr,
        headerType: 2 */
         }     
                                  
    await bot.sendMessage(from, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'bot': case 'Bot': 
		
    

const txt = `Do you love This Bot? Then we are the same.`
const botarray= [
            "https://c.tenor.com/SOeIW-QVZvoAAAPo/scared-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/FDe7lTs0xvMAAAPo/bot-Bot-Bot-bot.mp4",
            "https://c.tenor.com/IWKYIP6AMIgAAAPo/bot-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/qE3H_Ae_jTQAAAPo/bot-Bot-Bot.mp4",
            "https://c.tenor.com/9ijVngbm_ZMAAAPo/itsuki-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/Fz9xGVR_FHAAAAPo/bot-Bot-Bot-bot.mp4",
            "https://c.tenor.com/ALV6SZoJZb8AAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/QHefpWiqvN4AAAPo/blush-anime.mp4",
            "https://c.tenor.com/NJVFjOYEcsIAAAPo/bot-gotoubun.mp4",
            "https://c.tenor.com/DA88NW5x_0wAAAPo/bot-Bot-stare.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/V9XEKQYRwrEAAAPo/bot-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/GDH4WFhELpAAAAPo/anime-pout.mp4",
            "https://c.tenor.com/ME0cvLQiW0kAAAPo/Bot-bot-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/d5pE_0GJUf0AAAPo/bot-Bot.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/pCgBkgDBbnIAAAPo/Bot-bot-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/6GTU3JEtpKoAAAPo/bot-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/XNbmenhVucMAAAPo/5toubun-no-hanayome-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/lyMqrhEK4scAAAPo/%EC%98%A4%EB%93%B1%EB%B6%84-5%EB%93%B1%EB%B6%84.mp4",
            "https://c.tenor.com/vQ9TpmdjfWAAAAPo/cuteness-overload.mp4",
            "https://c.tenor.com/PHngM6-NJVwAAAPo/bot-quintessential.mp4",
            "https://c.tenor.com/yniTgeiOo4gAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/AULffc4ZKFIAAAPo/bot-god-bot.mp4",
            "https://c.tenor.com/Y8Y1GbmQSOIAAAPo/bot-Bot-quintessential-quintuplets.mp4",
            "https://c.tenor.com/m0EjrelpOfkAAAPo/bot-Bot-Bot-bot.mp4",
            "https://c.tenor.com/x6RTarQTMzoAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/hUzZGMltInkAAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/9-7azOBpr84AAAPo/bot-Bot-and-i-love-you.mp4",
            "https://c.tenor.com/Ed5IC_yxZkoAAAPo/bot-Bot-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/hDKieuZGiU0AAAPo/bot-Bot.mp4",
            "https://c.tenor.com/WD8L3QLO024AAAPo/whaatt-the-quintessential-quintuplets.mp4"
            
            ]
        
            const botselection = botarray[Math.floor(Math.random()*botarray.length)]
        
            bot.sendMessage(from,{video:{url:botselection},gifPlayback:true,caption:txt},{quoted:m})
		break

case 'rainbow':
    if (quoted) {
            try {
                img = await bot.profilePictureUrl(m.quoted.sender, 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.rainbow(img);
        } else if (mentionByTag) {
            try {
                ppuser = await bot.profilePictureUrl(mentionByTag[0] || m.sender, 'image')
            } catch {
                ppuser = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg'
            }
            result = await canvacord.Canvacord.rainbow(ppuser);
        } 
        await bot.sendMessage(from, { image: result }, { quoted: m });
        break
        
        case 'reactions': case 'react':
            const suitableWords = {
  bite: 'Bit', blush: 'Blushed at', bonk: 'Bonked', bully: 'Bullied', cringe: 'Cringed at',
  cry: 'Cried in front of', cuddle: 'Cuddled', dance: 'Danced with', glomp: 'Glomped at', handhold: 'Held the hands of', happy: 'is Happied with',
  highfive: 'High-fived', hug: 'Hugged', kick: 'Kicked', kill: 'Killed', kiss: 'Kissed', lick: 'Licked',
  nom: 'Nomed', pat: 'Patted', poke: 'Poked', slap: 'Slapped', smile: 'Smiled at', smug: 'Smugged',
  wave: 'Waved at', wink: 'Winked at', yeet: 'Yeeted at'
};

const reactions = Object.keys(suitableWords)
const command = m.body.split(' ')[0].toLowerCase().slice(prefix.length).trim()
    const capitalize = (content) => `${content.charAt(0).toUpperCase()}${content.slice(1)}`
    let flag = true
    if (command === 'r' || command === 'reaction') flag = false
    if (!flag && !text) {
      const reactionList = `🎃 *Available Reactions:*\n\n- ${reactions.map((reaction) => capitalize(reaction)).join('\n- ')}\n🛠️ *Usage:* ${prefix}reaction (reaction) [tag/quote user] | ${prefix}(reaction) [tag/quote user]\nExample: ${prefix}pat`
      return void (await m.reply(reactionList))
    }
    const reaction = flag ? command : text.split(' ')[0].trim().toLowerCase()
    if (!flag && !reactions.includes(reaction))
      return reply(`Invalid reaction. Use *${prefix}react* to see all of the available reactions`)
    const users = mentionByTag
    if (quoted && !users.includes(quoted.sender)) users.push(quoted.sender)
    while (users.length < 1) users.push(sender)
    const reactant = users[0]
    const single = reactant === sender
    const { url } = await fetchJson(`https://api.waifu.pics/sfw/${reaction}`)
    const result = await fetchBuffer(url);
    const buffer = await buffergif(result);
    await bot.sendMessage(from, {
        video: buffer,
        gifPlayback: true,
        caption: `*@${m.sender.split('@')[0]} ${suitableWords[reaction]} ${single ? 'Themselves' : `@${reactant.split('@')[0]}`}*`,
        mentions: [sender, reactant],
    }, { quoted: m });
    break
    
    case 'rip':
        if (quoted) {
            try {
                img = await boy.profilePictureUrl(quoted.sender, 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.rip(img);
        } else if (mentionByTag) {
            try {
                ppuser = await client.profilePictureUrl(mentionByTag[0] || sender, 'image')
            } catch {
                ppuser = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg'
            }
            result = await canvacord.Canvacord.rip(ppuser);
        } 
        await bot.sendMessage(from, { image: result }, { quoted: m });
        break
        
        case 'trash':
               if (quoted) {
            try {
                img = await bot.profilePictureUrl(quoted.sender, 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.trash(img);
        } else if (mentionByTag) {
            try {
                ppuser = await bot.profilePictureUrl(mentionByTag[0] || sender, 'image')
            } catch {
                ppuser = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg'
            }
            result = await canvacord.Canvacord.trash(ppuser);
        } 
        await bot.sendMessage(from, { image: result }, { quoted: m });
            break
            
            case 'triggered':
                 if (quoted) {
            try {
                img = await client.profilePictureUrl(quoted.sender, 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.trigger(img);
        } else if (mentionByTag[0]) {
            try {
                img = await bot.profilePictureUrl(mentionByTag[0], 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.trigger(img);
        } else if (sender) {
            try {
                ppuser = await bot.profilePictureUrl(sender, 'image')
            } catch {
                ppuser = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg'
            }
            result = await canvacord.Canvacord.trigger(ppuser);
        }
        let sticker = new Sticker(result, {
            pack: `Triggred`,
            author:"Lexis" ,
            categories: ['🤩', '🎉'],
            id: '12345',
            quality: 75,
            background: 'transparent' // The sticker background color (only for full stickers)
        })
        const stikk = await sticker.toBuffer()
        bot.sendMessage(from, {sticker: stikk}, {quoted: m})
                break
                
                case 'wanted':
                    if (quoted) {
            try {
                img = await client.profilePictureUrl(quoted.sender, 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.wanted(img);
        } else if (mentionByTag) {
            try {
                ppuser = await client.profilePictureUrl(mentionByTag[0] || sender, 'image')
            } catch {
                ppuser = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg'
            }
            result = await canvacord.Canvacord.wanted(ppuser);
        } 
        await bot.sendMessage(from, { image: result }, { quoted: m });
                    break
                    
                    case 'wasted':
                        if (m.quoted) {
            try {
                img = await bot.profilePictureUrl(m.quoted.sender, 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.wasted(img);
        } else if (mentionByTag[0]) {
            try {
                img = await bot.profilePictureUrl(mentionByTag[0], 'image')
            } catch {
                img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg"
            }
            result = await canvacord.Canvacord.wasted(img);
        } else if (sender) {
            try {
                ppuser = await bot.profilePictureUrl(sender, 'image')
            } catch {
                ppuser = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg'
            }
            result = await canvacord.Canvacord.wasted(ppuser);
        }
        let sticker = new Sticker(result, {
            pack: `Wasted`,
            author:"" ,
            categories: ['🤩', '🎉'],
            id: '12345',
            quality: 75,
            background: 'transparent' // The sticker background color (only for full stickers)
        })
        const stikk = await sticker.toBuffer()
        bot.sendMessage(from, {sticker: stikk}, {quoted: m})
                        break

case 'add':{     		
	
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`Please write the number of the person you want to add to thhis group`)
  await bot.groupParticipantsUpdate(from, [users], 'add').then((res) => replay(`User Added Successfully!`)).catch((err) => replay(`Cannot add that user to this group!`))
 }
 break
		
case 'weather':
        
        if (!args[0]) return reply("Enter your location to search weather.")
         myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertxt = `           🌤 Weather Report 🌤  \n\n🔎 Search Location: ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 Weather: ${myweather.data.weather[0].description}\n🌡️ Temperature: ${myweather.data.main.temp}°C\n❄️ Minimum Temperature: ${myweather.data.main.temp_min}°C\n📛 Maximum Temperature: ${myweather.data.main.temp_max}°C\n💦 Humidity: ${myweather.data.main.humidity}%\n🎐 Wind: ${myweather.data.wind.speed} km/h\n`
        bot.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertxt }, { quoted: m })

        break
		

 case "tts":  case "texttospeech":  case "say": case "speak":{
    
    if (!args[0]) return reply("Please give me a text so that i can speak it!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
      bot.sendMessage(from,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `botSpeechEngine.mp3`,},{quoted: m,});
    }
    break;


case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
  let { quotesAnime } = require('./lib/scraper')
      let anu = await quotesAnime()
      hasil = anu[Math.floor(Math.random() * anu.length)]
 /*     let buttons = [
          {buttonId: `${prefix}quotesanime`, buttonText: {displayText: '>>'}, type: 1}
      ]  */
      let buttonMessage = {
          text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
     /*     footer: 'bot',
          buttons: buttons,
          headerType: 2  */
      }
      bot.sendMessage(from, buttonMessage, { quoted: m })
  }
  break

  case 'manga':
  
bot.sendMessage(from, { react: { text: "🍁" , key: m.key }})
  
reply('wait...')							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
  let mang = `*Title:* ${srh.data[0].title}\n`;
  mang += `*Status:* ${srh.data[0].status}\n`;
  mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
  mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
  mang += `*Genres:*\n`;
  for (let i = 0; i < srh.data[0].genres.length; i++) {
    mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
  }
  mang += `*Published on:* ${srh.data[0].published.from}\n`;
  mang += `*Score:* ${srh.data[0].scored}\n`;
  mang += `*Popularity:* ${srh.data[0].popularity}\n`;
  mang += `*Favorites:* ${srh.data[0].favorites}\n`;
  mang += `*Authors:*\n`;
  for (let i = 0; i < srh.data[0].authors.length; i++) {
    mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
  }
  mang += `\n*URL:* ${srh.data[0].url}\n\n`;
  if (srh.data[0].background !== null)
    mang += `*Background:* ${srh.data[0].background}`;
  mang += `*Description:* ${srh.data[0].synopsis.replace(
    /\[Written by MAL Rewrite]/g,
    ""
  )}`;
bot.sendMessage(from,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break



case 'waifu' :

reply('wait...')	
  waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
/*var wbuttsssr = [
  {buttonId: `${prefix}waifu`, buttonText: {displayText: `>>`}, type: 1},
  ] */
      let button4Messagess = {
      image: {url:waifuddd.data.url},
      caption: 'More than one waifu will definitely ruin your Laifu!',
      /*buttons: wbuttsssr,
      headerType: 4 */
       }     
                                
  await bot.sendMessage(from, button4Messagess, { quoted:m }).catch(err => {
      return('error..')
      })
break

case 'neko' :

reply('wait...')	
  waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
/*var wbuttsssr = [
  {buttonId: `${prefix}neko`, buttonText: {displayText: `>>`}, type: 1},
  ] */
      let buttonMessagessf = {
      image: {url:waifuddd.data.url},
      caption: 'Nyaa...',
  /*    buttons: wbuttsssr,
      headerType: 2  */
       }     
                                
  await bot.sendMessage(from, buttonMessagessf, { quoted:m }).catch(err => {
      return('error..')
      })
break


case "quotes":
var res = await fetch('https://animechan.vercel.app/api/random')
teks = `\n*Anime:* ${res.anime}\n`
teks += `\n*Quotes:*\n`
teks += `${res.json}\n`

reply(teks)
break


case "darkjoke":
var res = await Darkjokes()
teks = "\nDarkjokes"
break


      
case 'set-help':
if (!isOwner) return reply('Owner Only');

const helpText = args.join(' ');

await db.set('help', helpText);

return reply('Help text has been set.');
break;

case 'help':
  const helpTextt = await db.get('help');
  
  if (!helpTextt) {
    return reply('Help text is not available.');
  }
  
  //return reply(helpTextt);
  const txtt = ` Kon'nichiwa! (｡♥‿♥｡) ${pushname} Welcome to my world of commands!\n\n_Void Public-1.0.0\n\n${helpTextt}`
const botarrayy= [
            "https://c.tenor.com/SOeIW-QVZvoAAAPo/scared-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/FDe7lTs0xvMAAAPo/bot-Bot-Bot-bot.mp4",
            "https://c.tenor.com/IWKYIP6AMIgAAAPo/bot-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/qE3H_Ae_jTQAAAPo/bot-Bot-Bot.mp4",
            "https://c.tenor.com/9ijVngbm_ZMAAAPo/itsuki-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/Fz9xGVR_FHAAAAPo/bot-Bot-Bot-bot.mp4",
            "https://c.tenor.com/ALV6SZoJZb8AAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/QHefpWiqvN4AAAPo/blush-anime.mp4",
            "https://c.tenor.com/NJVFjOYEcsIAAAPo/bot-gotoubun.mp4",
            "https://c.tenor.com/DA88NW5x_0wAAAPo/bot-Bot-stare.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/V9XEKQYRwrEAAAPo/bot-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/GDH4WFhELpAAAAPo/anime-pout.mp4",
            "https://c.tenor.com/ME0cvLQiW0kAAAPo/Bot-bot-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/d5pE_0GJUf0AAAPo/bot-Bot.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/pCgBkgDBbnIAAAPo/Bot-bot-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/6GTU3JEtpKoAAAPo/bot-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/XNbmenhVucMAAAPo/5toubun-no-hanayome-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/lyMqrhEK4scAAAPo/%EC%98%A4%EB%93%B1%EB%B6%84-5%EB%93%B1%EB%B6%84.mp4",
            "https://c.tenor.com/vQ9TpmdjfWAAAAPo/cuteness-overload.mp4",
            "https://c.tenor.com/PHngM6-NJVwAAAPo/bot-quintessential.mp4",
            "https://c.tenor.com/yniTgeiOo4gAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/AULffc4ZKFIAAAPo/bot-god-bot.mp4",
            "https://c.tenor.com/Y8Y1GbmQSOIAAAPo/bot-Bot-quintessential-quintuplets.mp4",
            "https://c.tenor.com/m0EjrelpOfkAAAPo/bot-Bot-Bot-bot.mp4",
            "https://c.tenor.com/x6RTarQTMzoAAAPo/bot-Bot.mp4",
            "https://c.tenor.com/hUzZGMltInkAAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/9-7azOBpr84AAAPo/bot-Bot-and-i-love-you.mp4",
            "https://c.tenor.com/Ed5IC_yxZkoAAAPo/bot-Bot-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/hDKieuZGiU0AAAPo/bot-Bot.mp4",
            "https://c.tenor.com/WD8L3QLO024AAAPo/whaatt-the-quintessential-quintuplets.mp4"
            
            ]
        
            const botselectionn = botarrayy[Math.floor(Math.random()*botarrayy.length)]
        
            bot.sendMessage(from,{video:{url:botselectionn},gifPlayback:true,caption:txtt},{quoted:m})
		break
  break;

  case 'element':
    if(!args[0]) return reply(`Please use this command like this: ${prefix}element br`);
    const queryy = args.join(" ");
   const search = await pTable(queryy);
   if (search === undefined) return reply(`Please provide me a valid element by visiting here !\n\nhttps://en.m.wikipedia.org/wiki/Periodic_table`);

   const responsee = await npt.getByNumber(search.number);
   let caption  = "";
    caption = "              *『  Element Details  』*\n\n";
    caption += `🔴 *Elelment:* ${responsee.name}\n`;
caption += `⬜ *Atomic Number:* ${responsee.number}\n`;
caption += `🟡 *Atomic Mass:* ${responsee.atomic_mass}\n`;
caption += `⬛ *Symbol:* ${responsee.symbol}\n`;
caption += `❓ *Appearance:* ${responsee.apearance}\n`;
caption += `🟢 *Phase:* ${responsee.phase}\n`;
caption += `♨️ *Boiling Point:* ${responsee.boil} K\n️`;
caption += `💧 *Melting Point:* ${responsee.melt} K\n`;
caption += `🟣 *Density:* ${responsee.density} g/mL\n`;
caption += `⚫ *Shells:* ${responsee.shells.join(", ")}\n`;
caption += `🌐 *URL:* ${responsee.source}\n\n`;
caption += `💬 *Summary:* ${responsee.summary}\n`;
    await bot.sendMessage(from,  {image: {url: `./void.jpg`},caption: caption}, {quoted: m });
    break


    case 'ss': case 'screenshot':
      if(!args[0]) return m.reply(`Please provide me a link to lookup !`);
        if (!args[0].includes("http")){
            lookupURL= `https://${args[0]}`;
        }
        else{
            lookupURL = args[0];
        }   
        try {
            const resImage = await getBuffer(`https://api.popcat.xyz/screenshot?url=${lookupURL}`);
            await bot.sendMessage(from, {image: resImage, caption: `_Here's how this url looks like:_\n${args[0]}\n`}, {quoted: m});
        } catch (error) {
            reply(`An error occured while processing your request !\n\nPlease recheck your link and try again !`);
        }
    break

case 'rd':
  if(!isOwner) return reply('Owner Only :v')
  bot.sendMessage(from, { react: { text: "💰" , key: m.key }})
  const hu = args.join(' ')
  
await db.set(`${sender}.diamonds`, hu)
return reply(`${sender} ${pushname}'s diamonds has been successful set to ${hu}`)
break

         case 'gold':
             bot.sendMessage(from, { react: { text: "💰" , key: m.key }})
             
      const yui = await db.get(`${sender}.gold`)
      return reply(`${pushname}\n\n: 💰Gold: ${yui}`)
             break

 
	
       case 'pokemon': {
        if (!ter) return reply("No query provided!")
            try {
            let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ter}`)
           if (!data.name) return reply(` No such pokemon`)
           let yu =`💫 *Name: ${data.name}*\n〽️ *Pokedex ID: ${data.id}*\n⚖ *Weight: ${data.weight}*\n🔆 *Height: ${data.height}*\n🌟 *Base Experience: ${data.base_experience}*\n📛 *Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n🎀 *Type: ${data.types[0].type.name}*\n✳ *HP: ${data.stats[0].base_stat}*\n⚔ *Attack: ${data.stats[1].base_stat}*\n🔰 *Defense: ${data.stats[2].base_stat}*\n☄ *Special Attack: ${data.stats[3].base_stat}*\n🛡 *Special Defense:${data.stats[4].base_stat}*\n🎐 *Speed: ${data.stats[5].base_stat}*\n`
        bot.sendMessage(from, { image: { url: data.sprites.front_default }, caption: yu }, { quoted: mek })
            } catch (err) {
        reply("An Error Occurred")
        console.log(err)
        }
        }
        break
        
        case 'wallpaper': case 'animewallpaper': case 'animewall': {

if (!args.join(" ")) return reply("Please enter a term to search!")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		/*
let buttons = [
            {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
        */
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*Search term:* ${q}`,
            //footer: `${BotName}`,
           // buttons: buttons,
           // headerType: 4
        }
        bot.sendMessage(from, buttonMessage, { quoted: mek })
    }
    break

case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{

		let { quotesAnime } = require('./lib/scraper')

        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
   /*     let buttons = [
            {buttonId: `${prefix}quotesanime`, buttonText: {displayText: '>>'}, type: 1}
        ]  */
        let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
       /*     footer: 'bot',
            buttons: buttons,
            headerType: 2  */
        }
        bot.sendMessage(from, buttonMessage, { quoted: mek })
    }
    break





case 'google': case 'search': {

    
 if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} anything...`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `「 *Google Search Engine* 」\n\n*Search term:* ${text}\n\n\n`
 for (let g of res) {
 teks += `*Title* : ${g.title}\n\n`
 teks += `*Description* : ${g.snippet}\n\n`
 teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break


 case 'nowa': case 'find': case 'stalk': case 'stalknumber':{

    
        if (!args[0]) return reply(`Use command like: ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('You didnot added x')
        reply(`Searching for WhatsApp account in given range...`)
        reply(`Please wait while i fetch details...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await bot.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await bot.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `🪄 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
        }
        break






case 'getcase':
   if (mek.sender !='2349041368361@s.whatsapp.net') {return;}
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("trinity.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break



case 'report': case 'suggest ': {

    if (!text) return reply(`please provide a report message you want to deliver`)
    if (text.length > 300) return reply(`Are you trying to send virus!`)
    const txtmsg = `*📮 Report Message*\n\\n\n*Group Name ➛* ${groupName}\n\n*Message ➛*  ${text}`
	//for (let mod of global.Owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '2349041368361@s.whatsapp.net'))
	await bot.sendMessage(`${ownerNumber}`, {text: `${txtmsg}`},  { quoted: mek })
	await bot.sendMessage(`120363138117624616@g.us`, {text: `${txtmsg}`, mentions: groupAdmins}, { quoted: mek })
    reply(`*✅ Your Report has been submitted Successfully to Support group & Owner*\n\n*You will get response shortly ♥️*`); 
 }
 break   
		
		

          case 'getgif':
case 'gify': 
	if (!ter) return reply(" No query provided!")  
		try {
		               let { data: gi } = await axios.get(`https://g.tenor.com/v1/search?q=${ter}&key=LIVDSRZULELA&limit=8`)
				  
 bot.sendMessage(from, { video: { url: gi.results?.[Math.floor(Math.random() * gi.results.length)]?.media[0]?.mp4?.url }, caption: "",gifPlayback: true }, { quoted: mek })
		} catch (err) {
			reply("No gif found")
		}
break

    case '':
      if(isGroup) {
        if(iCmd) {
          await bot.sendMessage(from, 
            {image: fs.readFileSync("./void.jpg"),
          caption: `@${pushname} Do You Mean ${prefix}Help!`,
        
        })
      }
    }
break

case 'deleteall': case 'delall': case 'delete': case 'del': {

   
 if (!isGroupAdmins && !isOwner) return reply('Only Admins...')
 
if (!msg.message.extendedTextMessage) {
    await reply("❌ Tag message to delete.");
    return;
  }

    {
    const quotedMessage =
      msg.message.extendedTextMessage.contextInfo.quotedMessage;
    if (
      (quotedMessage.extendedTextMessage &&
        quotedMessage.extendedTextMessage.text.includes("Birthday")) ||
      (quotedMessage.extendedTextMessage &&
        quotedMessage.extendedTextMessage.text.includes("Welcome")) ||
      (quotedMessage.conversation &&
        quotedMessage.conversation.includes("📰")) ||
      (quotedMessage.conversation &&
        quotedMessage.conversation.includes("Rank"))
    ) {
      await reply("❌ Cannot delete this message.");
    } else {
      const options = {
        remoteJid: from,
        fromMe: true,
        id: msg.message.extendedTextMessage.contextInfo.stanzaId,
      };
      await bot.sendMessage(from, {
        delete: options,
      });
    }
    return;
  }

  //member message, only admin can delete
//  if (!isBotGroupAdmins) {
   // await reply("❌ I'm not admin to delete message for everyone.");
    return;
  }

  if (isGroupAdmins) {
    const options = {
      remoteJid: from,
      fromMe: false,
      id: msg.message.extendedTextMessage.contextInfo.stanzaId,
      participant: msg.message.extendedTextMessage.contextInfo.participant,
    };
    await bot.sendMessage(from, {
      delete: options,
    });
  } else {
    await reply("❌ Only admin can delete member's message.");
  }

 break

case 'pinterest': case 'pin': {

 if (!args.join(" ")) return reply("Pls providea search term!")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 /* let buttons = [
 {buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
 ] */
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 /* footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4, */
 
 }
 bot.sendMessage(from, buttonMessage, { quoted: mek })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 break





  case 'setdesc': {
if (!isGroupAdmins) return reply(" This command can only be used by group admins!")
//if (!isBotAdmins) return reply(" Make Bot As Admin First!")
         if (!q) reply(` No query provided!`)
        await bot.groupUpdateDescription(from, text)
    reply('*Group Description Changed successfuly*')
    }
    break 

case 'sgif': case 'sticker': case 's': {

  if(!quoted) return await client.sendMessage(m.from,{text:"Reply/tag a image/video"})
       flags.forEach((flag) => (text = text.replace(flag, '')))
 
       pack = 'VOID'
       author = 'Lexis'
        
       
           
        if (/image/.test(mime)) {
    
            let media = await quoted.download()
       
        let sticker = new Sticker(media, {
            pack: pack, // The pack name
            author: author, // The author name
            type: flags.includes('--c') || flags.includes('--crop') || flags.includes('--cropped')
            ? 'crop'
            : flags.includes('--s') || flags.includes('--stretch') || flags.includes('--stretched')
            ? 'default'
            : flags.includes('--circle')
            ? 'circle'
            : 'full' ,
            categories: ['🤩', '🎉'], // The sticker category
            id: '12345', // The sticker id
            quality: 75, // The quality of the output file
            background: 'transparent' // The sticker background color (only for full stickers)
        })
       
        const buffer = await sticker.toBuffer()
        bot.sendMessage(m.from, {sticker: buffer}, {quoted: m})
    
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 20) return client.sendMessage(m.from,{text:'🕐 Cannot fetch videos longer than *11 Seconds*'})
            let media = await quoted.download()
        let sticker = new Sticker(media, {
            pack: pack, // The pack name
            author: author, // The author name
            type: body.includes("#c")|| body.includes("#crop")? StickerTypes.CROPPED: StickerTypes.FULL, // The sticker type
            categories: ['🤩', '🎉'], // The sticker category
            id: '12345', // The sticker id
            quality: 30, // The quality of the output file
            background: 'transparent' // The sticker background color (only for full stickers)
        })
    
        const stikk = await sticker.toBuffer()
    
    
        bot.sendMessage(m.from, {sticker: stikk}, {quoted: m})
        } else {
            bot.sendMessage(m.from,{text:"❌ Could not find any Image/Video in context"},{quoted:m})
            }
            break
case 'couple': case 'ship': {
	
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ohh i see 👀💖...`
let menst = [orang, jodoh]
//let buttons = [
//{ buttonId: '❤️', buttonText: { displayText: 'Congratulations ❤️' }, type: 1 }
//].
 //bot.sendMessage(from, jawab, {mentions: menst})
 await reply(jawab, {mentions: menst})
}
break



case 'dare':
	
                   const dare =[
         "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
         "spill people who make you pause",
         "call crush/pickle now and send ss",
         "drop only emote every time you type on gc/pc for 1 day.",
         "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
         "call ex saying miss",
         "sing the chorus of the last song you played",
         "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
         "Bang on the table (which is at home) until you get scolded for being noisy",
         "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
         "mention ex's name",
         "make 1 rhyme for the members!",
         "send ur whatsapp chat list",
         "chat random people with gheto language then ss here",
         "tell your own version of embarrassing things",
         "tag the person you hate",
         "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
         "change name to *I AM DONKEY* for 24 hours",
         "shout *ma chuda ma chuda ma chuda* in front of your house",
         "snap/post boyfriend photo/crush",
         "tell me your boyfriend type!",
         "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
         "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
         "prank chat ex and say *i love u, please come back.* without saying dare!",
         "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
         "change the name to *I am a child of randi* for 5 hours",
         "type in bengali 24 hours",
         "Use selmon bhoi photo for 3 days",
         "drop a song quote then tag a suitable member for that quote",
         "send voice note saying can i call u baby?",
         "ss recent call whatsapp",
         "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
         "pop to a group member, and say fuck you",
         "Act like a chicken in front of ur parents",
         "Pick up a random book and read one page out loud in vn n send it here",
         "Open your front door and howl like a wolf for 10 seconds",
         "Take an embarrassing selfie and paste it on your profile picture",
         "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
         "Walk on your elbows and knees for as long as you can",
         "sing national anthem in voice note",
         "Breakdance for 30 seconds in the sitting room😂",
         "Tell the saddest story you know",
         "make a twerk dance video and put it on status for 5mins",
         "Eat a raw piece of garlic",
         "Show the last five people you texted and what the messages said",
         "put your full name on status for 5hrs",
         "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
         "call ur bestie, bitch",
         "put your photo without filter on ur status for 10mins",
         "say i love oli london in voice note🤣🤣",
         "Send a message to your ex and say I still like you",
         "call Crush/girlfriend/bestie now and screenshot here",
         "pop to one of the group member personal chat and Say you ugly bustard",
         "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
         "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
         "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
         "use any bollywood actor photo as ur pfp for 3 days",
         "put your crush photo on status with caption, this is my crush",
         "change name to I AM GAY for 5 hours",
         "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
         "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
         "slap ur butt hardly send the sound of slap through voice note😂",
         "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
         "shout bravooooooooo and send here through voice note",
         "snap your face then send it here",
         "Send your photo with a caption, i am lesbian",
         "shout using harsh words and send it here through vn",
         "shout you bastard in front of your mom/papa",
         "change the name to i am idiot for 24 hours",
         "slap urself firmly and send the sound of slap through voice note😂",
         "say i love the bot owner Kai through voice note",
         "send your gf/bf pic here",
         "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
         "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
     ]
                   const lexdareww = dare[Math.floor(Math.random() * dare.length)]
                   //buffer = await axios.get(`https://images4.alphacoders.com/101/1016619.jpg`)
                   //await reply(from, { image: buffer, caption: '*You have chosen Dare...*\n\n'+ lexdareww }, {quoted:mek})
                  await reply(lexdareww)
                   break
                       

case 'truth':
		
                           const truth =[
                 "Have you ever liked anyone? How long?",
                 "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                 "apa ketakutan terbesar kamu?",
                 "Have you ever liked someone and felt that person likes you too?",
                 "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                 "Have you ever stolen money from your father or mom? The reason?",
                 "What makes you happy when you're sad?",
                 "Ever had a one sided love? if so who? how does it feel bro?", 
                 "been someone's mistress?",
                 "the most feared thing",
                 "Who is the most influential person in your life?",
                 "what proud thing did you get this year", 
                 "Who is the person who can make you awesome", 
                 "Who is the person who has ever made you very happy?", 
                 "Who is closest to your ideal type of partner here", 
                 "Who do you like to play with??", 
                 "Have you ever rejected people? the reason why?",
                 "Mention an incident that made you hurt that you still remember", 
                 "What achievements have you got this year??",
                 "What's your worst habit at school??",
                 "What song do you sing most in the shower",
                 "Have you ever had a near-death experience",
                 "When was the last time you were really angry. Why?",
                 "Who is the last person who called you",
                 "Do you have any hidden talents, What are they",
                 "What word do you hate the most?",
                 "What is the last YouTube video you watched?",
                 "What is the last thing you Googled",
                 "Who in this group would you want to swap lives with for a week",
                 "What is the scariest thing thats ever happened to you",
                 "Have you ever farted and blamed it on someone else",
                 "When is the last time you made someone else cry",
                 "Have you ever ghosted a friend",
                 "Have you ever seen a dead body",
                 "Which of your family members annoys you the most and why",
                 "If you had to delete one app from your phone, which one would it be",
                 "What app do you waste the most time on",
                 "Have you ever faked sick to get home from school",
                 "What is the most embarrassing item in your room",
                 "What five items would you bring if you got stuck on a desert island",
                 "Have you ever laughed so hard you peed your pants",
                 "Do you smell your own farts",
                 "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                 "What is the biggest mistake you have ever made",
                 "Have you ever cheated in an exam",
                 "What is the worst thing you have ever done",
                 "When was the last time you cried",
                 "whom do you love the most among ur parents", 
                 "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
                 "who was ur crush during the school days",
                 "tell honestly, do u like any boy in this grup",
                 "have you ever liked anyone? how long?",
                 "do you have gf/bf','what is your biggest fear?",
                 "have you ever liked someone and felt that person likes you too?",
                 "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                 "ever did you steal your mothers money or your fathers money",
                 "what makes you happy when you are sad",
                 "do you like someone who is in this grup? if you then who?",
                 "have you ever been cheated on by people?",
                 "who is the most important person in your life",
                 "what proud things did you get this year",
                 "who is the person who can make you happy when u r sad",
                 "who is the person who ever made you feel uncomfortable",
                 "have you ever lied to your parents",
                 "do you still like ur ex",
                 "who do you like to play together with?",
                 "have you ever stolen big thing in ur life? the reason why?",
                 "Mention the incident that makes you hurt that you still remember",
                 "what achievements have you got this year?",
                 "what was your worst habit at school?",
                 "do you love the bot creator Kai?",
                 "have you ever thought of taking revenge from ur teacher?",
                 "do you like current prime minister of ur country",
                 "you non veg or veg",
                 "if you could be invisible, what is the first thing you would do",
                 "what is a secret you kept from your parents",
                 "Who is your secret crush",
                 "whois the last person you creeped on social media",
                 "If a genie granted you three wishes, what would you ask for",
                 "What is your biggest regret",
                 "What animal do you think you most look like",
                 "How many selfies do you take a day",
                 "What was your favorite childhood show",
                 "if you could be a fictional character for a day, who would you choose",
                 "whom do you text the most",
                 "What is the biggest lie you ever told your parents",
                 "Who is your celebrity crush",
                 "Whats the strangest dream you have ever had",
                 "do you play pubg, if you then send ur id number"
             ]
                           const lextruthww = truth[Math.floor(Math.random() * truth.length)]
                         //  buffer = await getBuffer(`https://images2.alphacoders.com/650/650812.jpg`)
                        //   bot.sendMessage(from, { image: buffer, caption: '*You have chosen Truth...*\n'+ lextruthww }, {quoted:mek})
                        await reply(lextruthww)
                        break



case 'lyrics': {

   
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
reply('wait...')	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break


        case 'hi':
          if(!isGroup) return reply('This Command Can Only be used in Groups')
          const mk = `Hello ${pushname} I Am *VOID* Created By Lexis!`
          await reply(mk)
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
          reply('DONE!');
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
bot.groupParticipantsUpdate(from, [anu], 'remove');
          reply('DONE!');
        } else {
bot.groupParticipantsUpdate(from, [mentioned], 'remove')
          reply('DONE!');

        }

        break;

        case "remove":
        case "error":
        if (!isGroup) return reply('this feature is only for groups');
        if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag the target you want to kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
bot.groupParticipantsUpdate(from, [mentioned], 'remove')
          reply('DONE!');
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
bot.groupParticipantsUpdate(from, [anu], 'remove');
          reply('DONE!');
        } else {
bot.groupParticipantsUpdate(from, [mentioned], 'remove')
          reply('DONE!');

        }

        break;

        case 'promote': {
          if (!isGroup) return reply('this feature is only for groups')
          if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
          //if(!isBotGroupAdmins) return reply('Bot Not Admin...')
          if (
  
            mek.message.extendedTextMessage === undefined ||
  
            mek.message.extendedTextMessage === null
  
          )
  
            return reply("Tag the target you want to promote!");
  
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
  
          if (mentioned.length > 1) {
  bot.groupParticipantsUpdate(from, [mentioned], 'promote')
            //bot.groupRemove(from, mentioned);
  
            reply('DONE!');
  
          } else if (mentioned.length < 1) {
  
            anu = mek.message.extendedTextMessage.contextInfo.participant;
  bot.groupParticipantsUpdate(from, [anu], 'promote');
            //bot.groupRemove(from, [anu]);
  
            reply('DONE!');
  
          } else {
  bot.groupParticipantsUpdate(from, [mentioned], 'promote');
  
            reply('DONE!');
  
          }
    }
  
    break
  
    case 'pme': {
          if (!isGroup) return reply('this feature is only for groups')
          if (!isOwner) return reply('Only Legions can use.')
          //if(!isBotGroupAdmins) return reply('Bot Not Admin...')
  bot.groupParticipantsUpdate(from, [sender], 'promote')
  
            reply('DONE!');
        }
    break
  
    case 'dme': {
      if (!isGroup) return reply('this feature is only for groups')
      if (!isOwner) return reply('Only Legions can use.')
     // if(!isBotGroupAdmins) return reply('Bot Not Admin...')
  bot.groupParticipantsUpdate(from, [sender], 'demote')
  
        reply('DONE!');
    }
  break
  
    case 'demote': {
          if (!isGroup) return reply('this feature is only for groups')
          if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
         // if(!isBotGroupAdmins) return reply('Bot Not Admin...')
          if (
  
            mek.message.extendedTextMessage === undefined ||
  
            mek.message.extendedTextMessage === null
  
          )
  
            return reply("Tag the target you want to demote!");
  
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
  
          if (mentioned.length > 1) {
  bot.groupParticipantsUpdate(from, [mentioned], 'demote')
            //bot.groupRemove(from, mentioned);
  
            reply('DONE!');
  
          } else if (mentioned.length < 1) {
  
            anu = mek.message.extendedTextMessage.contextInfo.participant;
  bot.groupParticipantsUpdate(from, [anu], 'demote');
            //bot.groupRemove(from, [anu]);
  
            reply('DONE!');
  
          } else {
  bot.groupParticipantsUpdate(from, [mentioned],'demote')
            //bot.groupRemove(from, mentioned);
  
            reply('DONE!');
  
          }
    }
  
    break
  
  
  case 'add':{     			
          if (!isGroup) return reply('this feature is only for groups')
          if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
   let users = mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
   if (users.length == 0) return reply(`Please write the number of the person you want to add to this group`)
    await bot.groupParticipantsUpdate(from, [users], 'add').then((res) => reply(`User Added Successfully!`)).catch((err) => reply(`Cannot add that user to this group!`))
   }
   break

    case 'opengc':

      case 'o':

   if (!isGroup) return reply('this feature is only for group')
     if (!isGroupAdmins) return reply('this feature is only for admins')
    // if(!isBotGroupAdmins) return reply('Bot Not Admin...')
bot.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`DONE!`)).catch((err) => reply(jsonformat(err)))
     break

     case 'closegc':
                     case 'c':

     if (!isGroup) return reply('this feature is only for group')
     if (!isGroupAdmins) return reply('this feature is only for admins')
     //if(!isBotGroupAdmins) return reply('Bot Not Admin...')
bot.groupSettingUpdate(from, 'announcement').then((res) => reply(`DONE!`)).catch((err) => reply(jsonformat(err)))
   break

   case 'me': case 'profile': case 'p':
    if (!isGroup) return reply('this feature is only for groups')
 

 //var flob = await getBuffer(picak+'User Profile')
 var bio= await bot.fetchStatus(sender)
 var bioo = bio.status
 const adn= isGroupAdmins? "True":"False"
 //const gender = await tb.get(`${sender}`.gender)
 const tex = isOwner? "Dark Legion":"Nope"
 try {
    
    pfp=await bot.profilePictureUrl(sender, 'image')

      } catch (e) {
 
  pfp ='https://wallpapercave.com/wp/wp10524580.jpg'
}

 const profilexx = `★ *Username* ★ : ${pushname}\n\n✥ *Gender* ✥ : *Null*\n\n✿ *User-Notice* ✿ : *${bioo}*\n\n✘ *Usage-Limit* ✘ : *Unlimited*\n\n⍟ *Group Admin Status* ⍟ : *${adn}*\n\n✿ *User-Tag* ✿ : @${sender.split("@")[0]}\n\n*🔱Owner* : ${tex}` 
            let buttonMessage = {
            image: { url: pfp },
            caption: profilexx,
            headerType: 4
        }
    bot.sendMessage(from,buttonMessage,{quoted:mek})
      
        break


        case 'leave':
if(isGroup) {
if(!isOwner) return reply('_Only Botadmins_')
            reply("Byeee...")
            await bot.groupLeave(from).then((res) => reply(jsonformat(res))).catch((err) => reply("Error"))

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
       reply("Downloading.. This may take upto 5 min!");
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
       reply("Downloading.. This may take upto 5 min!");
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


  case 'tagall':
case 'ping':
case 'everyone':

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
  
    let txt = `*VOID BROADCAST*\n\n🔖 *Message:* ${bct}`
  await bot.sendMessage(i, { video: { url: "https://telegra.ph/file/3c3f94c8463e7f9c29d73.mp4" }, mimetype: 'video/mp4', fileName: `bc.mp4`, caption: `${txt}\n\n🍀 *Author:* ${pushname}` })
                      }
                  reply(`Successfuly Broadcasted in ${anu.length} Groups`)
              }
              break  

                    case 'act':
        if(isGroup){
            
            if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
       if (arg[1].toLowerCase() == 'rule') {
            if (antilink.includes(from)) return reply(`rule is already registered on *${groupName}*`)
            antilink.push(from)
             fs.writeFileSync('./database/rule.json', JSON.stringify(antilink))
             return reply(`rule is now registered on *${groupName}*`)
 }
 
   

           if (arg[1].toLowerCase() == 'hentai') {
               if(ntnsfw.includes(from)) return reply(`Hentai is already active on ${groupName}`)
               ntnsfw.push(from)
               fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
               return reply(`Hentia is now registered on *${groupName}*`)
 }

 if (arg[1].toLowerCase() == 'fake') {
  if(antipig.includes(from)) return reply(`AntiPig is already active on ${groupName}`)
  antipig.push(from)
  fs.writeFileSync('./database/antipig.json', JSON.stringify(antipig))
  return reply(`AntiPig is now registered on *${groupName}*`)
}
        }
           break

           case 'deact':
               if(isGroup){
            
            
            if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
         if (arg[1].toLowerCase() == 'rule') {
               let inx = antilink.indexOf(from)
               antilink.splice(inx, 1)
               fs.writeFileSync('./database/rule.json', JSON.stringify(antilink))
              
                return reply(`rule is now unregistered on *${groupName}*`)
            }
          else if (arg[1].toLowerCase() == 'hentia') {
            let inx = ntnsfw.indexOf(from)
            ntnsfw.splice(inx, 1)
            fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
           
             return reply(`Hentia is now unregistered on *${groupName}*`)
         }
         else if (arg[1].toLowerCase() == 'fake') {
          let inx = antipig.indexOf(from)
          antipig.splice(inx, 1)
          fs.writeFileSync('./database/antipig.json', JSON.stringify(antipig))
         
           return reply(`AntiPig is now unregistered on *${groupName}*`)
       }
            }
            break



case 'hidetag': {

if (!isGroup) return reply("This command can only be used in group!")
if (!isOwner) return reply('Owner Only...')

bot.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: mek })
}
break


 case 'grouplink': case 'gclink': case 'invitelink': {
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

case 'join': {
                if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                if (!ter) return reply("Please provide the group link")
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await bot.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Invalid 📘 *URL: ${q}*`))
            }
            break

case 'chat': {
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

    case 'anime':
    
	    if(!q) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)
reply('wait...')							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `*Title:* ${result.title}\n`;
    details += `*Format:* ${result.type}\n`;
    details += `*Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*Total episodes:* ${result.episodes}\n`;
    details += `*Duration:* ${result.duration}\n`;
    details += `*Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*Based on:* ${result.source.toUpperCase()}\n`;
    details += `*Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*Premiered on:* ${result.aired.from}\n`;
    details += `*Ended on:* ${result.aired.to}\n`;
    details += `*Popularity:* ${result.popularity}\n`;
    details += `*Favorites:* ${result.favorites}\n`;
    details += `*Rating:* ${result.rating}\n`;
    details += `*Rank:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*Trailer:* ${result.trailer.url}\n\n`;
    details += `*URL:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*Background:* ${result.background}\n\n`;
    details += `*Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
bot.sendMessage(from,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break


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

case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':

if (!AntiNsfw) return reply('Nsfw Is Not Registered')
try{
reply('wait...')
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
bot.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break

case 'spank':
    
    if (!AntiNsfw) return reply('Nsfw Is Not Registered')
reply('wait...')
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await bot.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break

case 'blowjobgif': case 'bj' :
    
    if (!AntiNsfw) return reply('Nsfw Is Not Registered')
reply('wait...')
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await bot.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break

case 'hentaivid': case 'hentaivideo': {
    
    if (!AntiNsfw) return reply('Nsfw Is Not Registered')
reply('wait...')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
bot.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :
    
    if (!AntiNsfw) return reply('Nsfw Is Not Registered')
reply('wait...')
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 /* let trapbot = [
    {buttonId: `${prefix}trap`, buttonText: {displayText: `>>`}, type: 1},
    ] */
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
 /* buttons: trapbot,
  headerType: 1 */
  }     
            await bot.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-neko' :
case 'hneko' :
    
    if (!AntiNsfw) return reply('Nsfw Is Not Registered')
reply('wait...')
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 /* let hnekobot = [
    {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
    ] */
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Nyaah...`,
  /* buttons: hnekobot,
  headerType: 1 */
  }      
            await bot.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-waifu' :
case 'hwaifu' :
    
    if (!AntiNsfw) return reply('Nsfw Is Not Registered')
reply('wait...')
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 /* let nwaifubot = [
    {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
    ] */
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
 /* buttons: nwaifubot,
  headerType: 1 */
  }      
            await bot.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'gasm':
    
    if (!AntiNsfw) return reply('Nsfw Is Not Registered')
reply('wait...')						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                       /*    var wbuttsss = [
        {buttonId: `${prefix}gasm`, buttonText: {displayText: `>>`}, type: 1},
        ] */
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
     /* footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4 */
      }     
            await bot.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  


/* ████ ✪ ███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ [ Anime Mode ] ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███ ✪ ███ */



case 'smug2':
    
reply('wait...')						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                    /*       var wbuttsss = [
        {buttonId: `${prefix}smug2`, buttonText: {displayText: `>>`}, type: 1},
        ] */
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
    /*  footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4 */
      }     
            await bot.sendMessage(from, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'foxgirl':
    
    bot.sendMessage(from, { react: { text: "✨" , key: m.key }})     

reply('wait...')							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)

             /* var wbuttsss = [
        {buttonId: `${prefix}foxgirl`, buttonText: {displayText: `>>`}, type: 1},
        ] */
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Awoooo...`,
      /* footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4 */
      }     
            await bot.sendMessage(from, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   

case 'animenom' :
    
reply('wait...')
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
  /*  let xxhnekobot = [
    {buttonId: `${prefix}animenom`, buttonText: {displayText: `>>`}, type: 1},
    ]  */
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
/*  buttons: xxhnekobot,
  headerType: 1 */
  }      
            await bot.sendMessage(from, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'waifu3':
    
reply('wait...')						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                   /*        var wbuttsss = [
        {buttonId: `${prefix}waifu3`, buttonText: {displayText: `>>`}, type: 1},
        ] */
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
   /*   footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4 */
      }     
            await bot.sendMessage(from, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'crossplay': case 'crosplay': case 'cosplay':
    
    bot.sendMessage(from, { react: { text: "✨" , key: m.key }})  

             /*   const buttons = [
        {buttonId: '-crossplay', buttonText: {displayText: '>>'}, type: 1},
            ]     */     

        const cosplybutton = {
        image: {url: 'https://fantox-cosplay-api.onrender.com/'},
        caption: "Guess who am i...",
       /* footer: `${global.BotName}`,
        buttons: buttons,
        headerType: 4 */
        }
                  
        await bot.sendMessage(from,cosplybutton, { quoted:m }).catch(err => {
            return('Error!')
        })  

        break




case 'neko2':
   
reply('wait...')					
		
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `${prefix}neko2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbutsss,
      headerType: 4
      }
            await bot.sendMessage(from,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
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
//=================================================//

       case 'snk':
        default:
if(isCmd) {
        await bot.sendMessage(from, {text: `Command Rejected:- \n\n❌That is an invalid Command!`},
      })

               }
              }

   
               } catch (e) {
                    console.log(e)
                    }
                    }

                    let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})

