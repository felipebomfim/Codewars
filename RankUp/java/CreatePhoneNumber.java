public class CreatePhoneNumber {
    public static String createPhoneNumber(int[] numbers) {
        // Your code here!
        return String.format("(%d%d%d) %d%d%d-%d%d%d%d",
                numbers[0],
                numbers[1],
                numbers[2],
                numbers[3],
                numbers[4],
                numbers[5],
                numbers[6],
                numbers[7],
                numbers[8],
                numbers[9]);
    }
}
