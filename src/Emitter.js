const Emitter ={
    events: {
    },
    on(event, callback){
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(callback)
    },
    emit(event, ...rest) {
        if (event in Emitter.events === false){
            return;
        }

        Emitter.events[event].forEach((e) => {
            e(...rest)
        });
    }
}

// Emitter.on('click', (a, b, c) => console.log('clique1', a,b, c));
// Emitter.on('click', (a, b, c) => console.log('clique1', a));
// Emitter.on('click', () => console.log('clique2'));
// Emitter.on('click', () => console.log('clique3'));

// Emitter.emit('click', 1,2,3)

// Emitter.events.click[0]()

export { Emitter }