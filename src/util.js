// web3 has isAddress and isStrictAddress but does not expose isStrictAddress
export function isStrictAddress(value) {
  return /^0x[0-9a-f]{40}$/i.test(value);
}

export function isStrictTransaction(value) {
  return /^0x[0-9a-f]{64}$/i.test(value);
}

export function isBlock(value) {
  return !isNaN(parseInt(value, 10));
}
