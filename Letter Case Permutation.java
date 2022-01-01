class Solution {
    public List<String> letterCasePermutation(String S) {
        List<String> rst = new ArrayList<>();
        dfs(S.toCharArray(), 0, rst);
        return rst;
    }

    private void dfs(char[] S, int index, List<String> rst) {
        if (index == S.length) {
            rst.add(String.valueOf(S));
            return;
        }

        // 不管该位上字符是什么，都存在一种不改变当前字符直接向后移动的情况
        dfs(S, index + 1, rst);
        // 当该位上字符是 英文字符，则存在另外一种情况，即将其改变为 大写/小写 字母
        if (Character.isLetter(S[index])) {
            S[index] ^= 1 << 5;
            dfs(S, index + 1, rst);
            // Backtracking
            S[index] ^= 1 << 5;
        }
    }
}
