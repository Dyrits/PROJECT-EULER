package P0001;

public class MultiplesOf3And5 {
    protected int result;

    public static void main(String[] args) {
        System.out.println("Answer: " + new MultiplesOf3And5(1000).getResult());
    }

    public MultiplesOf3And5(int number) {
        this.result = setResult(number);
    }

    public int setResult(int number) {
        int result = 0, step3 = 3, step5 = 5;
        return setResult(number, step3, step5, result);
    }

    public int setResult(int number, int step3, int step5, int result) {
        result += step5 < number && step5 % 3 != 0 ? step5 : 0;
        return step3 < number ? step3 + setResult(number, step3 + 3, step5 + 5, result) : result;
    }

    public int getResult() {
        return this.result;
    }

}