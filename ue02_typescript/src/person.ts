export class Person {
    private _vorname: string;
    private _nachname: string;
    private _birthYear: number;

    public constructor(vorname: string, nachname: string, birthYear: number ) {
        this._vorname   = vorname;
        this._nachname  = nachname;
        this._birthYear = birthYear;
    }

    public get vorname (): string { // Vorname erscheint nicht als Methode, sondern als Attribut
        return this.vorname;
    }
    public get nachname (): string {
        return this.nachname;
    }
    public get birthYear (): number {
        return this.birthYear;
    }
    public set vorname (v: string) {
        if ( v === null || v === '') {
            throw Error('invalid value');
        }
        this._vorname = v;
    }

    public toString (): string {
        return this._nachname + '' + this._vorname;
    }
}
