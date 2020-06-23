def multiples_of_3_and_5(number):
    return sum(step3 for step3 in range(3, 1000, 3)) + sum(step5 for step5 in range(5, 1000, 5) if step5 % 3)


print(f"Answer: {multiples_of_3_and_5(1000)}")  # Answer: 233168
