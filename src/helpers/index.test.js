import { getIdsJoined } from './';

describe('getIdsJoined', () => {
  const state = [
    {id: 0},
    {id: 1},
    {id: 2},
  ];
  const wrongState = [
    {idx: 0},
    {idx: 1},
    {idx: 2},
  ];
  const wantedIdsJoined = '0,1,2';
  const noIds = ',,';
  
  test('Returns correct values', () => {
    const idsJoined = getIdsJoined(state);
    expect(idsJoined).toStrictEqual(wantedIdsJoined);
  });

  test('With no ids returns undefined', () => {
    const idsJoined = getIdsJoined(wrongState);
    expect(idsJoined).toStrictEqual(noIds);
  });

  test('When state has no objects returns void string', () => {
    const idsJoined = getIdsJoined([]);
    expect(idsJoined).toStrictEqual('');
  });
});
