
# Notes on Serious Cryptography

[Book link](https://nostarch.com/seriouscrypto)

One-time pad: take a different random number for every character in the plaintext

Attack acronyms, for reference:

* COA - cipher-text only
* KPA - Known plaintext attack (they have a sample of associated plaintexts and ciphertexts)
* CPA - Chosen-plaintext attack (they can control the plaintexts)
* CCA - Chosen-ciphertext attack (they can both encrypt and decrypt)

TODO find more examples for indistinguishability and malleability

The one-time pad is malleable

TODO research malleability more

## Fully homomorphic encryption

One interesting topic is: *fully homomorphic encryption*. 

* A system encrypts and stores a text P with C = E(K, P)
* That encryption could happen on the client side -- the system never sees P
* The system can then compute C'= E(K, F(P)) where F is some modification of P without ever having to decrypt C.

Apparently this type of encryption is possible but still too slow to be practical.

A related topic is to make ciphertexts searchable without decrypting them. Unclear how feasible this is.

# Randomness

> Entropy is the measure of uncertainty or disorder in a system.

The entropy is `p_1 * log(p_1) - p_2 * log(p_2) - ... p_n * log(p_n)`
Each `p` in the above is the probability for each bit -- your "probability distribution".
In a binary string with uniform probability distribution (ie. each bit has equal probability), then each `p` is equal to `2^-128` where 128 is the lengthe of the string.
With this uniform probability, the entropy will always have `128`, or whatever the length of the bits is.

An entropy equal to the lenth of the string says the distribution is uniform.

When a system does not have uniform probability (ie a coin where heads is `1/10` and tails is `9/10`) then you will have an entropy less than the length of the string (ie. 0.469).

## Random-number generators

These take input from the analog outside world to generate random data -- acoustic noise, static electricity, air turbulence, temperature, operating system I/O, etc.

*Real randomness* can come from quantum sources: photon polarization, vacuum fluctuations, radioactive decay. This is bizzarre. If randomness just means a high amount of unpredictability, that implies all systems are nevertheless potentially predictable, given enough time, data, and models -- then how could real randomness ever exist?

## Pseudo-random generators

These take short random bits from RNGs and use them to expand a longer stream.

There are non-cryptographic PRNGs which are mainly used for simulations and video games; their main concern is the quality of the bits' probability distribution but may be predictable, so are not good for cryptography.

something like pi is a good PRNG because it has no patterns -- new digits are unpredictable. However it is not a RNG because it is deterministic.

TODO implement mersenne twister in JS
