const roles = {
    '*NOVATO(A) V* 🪤': 0,
     '*NOVATO(A) IV* 🪤': 2,
      '*NOVATO(A) III* 🪤': 4,
       '*NOVATO(A) II* 🪤': 6,
        '*NOVATO(A) I* 🪤': 8,
    '*APRENDIS V* 🪚': 10,
     '*APRENDIS IV* 🪚': 12,
      '*APRENDIS III* 🪚': 14,
       '*APRENDIS II* 🪚': 16,
       '*APRENDIS I* 🪚': 18,
    '*EXPLORADOR(A) V* 🪓': 20,
     '*EXPLORADOR(A) IV* 🪓': 22,
      '*EXPLORADOR(A) III* 🪓': 24,
       '*EXPLORADOR(A) II* 🪓': 26,
        '*EXPLORADOR(A) I* 🪓': 28,
    '*MAESTRO(A) V* ⚒️': 30,
     '*MAESTRO(A) IV* ⚒️': 32,
      '*MAESTRO(A) III* ⚒️': 34,
       '*MAESTRO(A) II* ⚒️': 36,
        '*MAESTRO(A) I* ⚒️': 38,
    '*IRON V* 🦾': 40,
     '*IRON IV* 🦾': 42,
      '*IRON III* 🦾': 44,
       '*IRON II* 🦾': 46,
        '*IRON I* 🦾': 48,
    '*PLATA V* 🔮': 50,
     '*PLATA IV* 🔮': 52,
      '*PLATA III* 🔮': 54,
       '*PLATA II* 🔮': 56,
        '*PLATA I* 🔮': 58,
    '*ORO V* 🏅': 60,
     '*ORO IV* 🏅': 62,
      '*ORO III* 🏅': 64,
       '*ORO II* 🏅': 66,
        '*ORO I* 🏅': 68,
    '*DIAMANTE V* 💎': 70,
     '*DIAMANTE IV* 💎': 72,
      '*DIAMANTE III* 💎': 74,
       '*DIAMANTE II* 💎': 76,
        '*DIAMANTE I* 💎': 78,
    '*PRO EN FENIX<BOT V* 😼': 80,
     '*PRO EN FENIXBOT IV* 😼': 82,
      '*PRO EN FENIXBOT III* 😼': 84,
       '*PRO EN FENIXBOT II* 😼': 86,
        '*PRO EN FENIXBOT I* 😼': 88,
    '*SUPER PRO V* 🎩': 90,
     '*SUPER PRO IV* 🎩': 92,
      '*SUPER PRO III* 🎩': 94,
       '*SUPER PRO II* 🎩': 96,
        '*SUPER PRO I* 🎩': 98,
    '*LEGENDARIO(A) V* 🛡️': 100,
     '*LEGENDARIO(A) IV* 🛡️': 102,
      '*LEGENDARIO(A) III* 🛡️': 104,
       '*LEGENDARIO(A) II* 🛡️': 106,
        '*LEGENDARIO(A) I* 🛡️': 108,
    '*LEYENDA V* 🏆': 110,
     '*LEYENDA IV* 🏆': 112,
      '*LEYENDA III* 🏆': 114,
       '*LEYENDA II* 🏆': 116,
       '*LEYENDA I* 🏆': 118,
    '*ESTELAR V* ☄️': 120,
     '*ESTELAR IV* ☄️': 122,
      '*ESTELAR III* ☄️': 124,
       '*ESTELAR II* ☄️': 126,
        '*ESTELAR I* ☄️': 128,
    '*TOP ASTRAL V* ⚜️🔱': 130,
     '*TOP ASTRAL IV* ⚜️🔱': 132,
      '*TOP ASTRAL III* ⚜️🔱': 134,
       '*TOP ASTRAL II* ⚜️🔱': 136,
        '*TOP ASTRAL I* ⚜️🔱': 138,
    '👑 *ÉLITE GLOBAL V* 🏁': 140,
     '👑 *ÉLITE GLOBAL IV* 🏁': 145,
      '👑 *ÉLITE GLOBAL III* 🏁': 150,
       '👑 *ÉLITE GLOBAL II* 🏁': 155,
        '👑 *ÉLITE GLOBAL I* 🏁': 160,
    '👑 *∞ ÉLITE GLOBAL V* 💎🏁': 170,
     '👑 *∞ ÉLITE GLOBAL IV* 💎🏁': 185,
    '👑 *∞ ÉLITE GLOBAL III* 💎🏁': 200,
    '👑 *∞ ÉLITE GLOBAL II* 💎🏁': 250,
    '👑 *∞ ÉLITE GLOBAL I* 💎🏁': 300
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}

/*let handler = m => m

handler.before = function (m, text) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '*NOVATO(A) III* 🪤'
        : ((user.level >= 3) && (user.level <= 6)) ? '*NOVATO(A) II* 🪤'
            : ((user.level >= 6) && (user.level <= 9)) ? '*NOVATO(A) I* 🪤'
                : ((user.level >= 9) && (user.level <= 12)) ? '*APRENDIS III* 🪚'
                    : ((user.level >= 12) && (user.level <= 15)) ? '*APRENDIS II* 🪚'
                        : ((user.level >= 15) && (user.level <= 18)) ? '*APRENDIS I* 🪚'
                            : ((user.level >= 18) && (user.level <= 21)) ? '*EXPLORADOR(A) III* 🪓'
                                : ((user.level >= 21) && (user.level <= 24)) ? '*EXPLORADOR(A) II* 🪓'
                                    : ((user.level >= 24) && (user.level <= 27)) ? '*EXPLORADOR(A) I* 🪓'
                                        : ((user.level >= 27) && (user.level <= 30)) ? '*MAESTRO(A) III* ⚒️'
                                            : ((user.level >= 30) && (user.level <= 33)) ? '*MAESTRO(A) II* ⚒️'
                                                : ((user.level >= 33) && (user.level <= 36)) ? '*MAESTRO(A) I* ⚒️'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? '*IRON III* 🦾'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? '*IRON II* 🦾'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? '*IRON I* 🦾'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? '*PLATA III* 🔮'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? '*PLATA II* 🔮'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? '*PLATA I* 🔮'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? '*ORO III* 🏅'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? '*ORO II* 🏅'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? '*ORO I* 🏅'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? '*DIAMANTE III* 💎'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? '*DIAMANTE II* 💎'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? '*DIAMANTE I* 💎'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? '*PRO EN GATABOT III* 😼'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? '*PRO EN GATABOT II* 😼'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? '*PRO EN GATABOT I* 😼'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? '*SUPER PRO III* 🎩'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? '*SUPER PRO II* 🎩'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? '*SUPER PRO I* 🎩'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? '*LEGENDARIO(A) III* 🛡️'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? '*LEGENDARIO(A) II* 🛡️'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? '*LEGENDARIO(A) I* 🛡️'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? '*LEYENDA III* 🏆'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? '*LEYENDA II* 🏆'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? '*LEYENDA I* 🏆'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? '*ESTELAR III* ☄️'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? '*ESTELAR II* ☄️'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? '*ESTELAR I* ☄️'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 700)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? '👑 *ÉLITE GLOBAL* 🏁'
                                                                                                                                                                                : '👑 *∞ ÉLITE GLOBAL* 💎🏁'


    user.role = role
    return true
}

export default handler */
