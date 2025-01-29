import java.util.Scanner;

public class Email {
private String firstName;
private String lastName;
private String departement;
private String company;
private int mailBoxCapacity;
private String password;

public String getFirstName(){
return this.firstName;
}
public String getLastname(){
    return this.lastName;
}
public String getDepartementName(){
    return this.departement;
}
public String  getCompamyName(){
    return this.company;
}
public int getmailBoxCapacity(){
    return this.mailBoxCapacity;
}
public void setFirstName(String firstName){
this.firstName=firstName;
}
public void setLastName(String lastName){
    this.lastName=lastName;
}
private String setDepartement(){
    System.out.println("Enter the departement\n1 for sales\n2 for Developpement\n3 for Accounting\n0 for none");
    Scanner in=new Scanner(System.in);
    int depChoice =in.nextInt();
    if(depChoice==1){return"sales";}
    else if(depChoice==2){return "dev";}
    else if(depChoice==3){return"acct";}
    else {return "";}
    
}
public void setCompany(String company){
     this.company=company;
}
public void mailBoxCapacity(){
    this.mailBoxCapacity=mailBoxCapacity;
}
public Email(String firstName,String lastName,String departement,String company,int mailBoxCapacity,String password){
    this.firstName=firstName;
    this.lastName=lastName;
    this.departement=setDepartement();
    this.company=company;
    this.mailBoxCapacity=mailBoxCapacity;
}
public void printEmail(){
    System.out.println(firstName+"."+lastName+"@"+departement+"."+company+".com");
}
@Override
public String toString(){
    return ("firstName: "+firstName+"lastName: "+lastName+" Departement: "+departement+"Company: "+company+ "mailBoxCapacity: "+mailBoxCapacity+"password: "+password);
}

} 

