package com.kishan.JavaPrograms.common;

public class FibonacciSeries {

	public static void main(String[] args) {
		//fibboIterative(9);
		fibboRecursive(9);
	}

	private static void fibboIterative(int n) {
		
		int a = 0;
		int b = 1;
		
		for(int i = 0 ; i <= n ; i++) {
			System.out.print(a + " ");
			int sum = a + b;
			a = b;
			b = sum;
		}
	}
	
	private static void fibboRecursive(int n) {
		for(int i = 0 ; i <= n ; i++)  {
			System.out.print(fibbo( i) + " ");
		} 
	}
	
	private static int fibbo(int n) {
		if (n == 0) {
            return 0;
        }
		if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 1;
        }
		else {
			return fibbo(n-1) + fibbo(n-2);
		}
	}
}
