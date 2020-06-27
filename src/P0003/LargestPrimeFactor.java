package P0003;

public class LargestPrimeFactor {
    public static void main(String[] args) {
        System.out.println("Answer: " + largestPrimeFactor(600851475143L));;
    }

    public static boolean isPrime(int number) {
        if (number == 2) { return true; }
        else if (number < 2) { return false; }
        for (int testNumber = 2; testNumber < Math.sqrt(number) + 1; testNumber++) {
            if (number % testNumber == 0) { return false; }
        }
        return true;
    }

    public static long largestPrimeFactor(long end) {
        long largest = 2;
        if (end == 2) { return largest; }
        for(int start = 3; start < Math.sqrt(end); start += 2) {
            if(isPrime(start) && end % start == 0) { largest = start; }
        }
        return largest;
    }
}
