export class Register32 {
    private _value: number;

    constructor(value = 0) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set value(value: number) {
        if (value < 0) {
            this._value = (~(-value) + 1) & 0xffffffff;
        } else {
            this._value = value;
        }
    }
}
