Watch = function () {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running) {
            throw new Error('Stopwatch already running.');
        }
        running = true;
        startTime = new Date();
    }

    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch is not running.')
        }
        running = false;
        endTime = new Date();
        duration += (endTime - startTime) / 1000;
        console.log(duration);
    }

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    })

}