import java.util.Scanner;

public class A1_Q1 {
    public static void main(String[] args) {
        int option;
        double balance = 0;
        Scanner kb = new Scanner(System.in);  // Moved scanner initialization outside the loop
        do {
            System.out.println("Welcome to the Best Bank ATM!");
            System.out.println("Please choose an option:");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");
            option = kb.nextInt();

            double amount;

            switch (option) {
                case 1:
                    System.out.printf("%.2f $%n", balance);  // Added newline for better formatting
                    break;
                case 2:
                    System.out.println("Enter amount to deposit: ");
                    amount = kb.nextDouble();
                    if (amount > 5 && amount < 10000 && amount > 0) {
                        balance += amount;
                        System.out.println("Deposit successful!");
                    } else {
                        System.out.println("Invalid deposit amount!"); // Added a message for invalid deposits
                    }
                    break;
                case 3:
                    System.out.println("Enter amount to withdraw (multiples of 5, 10, 50, or 100):");
                    double amount2 = kb.nextDouble();
                    double[] denominations = {100, 50, 10, 5};
                    double[] count = new double[denominations.length];
                    if (amount2 < 1000 && amount2 > 5 && amount2 % 5 == 0 && amount2 <= balance) {
                        for (int i = 0; i < denominations.length; i++) {
                            if (amount2 >= denominations[i]) {
                                count[i] = (int) amount2 / denominations[i];
                                amount2 = amount2 % denominations[i];
                            }
                        }
                        for (int i = 0; i < denominations.length; i++) {
                            if (count[i] > 0) {
                                System.out.println("You will receive:");
                                System.out.println((int) count[i] + " bill(s) of $ " + denominations[i]); // Cast to int for displaying count
                                balance -= (int) count[i] * denominations[i]; // Deduct the actual withdrawn amount from balance
                            }
                        }
                    } else if (amount2 > balance) {
                        System.out.println("Insufficient balance!");
                    } else {
                        System.out.println("Invalid withdrawal amount! You can only withdraw amounts that are " +
                                "multiples of 5, 10, 50, or 100.");
                    }
                    break;
                case 4:
                    break;
                default:
                    System.out.println("Invalid choice! Please try again");
                    break;
            }
        } while (option != 4);

        System.out.println("Goodbye!");
    }
}
