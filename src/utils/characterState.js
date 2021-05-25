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
// Secondary images
import izanagi from '../images/secondaryimgs/izanagi.png'
import konohana from '../images/secondaryimgs/Konohana_Sakuya_art.png'
import tomoe from '../images/secondaryimgs/P4-TomoeGozen.png'
import jiraiya from '../images/secondaryimgs/jiraiya.jpg'
import take_mikazuchi from '../images/secondaryimgs/take-mikazuchi.jpg'
import himiko from '../images/secondaryimgs/himiko.jpg'
import kintouko from '../images/secondaryimgs/KintoukiDouji.png'
import sukuna from '../images/secondaryimgs/sukuna.jpg'
import velvet from '../images/secondaryimgs/velvetroom.png'
export const CharacterState = () => {
    return [
        {
            characterName: 'Protagonist (canonically named Yu Narukami)',
            title: 'Leader of the Investigation Team',
            charImg: protagonist,
            secondImg: izanagi,
            url: '/characters/protagonist',
            description: `Protagonist of this story whom you assume the role as. After his parents started working abroad, he transfers to a countryside town called Inaba to stay with his uncle and cousin for a year.
            While attending his new school, Yasogami High, he meets the story's main cast. He begins to learn about the town myth known as the Midnight Channel, where if you watch a TV on a rainy night at midnight,
            your soulmate will appear on screen. However, he also learns that there has been a chain of murders around town which is possibly connected to the Midnight Channel.
            `,
            secondDesc: `The protagonist's initial persona who he manages to summon. A japanese deity that existed long before Japan was created. He created the Ouyashima from chaos and gave birth to countless children and laid the
            foundation of soil and nature.`
        },
        {
            characterName: 'Yosuke Hanamura',
            title: 'Captain Ressentiment',
            charImg: yosuke,
            secondImg: jiraiya,
            url: '/characters/yosuke-hanamura',
            description: `A clumsy student who just transfered here six months before the protagonist. His father manages a large department store called Junes. He has a cheerful personality and seems to take a liking to the protagonist
            as they came to Inaba under similar circumstances.`,
            secondDesc: `A ninja who uses shapeshifting magic to change into a enormous toad. Originally from the folk tale Jiraiya Goketsu Monogatari (The Tale of the Gallant Jiraiya)`
        },
        {
            characterName: 'Chie Satonaka',
            title: 'Kung-fu Enthusiast',
            charImg: chie,
            secondImg: tomoe,
            url: '/characters/chie-satonaka',
            description: `An energetic and outgoing tomboy who is a obessed with kung fu and martial arts movies. She is best friends with Yukiko despite being opposites and seemingly gets along with Yosuke. She also posseses a strong sense
            of justice, willing to protect others without hesitation.`,
            secondDesc: `A female samurai that existed during the Genpei War. After the battle of Awazu, she vanished. It is unclear if she ever existed due to the number of stories of how her life went and thus became a thing of legends.`
        },
        {
            characterName: 'Yukiko Amagi',
            title: 'Scarlet Princess',
            charImg: yukiko,
            secondImg: konohana,
            url: '/characters/yukiko-amagi',
            description: `A rich and elegant student who is actually popular at Yasogami. She is best friends with Chie, although unlike Chie she is quite introverted. Her family runs a renowned local inn and is set to become its heiress. Despite being
            intelligent, she also has a strange sense of humor where she tends to laugh at the slightest jokes.`,
            secondDesc: `A daughter of the mountain god Ouyamatsumi. Once she became the wife of Ninigi and grew pregnant on the first of their marriage, Ninigi accused her of infidelity and stood her in a burning hut. Fire woud not touch her if she
            had been faithful and she emerged unscathed.`
        },
        {
            characterName: 'Kanji Tatsumi',
            title: 'Bloodcurdling Beefcake',
            charImg: kanji,
            secondImg: take_mikazuchi,
            url: '/characters/kanji-tatsumi',
            description: `A notorious deliquent who earned a reputation in town for fighting biker gangs. As a result, people are terrified of him and doesn't seem to have any friends. Although he tries to embody his tough-guy personality, it seems as though
            he has other passions he wants to pursue in fear of being judged by others.`,
            secondDesc: 'Shinto god of thunder born from the sword of Izanagi when slaying down the fire god Kagutsuchi. He and his brother Futsunchi descended from the High Plain of Heaven to pacify the deities of Izumo.'
        },
        {
            characterName: 'Rise Kujikawa',
            title: '"Risette"',
            charImg: rise,
            secondImg: himiko,
            url: '/characters/rise-kujikawa',
            description: `A former idol who decided to take a break from the busniess to work at her family business 'due to health concerns.' She is very cheerful and quite boastful about herself, but very sweet to others. Despite her bubbly demeanor, she struggles on her
            individuality.`,
            secondDesc: `A shaman queen of Yamatai-koku who ruled an ancient country that would become Japan. Her magic and sorcery were highly respected and lead her reign to be strict and displined, but peaceful. `
        },
        {
            characterName: 'Teddie',
            title: '???',
            charImg: teddie,
            secondImg: kintouko,
            url: '/characters/teddie',
            description: `A strange bear who the protagonist and Yosuke first encounter in the Midnight Channel. He has a cheery but childish attitude who lacks any knowledge of human customs and quickly idolizes the protagonist to the point of calling him 'Sensei.'`,
            secondDesc: `Originally known as Kintarō, a child folk hero with superhuman strength raised by a mountain witch on Mount Ashigara. His friends werre animals that resided on the mountain with him. When he reached adulthood, he took on the name Sakata no Kintoki.`,
        },
        {
            characterName: 'Naoto Shirogane',
            title: 'Detective Prince',
            charImg: naoto,
            secondImg: sukuna,
            url: '/characters/naoto-shirogane',
            description: `A descendant of a respected linage of detectives and is nicknamed 'Detective Prince. Naoto is sent to Inaba to solve the muders case, although often faces discrimination by authorities due to appearance.`,
            secondDesc: `A dwarf deity of healing and sake brewing. He helped Okuninushi in building the world and formulating protections against disease and feral animals from the Izumo region. `
        },
        {
            characterName: 'Igor',
            title: 'Master of the Velvet Room / Long Nose',
            charImg: igor,
            secondImg: velvet,
            url: '/characters/igor',
            description: `A mysterious man who guides the protagonist regarding their powers, bonds, and dangers ahead of his journey, although they are quite often cryptic. 
            Despite his appearance, he quite calm and courteous. To ensure the success of this journey, Igor
            provides services such as Persona fusions and the Persona Compendium. `,
            secondDesc: `A room located between the consciousness and subconsciousness hosted by Igor. It is invisible to all except the Protagonist or others with high spiritual sensitivity. It is said the Velvet Room manifests itself differently based on the guest's journey.`
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


