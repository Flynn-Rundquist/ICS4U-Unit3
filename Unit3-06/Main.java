/**
 * This is the merge sort algorithm.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-05-09
 */

import java.util.Arrays;

/**
 * This is the Main class.
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
     * This is the merge sort algorithm.
     *
     * @param arr array to be sorted
     * @return arr
     */
    public static int[] mergeSort(final int[] arr) {
        if (arr.length < 2) {
            return arr;
        }

        final int middle = arr.length / 2;
        final int[] left = Arrays.copyOfRange(arr, 0, middle);
        final int[] right = Arrays.copyOfRange(arr, middle, arr.length);

        return merge(mergeSort(left), mergeSort(right));
    }

    /**
     * This is the merge algorithm.
     *
     * @param left left side of array
     * @param right right side of array
     * @return result
     */
    public static int[] merge(final int[] left, final int[] right) {
        int leftIndex = 0;
        int rightIndex = 0;
        final int[] result = new int[left.length + right.length];

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result[leftIndex + rightIndex] = left[leftIndex];
                leftIndex++;
            } else {
                result[leftIndex + rightIndex] = right[rightIndex];
                rightIndex++;
            }
        }
        // Copy remaining elements from left or right array if any
        while (leftIndex < left.length) {
            result[leftIndex + rightIndex] = left[leftIndex];
            leftIndex++;
        }
        while (rightIndex < right.length) {
            result[leftIndex + rightIndex] = right[rightIndex];
            rightIndex++;
        }

        return result;
    }

    /**
     * This is the main method.
     *
     * @param args args
     */
    public static void main(final String[] args) {
        final int fifty = 50;
        final int hundred = 100;
        final int twoHundred = 200;

        final int[] arr50 = new int[fifty];
        final int[] arr100 = new int[hundred];
        final int[] arr200 = new int[twoHundred];

        for (int counter = 0; counter < arr50.length; counter++) {
            arr50[counter] = (int) (Math.random() * fifty);
        }

        for (int counter = 0; counter < arr100.length; counter++) {
            arr100[counter] = (int) (Math.random() * hundred);
        }

        for (int counter = 0; counter < arr200.length; counter++) {
            arr200[counter] = (int) (Math.random() * twoHundred);
        }

        System.out.println("Original array of 50 random numbers:\n");
        for (int count = 0; count < arr50.length; count++) {
            System.out.print(arr50[count] + " ");
        }
        System.out.println();
        System.out.println("\nSorted array of 50 random numbers:\n");
        final int[] sortedArr50 = mergeSort(arr50);
        for (int count = 0; count < sortedArr50.length; count++) {
            System.out.print(sortedArr50[count] + " ");
        }

        System.out.println("\n**********\n");

        System.out.println("Original array of 100 random numbers:\n");
        for (int count = 0; count < arr100.length; count++) {
            System.out.print(arr100[count] + " ");
        }
        System.out.println();
        System.out.println("\nSorted array of 100 random numbers:\n");
        final int[] sortedArr100 = mergeSort(arr100);
        for (int count = 0; count < sortedArr100.length; count++) {
            System.out.print(sortedArr100[count] + " ");
        }

        System.out.println("\n**********\n");

        System.out.println("Original array of 200 random numbers:\n");
        for (int count = 0; count < arr200.length; count++) {
            System.out.print(arr200[count] + " ");
        }
        System.out.println();
        System.out.println("\nSorted array of 200 random numbers:\n");
        final int[] sortedArr200 = mergeSort(arr200);
        for (int count = 0; count < sortedArr200.length; count++) {
            System.out.print(sortedArr200[count] + " ");
        }

        System.out.println();
        System.out.println("\nDone.");
    }
}
