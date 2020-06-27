package P0001;

public class MultiplesOfXAndY {
    protected int result;
    protected int X;
    protected int Y;

    public static void main(String[] args) {
        System.out.println("Answer: " + new MultiplesOfXAndY(3, 5, 1000).getResult());  // Answer: 233168
    }

    public MultiplesOfXAndY(int X, int Y, int ceil) {
        setX(X, Y);
        setY(X, Y);
        setResult(ceil);
    }

    public void setResult(int ceil) { this.result = setResult(this.X, this.Y, ceil, 0); }

    protected int setResult(int X, int Y, int ceil, int accumulator) {
        accumulator += Y < ceil && Y % this.X != 0 ? Y : 0;
        return X < ceil ? X + setResult(X + this.X, Y + this.Y, ceil, accumulator) : accumulator;
    }

    public int getResult() { return this.result; }

    public void setX(int X, int Y) { this.X = Math.min(X, Y); }

    public void setY(int X, int Y) { this.Y = Math.max(X, Y); }
}