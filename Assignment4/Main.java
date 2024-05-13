/**
 * This program finds the palindrome depth
 * of any two digit numbers.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-05-13
 */

/**
 * This is the main class.
 */
final class Main {
    /**
     * This is the private constructor.
     *
     * @throws IllegalStateException when called
     */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * This is the findDepth method.
     *
     * @param userInput
     * @param depth
     * @return
     */
    private static int findDepth(int userInput, int depth) {
        int reversedNum = reverse(userInput);
        int sum = userInput + reversedNum;

        if (isPalindrome(sum)) {
            return depth;
        } else {
            return findDepth(sum, depth + 1);
        } 
    }

    /**
     * This is the isPalindrome method.
     *
     * @param num
     * @return
     */
    private static boolean isPalindrome(int num) {
        return num == reverse(num);
    }

    /**
     * This is the reverse method.
     *
     * @param num
     * @return
     */
    private static int reverse(int num) {
        int reversedNum = 0;

        while (num > 0) {
            reversedNum = (reversedNum * 10) + (num % 10);
            num = num / 10;
        }
        return reversedNum;
        }

    /**
     * This is the main method.
     *
     * @param args
     */
    public static void main(String[] args) {
        for (int counter = 10; counter < 100; counter++) {
            System.out.println("\nThe depth of" + counter + " is " + findDepth(counter, 0) + ".");
        }
    }
}