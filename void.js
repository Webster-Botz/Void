//Use latest fork to get latest features.
const {default: makeWASocket,
  delay,DisbotectReason,BufferJSON,MessageType, MessageOptions, Mimetype, useMultiFileAuthState, 
  getContentType, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, downloadAndSaveMediaMessage } = require('@whiskeysockets/baileys')
  const axios = require('axios')
  const color = require('./lib/color')
  const { spawn, exec, execSync } = require("child_process");
  const crypto = require('crypto')
  const fs = require('fs')
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
  
  
  
  
  
  //=================================================//
  
  
  
  
  //========================//
  //ANTILINK
  if (isGroup && !mek.key.fromMe) {
      if (budy.includes("https://chat.whatsapp.com/")) {
        reply("Group Link Detected!!\n\n And Has Been Deleted No Links Allowed");
        
  await bot.sendMessage(from,
  
            {
  
                delete: {
  
                    remoteJid: from,
  
                    fromMe: false,
  
                    id: mek.key.id,
  
                    participant: mek.key.participant
  
                }
  
            })
  
  console.log('Link Deleted.')
  
      }
    }
     //=================================================// 
     if (isCmd ) console.log(color('[MESS]'), color(time, 'white'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
  //=================================================//  
  
  //=================================================//          
            
  
            
  //=================================================//
  
          
  //=================================================//
  
  //=================================================//
     
  //=================================================//  
  
     if(iCmd&&!isGroup) return reply("_Don't message bot in pm Blocking you Now :v_")
     
  //=================================================//
  
  
  //==============================================//
  
       switch (command){
           
        
      
  
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
    
              mek.message.extendedTextMessage === undefined |
              mek.message.extendedTextMessage === null
            )
              return reply("Tag the target you want to promote!");
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
            if (mentioned.length > 1) {
    bot.groupParticipantsUpdate(from, [mentioned], 'promote')
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
    bot.groupParticipantsUpdate(from, [sender], 'promote')
    
              reply('DONE!');
          }
      break
    
      case 'dme': {
        if (!isGroup) return reply('this feature is only for groups')
        if (!isOwner) return reply('Only Legions can use.')
    bot.groupParticipantsUpdate(from, [sender], 'demote')
    
          reply('DONE!');
      }
    break
    
      case 'demote': {
            if (!isGroup) return reply('this feature is only for groups')
            if (!isGroupAdmins) return reply('Only Admins are allowed to use this Cmd')
            if (
    
              mek.message.extendedTextMessage === undefined ||
    
              mek.message.extendedTextMessage === null
    
            )
    
              return reply("Tag the target you want to demote!");
    
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
    
            if (mentioned.length > 1) {
    bot.groupParticipantsUpdate(from, [mentioned], 'demote')
              reply('DONE!');
            } else if (mentioned.length < 1) {
              anu = mek.message.extendedTextMessage.contextInfo.participant;
    bot.groupParticipantsUpdate(from, [anu], 'demote');
              reply('DONE!');
            } else {
    bot.groupParticipantsUpdate(from, [mentioned],'demote')
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
  bot.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`DONE!`)).catch((err) => reply(jsonformat(err)))
       break
  
       case 'closegc':
                       case 'c':
       if (!isGroup) return reply('this feature is only for group')
       if (!isGroupAdmins) return reply('this feature is only for admins')
  bot.groupSettingUpdate(from, 'announcement').then((res) => reply(`DONE!`)).catch((err) => reply(jsonformat(err)))
     break
  
     
  
          case 'leave':
  if(isGroup) {
  if(!isOwner) return reply('_Only Binx Devs Are Allowed_')
              reply("Byeee...")
              await bot.groupLeave(from).then((res) => reply(jsonformat(res))).catch((err) => reply("Error"))
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
  }
  bot.sendMessage(from,{text:menText,mentions: participants.map(a => a.id)},{quoted:mek})
  break

  case 'tagall--hide-tags':
    case 'ping--hide-tags':
    if (!isGroup) return reply('This Command can only be used in Groups')
             if (!isGroupAdmins) return reply('Only admins are allowed to use this CMD')
    if(q) { var Text =`` } else {  var Text = ``}
    let menTextt = `*💫 You Are All Tagged by - ${pushname}*`
   
    bot.sendMessage(from,{text:menTextt,mentions: participants.map(a => a.id)},{quoted:mek})
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
   bot.sendMessage(from, {text:`*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}`})
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
  //=================================================//
  
         case 'snk':
          default:
  if(isCmd) {
          await bot.sendMessage(from, {text: `Command Rejected:- \n\n❌That is an invalid Command!`})
  }
       }
                 } catch (e) {
                      console.log(e)
                      }
                    }