
import java.util.ArrayList;
import java.util.List;

public class BraceChecker {

    public boolean isValid(String braces) {
      char[] bracesArray = braces.toCharArray();
      List<Character> pilhaDeAberturaDeBraces = new ArrayList<>();
      for (int i=0; i<bracesArray.length; i++){
        if(bracesArray[i]=='('||bracesArray[i]=='['||bracesArray[i]=='{')
          pilhaDeAberturaDeBraces.add(bracesArray[i]);
        else {
          if (pilhaDeAberturaDeBraces.isEmpty())
            return  false;
          switch (bracesArray[i]) {
              case ')' -> {
                  if(pilhaDeAberturaDeBraces.get(pilhaDeAberturaDeBraces.size()-1) == '(')
                      pilhaDeAberturaDeBraces.remove(pilhaDeAberturaDeBraces.size()-1);
                  else
                      return false;
                }
              case ']' -> {
                  if(pilhaDeAberturaDeBraces.get(pilhaDeAberturaDeBraces.size()-1) == '[')
                      pilhaDeAberturaDeBraces.remove(pilhaDeAberturaDeBraces.size()-1);
                  else
                      return false;
                }
              case '}' -> {
                  if(pilhaDeAberturaDeBraces.get(pilhaDeAberturaDeBraces.size()-1) == '{')
                      pilhaDeAberturaDeBraces.remove(pilhaDeAberturaDeBraces.size()-1);
                  else
                      return false;
                }
              default -> throw new AssertionError();
          }
        }
      }
      return pilhaDeAberturaDeBraces.isEmpty();
    }
    
    public static void main(String[] args) {
        BraceChecker braceChecker = new BraceChecker();
        System.out.println(braceChecker.isValid(""));
        System.out.println(braceChecker.isValid("(){}[]"));
        System.out.println(braceChecker.isValid("([{}])"));
        System.out.println(braceChecker.isValid("(}"));
        System.out.println(braceChecker.isValid("[(])"));
        System.out.println(braceChecker.isValid("[({})](]"));
    }
}
