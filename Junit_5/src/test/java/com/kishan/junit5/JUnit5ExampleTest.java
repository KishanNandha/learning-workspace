package com.kishan.junit5;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTimeout;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.time.Duration;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;
import org.junit.platform.suite.api.ExcludeTags;
import org.junit.platform.suite.api.IncludeTags;

/**
 * @author kishan.nandha
 * @since Jan 22, 2019
 */
//You can use @IncludeTags or @ExcludeTags annotations in your testplan to filter tests or include tests.
@IncludeTags("local")
@ExcludeTags("prod")
class JUnit5ExampleTest {

	/*
	 * JUnit 5 @Tag can be used to filter testcases from test plans. It can help in
	 * create multiple different test plans for different environments, different
	 * use-cases or any specific requirement. You can execute set of tests by
	 * including only those tagged tests in test plan OR by excluding other tests
	 * from test plan.
	 */

	// Note: with junit 4 all test methods needs to be public
	// but with junit5 it is not necessary

	private String str;

	@Test
	@Disabled // @Ignored // used for skipping test
	void mytest1() {
		fail("test failed");
	}

	@Test
	@Disabled // @Ignored
	void length_basic() {
		int actualLength = "ABCD".length();
		int expectedLength = 4;
		assertEquals(expectedLength, actualLength);// remember first expected and then actual
		// Assert length == 4
		// Write test code
		// Invoke method square(4) => CUT
		// Checks in place - 16 => Assertions
	}

	@Test
	void toUpperCase_basic() {
		String str = "abcd";
		String result = str.toUpperCase();
		assertNotNull(result);
		// assertNull(result);
		assertEquals("ABCD", result);
	}

	@Test
	void split_basic() {
		String str = "abc def ghi";
		String actualResult[] = str.split(" ");
		String[] expectedResult = new String[] { "abc", "def", "ghi" };
		assertArrayEquals(expectedResult, actualResult);
	}

	// Note: TestInfo info is added in junit 5, it is not present in junit 4

	@BeforeEach // @Before // this will be executed before every @Test method in this class
	void beforeEach(TestInfo info) {
		System.out.println("Initialize Test Data for  " + info.getDisplayName());
	}

	@AfterEach // @After // this will be executed after every @Test method in this class
	void afterEach(TestInfo info) {
		System.out.println("Clean up Test Data for  " + info.getDisplayName());
	}

	@BeforeAll // @Beforeclass // this will be executed before all tests in this class
	static void beforeAll() {
		System.out.println("Initialize connection to database");
	}

	@AfterAll // @Afterclass // this will be executed after all tests in this class
	static void afterAll() {
		System.out.println("Close connection to database");
	}

	@Test
	// used to give runtime name for test
	@DisplayName("When length is null, throw an exception")
	void length_exception() {

		String str = null;

		// assertThrows(expected exception type,executable)
		// we are excepting NullpointerException, so if ex is thrown then test passes
		// else if ex is not thrown then test will be failed
		assertThrows(NullPointerException.class,
				// lambda function
				() -> {
					str.length();
				});
	}

	@Test
	void length_greater_than_zero() {
		// here test remains same but data is changing
		// in this case use @ParameterizedTest
		assertTrue("ABCD".length() > 0);
		assertTrue("ABC".length() > 0);
		assertTrue("A".length() > 0);
		assertTrue("DEF".length() > 0);
	}

	@ParameterizedTest
	// valueSource can be used with ints, longs, doubles and strings
	@ValueSource(strings = { "ABCD", "ABC", "A", "DEF" })
	void length_greater_than_zero_using_parameterized_test(String str) {
		assertTrue(str.length() > 0);
	}

	@Tag("local")
	@ParameterizedTest(name = "{0} toUpperCase is {1}")
	// comma separated values
	@CsvSource(value = { "abcd, ABCD", "abc, ABC", "'',''", "abcdefg, ABCDEFG" })
	void uppercase(String word, String capitalizedWord) {
		assertEquals(capitalizedWord, word.toUpperCase());
	}

	@Tag("prod")
	@ParameterizedTest(name = "{0} length is {1}")
	@CsvSource(value = { "abcd, 4", "abc, 3", "'',0", "abcdefg, 7" })
	void length(String word, int expectedLength) {
		assertEquals(expectedLength, word.length());
	}

	@Test
	@RepeatedTest(1) // new in junit5 //number of times test will be repeated.
	void contains_basic() {
		assertFalse("abcdefgh".contains("ijk"));
	}

	@Test
	@Disabled
	// @Timout(seconds) in old versions
	void performanceTest() {
		// if test takes more than 5 seconds then test will be failed
		assertTimeout(Duration.ofSeconds(5), () -> {
			for (int i = 0; i <= 1000000; i++) {
				int j = i;
				System.out.println(j);
			}
		}

		);
	}

	@Nested // new in junit5
	@DisplayName("For an empty String")
	class EmptyStringTests {

		@BeforeEach
		void setToEmpty() {
			str = "";
		}

		@Test
		@DisplayName("length should be zero")
		void lengthIsZero() {
			assertEquals(0, str.length());
		}

		@Test
		@DisplayName("upper case is empty")
		void uppercaseIsEmpty() {
			assertEquals("", str.toUpperCase());
		}

	}

	@Nested
	@DisplayName("For large strings")
	class LargeStringTests {

		@BeforeEach
		void setToALargeString() {
			str = "Afsjdjfljsadfkljsadlkfjlajbvjcxzbnhrewu";
		}

		@Test
		void test() {

		}

	}

	/*
	 * Junit5 contains 3 part 1: junit platform : bulding block 2: junit jupiter :
	 * junit programming model(contains extensions assertions and annotations) 3:
	 * junit vintage : support for old junit version
	 * 
	 * xunitpatterns.com
	 */
}
