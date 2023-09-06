export function fibonacci(n: number) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence[sequence.length -1];
}
  