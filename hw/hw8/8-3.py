def classify_even_odd(numbers):
    result = {'even': [], 'odd': []}
    for num in numbers:
        if num % 2 == 0:
            result['even'].append(num)
        else:
            result['odd'].append(num)
    return result

if __name__ == "__main__":
    test_data = [1, 2, 3, 4, 5, 6]
    print("Classified:", classify_even_odd(test_data))