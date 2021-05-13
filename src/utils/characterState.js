// character portraits
import protagonist from '../images/characters/Yu_Narukami_render.png'
import yosuke from '../images/characters/Yosuke_Hanamura_render.png'
import chie from '../images/characters/Chie_Satonaka_render.png'
import yukiko from '../images/characters/Yukiko_Amagi_render.png'
import kanji from '../images/characters/Kanji_Tatsumi_render.png'
import rise from '../images/characters/Rise_Kujikawa_render.png'
import teddie from '../images/characters/Teddie_render.png'
import naoto from '../images/characters/Naoto_Shirogane_render.png'
import igor from '../images/characters/IgorPersona3.png'
import margaret from '../images/characters/Margaret_Render.png'
import marie from '../images/characters/Marie_portrait.png'

export const CharacterState = () => {
    return [
        {
            characterName: 'Protagonist (Yu Narukami)',
            title: 'Leader of the Investigation Team',
            charImg: protagonist,
            url: '/characters/protagonist',
            description: `Protagonist of this story whom you assume the role as. After his parents started working abroad, he transfers to a countryside town called Inaba to stay with his uncle and cousin for a year.
            While attending his new school, Yasogami High, he meets the story's main cast. He begins to learn about the town myth known as the Midnight Channel, where if you watch a TV on a rainy night at midnight,
            your soulmate will appear on screen. However, he also learns that there has been a chain of murders around town which is possibly connected to the Midnight Channel. His curosity leads him to entering the TV world where he 
            `
        },
        {
            characterName: 'Yosuke Hanamura',
            title: 'Captain Ressentiment',
            charImg: yosuke,
            url: '/characters/yosuke-hanamura',
            description: `A clumsy student who just transfered here six months before the protagonist. His father manages a large department store called Junes. He has a cheerful personality and seems to take a liking to the protagonist
            as they came to Inaba under similar circumstances. `
        },
        {
            characterName: 'Chie Satonaka',
            title: 'Kung-fu Enthusiast',
            charImg: chie,
            url: '/characters/chie-satonaka',
            description: `An energetic and outgoing tomboy who is a obessed with kung fu and martial arts movies. She is best friends with Yukiko despite being opposites and seemingly gets along with Yosuke. She also posseses a strong sense
            of justice, willing to protect others without hesitation.`
        },
        {
            characterName: 'Yukiko Amagi',
            title: 'Scarlet Princess',
            charImg: yukiko,
            url: '/characters/yukiko-amagi',
            description: `A rich and elegant student who is actually popular at Yasogami. She is best friends with Chie, although unlike Chie she is quite introverted. Her family runs a renowned local inn and is set to become its heiress. Despite being
            intelligent, she also has a strange sense of humor where she tends to laugh at the slightest jokes.`
        },
        {
            characterName: 'Kanji Tatsumi',
            title: 'Bloodcurdling Beefcake',
            charImg: kanji,
            url: '/characters/kanji-tatsumi',
            description: `A notorious deliquent who earned a reputation in town for fighting biker gangs. As a result, people are terrified of him and doesn't seem to have any friends. Although he tries to embody his tough-guy personality, it seems as though
            he has other passions he wants to pursue in fear of being judged by others.`
        },
        {
            characterName: 'Rise Kujikawa',
            title: 'Risette',
            charImg: rise,
            url: '/characters/rise-kujikawa',
            description: `A former idol who decided to take a break from the busniess to work at her family business 'due to health concerns.' She is very cheerful and quite boastful about herself, but very sweet to others. Despite her bubbly demeanor, she struggles on her
            individuality.`
        },
        {
            characterName: 'Teddie',
            title: '???',
            charImg: teddie,
            url: '/characters/teddie',
            description: `A strange bear who the protagonist and Yosuke first encounter in the Midnight Channel. He has a cheery but childish attitude who lacks any knowledge of human customs and quickly idolizes the protagonist to the point of calling him 'Sensei.'`
        },
        {
            characterName: 'Naoto Shirogane',
            title: 'Detective Prince',
            charImg: naoto,
            url: '/characters/naoto-shirogane',
            description: `A descendant of a respected linage of detectives and is nicknamed 'Detective Prince. Naoto is sent to Inaba to solve the muders case, although often faces discrimination by authories due to appearance.`
        },
        {
            characterName: 'Igor',
            title: 'Master of the Velvet Room / Long Nose',
            charImg: igor,
            url: '/characters/igor',
            description: `A mysterious man who guides the protagonist regarding their powers, bonds, and dangers ahead of his journey, although they are quite often cryptic. 
            Despite his appearance, he quite calm and courteous. To ensure the success of this journey, Igor
            provides services such as Persona fusions and the Persona Compendium. `
        },
        {
            characterName: 'Margaret',
            title: 'Attendant of the Velvet Room',
            charImg: margaret,
            url: '/characters/margaret',
            description: `Igor's assistant and sole resident of the Velvet Room. A quiet and professional woman, although holds a humorous trait. She handles the Persona Compendium, which allows the protagonist
            to re-summon Personas previous fused or forgotten. It is believed that she may have siblings who residents of the Velvet Room as well...`
        },
        {
            characterName: 'Marie',
            title: 'Antisocial Poet',
            charImg: marie,
            url: '/characters/marie',
            description: `A new face exclusively in Persona 4 Golden. A cold and antisocial girl who the protagonist first encounters when he first arrives in Inaba. She is actually another resident of the Velvet Room who acts as an apprentice to help the 
            protagonist in his journey uncovering the truth.`
        },

    ]
}


