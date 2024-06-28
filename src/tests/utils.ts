import { isEqual } from 'lodash';

export async function testCase(name: string, cb: () => void | Promise<void>) {
  console.log('');
  console.log('');
  console.log(' ---- Test: ', name, '------');

  await cb();

  console.log(' ----End test: ', name, '------');
  console.log('');
  console.log('');
}

type Props = {
  expected: unknown;
  result: unknown;
};
export function logResult(label: string, { expected, result }: Props, compareFn = isEqual) {
  const compareResult = compareFn(expected, result);
  console.log(`🚀 ~ ${label} ~ result:`, result);
  console.log(`🚀 ~ ${label} ~ expected:`, expected);
  console.log(`🚀 ~ ${label} ~ expected === result:`, compareFn(expected, result));
  if (compareResult) {
    console.log(`%c ---${label} PASSED---`, 'background: #00c642; color: #FFF ');
  } else {
    console.log(`%c ---${label} FAILED---`, 'background: #cb3837; color: #FFF ');
  }
}
