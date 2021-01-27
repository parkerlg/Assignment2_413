

$("#submitButton").click(function () {
    //Collects information from inputs
    var assignments = parseInt($("#assignments").val());
    var group_projects = parseInt($("#group_projects").val());
    var quizzes = parseInt($("#quizzes").val());
    var exams = parseInt($("#exams").val());
    var intex = parseInt($("#intex").val());

    //Assigns values for grade part percentage
    var assignments_pct = .5;
    var group_projects_pct = .1;
    var quizzes_pct = .2;
    var exams_pct = .1;
    var intex_pct = .1;

    //Calculates final grade by multiplying input by pct

    var final_grade = (assignments * assignments_pct + group_projects * group_projects_pct + quizzes * quizzes_pct + exams * exams_pct + intex * intex_pct);

   

    var letter_grade = "A";

    //If statement to assign letter grade based on grading scale


    if (final_grade >= 93) {
        letter_grade = "A";
    } else if (final_grade < 93 && final_grade >= 90) {
        letter_grade = "A-";
    } else if (final_grade < 90 && final_grade >= 87) {
        letter_grade = "B+";
    } else if (final_grade < 87 && final_grade >= 83) {
        letter_grade = "B";
    } else if (final_grade < 83 && final_grade >= 80) {
        letter_grade = "B-";
    } else if (final_grade < 80 && final_grade >= 77) {
        letter_grade = "C+";
    } else if (final_grade < 77 && final_grade >= 73) {
        letter_grade = "C";
    } else if (final_grade < 73 && final_grade >= 70) {
        letter_grade = "C-";
    } else if (final_grade < 70 && final_grade >= 67) {
        letter_grade = "D+";
    } else if (final_grade < 67 && final_grade >= 63) {
        letter_grade = "D";
    } else if (final_grade < 63 && final_grade >= 60) {
        letter_grade = "D-";
    } else {
        letter_grade = "E";
    }

    ////Displays the final grade with the letter grade


    alert(
        "Final Grade = " + String(final_grade) + "\n" +
        "Letter Grade = " + letter_grade
    );
});