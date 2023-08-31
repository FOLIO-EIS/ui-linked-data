// TODO: remove mocked data
export const BFLITE_RECORD_EXAMPLE = {
  type: 'http://bibfra.me/vocab/marc/Monograph',
  'http://bibfra.me/vocab/lite/Instance': [
    {
      'http://bibfra.me/vocab/marc/title': [
        {
          'http://bibfra.me/vocab/marc/Title': {
            'http://bibfra.me/vocab/marc/partName': ['Instance: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Instance: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Instance: Laramie holds the range'],
            'http://bibfra.me/vocab/bflc/nonSortNum': ['Instance: nonSortNum'],
            'http://bibfra.me/vocab/marc/subTitle': ['Instance: subtitle'],
          },
        },
        {
          'http://bibfra.me/vocab/marc/ParallelTitle': {
            'http://bibfra.me/vocab/marc/partName': ['Parallel: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Parallel: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Parallel: Laramie holds the range'],
            'http://bibfra.me/vocab/lite/note': ['Parallel: noteLabel'],
            'http://bibfra.me/vocab/lite/date': ['Parallel: date'],
            'http://bibfra.me/vocab/marc/subTitle': ['Parallel: subtitle'],
          },
        },
        {
          'http://bibfra.me/vocab/marc/VariantTitle': {
            'http://bibfra.me/vocab/marc/partName': ['Variant: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Variant: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Variant: Laramie holds the range'],
            'http://bibfra.me/vocab/lite/note': ['Variant: noteLabel'],
            'http://bibfra.me/vocab/lite/date': ['Variant: date'],
            'http://bibfra.me/vocab/marc/subTitle': ['Variant: subtitle'],
            'http://bibfra.me/vocab/marc/variantType': ['Variant: variantType'],
          },
        },
      ],
      'http://bibfra.me/vocab/marc/mediaType': ['unmediated'],
      'http://bibfra.me/vocab/marc/carrier': ['carrier'],
      'http://bibfra.me/vocab/lite/dimensions': ['20 cm'],
      'http://bibfra.me/vocab/marc/statementOfResponsibility': ['responsibility statement'],
      'http://bibfra.me/vocab/marc/edition': ['edition statement'],
      'http://bibfra.me/vocab/lite/copyrightDate': ['copyright date'],
      'http://bibfra.me/vocab/marc/projectedProvisionDate': ['projected provision date'],
    },
  ],
};
