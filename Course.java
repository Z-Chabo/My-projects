public class Course {
    private double credit;
    private String name;

public Course(String name,double credit){
    this.credit=credit;
    this.name=name;
}
public double getCredits(){
    return this.credit;
}
public Course (Course other){
    this.credit=other.credit;
    this.name=other.name;
}
public String getName(){
    return this.name;
}
}
