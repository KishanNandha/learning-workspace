package programming;

import java.util.Arrays;
import java.util.List;
import java.util.function.BinaryOperator;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class FP03FunctionalInterfaces {

	/*
	 * 
	 * boolean isEven(int x) { return x%2==0; }
	 * 
	 * int squared(int x) { return x * x; }
	 * 
	 */

	@SuppressWarnings("unused")
	public static void main(String[] args) {

		List<Integer> numbers = Arrays.asList(12, 9, 13, 4, 6, 2, 4, 12, 15);

		//Functional Interface: it contains only one abstract method
		//This abstract method is known as Function Descriptor
		//Predicate, Function and Consumer are Functional Interface
		
		//Predicate has test method as abstract method.
		//Predicate represents one boolean method with one argument
		Predicate<Integer> isEvenPredicate = x -> x % 2 == 0;

		//Internally above statement with lambda will be converted to following 
		
		
		//So lambdas are implementation of functional interface 
		
		//So indirectly still objects are first calss citizens olnt not functions!
		
		Predicate<Integer> isEvenPredicate2 = new Predicate<Integer>() {
			@Override
			public boolean test(Integer x) {
				return x % 2 == 0;
			}

		};
		
		//Function represents a method that takes one argument and produces a result
		//Function has apply method as abstract method.
		//Function<Integer, Integer> here first is parameter type and 2nd is return type
		Function<Integer, Integer> squareFunction = x -> x * x;

		//Internally above statement with lambda will be converted to following 
		Function<Integer, Integer> squareFunction2 = new Function<Integer, Integer>() {
			@Override
			public Integer apply(Integer x) {
				return x * x;
			}

		};

		//Consumer represents a method with one argument and it returns nothing.
		//Consumer has accept method as abstract method.
		Consumer<Integer> sysoutConsumer = System.out::println;

		//Internally above statement with lambda will be converted to following 
		Consumer<Integer> sysoutConsumer2 = new Consumer<Integer>() {
			public void accept(Integer x) {
				System.out.println(x);
			}
		};

		numbers.stream()
			   .filter(isEvenPredicate2)
			   .map(squareFunction2)
			   .forEach(sysoutConsumer2);

		/////////////////////////////////////////////////////////////////////
		
		// BinaryOperator is also functional interface and it have abstract method taking two arguments
		
		BinaryOperator<Integer> sumBinaryOperator = Integer::sum;
		// BinaryOperator<Integer> sumBinaryOperator = (x,y) => x + y;

		//Internally above statement with lambda will be converted to following 
		BinaryOperator<Integer> sumBinaryOperator2 = new BinaryOperator<Integer>() {
			@Override
			public Integer apply(Integer a, Integer b) {
				// TODO Auto-generated method stub
				return a + b;
			}

		};

		int sum = numbers
				.stream()
				.reduce(0, sumBinaryOperator);
	}
}
