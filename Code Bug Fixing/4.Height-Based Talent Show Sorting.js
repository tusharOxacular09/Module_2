let sortPeople = function(names, heights) {
    let length = heights.length;
    let people = [];

    for (let i = 0; i < length; i++) {
        people.push({ name: names[i], height: heights[i] });
    }

    people.sort((a, b) => b.height - a.height);

    let res = [];
    for (let person of people) {
        res.push(person.name);
    }

    return res;
};
