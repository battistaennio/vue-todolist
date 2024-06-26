//Stampare all’interno di una lista HTML un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
//Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

//inizializzazione vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            //booleano per testo task < 5 lettere
            inputError: false,
            //dichiarazione nuovo task vuoto
            newTask: "",
            //array toDo
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
        //funzione per rimuovere il task
        removeTask(indice) {
            //splice rimuove dall'array l'oggetto in posizione indice di quantità 1
            this.toDo.splice(indice, 1);
        },
        //funzione per aggiungere il task
        addTask() {
            //se il nuovo task non è vuoto ed ha una lungezza superiore o uguale a 5 lettere
            if (this.newTask !== "" && this.newTask.length >= 5) {
                //unshift aggiunge in posizione 0 un nuovo oggetto all'array
                this.toDo.unshift({text: this.newTask, done: false});
                //booleano errore rimane falso
                this.inputError = false;
            } else { //altrimenti
                //booleano errore vero
                this.inputError = true;
            }
            //dopodichè svuoto il contenuto nell'input
            this.newTask = "";
        },
    }
}).mount("#container")