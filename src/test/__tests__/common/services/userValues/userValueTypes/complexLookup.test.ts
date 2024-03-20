import { ComplexLookupUserValueService } from '@common/services/userValues/userValueTypes';

describe('ComplexLookupUserValueService', () => {
  test('generates user value', () => {
    const complexLookupUserValueService = new ComplexLookupUserValueService();
    const testResult = {
      uuid: 'testUuid_1',
      contents: [
        {
          id: 'testId_1',
          label: 'test complex value 1',
        },
      ],
    };

    const result = complexLookupUserValueService.generate({
      id: 'testId_1',
      data: 'test complex value 1',
      uuid: 'testUuid_1',
    });

    expect(result).toEqual(testResult);
  });
});
