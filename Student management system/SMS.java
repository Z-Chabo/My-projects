import java.util.Scanner;
public class SMS{
public static void main(String[]args){

    Scanner s=new Scanner(System.in);

    System.out.println("Please enter the student's GPA, academic year, number of courses taken: ");

    double GPA= s.nextDouble();

    int academicYear=s.nextInt();

    int numberOfCoursesTaken=s.nextInt();

    Course [] coursesTaken=new Course[numberOfCoursesTaken];

    for(int i=0; i<numberOfCoursesTaken;i++){
        System.out.println("Enter Course"+(i+1)+"name");
        String name=s.next();
        System.out.println("Enter Course"+(i+1)+"credit");
        double credit=s.nextDouble();
       coursesTaken[i]=new Course(name,credit);
    }
    

    
    SIH student= new SIH(GPA,academicYear,numberOfCoursesTaken,coursesTaken);

    System.out.println(" Does this strudent need information update?");

    String answer= s.next();

    if(answer.equalsIgnoreCase("yes")){
        System.out.println("Enter new name, GPA, academic year, and number of courses");
        String nameStudent=s.next();
        double newGPA=s.nextDouble();
        int newAcademicYear=s.nextInt();
        int newNumberOfCourses=s.nextInt();
        Course [] newCoursesTaken=new Course[numberOfCoursesTaken];
        for(int i=0; i<numberOfCoursesTaken;i++){
            System.out.println("Enter Course"+(i+1)+"name");
            String name=s.next();
            System.out.println("Enter Course"+(i+1)+"credit");
            double credit=s.nextDouble();
            newCoursesTaken[i]=new Course(name,credit);
        }

        student.updateStudentInformation(nameStudent,newGPA,newAcademicYear,newNumberOfCourses,newCoursesTaken);
    }
    

    

}

}