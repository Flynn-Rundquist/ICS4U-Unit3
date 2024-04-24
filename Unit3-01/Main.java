/**
 * This program reverses a string.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-04-24
 */

public class Main {
    /**
     * This method reverses a string using recursion.
     *
     * @param stringToReverse The string to reverse.
     * @return The reversed string.
     */
    static String reverseString(String stringToReverse) {
        if (stringToReverse.equals("")) {
            return "";
        } else {
            final String firstChar
                = Character.toString(stringToReverse.charAt(0));
            final String restOfString
                = stringToReverse.substring(1);
            return reverseString(restOfString) + firstChar;
        }
    }

    /**
     * This is the main method.
     *
     * @param args
     */
    public static void main(String[] args) {
        final String aString = "recursion";
        System.out.println("The reverse of " + aString + " is "
            + reverseString(aString));
        final String anotherString = "racecar";
        System.out.println("The reverse of " + anotherString + " is "
            + reverseString(anotherString));
        final String thridString = "hello";
        System.out.println("The reverse of " + anotherString + " is "
        + reverseString(thridString));

        System.out.println("\nDone.");

    }
}
