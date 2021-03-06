/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const man = {
    name: "Max",
    gender: "male",
    species: "human",
    hands: "2",
    legs: "2",
    say: () => `Hallo!`,
};

const woman = {
    name: "Lena",
    gender: "female",
    species: "human",
    hands: "2",
    legs: "2",
    say: () => `Bonjour!`,
};

const dog = {
    name: "Adolf",
    gender: "male",
    species: "dog",
    hands: "0",
    legs: "4",
    say: () => `Woof!`,
};

const cat = {
    name: "Klara",
    gender: "female",
    species: "cat",
    hands: "0",
    legs: "4",
    say: () => `Meeow!`,
};

const createSringTemplate = (obj) => {
    return [
        obj.species,
        `<strong>${obj.name}</strong>`,
        obj.gender,
        obj.hands,
        obj.legs,
        `<em>${obj.say()}</em>`
    ].join("; ");
};
// ======== OUTPUT ========
[man, woman, dog, cat].forEach(arr => print(createSringTemplate(arr), 'div'));
