import java.util.Arrays;
import java.util.stream.Collectors;

public class RgbToHex {
    public static String rgb(int r, int g, int b){
        int [] args = {r,g,b};
        String rgbString = Arrays.stream(args)
                                 .map(el->Math.max(el,0))
                                 .map(el->Math.min(el,255))
                                 .mapToObj(el->String.format("%02X", el))
                                 .collect(Collectors.joining());
        return  rgbString;
    }
    public static void main(String[] args) {
        System.out.println(rgb(255,255,255));
        System.out.println(rgb(255,255,300));
        System.out.println(rgb(0,0,0));
        System.out.println(rgb(148,0,211));
    }
}
