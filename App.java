import java.util.Random;
import java.util.Scanner;
public class App {
    public static void main(String[] args){
        Scanner s= new Scanner(System.in);
        System.out.println("Enter your first name: "); 
        String firstName=s.next();
        System.out.println("Enter your last name: ");
        String lastName=s.next();
        System.out.println("Enter your departement: ");
        String departement =s.next();
        System.out.println("Enter your company: ");
        String company=s.next();
        System.out.println("Enter the mailBox capacity");
        int mailBoxCapacity=s.nextInt();
        int length=10;
        String characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder randomString=new StringBuilder();
        Random random=new Random();
        String password;
        for(int i=0;i<length;i++){
            int index=random.nextInt(characters.length());
            randomString.append(characters.charAt(index)).toString();}
            password=randomString.toString();
            Email email=new Email (firstName,lastName,departement,company,mailBoxCapacity,password);
            s.close();
            email.printEmail();

        
        
    }
}
