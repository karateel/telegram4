const TelegramApi = require('node-telegram-bot-api');

const token = '2017685094:AAFFmr2s120pjMNvF7Wii30FaWgu-kzRXLo';

const bot = new TelegramApi(token, {polling: true});

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Возможности бота'},
        {command: '/cats', description: 'Картинка котиков :)'},
        {command: '/dogs', description: 'Картинка песелей :)'},
        {command: '/puppies', description: 'Картинка щеночков C:'},
        {command: '/kittens', description: 'Картинка котят :)'},
        {command: '/surprise', description: 'Постараюсь удивить тебя'}
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text === '/start'){
            await bot.sendMessage(chatId, 'Привет, зай, я сделал для тебя бота, чтоб ты всегда могла улыбнуться :)')
            return  bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/6a3/0b2/6a30b244-53fd-38d4-9b1e-fe8d37cdea71/1.webp')
        }
        if(text === '/info'){
            return  bot.sendMessage(chatId, 'Могу скинуть тебе картинку, либо комплимент, возможно позже, сделаю тут игру :), посмотри список команд и выбери, что тебе нравится')
        }
        if (text === '/cats') {
            let imgs = [
                'https://klike.net/uploads/posts/2019-07/1564314090_3.jpg',
                'https://www.5.ua/media/pictures/original/225699.jpg?t=1628082848',
                'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg',
                'https://www.m24.ru/b/d/nBkSUhL2gVMkn8-0PqzJrMCqzJ3w-pui1inGh_fH_nKUPXuaDyXTjHou4MVO6BCVoZKf9GqVe5Q_CPawk214LyWK9G1N5ho=YjarIArX-kmJrnA2Iq2RGg.jpg',
                'https://bigpicture.ru/wp-content/uploads/2012/07/cats-32.jpg',
                'https://3d-galleru.ru/cards/1/23/t87wbdrvkjqzr0g/koshki-letayushhie-koty.gif'
            ]

            function random() {
                let i = parseInt((Math.random() * imgs.length) +1)
                bot.sendMessage(chatId, imgs[i])
            }

            await random()
        }
        if(text === '/dogs'){
            let imgs = [
                'https://www.proplan.ru/sites/owners.proplan.ru/files/styles/nppe_article_listing_image_and_description/public/2020-03/shutterstock_155382377_2.jpg?itok=HiTjfpS5',
                'https://icdn.lenta.ru/images/2019/12/06/12/20191206122159535/pwa_vertical_1280_dab2ef83b33313f403795e63869f6cc7.jpg',
                'https://klike.net/uploads/posts/2019-06/medium/1559799916_2.jpg',
                'https://malteze.net/images/sampledata/poroda/2/smeshnye_porody_22663554.jpg',
                'https://www.meme-arsenal.com/memes/78bbfdbd3c60b9020b9d823ac521ec91.jpg',
                'https://fishki.net/picsw/122010/02/bonus/sobaki/002.jpg'
            ]

            function random() {
                let i = parseInt((Math.random() * imgs.length) +1)
                bot.sendMessage(chatId, imgs[i])
            }

            await random()
        }
        if(text === '/puppies'){
            let imgs = [
                'https://oir.mobi/uploads/posts/2021-04/1619794573_49-oir_mobi-p-smeshnie-shchenki-zhivotnie-krasivo-foto-51.jpg',
                'https://s1.1zoom.ru/big0/132/Dogs_Funny_Bulldog_Puppy_Bokeh_571468_1280x853.jpg',
                'https://lh3.googleusercontent.com/proxy/kVo4yl4mLCdNCBxsdEMSnB0TIYmz-5zwk5J_ZYnbWry-Ky17rGYzQh17_bphlhOYkS7BXH_66IwBMv-DePOjs-wftF72trsEJvq1vg',
                'https://www.shmyandeks.ru/wp-content/uploads/2014/10/smeshnye_shenki_5.jpg',
                'https://xrest.ru/schemes/00/0d/b2/b8/%D0%A1%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5%20%D1%89%D0%B5%D0%BD%D0%BA%D0%B8-1.jpg',
                'http://lisimnik.ru/wp-content/uploads/2016/01/pYGm26HM5uo.jpg'
            ]

            function random() {
                let i = parseInt((Math.random() * imgs.length) +1)
                bot.sendMessage(chatId, imgs[i])
            }

            await random()
        }
        if(text === '/kittens'){
            let imgs = [
                'https://mirpozitiva.ru/wp-content/uploads/2019/11/1474011210_15.jpg',
                'https://i.pinimg.com/474x/2c/67/e5/2c67e57ab92229b8516ec6d021e5b8bb.jpg',
                'https://i.pinimg.com/originals/75/54/df/7554df93bddcaa8d7c8f6df5dc174b7d.png',
                'https://lh3.googleusercontent.com/proxy/uDcYo8jRIOr4U9nW72kaPSV0dm8ARayAIodoM8wEdmjb9TutZDv2_7Mbj6-piOetGEjSh1YjRsy2ozzCtyiYxg',
                'https://krasivosti.pro/uploads/posts/2021-03/1616469993_52-p-kotyatki-smeshnie-foto-koshka-57.jpg',
                'http://bygaga.com.ua/uploads/posts/1335994709_bygaga.com.ua_prikolnie_kartinki-4.jpg'
            ]

            function random() {
                let i = parseInt((Math.random() * imgs.length) + 1)
                bot.sendMessage(chatId, imgs[i])
            }

            await random()
        }

        if(text === '/surprise'){
            let facts = [
                'Знаешь, если тебе сейчас попалось это сообщение, то знай, шо тут все рандомно и может выстрелить какой-то нахер не нужный факт',
                'В современной истории есть промежуток времени, когда на счетах компании «Apple», было больше средств, чем у американского правительства.',
                'Среднее облако весит порядка 500 тонн, столько же весят 80 слонов.',
                'В Ирландии никогда не было кротов.',
                'Флот США содержит больше авианосцев, чем все флоты мира вместе взятые.',
                'Скорость распространения лавы после извержения, близка к скорости бега гончей.',
                'Какая-бы херня у нас не происходила, мы справимся',
                'Библия – книга, которую чаще всего воруют в американских магазинах.',
                'Примерно 1/3 всей соли, производимой в США, расходуется на очистку дорог ото льда.',
                'Существует пробирка, диаметр которой, в 10000 раз меньше диаметра человеческого волоса.'
            ]
            function random() {
                let i = parseInt((Math.random() * facts.length) + 1)
                bot.sendMessage(chatId, facts[i])
            }
            await random()
        }
    })
}

start()
