export class Car {
//atributos
    protected brand: string
    protected model: string
    protected year: number
    protected stored: boolean

    //constructor
        constructor(brand: string, model: string, year: number){
        this.brand = brand
        this.model = model
        this.year = year
        this.stored = true
        }

        //métodos
            public getBrand(): string {
                return this.brand
            }

            public setBrand(value: string): void {
                this.brand = value
            }

            public getModel(): string {
                return this.model
            }

            public setModel(value: string): void {
                this.model = value
            }

            public getYear(): number {
                return this.year
            }

            public setYear(value: number): void {
                this.year = value
            }

            public setStored(status: boolean) {
                this.stored = status
            }
}
