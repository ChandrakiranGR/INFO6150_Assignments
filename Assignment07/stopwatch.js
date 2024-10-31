$(document).ready(() => {
    let interval = null;
    let elapsedTime = 0;
    let startTime = 0;

    const formatTime = (ms) => {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const updateTimeDisplay = () => {
        $('#time').text(formatTime(elapsedTime));
    };

    const startTimer = async () => {
        if (!interval) {
            startTime = Date.now() - elapsedTime;
            interval = await new Promise((resolve) => {
                const id = setInterval(() => {
                    elapsedTime = Date.now() - startTime;
                    updateTimeDisplay();
                }, 1000);
                resolve(id);
            });
        }
    };

    const stopTimer = async () => {
        if (interval) {
            await new Promise((resolve) => {
                clearInterval(interval);
                interval = null;
                resolve();
            });
        }
    };

    const resetTimer = async () => {
        await stopTimer();
        elapsedTime = 0;
        updateTimeDisplay();
    };

    $('#start').click(startTimer);
    $('#stop').click(stopTimer);
    $('#reset').click(resetTimer);
    const today = new Date().toISOString().split('T')[0];
    $('#datePicker').val(today);
});
