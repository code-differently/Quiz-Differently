
class QuizDifferently {
    
    // Qustion 1 
    // Given a room of people, calculate the average age.
    // To represent the room of people, an array containing all the ages will be provided.
    // Ex. [40, 24, 16, 55, 40] 
    // Return the average age of people in the room
    averageAge(ages){
        return -1;
    }

    // Question 2
    // Given a room of people, find the most common name.
    // To represent the room of people, an array containing all the names will be provided 
    // Ex. ["Daniel", "Kaleb", "Zan", "Mark", "Tariq", "Mark"]
    // Return the most common name in the room
    mostCommonName(names){
        return null;
    }

    // Question 3
    // Given a shuffled deck of cards, sort them by rank and suit.
    // To represent the deck of cards, you will recieve an array of objects. Each object will have a rank and a suit. J, Q, K, and A will be 
    // represented by 11, 12, 13, and 14 respectively.
    // Ex. [
    //  {suit: "hearts", rank: 4},
    //  {suit: "spades", rank: 2},    
    //  {suit: "diamonds", rank: 14},
    //  {suit: "clubs", rank: 12}
    // ]
    // Return the array sorted by suit and rank
    // Disclaimer: This is a tricky one to do with JavaScript
    sortDeckOfCards(cards){
        return cards;
    }

    // Question 4
    // Given a pile of socks, find how many socks are missing a pair.
    // To represent the pile of socks, an array containing all the socks will be provided. Each sock will be represented by its color.
    // Ex. ["Brown", "Blue", "Black", "Black", "Green", "Blue"]
    // Return the number of socks without a match
    missingMatches(socks){
        return -1;
    }

    //Question 5
    // Given a roster of names, remove the duplicates from the roster
    // To represent the roster, an array containing all the names will be provided.
    // Ex. ["Daniel", "Kaleb", "Zan", "Mark", "Tariq", "Mark"]
    // Return the an arrary without any duplicates
    removeDuplicates(names){
        return names;
    }

    // Question 6
    // Start with a list of numbers from 1 to 100. I remove a random number from the list and shuffle the list. Find the number I removed.
    // To represent the list of numbers, you will recieve an array of numbers
    // Ex. [3,4,1,5] with the missing value, and the answer, being 2
    // Return the missing value
    missingNumber(numbers){
        return -1
    }

}

module.exports = QuizDifferently;