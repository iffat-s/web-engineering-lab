class Marks  
{
     marks;
    constructor(marks)
    {
        this.marks = marks;
    }
    calculateGrade()
    {
        if(this.marks >=50)
        {
            console.log(`Your marks are ${this.marks} `);
            console.log("Congratulations! You have passed the exam.");
        }
        else
        {
            console.log(`Your marks are ${this.marks} and you have failed the exam.`);
        }
    }
}

const studentMarks = new Marks(80);
studentMarks.calculateGrade();
const studentMarks2 = new Marks(30);
studentMarks2.calculateGrade();