
const fs = require('fs')
const chalk = require('chalk')

global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.autoavailable = false //status online (online)
global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
/*
KEBUTUHAN HIDUP🌹
const Babi = await Babi fadil || 'no counter'
const bacot = cangkem.sendmessage ( image, {url : https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg},
*/
global.youtube = 'https://youtube.com/channel/UCnQANmWo4iOyC6q6psb5eVg'
global.ig = 'https://www.instagram.com/raehan1986'
global.mygc = 'wa.me/6281528628870'
global.myweb = 'https://www.instagram.com/raehan1986'
global.linkgrupss = "https://chat.whatsapp.com/IReEw8uRufv55ehFUGLT1G"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'bacotah@gmail.com'
global.region = 'Kota Manado'

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Raehan'
global.botname = 'Raehan'
global.footer = 'Raehan' 
//=================================================//
// Other
global.owner = ['6281528628870']
global.premium = ['6281528628870']
global.packname = 'Kelaz'
global.ownerr = ['Raehan']
global.author = 'Menyanyi'
global.sessionName = 'yang'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝...',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    verif: 'Hai Kakak 👋 Silahkan Verifikasi Terlebih Dahulu Agar Bisa Menggunakan Bot RAEHAN',
}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/1fe23701e5a68b5e73bac.jpg' }
global.visoka = { url: 'https://telegra.ph/file/1fe23701e5a68b5e73bac.jpg' }
global.log0 = { url: 'https://telegra.ph/file/1fe23701e5a68b5e73bac.jpg' }
global.menuimg = 'https://d.top4top.io/p_2462t8qyt1.jpg'
global.yaLL = { url: 'https://telegra.ph/file/1fe23701e5a68b5e73bac.jpg' }
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})