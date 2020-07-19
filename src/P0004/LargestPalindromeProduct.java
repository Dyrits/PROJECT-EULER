package P0004;

import P0001.MultiplesOfXAndY;

public class LargestPalindromeProduct {

    public static void main(String[] args) {
        System.out.println("Answer: " + largestPalindromeProduct());  // Answer: 906609
    }

    public static int largestPalindromeProduct() {
        int largest = 0;
        for (int number = 100; number < 1000; number ++) {
            for (int multiplicator = number; multiplicator < 1000; multiplicator ++) {
                int product = multiplicator * number;
                if (product < largest) { continue; }
                if (isPalindrome(product)) {
                    largest = product;
                };
            }
        }
        return largest;
    }

    public static boolean isPalindrome(int number) {
        String reversedPNumber = new StringBuilder().append(number).reverse().toString();
        return number == Integer.parseInt(reversedPNumber);
    }
}
