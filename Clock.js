class Clock{
    _seconds;
    _minutes;
    _hours;
    constructor(){
        this._seconds = new Counter("seconds");
        this._minutes = new Counter("minutes");
        this._hours = new Counter("hours");
    }
    Tick(){
        this._seconds.Increment();
        
        if (this._seconds.Ticks() == 60){
            this._seconds.Reset();
            this._minutes.Increment();

            if (this._minutes.Ticks() == 60){
                this._minutes.Reset();
                this._hours.Increment();

                if (this._hours.Ticks() == 24){
                    this.Reset();
                }
            }
        }
    }
    TimeOutput(){
        return (`${this._hours.Ticks()}:${this._minutes.Ticks()}:${this._seconds.Ticks()}`);
    }
    Reset() {
        this._seconds.Reset();
        this._minutes.Reset();
        this._hours.Reset();
    }
}