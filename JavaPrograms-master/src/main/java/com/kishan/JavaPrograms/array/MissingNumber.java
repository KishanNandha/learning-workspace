package com.kishan.JavaPrograms.array;

public class MissingNumber {

	//You are given an integer array containing 1 to n but one of the number from 1 to n in the array is missing. 
	//You need to provide optimum solution to find the missing number. 
	//Number can not be repeated in the arry.
	//int[] arr1={7,5,6,1,4,2};
	//Missing number : 3
	//int[] arr2={5,3,1,2};
	//Missing number : 4
	
	public static void main(String[] args) {

		int[] arr1={7,5,6,1,4,2};
		System.out.println("Missing number from array arr1: "+findMissingNumber(arr1));
		int[] arr2={5,3,1,2};
		System.out.println("Missing number from array arr2: "+findMissingNumber(arr2));
	}

	private static int findMissingNumber(int[] array) {
		int missingNo = 0;
		
		//Find the sum of n number using formula n=n*(n+1)/2
		int n = array.length + 1; //as starting from 1
		
		int sum = (n*(n+1))/2;
		
		//find sum of elements of array 
		int elementSum = 0;
		for(int i = 0; i < array.length; i++) {
			elementSum += array[i];
		}
		
		//Substract (sum of n numbers – sum of elements present in the array).
		missingNo = sum - elementSum;
		
		return missingNo;
	}
}
