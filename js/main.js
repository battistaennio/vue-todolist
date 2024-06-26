//Stampare all’interno di una lista HTML un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

//inizializzazione vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            toDo: [
                {
                    text: "fare passeggiata con il cane",
                    done: true,
                },
                {
                    text: "preparare il pranzo",
                    done: false,
                },
                {
                    text: "pulire casa",
                    done: false,
                },
                {
                    text: "fare la spesa",
                    done: true,
                },
                {
                    text: "andare dal barbiere",
                    done: false,
                },
            ]
        }
    },
    methods: {

        removeTask(indice) {
            this.toDo.splice(indice, 1);
        }
    }
}).mount("#container")