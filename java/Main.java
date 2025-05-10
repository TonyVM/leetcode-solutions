public class Main {
  public static void main(String[] args) {
    System.out.println(longestSubstr("abcabcbbabcdefg"));
  }

  public static int longestSubstr(String s) {
    String longest = "";
    for (int i = 0; i < s.length(); i++) {
      String temp = "" +s.charAt(i);
      for (int j = i + 1; j < s.length(); j++) {
        if ( temp.indexOf(s.charAt(j)) == -1) {
          temp += s.charAt(j);
        } else {
          longest = temp.length() > longest.length() ? temp : longest;
          break;
        }
      }
      longest = temp.length() > longest.length() ? temp : longest;
    }
    return longest.length();
  }
}

