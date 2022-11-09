

require('./RaehanEdit')
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state }= useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const { buttonvirus } = require('./DataBoss/virtex/buttonvirus')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./DataBoss/lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./DataBoss/lib/myfunc')
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./DataBoss/lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./DataBoss/lib/mongoDB')
//=================================================//
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`DataBoss/dbnye/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//
// save database every 30seconds
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
  }, 30 * 1000)
//=================================================//
async function startBossRaehan() {
const BossRaehan = makeWASocket({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['KONTOLE','Safari','1.0.0'],
auth: state})
//=================================================//
store.bind(BossRaehan.ev)
//=================================================//
    // anticall auto block
    BossRaehan.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
 let pushname = m.pushName || "No Name"
    BossRaehan.sendMessage(callerId, { image: {url: 'https://telegra.ph/file/0aeb324843604b1f6bc85.jpg'},  caption: `▬▭▬▭▬▭▬▭▬▬▭▬▭\n\n\n╔══════[ ꪶ⚠️ᴡᴀʀɴɪɴɢ⚠️ꫂ͢ ]══════⊱\n╠➤ 𝐉𝐀𝐍𝐆𝐀𝐍 𝐌𝐄𝐍𝐄𝐋𝐅𝐎𝐍 ${pushname}\n╠➤ 𝐂𝐀𝐋𝐋 = 𝐁𝐋𝐎𝐂𝐊 ⊘\n╠➤ wa.me/621528628870\n╚════[ ꪶ⸸⁹⁹⁹𝗥𝗔𝗘𝗛𝗔𝗡⁹⁹⁹⸸ꫂ͢  ]══════⊱\n\n\n▬▭▬▭▬▭▬▭▬▬▭▬▭\n\n\n𝗦𝗨𝗕𝗦𝗖𝗥𝗜𝗕𝗘 : https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg\n\n\n𝗙𝗢𝗟𝗟𝗢𝗪 : https://www.instagram.com/raehan1986/?hl=id\n\n\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : https://facebook.com/raehan1986\n\n\n▬▭▬▭▬▭▬▭▬▬▭▬▭`})
    await sleep(8000)
    await BossRaehan.updateBlockStatus(callerId, "block")
    }
    })
//=================================================//
BossRaehan.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!BossRaehan.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(BossRaehan, mek, store)
require("./BossRaehan")(BossRaehan, m, chatUpdate, store)
} catch (err) {
console.log(err)}})
//=================================================//
BossRaehan.getName = (jid, withoutContact  = false) => {
id = BossRaehan.decodeJid(jid)
withoutContact = BossRaehan.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = BossRaehan.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === BossRaehan.decodeJid(BossRaehan.user.id) ?
BossRaehan.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
// Group Update
BossRaehan.ev.on('groups.update', async pea => {
try {
ppgc = await BossRaehan.profilePictureUrl(pea[0].id, 'image')
} catch {
ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
let wm_fatih = { url : ppgc }
if (pea[0].announce == true) {
BossRaehan.send5ButImg(pea[0].id, `「 Perhatian !!!! 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Pengaturan Group Telah Di Ubah Oleh Admin`, wm_fatih, [])
} else if(pea[0].announce == false) {
BossRaehan.send5ButImg(pea[0].id, `「 Perhatian !!!! 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Pengaturan Group Telah Di Ubah Oleh Admin`, wm_fatih, [])
} else if (pea[0].restrict == true) {
BossRaehan.send5ButImg(pea[0].id, `「 Perhatian !!!! 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Pengaturan Group Telah Di Ubah Oleh Admin`, wm_fatih, [])
} else if (pea[0].restrict == false) {
BossRaehan.send5ButImg(pea[0].id, `「 Perhatian !!!! 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Pengaturan Group Telah Di Ubah Oleh Admin`, wm_fatih, [])
} else {
BossRaehan.send5ButImg(pea[0].id, `「 Perhatian !!!! 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Pengaturan Group Telah Di Ubah Oleh Admin`, wm_fatih, [])}})
//=================================================//
///anu
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
//dokumen random
let doku = [f1,f2,f3,f4,f5,f6]
let feler = pickRandom(doku)
// yoi
//=================================================//
BossRaehan.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await BossRaehan.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await BossRaehan.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await BossRaehan.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                if (anu.action == 'add') {
                    BossRaehan.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `𝐌𝐘 𝐍𝐀𝐌𝐄 𝐘4𝐋𝐋 𝐁𝐎𝐓
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐇𝐄𝐋𝐋𝐎 𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆
 @${num.split("@")[0]}
𝐃𝐈 𝐆𝐑𝐔𝐏
 ${metadata.subject} 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
- 𝐍𝐀𝐌𝐀 :
- 𝐔𝐌𝐔𝐑 :
- 𝐆𝐄𝐍𝐃𝐄𝐑 :
- 𝐍𝐄𝐆𝐀𝐑𝐀 :
- 𝐏𝐀𝐒𝐀𝐍𝐆𝐀𝐍 :
- 𝐀𝐋𝐀𝐒𝐀𝐍 𝐁𝐄𝐑𝐆𝐀𝐁𝐔𝐍𝐆 :
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐉𝐀𝐍𝐆𝐀𝐍 𝐋𝐔𝐏𝐀 𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 : https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg
▬▭▬▭▬▭▬▭▬▬▭▬▭▬` })
                } else if (anu.action == 'remove') {
                    BossRaehan.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `𝐌𝐘 𝐍𝐀𝐌𝐄 𝐘4𝐋𝐋 𝐁𝐎𝐓
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ 𝐃𝐀𝐃𝐀𝐇 𝐁𝐄𝐁𝐀𝐍 𝐊𝐄𝐋𝐔𝐀𝐑𝐆𝐀 👋🏻
┣❏ @${num.split("@")[0]}
┣❏ 𝐒𝐄𝐌𝐎𝐆𝐀 𝐓𝐄𝐍𝐀𝐍𝐆 𝐃𝐈 𝐀𝐋𝐀𝐌 𝐒𝐀𝐍𝐀 👋
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐌𝐀𝐑𝐈 𝐁𝐄𝐑𝐃𝐎𝐀 𝐌𝐔𝐋𝐀𝐈 🤲
𝐀𝐋𝐋 𝐌𝐄𝐌𝐁𝐄𝐑
${metadata.subject}
┏━━⊱
┣❏SUBSCRIBE : https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬` })
                } else if (anu.action == 'promote') {
                    BossRaehan.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ @${num.split('@')[0]} 𝐓𝐄𝐋𝐀𝐇 𝐌𝐄𝐍𝐉𝐀𝐃𝐈 𝐀𝐃𝐌𝐈𝐍
┣❏ 𝐃𝐈 𝐆𝐑𝐔𝐏 ${metadata.subject}
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬` })
                } else if (anu.action == 'demote') {
                    BossRaehan.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ @${num.split('@')[0]} 𝐁𝐔𝐊𝐀𝐍 𝐀𝐃𝐌𝐈𝐍 𝐋𝐀𝐆𝐈
┣❏ 𝐃𝐈 𝐆𝐑𝐔𝐏 ${metadata.subject}
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬` })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })
//=================================================//
// Setting
BossRaehan.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid}
//=================================================//
BossRaehan.ev.on('contacts.update', update => {
for (let contact of update) {
let id = BossRaehan.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
BossRaehan.getName = (jid, withoutContact  = false) => {
id = BossRaehan.decodeJid(jid)
withoutContact = BossRaehan.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = BossRaehan.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === BossRaehan.decodeJid(BossRaehan.user.id) ?
BossRaehan.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//
BossRaehan.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await BossRaehan.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await BossRaehan.getName(i + '@s.whatsapp.net')}\nFN:${await BossRaehan.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:denyp857@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://https://www.instagram.com/hikal_857/?hl=id\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
BossRaehan.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
BossRaehan.setStatus = (status) => {
BossRaehan.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status}
//=================================================//
BossRaehan.public = false
//=================================================//
BossRaehan.serializeM = (m) => smsg(BossRaehan, m, store)
BossRaehan.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); BossRaehan.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startBossRaehan(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startBossRaehan(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); BossRaehan.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); BossRaehan.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startBossRaehan(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startBossRaehan(); }
else BossRaehan.end(`Unknown DisconnectReason: ${reason}|${connection}`)}
console.log('Connected...', update)})
//=================================================//
/*
BossRaehan.ev.on('creds.update', saveState)
*/
// Add Other

  /**
  *
  * @param {*} jid
  * @param {*} url
  * @param {*} caption
  * @param {*} quoted
  * @param {*} options
  */
  //=================================================//
BossRaehan.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return BossRaehan.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback:true, ...options}, { quoted: quoted, ...options})}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return BossRaehan.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })}
if(mime.split("/")[0] === "image"){
return BossRaehan.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})}
if(mime.split("/")[0] === "video"){
return BossRaehan.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })}
if(mime.split("/")[0] === "audio"){
return BossRaehan.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })}}
//=================================================//
/** Send List Messaage
  *
  *@param {*} jid
  *@param {*} text
  *@param {*} footer
  *@param {*} title
  *@param {*} butText
  *@param [*] sections
  *@param {*} quoted
  */
  //=================================================//
BossRaehan.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections}
BossRaehan.sendMessage(jid, listMes, { quoted: quoted })}
//=================================================//
/** Send Button 5 Message
 * 
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} button
 * @returns 
 */
 //=================================================//
BossRaehan.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
let templateButtons = but
var templateMessage = {
text: text,
footer: footer,
templateButtons: templateButtons}
BossRaehan.sendMessage(jid, templateMessage)}
//=================================================//
/** Send Button 5 Image
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} image
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
BossRaehan.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: BossRaehan.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
BossRaehan.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/** Send Button 5 Video
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Video
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
BossRaehan.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: BossRaehan.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
BossRaehan.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/** Send Button 5 Gif
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Gif
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
BossRaehan.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: BossRaehan.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
BossRaehan.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} buttons 
 * @param {*} caption 
 * @param {*} footer 
 * @param {*} quoted 
 * @param {*} options 
 */
 //=================================================//
BossRaehan.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options}
BossRaehan.sendMessage(jid, buttonMessage, { quoted, ...options })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} text 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendText = (jid, text, quoted = '', options) => BossRaehan.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} caption 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await BossRaehan.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} caption 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await BossRaehan.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} quoted 
 * @param {*} mime 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await BossRaehan.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} text 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendTextWithMentions = async (jid, text, quoted, options = {}) => BossRaehan.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
//=================================================//
await BossRaehan.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
//=================================================//
await BossRaehan.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//=================================================//
/**
 * 
 * @param {*} message 
 * @param {*} filename 
 * @param {*} attachExtension 
 * @returns 
 */
 //=================================================//
BossRaehan.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================//
BossRaehan.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} filename
 * @param {*} caption
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await BossRaehan.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./DataBoss/lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await BossRaehan.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} message 
 * @param {*} forceForward 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
BossRaehan.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await BossRaehan.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
BossRaehan.cMod = (jid, copy, text = '', sender = BossRaehan.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === BossRaehan.user.id
return proto.WebMessageInfo.fromObject(copy)}
//=================================================//
/**
 * 
 * @param {*} path 
 * @returns 
 */
 //=================================================//
BossRaehan.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, '../DataBoss/dbnye/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}
//=================================================//
BossRaehan.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await BossRaehan.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./DataBoss/lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await BossRaehan.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
BossRaehan.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
return BossRaehan}
//=================================================//
startBossRaehan()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
