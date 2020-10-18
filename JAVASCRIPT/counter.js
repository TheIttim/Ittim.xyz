const counters = document.querySelectorAll('.counter');
const speed = 75;

counters.forEach(counter => {
    const updateCount = async () => {
        const stats = await fetch("https://api.moguldevs.xyz/api/stats").then(x => x.json())
        const target = +stats.guilds
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            const num = count + inc
            counter.innerText = Math.trunc(num);

            setTimeout(updateCount, 1);
        } else {
            counter.innerText = Math.trunc(target);
        }
    };

    updateCount();
});