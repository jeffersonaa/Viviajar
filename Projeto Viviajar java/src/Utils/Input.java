package Utils;

import java.util.Scanner;

public class Input {

    private static Scanner input = new Scanner(System.in);

    public static String readString(String message) {

        if(message != ""){
            System.out.println(message);
        }
        
        return input.nextLine();

    }

    public static int readInt(String message) {

        if(message != ""){
            System.out.println(message);
        }
        
        return input.nextInt();

    }
    
}
