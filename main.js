//import readline to get user input
import * as readline from 'node:readline/promises';  // This uses the promise-based APIs
import { stdin as input, stdout as output } from 'node:process';


const rl = readline.createInterface({ input, output });
const userName = await rl.question(`******Welcome to Inspiring Bible verses.****** \n  *******What is your name?*******`);

const message = [
    {
        book: "Isaiah",
        chapter: 41,
        verse: "10",
        text:"Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand."
    },
    {   book:"Philippians",
        chapter: 4,
        verse: "13",
        text: "I can do all things through him who strengthens me."
    },
    {   book:"Psalms",
        chapter: "46",
        verse: 1,
        text:  "God is our refuge and strength, a very present help in trouble."
    },
    {   book: "Joshua",
        chapter: 1,
        verse: "9",
        text: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go."
    },
    {   book: "Romans",
        chapter: 8,
        verse: "28",
        text:  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
    },
    {   book: "Psalms",
        chapter: 34,
        verse: "17-18",
        text: "When the righteous cry for help, the Lord hears and delivers them out of all their troubles. The Lord is near to the brokenhearted and saves the crushed in spirit.",
    },
    {   book: "Jeremiah",
        chapter: 29,
        verse: "11",
        text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."
    },
]

const generateRandomIndex = () => {
    let randonIndex;
    return randonIndex = Math.floor(Math.random() * message.length);
};

const provideMessage = () => {
    const randomMsgIndex = generateRandomIndex();
    console.log(`${userName}, your verse of the day is${message[randomMsgIndex].book} ${message[randomMsgIndex].chapter}: ${message[randomMsgIndex].verse} \n
    ${message[randomMsgIndex].text}`);
};  

if (!userName || !userName.match(/[a-zA-Z]/) && userName.length < 2) {
    console.log("This is an invalid name, please try again");

} else {
     provideMessage();
 }
 
 rl.close();

