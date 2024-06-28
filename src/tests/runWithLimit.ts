import { uniqBy } from 'lodash';
import { runWithLimit } from '../3_test-getUrls';
import { logResult, testCase } from './utils';
interface ResponseDataType {
  delay: number;
  data: string;
}

const asyncFetch = (url: string) =>
  new Promise<ResponseDataType>((resolve) => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      resolve({ delay, data: 'result' + url });
    }, delay);
  });

const urlsToFetch = Array(30)
  .fill((i: number) => `/${i}/aadt`)
  .map((fn, index) => fn(index));

export const testRunWithLimit = async () => {
  await testCase('empty array', async () => {
    const result = await runWithLimit({ callback: asyncFetch, data: [], limit: 3 });
    logResult('result length', {
      expected: 0,
      result: result.length,
    });
  });
  //
  await testCase('runWithLimit', async () => {
    const start = Date.now();
    const LIMIT = 3;
    const result = await runWithLimit({ callback: asyncFetch, data: urlsToFetch, limit: LIMIT });
    const end = Date.now();
    const executionTime = end - start;

    logResult('result length', {
      expected: urlsToFetch.length,
      result: uniqBy(result, 'data').length,
    });

    logResult('result arr', {
      expected: urlsToFetch.map((str) => `result${str}`),
      result: result.map(({ data }) => data),
    });
    const delay = result.reduce((acc, { delay }) => acc + delay, 0) / LIMIT;
    logResult(
      'result arr',
      {
        expected: executionTime,
        result: delay,
      },
      (ex, res) => ex >= res
    );
  });
  //
  await testCase('error', async () => {
    const errMess = 'test error';
    let caughtError: Error | null = null;
    try {
      await runWithLimit({
        callback: () => {
          throw new Error(errMess);
        },
        data: ['234'],
        limit: 3,
      });
    } catch (e) {
      if (e && e instanceof Error) {
        caughtError = e;
      }
    } finally {
      logResult('error message', {
        expected: errMess,
        result: caughtError?.message,
      });
    }
  });
};
