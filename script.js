let container = document.getElementById("container")
let listOfAgents = []
let data = []

async function getData() {

    const response = await fetch("https://valorant-api.com/v1/agents")
    const json = await response.json()
    data = json.data
    createView()
    

}

function getAgentData() {

    for(let i = 0; i < data.length; i++) {

        const obj = data[i]
        const agent = new Agent(obj.uuid, obj.displayName, obj.description, obj.displayIcon)
        listOfAgents.push(agent)


    }


}

function renderView() {

    container.innerHTML = ""

    for(let i = 0; i < listOfAgents.length; i++) {

        const agent = listOfAgents[i]
        container.innerHTML += agent.createHtml(i)

    }


}

function seeDetail(position) {

    const agentToPick = listOfAgents[position]
    window.location.href = "./agentDetail.html?uuid="+agentToPick.uuid+"&displayName"+agentToPick.displayName

}


function createView() {

    getAgentData()
    renderView()

}

getData()

