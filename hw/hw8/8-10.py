def count_letters(s):
    result = {}
    for char in s:
        if char.isalpha():
            char = char.lower()
            result[char] = result.get(char, 0) + 1
    return result

if __name__ == "__main__":
    print("Letter count:", count_letters("Hello World!"))