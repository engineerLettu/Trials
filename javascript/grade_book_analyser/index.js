
let students = [
    { id: 1, name: "Ama Mensah", scores: [67, 87, 98, 90] },
    { id: 2, name: "Kwame Owusu", scores: [72, 65, 80, 77] },
    { id: 3, name: "Efua Asante", scores: [88, 91, 85, 94] },
    { id: 4, name: "Kofi Boateng", scores: [55, 60, 71, 68] },
    { id: 5, name: "Akosua Darko", scores: [93, 89, 96, 92] },
    { id: 6, name: "Yaw Appiah", scores: [64, 78, 70, 82] },
    { id: 7, name: "Abena Osei", scores: [79, 84, 88, 75] },
    { id: 8, name: "Kojo Antwi", scores: [58, 73, 66, 61] },
    { id: 9, name: "Adwoa Frimpong", scores: [90, 95, 87, 99] },
    { id: 10, name: "Kwabena Agyei", scores: [70, 68, 83, 79] }
];


students.forEach(student => {
    let average;
    let highest_score = student.scores[0];
    let lowest_score = student.scores[0];
    let grade;
    //Calculating for the average score of a student object
    //Initialising the sum to zero "0"
    let sum = 0;

    //Looping through the student object scores for manipulations
    for (let i = 0; i < student.scores.length; i++) {
        //getting the avearge of each student object scores
        sum += student.scores[i];
        average = sum / student.scores.length;

        //Getting the highest score of each student object
        highest_score = student.scores[i] > highest_score ? highest_score = student.scores[i] : highest_score;

        //Getting the lowest score of each student object
        lowest_score = student.scores[i] < lowest_score ? lowest_score = student.scores[i] : lowest_score;
    }

    //Grading students by average
    switch (true) {
        case average >= 80:
            grade = "A"
            break;
        case average < 80 && average >= 70:
            grade = "B"
            break;
        case average < 70 && average >= 50:
            grade = "C"
            break;
        case average < 50:
            grade = "D"
            break;
    }

    //Add the average, highest and lowest score to each student object
    student["average"] = average;
    student["highest_score"] = highest_score;
    student["lowest_score"] = lowest_score;
    student["grade"] = grade;

console.log(
        `
        Name: ${student.name} \n
        Highest Score: ${highest_score} \n
        Lowest Score: ${lowest_score} \n
        Average: ${average} \n
        Grade: ${grade} \n
       `
)
});


    





