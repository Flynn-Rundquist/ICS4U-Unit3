/**
 * This program finds the palindrome depth
 * of any two digit numbers.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-05-13
 */

final class Palindrome {
    /**
     * This is the private constructor.
     *
     * @throws IllegalStateException when called
     */
    private Palindrome() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * This is the findDepth method.
     *
     * @param depth the numbers depth
     * @param userInput the user input
     * @return the depth of the number
     */
    private static int findDepth(int userInput, int depth) {
        final int maxDepth = 1000;

        if (depth >= maxDepth) {
            return -1;
        }
        if (userInput == reverse(userInput)) {
            return depth;
        } else {
            return findDepth(userInput + reverse(userInput), depth + 1);
        }
    }

    /**
     * This is the reverse method.
     *
     * @param num the number to reverse
     * @return the reversed number
     */
    private static int reverse(int num) {
        int reversedNum = 0;
        final int ten = 10;
        int tempNum = num;

        while (tempNum > 0) {
            reversedNum = (reversedNum * ten) + (tempNum % ten);
            tempNum = tempNum / ten;
        }
        return reversedNum;
    }

    /**
     * This is the main method.
     *
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        final int ten = 10;
        final int oneHundred = 100;

        for (int counter = ten; counter < oneHundred; counter++) {
            System.out.println("\nThe depth of " + counter + " is "
                + findDepth(counter, 0) + ".");
        }
    }
}
