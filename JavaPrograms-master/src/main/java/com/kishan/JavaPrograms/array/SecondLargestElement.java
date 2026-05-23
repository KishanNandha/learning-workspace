package com.kishan.JavaPrograms.array;

public class SecondLargestElement {

	//Given an unsorted array, you need to find the second largest element in the array in o(n) time complexity.
	//You can sort the array and then return second last element in the array but it will be done in o(nlogn)  time,
	
	public static void main(String[] args) {

		int[] array={7,5,6,1,4,2};
		System.out.println(findSecondLargest(array));
		
	}

	private static int findSecondLargest(int[] array) {
		// Initialize these to the smallest value possible
		int largest = 0;
		int secondLargest = 0;

		// Loop over the array
		for (int i = 0; i < array.length; i++) {
			
			 // If current element is greater than highest
			if (array[i] > largest) {
				
				// assign second highest element to highest element 
				secondLargest = largest;
				
				// highest element to current element
				largest = array[i];
				
			} else if (array[i] > secondLargest && array[i] != largest) {
				// Just replace the second highest
				secondLargest = array[i];
			}
		}

		return secondLargest;
	}
	
	//another option is to use quick select
}
