function tribonacci(signature,n){
  const tribonacci = [];
  for (let i = 0; i < n; i++) {
    i < 3 
      ? tribonacci.push(signature[i])
      : tribonacci.push(tribonacci[i-3] + tribonacci[i-2] + tribonacci[i-1])
  }
  return tribonacci;
}