const View = {
    render({minutes, seconds}) {
        const timer = document.getElementById("timer");

        if(!timer) {
            return
        }
        
        timer.innerHTML = `
        <p>Próximo Post em</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

View.render(timer);

export {View}