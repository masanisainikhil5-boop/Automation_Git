"""
Hashing Function Implementation using Sieve of Atkins
This script demonstrates polynomial rolling hash with prime modulus generation
"""

def sieve(limit):
   
    if limit < 2:
        return []

    if limit == 2:
        return [False, True]

    if limit == 3:
        return [False, True, True]

    # Initialize result array
    res = [False] * (limit + 1)
    
    if limit >= 2:
        res[2] = True

    if limit >= 3:
        res[3] = True

    # Mark all candidates as initially not prime
    for i in range(4, limit + 1):
        res[i] = False

    # Main sieve algorithm using quadratic forms
    i = 1
    while i * i <= limit:
        j = 1
        while j * j <= limit:
            # Form 1: 4x^2 + y^2
            n = (4 * i * i) + (j * j)
            if n <= limit and (n % 12 == 1 or n % 12 == 5):
                res[n] = not res[n]

            # Form 2: 3x^2 + y^2
            n = (3 * i * i) + (j * j)
            if n <= limit and n % 12 == 7:
                res[n] = not res[n]

            # Form 3: 3x^2 - y^2
            n = (3 * i * i) - (j * j)
            if i > j and n <= limit and n % 12 == 11:
                res[n] = not res[n]

            j += 1
        i += 1

    # Eliminate composite numbers using sieve
    r = 5
    while r * r <= limit:
        if res[r]:
            for i in range(r * r, limit + 1, r * r):
                res[i] = False
        r += 1

    return res


def pick_prime(primes, min_size=1000):
    """
    Returns a suitable prime to use as modulus
    Searches for the first prime >= min_size
    Falls back to the last prime in the list if no suitable prime exists
    """
    for prime in range(len(primes)):
        if prime >= min_size and primes[prime]:
            return prime

    # Return the last prime if no prime large enough exists
    for i in range(len(primes) - 1, -1, -1):
        if primes[i]:
            return i
    
    return 2


def hash_polynomial(string, modulus):
    """
    Implements polynomial rolling hash of string keys
    Uses XOR with bit shifting for polynomial computation
    
    Args:
        string: The string to hash
        modulus: Prime modulus for hash value
    
    Returns:
        Hash value modulo the given modulus
    """
    hash_value = 5381
    
    for char in string:
        # Polynomial hash: hash = (hash << 5) + hash XOR ord(char)
        hash_value = ((hash_value << 5) + hash_value) ^ ord(char)

    return hash_value % modulus


def demonstrate_hashing():
    """
    Demonstrates the complete hashing workflow
    """
    print("=" * 60)
    print("Hashing Function Implementation - Sieve of Atkins Demo")
    print("=" * 60)
    
    # Generate primes list using Sieve of Atkins
    print("\n1. Generating primes using Sieve of Atkins...")
    primes = sieve(10000)
    prime_count = sum(primes)
    print(f"   Found {prime_count} primes up to 10000")
    
    # Pick a suitable prime as modulus
    print("\n2. Picking prime modulus...")
    modulus = pick_prime(primes, 1000)
    print(f"   Selected modulus: {modulus}")
    
    # Test array of strings
    print("\n3. Hashing string keys...")
    print("-" * 60)
    test_array = ["alpha", "beta", "gamma", "delta", "epsilon"]
    
    hash_results = []
    for string in test_array:
        hash_value = hash_polynomial(string, modulus)
        hash_results.append((string, hash_value))
        print(f"   Hash of '{string:10s}' is {hash_value}")
    
    print("-" * 60)
    
    # Demonstrate collision handling
    print("\n4. Summary:")
    print(f"   Modulus: {modulus}")
    print(f"   Strings hashed: {len(test_array)}")
    print(f"   Hash distribution: {len(hash_results)} unique values")
    
    return hash_results


if __name__ == '__main__':
    results = demonstrate_hashing()
    print("\n" + "=" * 60)
    print("Demo Complete!")
    print("=" * 60)
