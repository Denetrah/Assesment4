const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.getElementById("created")
const submitBtn = document.getElementById("submitBtn")
const container = document.getElementById("container")
const goalTrakerBtn = document.querySelector("#goalTraker")
const goalContainer = document.getElementById("goal-container")
const submittt = document.getElementById("submit")
//const formData = new FormData() 
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)


const createOutput = body => axios.post("http://localhost:4000/api/createOutput", body)
.then(res => {
    createFortunCard(res.data)
}).catch(err => {
    console.log(err)
})

function fortuneSubmitHandler (e) {
    e.preventDefault()

    let des = document.querySelector("#Fortune")

    let bodyObj = {
        des: des.value,
    }

    createOutput(bodyObj)
    des.value = ''
}

function createFortunCard(data){
    container.innerHTML = ''
    const fortuneCard = document.createElement('div')
    fortuneCard.classList.add('fort-card')

    fortuneCard.innerHTML = `<p class="fortee">Your Fortune: ${data.des}</p>`

    container.appendChild(fortuneCard)
}

submitBtn.addEventListener('click', fortuneSubmitHandler)

// function myFunction() {
//     document.getElementById("created").submit();
//   }    
    // const createGoal = body =>axios.post("http://localhost:4000/api/createGoal", body).then(res => {
    // createGoalCard(res.data)
    // }).catch(err => {
    // console.log(err)
    // })
    
    // const deleteGoals = body => axios.delete("http://localhost:4000/api/newGoals", body).then(res => {
    //     createGoalCard(res.data)
    // }).catch(err => {
    //     console.log(err)
    // });
    
    // const updateGoals = body => axios.put("http://localhost:4000/api/createGoal", body).then(res => {
    //     createGoalCard(res.data)
    // }).catch(err => {
    //     console.log(err)
    // });
    
    
//     function goalSubmitHandler(e) {
//     e.preventDefault()
    
//     let day = document.querySelector("#day")
//     let week = document.querySelector("#week")
//     let year = document.querySelector("#year")
    
//     let bodyObj = {
//     day: day.value,
//     week: week.value,
//     year: year.value
//     }
    
//     createGoal(bodyObj)
    
//     day.value = ''
//    week.value = ''
//     year.value = ''
    
//     }
    
//     function createGoalCard(data){
//    goalContainer.innerHTML = ''
//     const goalCard = document.createElement('div')
//    goalCard.classList.add('goal-card')
    
// goalCard.innerHTML = `<p class="uno">Your Day Goal: ${data.day}</p>
//     <p class="dos">Your One Week Goal: ${data.week}</p>
//     <p class="tres">Your One Year Goal: ${data.year}
//     <div class="upd-del-btns">
//     <button onclick="updateGoals">Update your entry</button>
//     <button onclick="deleteGoals">Delete Entry</button>
//     </div>`
    
//     goalContainer.appendChild(goalCard)
//     }
    
//     goalTrakerBtn.addEventListener('submit',goalSubmitHandler)


    const getQuotes = () => {
        let dropdown = document.getElementById("selection");
        let value = dropdown.options[dropdown.selectedIndex].value
            if(value === "quote"){
            axios.get("http://localhost:4000/api/quotes/")
            .then(res => {
            const data = res.data;
            alert(data);
           });
           }else if(value === "affirm"){
          axios.get("http://localhost:4000/api/encourage/")
            .then(res => {
            const data = res.data;
        alert(data);
            });
            }
            };
            submittt.addEventListener('click', getQuotes);