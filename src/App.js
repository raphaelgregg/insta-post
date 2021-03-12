import {Notifyer} from './Notifyer.js';
import {Timer} from './Timer.js';
import {Emitter} from './Emitter.js';
import messages from './Messages.js';

const time = 0.1*60;

// Refatorado
// function MessageSugestion(){

//     let msg = Math.floor(Math.random() *  messages.length);

//     return messages[msg];
// };

// const notify = () => { 
    
//     const notification = Notifyer.notify({
//         title: "Hora do post",
//         body: MessageSugestion(),
//     })
//     notification()
// }

const notify = () => {
    const randomIndex = Math.floor(Math.random() *  messages.length);

    const notification = Notifyer.notify({
        title: "Hora do post",
        body: messages[randomIndex],
    })

    notification();
}

const App = {
    async start() {

        try {
            await Notifyer.init();

            Emitter.on('countdown-start', notify);            
            Emitter.on('countdown-end', Timer.init);

            Timer.init(time);
            
        } catch (error) {
            console.log(error.message);
        }
    }
}

export { App };