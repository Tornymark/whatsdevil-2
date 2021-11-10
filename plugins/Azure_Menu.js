/* Copyright (C) 2021 RAMIYA. Neotro BASED. Licensed under the  GPL-3.0 License; you may not use this file except in compliance with the License. */
// දවස් ගානක මහන්සිය, උස්සන්න එපා.

const Amazone = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('amazone');
var ruq = { cd: 'Li4vY29uZmln', encrypt: 'Code Encrypted BY RAMIYA' }
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Azure = require(file);
let tk = Config.WORKTYPE == 'public' ? false : true

// logo https://i.imgur.com/LjU7scE.jpg 

// --------------------------SINHALA MENU ------------------------------------

const msg = `━━━━━━━⦁⦁◯⦁⦁━━━━━━━━
      🦹🏻‍♂️ *AZURE BOT* 🧛‍♂️
     *COMMAND MENU v.1*
━━━━━━━⦁⦁◯⦁⦁━━━━━━━━

  🧛‍♂️ Bot Check - *.alive*
  🧛‍♂️ Owner Details - *.owner*
  🧛‍♂️ Group Rules - *.rules*

 -------•-Command Menu-•-------

  🦹‍♂️ _AZURE BOT විධාන ලබා ගැනීමට පහත *Click Me* ඔබා අදාල විධාන Menu ඒක Select කර Send කරන්න._

══════════════════ `


const btn = `🦹‍♂️ ᴀᴢᴜʀᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ
━━━━━━━⦁⦁◯⦁⦁━━━━━━━━
─•▼•──•▼•──•▼•──•▼•─`
	  
const row1 = ` 💡 _සින්දු, විඩියෝ, පින්තුර, ආදී විධාන_

▭▬▭▬▭▬▭▬▭▬▭▬▭
👻 *Download Commands* 💥
▭▬▭▬▭▬▭▬▭▬▭▬▭

🌀 *.song* {song name}
🍥 සින්දුවේ නම English හෝ සිංග්ලිෂ් වලින් ලියන්න
🚀 උදා:- _.song nethu nonida_

🌀 *.audio* {youtube link}
🍥 Youtube සින්දුවක්  MP3 ආකාරයට ලබා ගැනිමට
🚀 උදා:- _.audio https://www.youtube.com/watch?v=4ZPmLECW6ec_

🌀 *.dcsong* {song name}
🍥 සින්දුවක්  document ආකාරයට ලබා ගැනිමට
🚀 Phone එකේ Save කරගැනිමට පහසුයි.

🌀 *.mp4* {video name}
🍥 Video නමින් බාගත කරයි.
🚀 උදා:- _.mp4 avicii the nights_

🌀 *.video* {youtube link}
🍥 Youtube විඩියෝ බාගත කරයි (උපරිම විනාඩි 25)
⚠️ Video එන තෙක් විනාඩි 3ක් ඉවසන්න.
🚀 උදා:- _.video https://www.youtube.com/watch?v=4ZPmLECW6ec_

🌀 *.tiktok* {Tiktok video Link}
🍥 Tiktok විඩියෝ  බාගත කරයි  (without watermark)

🌀 *.fb* {FB video Link}
🍥 Facebook විඩියෝ  බාගත කරයි (උපරිම විනාඩි 20)
🚀 උදා:- _.fb https://www.facebook.com/Damnitx71/videos/300185937841070/_

🌀 *.twitter* {twitter link}
🍥 Twitter පින්තූර  හෝ  විඩියෝ බාගත කරයි

🌀 *.img* {word}
🍥 පින්තූර  4ක් ලබාදෙයි

🌀 *.wallpaper*
🍥 High Quality wallpapers ලබාදෙයි

🌀 *.awallpaper*
🍥 Anime wallpapers ලබාදෙයි

🌀 *.esthetic*
🍥 High Quality wallpapers ලබාදෙයි

🌀 *.anime*
🍥 Quality Anime පින්තූර ලබාදෙයි

🌀 *.catpic*
🍥 පුසන්ගේ පින්තූර ලබාදෙයි

🌀 *.pinsta* {Insta Photo Link}
🍥 Instagram පින්තූර  බාගත කරයි

🌀 *.vinsta* {Insta Video Link}
🍥 Instagram විඩියෝ  බාගත කරයි

🌀 *.afire* {Apk Mediafire Link}
🍥 APK බාගත කරයි
⚠️ Mediafire Link ඇතුලත් කල යුතුය

🌀 *.pfire* {PDF Mediafire Link}
🍥 PDF බාගත කරයි
⚠️ Mediafire Link ඇතුලත් කල යුතුය

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row2 = ` 💡 _ස්ටිකර් හා අනෙක් පරිවර්තන විධාන_

▭▬▭▬▭▬▭▬▭▬▭▬▭
🌺 *Conversion Commands* 🍃
▭▬▭▬▭▬▭▬▭▬▭▬▭

🌀 *.sticker*
🍥 Img->sticker 
🚀 පින්තුරයට Reply ආකාරයට ඇතුලත් කරන්න

🌀 *.photo*
🍥 Sticker-> Image
🚀 ස්ටිකර් එකට Reply ආකාරයට ඇතුලත් කරන්න
 
🌀 *.mp3*
🍥 Video-> mp3
🚀 විඩියෝ එකට Reply ආකාරයට ඇතුලත් කරන්න

🌀 *.tts* {text}
🍥 වචන කටහඩ කරයි

🌀 *.ttp* {text}
🍥 වචන රුපයක් කරයි

🌀 *.qr* {text}
🍥 Text->QR img

🌀 *.emoji* {Emoji}
🍥 Emoji->IMG

🌀 *.gif*
🍥 විඩියෝ එකට Reply ආකාරයට ඇතුලත් කර GIF ලබා ගන්න
⚠️උපරිම විඩියෝ කාලය තත්පර 10

🌀 *.attp*
🍥 Text-> animated sticker

🌀 *.2attp*
🍥 Text-> animated sticker v2

🌀 *.rmbg*
🍥 පින්තුරයක පසුබිම ඉවත් කිරිම
🚀 පින්තුරයට Reply ආකාරයට ඇතුලත් කරන්න

🌀 *.trt* {lang1} {lang2}
🍥 භාෂා දෙකක් පරිවර්තනය
⚠️ වචනයට Reply ආකාරයට ඇතුලත් කරන්න
🚀 Ex: 🌀 .trt en si

🌀 *.unvoice*
🍥 audio -> sound Recording

🌀 *.ftext* {some word}
🍥 වචනය විවිධ Style අනුව නිර්මානය කරයි.

🌀 *.short* {Link}
🍥 Link කෙටි කරයි

🌀 *.ss* {Link}
🍥 වෙබ් අඩවියක් පින්තුරයක් බවට හරවයි

🌀 *.spdf* {Link}
🍥 වෙබ් අඩවියක් PDF බවට හරවයි

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row3 = ` 💡 _ලෝගෝ සැකසිම හා අනෙක් පින්තුර විධාන_

▭▬▭▬▭▬▭▬▭▬▭▬▭
🎯 *Logo/IMG Commands* 🖼
▭▬▭▬▭▬▭▬▭▬▭▬▭

🌀 *.editimg*
🍥 Image Design Tools

🌀 *.meme* {Text}
🍥 Reply Photo to Write Text on Image
🚀 පහත පෙලියට යාමට ";" යොදන්න

🌀 *.carbon* {Text}
🍥 Creates img

🌀 *.aimgz*
🍥 Basic Image Command List

____________________

🎨 ඔබට අවශ්‍ය Logo දැන් අපෙගේ Bot මගින් ලබා ගත හැක.
🎭 Logo Pack ලබා ගැනිම සදහා පහල Command භාවිතා කලහැක.
🎲 Logo එකක් හදන්න දාල තත්පර 4-10 අතර කාලයක් යනවා එන්න. 
🎯 යම් Logo command එකක් වැඩ නොකරයි නම් එය Bot ගේ දොෂයක් නොව Site එකේ ප්‍රශ්නයකි.

             *ℒ𝑜𝑔𝑜 𝒞𝑜𝓂𝓂𝒶𝓃𝒹𝓈*
			 
🚀 Premium Logos - *.prologo {text}* ✅
🚀 FF LOGOS [01-50] - *.ffpack* ✅

පහත LOGO තාවකාලිකව අයින් කර ඇත

🚀 Pack 1 [01-08]- *.logop1* ❎
🚀 Pack 2 [09-15]- *.logop2* ❎
🚀 Pack 3 [16-24]- *.logop3* ❎
🚀 Pack 4 [25-32]- *.logop4* ❎
🚀 Pack 5 [33-40]- *.logop5* ❎
🚀 Pack 6 [41-50]- *.logop6* ❎

More Logo Commands Coming soon....

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row4 = ` 💡 _තොරතුරු සෙවිම් හා විස්තර විධාන_

▭▬▭▬▭▬▭▬▭▬▭▬▭
🗒 *Information Commands* 🔍
▭▬▭▬▭▬▭▬▭▬▭▬▭

🌀 *.yt* {youtube search words}
🍥 Youtube විඩියෝ ලින්ක් සොයයි

🌀 *.movie* {movie name}
🍥 චිත්‍රපට විස්තර ලබාදෙයි

🌀 *.show* {tvseries name}
🍥 Tv Series විස්තර ලබාදෙයි

🌀 *.ocr*
🍥 පින්තුරයේ ඇති අකුරු වචන කරයි
🚀 පින්තුරයට Reply ආකාරයට ඇතුලත් කරන්න

🌀 *.insta* {insta username}
🍥 Instagram පරිශිලක විස්තර ලබාදෙයි

🌀 *.github* {github username}
🍥 Github පරිශිලක විස්තර ලබාදෙයි

🌀 *.dyno*
🍥 බොට්ගේ Dyno භාවිතය පෙන්වයි

🌀 *.covid* | *.covid {code}*
🍥 කොවිඩ් විස්තර ලබාදෙයි

🌀 *.bot* {Text}
🍥 AI බොට් සමග කතා කිරිමට

🌀 *.brainly* {question}
🍥 ප්‍රශ්නයක් ඇසිමට

🌀 *.weather* {town name}
🍥 කාලගුණ වාර්තාවක් ලබාගැනිමට

🌀 *.ip* {IP Address}
🍥 IP විස්තර ලබාදෙයි
🚀 Ex: 🌀 .ip 192.168.1.1

🌀 *.joke*
🍥 ඉංග්‍රිසි විහිලුවක් ලබාගැනිමට

🌀 *.wame*
🍥 Whatsapp user link ලබාගැනිමට
🚀 අදාල පුද්ගලයාගේ පනිවිඩයකට Reply ආකාරයට ඇතුලත් කරන්න

🌀 *.lyric* {song name}
🍥 ඉංග්‍රිසි සිංදුවක පද පෙලි ලබාගැනිමට
⚠️ සිංහල හෝ වෙනත් භාශා සින්දු භාවිතා කිරිමෙන් වලකින්න

🌀 *.dict* {text}
🍥 වචනයක තේරුම ශබ්දකොෂයෙන් දැනගැනිමට

🌀 *.quote*
🍥 ප්‍රසිද්ධ උපුටාගැනිම් ලබාගැනිමට

🌀 *.scan* {Phone no as +947xxxxxxxx}
🍥 ලබාදෙන දුරකතන අංකය Whatsapp භාවිතා කරනවාද යන්න සෙවිමට.

🌀 *.info*
🍥 Group එකක විස්තර ලබාගැනිමට

🌀 *.detectlang*
🍥 භාශාව හදුනා ගැනිම
🚀 පනිවිඩයකට Reply ආකාරයට ඇතුලත් කරන්න

🌀 *.jid*
🍥 Whatsapp user JID ලබාගැනිමට
🚀 අදාල පුද්ගලයාගේ පනිවිඩයකට Reply ආකාරයට ඇතුලත් කරන්න

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row5 = ` 💡 _මීම් සෑදීමේ විධාන_ 

▭▬▭▬▭▬▭▬▭▬▭▬▭
🤪 *MEME Commands* 🎭
▭▬▭▬▭▬▭▬▭▬▭▬▭

🎨 පහත විධාන ඉදිරියෙන් වචන ඇතුලත් කරන්න
🚀 පහත පෙලියට යාමට "/" යොදන්න

*💠.yasai       ❴your text❵*
*💠.uddika    ❴your text❵*
*💠.aah          ❴your text❵*
*💠.sir            ❴your text❵*
*💠.my3         ❴your text❵*
*💠.hii             ❴your text❵*
*💠.asai          ❴your text❵*
*💠.hapoi       ❴your text❵*
*💠.anura       ❴your text❵*
*💠.gemba       ❴your text❵*
*💠.wow       ❴your text❵*
*💠.hapo       ❴your text❵*
*💠.babah       ❴your text❵*
*💠.nah       ❴your text❵*

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row6 = ` 💡 _ඇනිමෙ පින්තුර විධාන_ 

▭▬▭▬▭▬▭▬▭▬▭▬▭
🧝🏻‍♀️ *Anime Commands* 🧚🏻‍♀️
▭▬▭▬▭▬▭▬▭▬▭▬▭

🌀 *.anime* ✅
🌀 *.loli* ✅
🌀 *.wifu* ✅
🌀 *.neko* ✅
🌀 *.ava* ✅
🌀 *.kemo* ✅
🌀 *.awoo* ✅
🌀 *.shinobu* ✅
🌀 *.megumin* ✅
🌀 *.2anime* ✅
🌀 *.3anime* ✅
🌀 *.4anime* ✅
🌀 *.5anime* ❎ 

_MORE ANIME COMMANDS COMING SOON_

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row7 = ` 💡 _සිංහල හා ඉංග්‍රිසි TTP විධාන_

▭▬▭▬▭▬▭▬▭▬▭▬▭
🎡 *TTP Commands* 🪁
▭▬▭▬▭▬▭▬▭▬▭▬▭

🧛‍♂️ *Sinhala Support TTP*
_______________________

🌀 *.1ttp* {Text} ✅
🌀 *.2ttp* {Text} ✅
🌀 *.3ttp* {Text} ✅
🌀 *.4ttp* {Text} ❎

🧛‍♂️ *English TTP*
_______________________

🌀 *.tblue* {Text} ✅
🌀 *.tyellow* {Text} ✅
🌀 *.tgreen* {Text} ✅
🌀 *.tpink* {Text} ✅
🌀 *.tpurple* {Text} ✅
🌀 *.tred* {Text} ✅
🌀 *.tblack* {Text} ✅
🌀 *.tbrown* {Text} ✅

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row8 = ` 💡 _පොත් ලැයිස්තුව_

▭▬▭▬▭▬▭▬▭▬▭▬▭
📚 *PDF BOOK Commands* 📖
▭▬▭▬▭▬▭▬▭▬▭▬▭

🔎 *.1book*
📚 රාවණා

🔎 *.2book*
📚 ශ්‍රී රාවණා පුවත

🔎 *.3book*
📚 මළවුන්ගෙන් අවුරුදු දා

🔎 *.4book*
📚 මළගිය ඇත්තෝ

🔎 *.5book*
📚 ගග අද්දර

🔎 *.6book*
📚 මීනා

🔎 *.7book*
📚 පිච්ච මල

🔎 *.8book*
📚 අම්මා

🔎 *.9book*
📚 තෙරීසා

🔎 *.10book*
📚 සෙංකොට්ටං

🔎 *.11book*
📚 අරණකට පෙම් බැද

🔎 *.12book*
📚 ජනාධිපති තාත්තා

🔎 *.13book*
📚 පිපියන් දාස්පෙති

🔎 *.14book*
📚 වනගත වීරයෝ

🔎 *.15book*
📚 මනමාල මුවැත්තී

🔎 *.16book*
📚 සුදු රෙදි හොරා

🔎 *.17book*
📚 ලොවීනා

🔎 *.18book*
📚 පවුකාරයාට ගල් ගැසීම

🔎 *.19book*
📚 ආදරෙයි බුබුළු

🔎 *.20book*
📚 අහම්බ කාරක

*⏱දිනෙන් දින මෙම ලැයිස්තුව Update වේ පොත් 2500ක් ඇතුලත් කිරීම අරමුණ වේ📑*
*BOOKS BY AMAZONE ALEXA*

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row9 = ` 💡 _Android App බාගත කිරිමේ විධාන_

▭▬▭▬▭▬▭▬▭▬▭▬▭
📦 *APK Commands* 📲
▭▬▭▬▭▬▭▬▭▬▭▬▭

*APK LIST COMING SOON*

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row10 = ` 💡 _අනෙකුත් සුලු විධාන_

▭▬▭▬▭▬▭▬▭▬▭▬▭
🛍️ *Other Commands* 🃏
▭▬▭▬▭▬▭▬▭▬▭▬▭

🌀 *.rules
🍥 සමුහයේ නීති බලා ගැනිමට

🌀 *.gm* | 🌀 *.gn*
🍥 Sends Good Morning and Good Night message.

🌀 *.brdmore*
🍥 වචනයට පෙර  Readmore එකක් එකතු කිරිමට

🌀 *.rdmore*
🍥 වචනයට පසු Readmore එකක් එකතු කිරිමට

🌀 *.xttps* ❎
🍥 TTP විධාන ලැයිස්තුව ලබා ගැනිමට

🌀 *.xanimes* ❎
🍥 Anime විධාන ලැයිස්තුව ලබා ගැනිමට

🌀 *.xpdf* ❎
🍥 PDF විධාන ලැයිස්තුව ලබා ගැනිමට

🌀 *.xapk* ❎
🍥 Apk විධාන ලැයිස්තුව ලබා ගැනිමට

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

const row11 = ` 💡 _සියලුම විධාන ලැයිස්තුව_

*ALL COMMANDS*

සියලුම විධාන ලැයිස්තුව ලබා ගැනිමට *.ramiya01* ඇතුලත් කරන්න

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `


Amazone.addCommand({pattern: 'azure', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '🦹‍♂️ Download විධාන 🕊', description: row1, rowId:"rowid1"},
		{title: '🦹‍♂️ පරිවර්තන විධාන 🕊', description: row2, rowId:"rowid2"},
        {title: '🦹‍♂️ Logo හා IMG විධාන 🕊', description: row3, rowId:"rowid3"},
        {title: '🦹‍♂️ තොරතුරු විධාන 🕊', description: row4, rowId:"rowid4"},
        {title: '🦹‍♂️ මීම් විධාන 🕊', description: row5, rowId:"rowid5"},
        {title: '🦹‍♂️ ඇනිම් විධාන 🕊', description: row6, rowId:"rowid6"},
        {title: '🦹‍♂️ TTP විධාන 🕊', description: row7, rowId:"rowid7"},
        {title: '🦹‍♂️ PDF පොත් විධාන 🕊', description: row8, rowId:"rowid8"},
        {title: '🦹‍♂️ APK විධාන 🕊', description: row9, rowId:"rowid9"},
		{title: '🦹‍♂️ වෙනත් විධාන 🕊', description: row10, rowId:"rowid10"},
        {title: '🦹‍♂️ සම්පූර්ණ විධාන  ඔක්කොම 🕊', description: row11, rowId:"rowid11"}
       ]
       
       const sections = [{title: "AZURE BOT Command Panel - RAMIYA", rows: rows}]
       
       const button = {
        buttonText: 'Click Me',
        description: btn,
        sections: sections,
        listType: 1
       }
       
	   var respoimage = await axios.get(`https://i.imgur.com/LjU7scE.jpg`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg })
	   
       await message.client.sendMessage(message.jid, button, MessageType.listMessage,)
    
    }));

