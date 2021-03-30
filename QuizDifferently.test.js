
const QuizDifferently = require("./QuizDifferently.js")

test("averageAge test01", () => {

    let quizDifferently = new QuizDifferently();
    let expected = 30;
    let ages = [10, 20, 30, 40, 50];
    
    let actual = quizDifferently.averageAge(ages);

    expect(actual).toEqual(expected);

});

test("averageAge test02", () => {

    let quizDifferently = new QuizDifferently();
    let expected = 50;
    let ages = [60, 60, 60, 60, 60, 0];
    
    let actual = quizDifferently.averageAge(ages);

    expect(actual).toEqual(expected);
    
});

test("mostCommonName test01", () => {

    let quizDifferently = new QuizDifferently();
    let expected = "Mark";
    let names = ["Daniel", "Kaleb", "Zan", "Mark", "Tariq", "Mark", "Marshal", "Mark"];
    
    let actual = quizDifferently.mostCommonName(names);

    expect(actual).toEqual(expected);
    
});

test("mostCommonName test02", () => {

    let quizDifferently = new QuizDifferently();
    let expected = "Val";
    let names = ["Val", "Jeff", "Kaleb", "Tariq", "Stephanie", "Froilan", "Val"];
    
    let actual = quizDifferently.mostCommonName(names);

    expect(actual).toEqual(expected);
    
});

test("sortDeckOfCards", () => {

    let quizDifferently = new QuizDifferently();

    let expected = [].concat(
        ...["hearts", "diamonds", "clubs", "spades"].map(
            suit => {
                let cards = [];
                for(let i = 2; i <= 14; i++){
                    cards.push({
                        suit: suit,
                        rank: i
                    })
                }
                return cards;
            })
    )
    let cards = [...expected].sort(() => Math.random() - 0.5)
    
    let actual = quizDifferently.sortDeckOfCards(cards);

    expect(actual).toEqual(expected);
    
});

test("missingMatches test01", () => {

    let quizDifferently = new QuizDifferently();
    let expected = 2;
    let socks = ["Brown", "Brown", "Brown", "Black", "Brown", "Brown"];
    
    let actual = quizDifferently.missingMatches(socks);

    expect(actual).toEqual(expected);
    
});

test("missingMatches test02", () => {

    let quizDifferently = new QuizDifferently();
    let expected = 6;
    let socks = ["Brown", "Black", "Green", "Blue", "Red", "Purple"];
    
    let actual = quizDifferently.missingMatches(socks);

    expect(actual).toEqual(expected);
    
});

test("missingMatches test03", () => {

    let quizDifferently = new QuizDifferently();
    let expected = 0;
    let socks = ["Brown", "Black", "Brown", "Brown", "Black", "Brown"];
    
    let actual = quizDifferently.missingMatches(socks);

    expect(actual).toEqual(expected);
    
});

test("removeDuplicates test01", () => {

    let quizDifferently = new QuizDifferently();
    let expected = ["Kaleb", "Tariq", "Brittany", "Val", "Jeff"].sort();
    let names = ["Kaleb", "Tariq", "Brittany", "Val", "Kaleb", "Jeff"];
    
    let actual = quizDifferently.removeDuplicates(names).sort();

    expect(actual).toEqual(expected);
    
});

test("removeDuplicates test02", () => {

    let quizDifferently = new QuizDifferently();
    let expected = ["Kaleb", "Kaleb", "Kaleb", "Kaleb", "Kaleb"];
    let names = ["Kaleb"];
    
    let actual = quizDifferently.removeDuplicates(names);

    expect(actual).toEqual(expected);
    
});

test("missingNumber test01", () => {

    let quizDifferently = new QuizDifferently();
    let expected = 42;
    let numbers = [...Array(100).keys()].splice(expected, 1).sort(() => Math.random() - 0.5);
    
    let actual = quizDifferently.missingNumber(numbers);

    expect(actual).toEqual(expected);
    
});

test("missingNumber test02", () => {

    let quizDifferently = new QuizDifferently();
    let expected = 99;
    let numbers = [...Array(100).keys()].splice(expected, 1).sort(() => Math.random() - 0.5);
    
    let actual = quizDifferently.missingNumber(numbers);

    expect(actual).toEqual(expected);
    
});