package cond.ex;

public class CondOpEx {
    public static void main(String[] args) {
        int a = 30;
        int b = 20;

        int maxValue = (a > b) ? a : b;

        System.out.println("더 큰 숫자는 " + maxValue + "입니다.");
    }
}
