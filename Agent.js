
class Agent{

    constructor(uuid, displayName, description, displayIcon){


        this.uuid = uuid
        this.displayName = displayName
        this.description = description
        this.displayIcon = displayIcon


    }


    createHtml(pos){


        return `
        
        
        <div class="agent-card">

            <div class="icon-container">

                <img src="${this.displayIcon}" alt="Agent-icon" class="icon">

            </div>


            <div class="info-container"> 
 
                <h1>${this.displayName}</h1>

                <p>${this.description}</p>

                <div class="buttons">

                    <button>See detailed info</button>

                    <button>Trashcan</button>

                </div>

            </div>

        </div>
        
        `


    }



}