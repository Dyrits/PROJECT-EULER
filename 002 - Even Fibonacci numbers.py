fibonacci_sequence = {0: 0, 1: 1, 2: 1}


def even_fibonacci_numbers(position=3, target=4000000):
    fibonacci = fibonacci_sequence.get(position - 1) + fibonacci_sequence.get(position - 2)
    fibonacci_sequence[position] = fibonacci
    if fibonacci < target:
        return fibonacci + even_fibonacci_numbers(position + 1) if not fibonacci % 2 else even_fibonacci_numbers(position + 1)
    else:
        return 0


print(f"Answer: {even_fibonacci_numbers()}")
