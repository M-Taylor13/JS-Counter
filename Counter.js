class Counter {
    _name;
    _count;
    constructor(name) {
    this._name = name;
    this._count = 0;
    }
    Name(){
        return this._name;
    }

    Ticks(){
        return this._count;
        //return (this._count).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }   //formats to two digits. ie. 6 = '06'

    Increment() {
        ++this._count;
        return this._count;
    }

    Reset() {
        this._count = 0;
        return this._count;
    }
}

