let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let uwu = `𝙴𝚂𝚃𝙾𝚂 𝚂𝙾𝙽 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃\n\n${gt}`
let fpa = { key: { participant: "0@s.whatsapp.net", remoteJid: "6287834993722-1621306547@g.us", fromMe: false, id: "3B64558B07848BD81108C1D14712018E" }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: "100000", requestFrom: "50499698072@s.whatsapp.net", noteMessage: { extendedTextMessage: { text: uwu }}, expiryTimestamp: "0", amount: { value: "100000", offset: 1000, currencyCode: "USD" }, background: { id: "BBB9307B17C17F928E57A7435E45033E", fileLength: "94896", width: 64, height: 64, mimetype: imagen1, placeholderArgb: 4288282521, textArgb: 4278190080, subtextArgb: 4288282521}}}}
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': uwu, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${uwu},;;;\nFN:${uwu},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃', 'jpegThumbnail': null}}}
let str = `𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎 𝐀 𝐋𝐎𝐒 𝐆𝐑𝐔𝐏𝐎𝐒 𝐃𝐄 𝐅𝐄́𝐍𝐈𝐗 - 𝐁𝐎𝐓 

𝙲𝙰𝙽𝙰𝙻 : 
𓊈 https://whatsapp.com/channel/0029VafZvB6J3jv3qCnqNu3x 𓊉

𝙶𝚁𝚄𝙿𝙾 : 
𓊈 https://chat.whatsapp.com/LErRdiLdyYa7Xq5FwCd2Y4 𓊉`
await conn.sendFile(m.chat, media, 'fantasy.mp4', str, fpa)}

handler.command = /^linkgc|grupos|gruposfantasy|groupofc$/i
handler.exp = 33

export default handler
