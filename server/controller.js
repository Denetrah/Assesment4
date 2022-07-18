const {response} = require("express");
const deee = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A friend asks only for your time not your money",
        "A friend is a present you give yourself.",
        "A gambler not only will lose what he has, but also will lose what he doesnt have." ,
        "A golden egg of opportunity falls into your lap this month."]
        let randomI = Math.floor(Math.random() * fortune.length)
        let randomFortune= fortune[randomI]
        res.status(200).send(randomFortune)
    },

    createOutput: (req, res) => {
        const {des} = req.body;
        let newfortuu = {
            des,
        }
    console.log("creating fortune")
    console.log(req.body)
    deee.push(newfortuu)
    res.status(200).send(req.body)
    },

    createGoal: (req, res) => {
        const {goals, time, city } = req.body;
        let newPath = {
            id: globalId,
            goals,
            time,
            city
        };
        console.log('Creating goal card')
        console.log(req.body)
        goalss.push(newPath)
        res.status(200).send(req.body)
        //globalId++
    },

    deleteGoals: (req, res) => {
        let {id} = req.params
        // for (let i=0; i<newPath.length; i++){
        //     if(newPath[i].id === id) {
                newPath.splice(0, 1)
                res.status(200).send(newPath)
        //     }
        // }
    },

    updateGoals: (req, res) => {
        let {id} = req.params
        let editGoals = req.body.goals
        for (let i = 0; i<newPath.length; i++) {
            if(newPath[i].id === id){
                newPath[i].goals = editGoals
                console.log(req.body)
                goalss.push(newPath)
                res.status(200).send(req.body)

            }
        }
    },

    getQuotes: (req, res) => {
        const quotes = ["Babe Ruth-Every strike brings me closer to a home run","Oscar Wilde Be yourself, everyone else is already taken.","Albert Einstein Life is like a bicycle. To keep your balance, you must keep moving.", "Martin Luther King, Jr.Only in the darkness can you see the stars."];

          let randomQuote = Math.floor(Math.random() * quotes.length);
            let randomizer = quotes[randomQuote];
    
            res.status(200).send(randomizer);

    },

    getEncor: (req, res) => {
        const encourage = ["I wake up motivated.","  I am an unstoppable force of nature.", "I am a living, breathing example of motivation.",
        "I am living with abundance."];

        let randomEncor = Math.floor(Math.random() * encourage.length);
        let encorRandomizer = encourage[randomEncor];

        res.status(200).send(encorRandomizer);
    },

}

