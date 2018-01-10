// Predicates

export function isStrictAddress(value) {
  // web3 has isAddress and isStrictAddress but does not expose isStrictAddress
  return /^0x[0-9a-f]{40}$/i.test(value);
}

export function isStrictTransaction(value) {
  return /^0x[0-9a-f]{64}$/i.test(value);
}

export function isBlock(value) {
  return !isNaN(parseInt(value, 10));
}

// Formatting

export function formatData(data) {
  // XXX Data always aligned on 32-bytes
  // FIXME ugly and bad
  return data.replace('0x','').split('').reduce((acc, char, i) => {
    if ((i + 1) % 64 === 0) {
      return { cur: '', partitioned: acc.partitioned.concat([acc.cur]) }
    }
    return { cur: acc.cur + char, partitioned: acc.partitioned }
  }, { cur: '', partitioned: [] }).partitioned;
}
