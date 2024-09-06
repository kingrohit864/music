const context = {
    title: 'Welcome to IND-Musical',
    body: 'IND-Musical is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
    instruments: [{
            image: 'electronic-keyboard.png',
            name: 'Electronic Keyboard',
            description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
            price: '$2,999.00',
            sale: '$2,899.89'
        },
        {
            image: 'electric-guitar.png',
            name: 'Electric Guitar',
            description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
            price: '$499.99'
        },
        {
            image: 'bass-guitar.png',
            name: 'Bass Guitar',
            description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
            price: '$724.99'
        },
        {
            image: 'bass-guitar.png',
            name: 'Drum Kit',
            description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
            price: '$849.00',
            sale: '$449.00'
        },
        {
            image: 'violin.png',
            name: 'Violin',
            description: 'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
            price: '$445.00'
        },
        {
            image: 'Flute-Quickstart-Guide.jpg',
            name: 'Flute',
            description: 'a flute from Sweetwater. Found in all cultures, the flute may be the oldest known musical instrument. Today the flute has a place in every kind of music, from classical to folk to R&B and rock, from Lizzo to James Galway.',
            price: '$555.00'
        },
        {
            image: '06e27fe309e9623fa5522a70cf5e3160.jpg.webp',
            name: 'Sitar',
            description: 'The sitar is a stringed musical instrument originating from the Indian subcontinent. Its distinctive sound and versatility have made it a popular choice for classical Indian music and fusion genres. With its intricate design and resonating strings, the sitar has captivated audiences for centuries and is an integral part of Indian culture and heritage. Join us as we delve into the world of sitar and discover the beauty and complexity of this fascinating instrument..',
            price: '$900.00'
        },
        {
            image: 'lossy-page1-1280px-Yamaha_Horn_YHR-667V.tif.jpg',
            name: 'French Horn',
            description: '"French horn" first came into use in the late 17th century. At that time, French makers were preeminent in the manufacture of hunting horns and were credited with creating the now-familiar, circular "hoop" shape of the instrument.',
            price: '$5,500.00'
        }
    ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;