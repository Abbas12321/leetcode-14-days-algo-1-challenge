class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        res = 0
        mask = 1
        for i in range(0,32):
            if n & mask:
                res += 1
            if i != 31:
                res <<= 1
            mask <<= 1
        return res
