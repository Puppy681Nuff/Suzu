const words = ['Bad','Emo', 'Atrocious', 'Awful', 'Cheap', 'Rat', 'Dreadful', 'Flat Ass', 'Poor', 'A Mistake', 'Forgotten', 'Evil', 'Rotten'];


async function run(username , bot, chat) {
    
    console.log("Running parsifal");
    bot.chat(`/gc Parsifal is...`);
    for(let i = 0; i < words.length; i++) {
        sendWord(bot, words[i], i);
    }    
}

module.exports = {
    run:run
}

async function sendWord(bot, word, i) {
    await setTimeout(() => {
        bot.chat(`/gc ${word}`)
    
    }, 2000 * i);
}