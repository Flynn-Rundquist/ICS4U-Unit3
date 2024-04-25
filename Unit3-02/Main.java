/**
 * This program finds the factorial of a number using recursion.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-04-25
 */

import java.util.Scanner;

/**
 * This class contains the main method.
 */

public class Main {
    /**
     * This method finds the factorial of a number using recursion.
     *
     * @param number The number to find the factorial of.
     * @return The factorial of the number.
     */
    public static int factorial(int number) {
        if (number == 0) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    /**
     * This is the main method.
     *
     * @param args Unused.
     */
    public static void main(String[] args) {
        final Scanner input = new Scanner(System.in);
        System.out.print("Enter a number to find the factorial of: ");
        final int number = input.nextInt();

        if (number < 0) {
            System.out.println("\n-1");
        } else {
            System.out.println("\n" + factorial(number));
        }
        input.close();

        System.out.println("\nDone.");
    }
}
