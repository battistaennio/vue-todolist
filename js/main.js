//Stampare all’interno di una lista HTML un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


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
}).mount("#container")