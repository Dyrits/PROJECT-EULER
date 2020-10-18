primes = [2, 3, 5, 7, 11, 13]


def get_prime_number(nth):
    if len(primes) + 1 > nth:
        return primes[nth - 1]
    for position in range(len(primes), nth):
        number = primes[-1] + 2
        while not is_prime(number):
            number += 2
        primes.append(number)
    return primes[-1]


def is_prime(number):
    if number > 2:
        for value in range(2, int(number ** 0.5) + 2):
            if not number % value:
                return False
        return True
    return number == 2


print(f"Answer: {get_prime_number(10001)}")  # Answer: 104743
