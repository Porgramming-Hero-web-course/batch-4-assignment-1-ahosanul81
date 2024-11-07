{

    const sumArray = (item: number[]): number => {

        const total = item.reduce((acc, curr) => acc + curr, 0)
        return total

    }

    sumArray([1, 2, 3, 4, 5, 8]);



    const removeDuplicates = (item: number[]): number[] => {
        const uniqueNumber: number[] = []
        for (let i = 0; i < item.length; i++) {
            if (!uniqueNumber.includes(item[i])) {
                uniqueNumber.push(item[i])
            }
        }

        return uniqueNumber

    }
    
    removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 75, 75, 75])





    const countWordOccurrences = (item1: string, item2: string) => {
        const splitedItem1 = item1.split(" ")
        let item2Count = 0
        for (let i = 0; i < splitedItem1.length; i++) {


            if (splitedItem1[i].toLowerCase() === item2.toLowerCase()) {
                item2Count += 1
            }
        }

        return item2Count
    }

    countWordOccurrences("TypeScript is great. I love TypeScript", "TypeScript");




    type Circle = {
        shape: 'circle'
        radius: number
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    type CalculateShapeArea = (param: Shape) => number

    const calculateShapeArea = (shapeProperty: Shape) => {
        if (shapeProperty.shape === 'circle') {
            return Math.PI * shapeProperty.radius * shapeProperty.radius
        }
        if (shapeProperty.shape === 'rectangle') {
            return shapeProperty.height * shapeProperty.width
        }

    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });


 

    const getProperty = <T extends { name: string, age: number }>(person: T) => {
        return person.name
    }
    const person: { name: string, age: number } = { name: "Alice", age: 30 };


    getProperty<{ name: string, age: number }>(person);




    interface Profile {
        name: string;
        age: number;
        email: string
    }


    const updateProfile = (profile: Profile, { age }: { age?: number }): object => {

        return { ...profile, age }

    }
    let myProfile: Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    updateProfile(myProfile, { age: 29 })


    class Car {
        constructor(public make: string, public model: string, public year: number,
        ) { }

        getCarAge() {
            const currentYear = new Date().getFullYear()
            const carAge = currentYear - this.year
            return carAge
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge()




    type Person = {
        name: string, age: number, email: string
    }

    const validateKeys = <T, Q extends keyof T>(obj: T, keys: Q[]): boolean => {

        const objectkeys = Object.keys(obj) as (keyof T)[];

        const isValidKey: boolean[] = keys?.map((item) => objectkeys.includes(item))

        if (isValidKey.includes(false)) {
            return false

        } else {
            return true
        }



    }


    const person1: Person = { name: "Alice", age: 25, email: "alice@example.com" };

    validateKeys(person1, ["name", "age"])


}