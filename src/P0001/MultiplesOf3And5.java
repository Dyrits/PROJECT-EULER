package P0001;

public class MultiplesOf3And5 {
    protected int result;

    public static void main(String[] args) {
        System.out.println(new MultiplesOf3And5(1000).getResult());
    }

    public MultiplesOf3And5(int number) {
        this.result = setResult(number);
    }

    public int setResult(int number) {
        int result = 0;
        for (int step3 = 3; step3 < number; step3 += 3) {
            result += step3;
        }
        for (int step5 = 5; step5 < number; step5 += 5) {
            result += step5 % 3 == 0 ? 0 : step5;
        }
        return result;
    }

    public int getResult() {
        return this.result;
    }

}