public class FindMissingLetter {
  public static char findMissingLetter(char[] array) {
    char nextChar = (char) (array[0] + 1);
    for (int i = 1; i < array.length && nextChar == array[i]; i++) {
      nextChar = (char) (array[i] + 1);
    }
    return nextChar;
  }

  public static void main(String[] args) {
    System.out.println(findMissingLetter(new char[] { 'a', 'b', 'c', 'd', 'f' }));
    System.out.println(findMissingLetter(new char[] { 'O', 'Q', 'R', 'S' }));
  }
}