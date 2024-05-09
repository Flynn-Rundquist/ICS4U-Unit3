/**
 * This is the merge sort algorithm.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-05-09
 */

import java.util.Arrays;

public class Main {
    /**
     * This is the main method.
     */
    private Main() {
        // Prevent instantiation
        // Optional: throw an exception e.g. AssertionError
        // if this ever *is* called
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * This is the merge sort algorithm.
     *
     * @param arr
     * @return arr
     */
    public static int[] mergeSort(final int[] arr){
        if (arr.length < 2) {
            return arr;
        }

        final int middle = arr.length / 2;

        // make a new array from the left half of arr
        final int[] left = Arrays.copyOfRange(arr, 0, middle);
        
        // make a new array from the right half of arr
        final int[] right = Arrays.copyOfRange(arr, middle, arr.length);

        return merge(mergeSort(left), mergeSort(right));
    }

    /**
     * This is the merge algorithm.
     *
     * @param left
     * @param right
     * @return result
     */
    public static int[] merge(final int[] left, final int[] right){
        int leftIndex = 0;
        int rightIndex = 0;
        int[] result = new int[left.length + right.length];

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
    
}

