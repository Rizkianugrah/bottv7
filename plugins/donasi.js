let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081387089252]
│ • Saweria [ https://saweria.co/owneryusuf ]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Ovo [083199789390]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
