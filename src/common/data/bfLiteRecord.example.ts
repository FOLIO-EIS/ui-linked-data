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
            'http://bibfra.me/vocab/marc/subtitle': ['Instance: subtitle'],
          },
        },
        {
          'http://bibfra.me/vocab/marc/ParallelTitle': {
            'http://bibfra.me/vocab/marc/partName': ['Parallel: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Parallel: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Parallel: Laramie holds the range'],
            'http://bibfra.me/vocab/lite/note': ['Parallel: noteLabel'],
            'http://bibfra.me/vocab/lite/date': ['Parallel: date'],
            'http://bibfra.me/vocab/marc/subtitle': ['Parallel: subtitle'],
          },
        },
        {
          'http://bibfra.me/vocab/marc/VariantTitle': {
            'http://bibfra.me/vocab/marc/partName': ['Variant: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Variant: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Variant: Laramie holds the range'],
            'http://bibfra.me/vocab/lite/note': ['Variant: noteLabel'],
            'http://bibfra.me/vocab/lite/date': ['Variant: date'],
            'http://bibfra.me/vocab/marc/subtitle': ['Variant: subtitle'],
            'http://bibfra.me/vocab/marc/variantType': ['Variant: variantType'],
          },
        },
      ],
      'http://bibfra.me/vocab/marc/production': [
        {
          'http://bibfra.me/vocab/lite/date': ['production date'],
          'http://bibfra.me/vocab/lite/place': [
            {
              'http://bibfra.me/vocab/lite/name': ['production place name'],
              'http://bibfra.me/vocab/lite/link': ['production place link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['production name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['production simple date'],
          'http://bibfra.me/vocab/bflc/simplePlace': ['production simple place'],
        },
      ],
      'http://bibfra.me/vocab/marc/publication': [
        {
          'http://bibfra.me/vocab/lite/date': ['publication date'],
          'http://bibfra.me/vocab/lite/place': [
            {
              'http://bibfra.me/vocab/lite/name': ['publication place name'],
              'http://bibfra.me/vocab/lite/link': ['publication place link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['publication name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['publication simple date'],
          'http://bibfra.me/vocab/bflc/simplePlace': ['publication simple place'],
        },
      ],
      'http://bibfra.me/vocab/marc/distribution': [
        {
          'http://bibfra.me/vocab/lite/date': ['distribution date'],
          'http://bibfra.me/vocab/lite/place': [
            {
              'http://bibfra.me/vocab/lite/name': ['distribution place name'],
              'http://bibfra.me/vocab/lite/link': ['distribution place link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['distribution name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['distribution simple date'],
          'http://bibfra.me/vocab/bflc/simplePlace': ['distribution simple place'],
        },
      ],
      'http://bibfra.me/vocab/marc/manufacture': [
        {
          'http://bibfra.me/vocab/lite/date': ['manufacture date'],
          'http://bibfra.me/vocab/lite/place': [
            {
              'http://bibfra.me/vocab/lite/name': ['manufacture place name'],
              'http://bibfra.me/vocab/lite/link': ['manufacture place link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['manufacture name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['manufacture simple date'],
          'http://bibfra.me/vocab/bflc/simplePlace': ['manufacture simple place'],
        },
      ],
      'http://bibfra.me/vocab/lite/map': [
        {
          'http://library.link/identifier/LCCN': {
            'http://bibfra.me/vocab/lite/name': ['lccn value'],
            'http://bibfra.me/vocab/marc/status': [
              {
                'http://bibfra.me/vocab/lite/label': ['lccn status label'],
                'http://bibfra.me/vocab/lite/link': ['lccn status link'],
              },
            ],
          },
        },
        {
          'http://library.link/identifier/ISBN': {
            'http://bibfra.me/vocab/lite/name': ['isbn value'],
            'http://bibfra.me/vocab/marc/qualifier': ['isbn qualifier'],
            'http://bibfra.me/vocab/marc/status': [
              {
                'http://bibfra.me/vocab/lite/label': ['isbn status label'],
                'http://bibfra.me/vocab/lite/link': ['isbn status link'],
              },
            ],
          },
        },
        {
          'http://bibfra.me/vocab/identifier/Ean': {
            'http://bibfra.me/vocab/marc/ean': ['ean value'],
            'http://bibfra.me/vocab/marc/qualifier': ['ean qualifier'],
          },
        },
        {
          'http://bibfra.me/vocab/lite/LocalId': {
            'http://bibfra.me/vocab/marc/localId': ['localId value'],
            'http://bibfra.me/vocab/marc/localIdAssigningSource': ['localId assigner'],
          },
        },
        {
          'http://library.link/identifier/UNKNOWN': {
            'http://bibfra.me/vocab/lite/name': ['otherId value'],
            'http://bibfra.me/vocab/marc/qualifier': ['otherId qualifier'],
          },
        },
      ],
      'http://bibfra.me/vocab/marc/accessLocation': [
        {
          'http://bibfra.me/vocab/lite/link': ['accessLocationValue'],
          'http://bibfra.me/vocab/lite/note': ['accessLocationNote'],
        },
      ],
      'http://bibfra.me/vocab/marc/media': [
        {
          'http://bibfra.me/vocab/marc/code': ['media code'],
          'http://bibfra.me/vocab/marc/term': ['unmediated'],
          'http://bibfra.me/vocab/lite/link': ['media link'],
        },
      ],
      'http://bibfra.me/vocab/marc/carrier': [
        {
          'http://bibfra.me/vocab/marc/code': ['carrier code'],
          'http://bibfra.me/vocab/marc/term': ['carrier 1'],
          'http://bibfra.me/vocab/lite/link': ['carrier link'],
        },
      ],
      'http://bibfra.me/vocab/marc/dimensions': ['20 cm'],
      'http://bibfra.me/vocab/marc/statementOfResponsibility': ['responsibility statement'],
      'http://bibfra.me/vocab/marc/edition': ['edition statement'],
      'http://bibfra.me/vocab/lite/copyrightDate': ['copyright date'],
      'http://bibfra.me/vocab/bflc/projectedProvisionDate': ['projected provision date'],
      'http://bibfra.me/vocab/marc/issuance': ['single unit'],
    },
  ],
};
