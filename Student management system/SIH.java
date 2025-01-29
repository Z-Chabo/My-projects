public class SIH {
    private String name;
    private double GPA;
    private int academicYear;
    private int nbOfCoursesTaken;
    private Course coursesTaken [];
    private double coursesCredits;

    public SIH(double GPA, int academicYear, int nbOfCoursesTaken, Course[] coursesTaken){
        this.GPA=GPA;
        this.academicYear=academicYear;
        this.nbOfCoursesTaken=nbOfCoursesTaken;
        this.coursesTaken=deepCopyCourses(coursesTaken);
        this.coursesCredits=calculatedTotalCredits(this.coursesTaken);
    }

    public double getcoursesCredits(){
        return this.coursesCredits;
    }
    
    
    
   
    public double getGPA(){
        return this.GPA;
    }
    
    public int getAcademicYear(){
        return this.academicYear;
    }
    
    public int getnbOfCoursesTaken(){
        return this.nbOfCoursesTaken;
    }
    
    
    public Course [] getCoursesTaken(){
        return deepCopyCourses(this.coursesTaken);

    }
    
    public void setGPA(double GPA){
        this.GPA=GPA;
    }
    public void setAcademicYear(int academicYear){
        this.academicYear=academicYear;
    }
    public void setnbOfCoursesTaken(int nbOfCoursesTaken){
        this.nbOfCoursesTaken=nbOfCoursesTaken;
    }
    public void setcoursesTaken(Course[] coursesTaken){
        this.coursesTaken=deepCopyCourses(coursesTaken);
    }

    public void updateStudentInformation(String name,double GPA, int academicYear,int newnbOfCoursesTaken, Course [] CoursesTaken){
        this.name=name;
        this.GPA=GPA;
        this.academicYear=academicYear;
        this.nbOfCoursesTaken=newnbOfCoursesTaken;
        Course [] NewCoursesTaken=new Course[newnbOfCoursesTaken];
        for (int i=0;i<newnbOfCoursesTaken;i++){
            NewCoursesTaken[i]=new Course (CoursesTaken[i]);
            
        }this.coursesTaken=NewCoursesTaken;

    }
    public void deleteStudentInformation(){
        this.name=null;
        this.GPA=0;
        this.academicYear=0;
        this.nbOfCoursesTaken=0;
        this.coursesTaken=null;
        this.coursesCredits=0;

    }
    private double calculatedTotalCredits(Course [] course){
        double totalCredits=0;
    for (Course oneCourse: this.coursesTaken){
    totalCredits+=oneCourse.getCredits();
    } return totalCredits;
    }
    private Course[] deepCopyCourses(Course[] courses){
        Course[] copyCourses=new Course[courses.length];
        for (int i=0;i<courses.length;i++){
            copyCourses[i]=new Course(courses[i]);
        } return copyCourses;
    }

    



    
}
