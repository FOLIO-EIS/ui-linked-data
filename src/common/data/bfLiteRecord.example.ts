// TODO: remove mocked data
export const BFLITE_RECORD_EXAMPLE = {
  resource: {
    'http://bibfra.me/vocab/lite/Instance': {
      // Work component[]
      'http://bibfra.me/vocab/lite/instantiates': [
        {
          id: 'sampleId',
          'http://bibfra.me/vocab/lite/language': ['sampleLanguage'],
          'http://bibfra.me/vocab/lite/classification': [
            {
              id: 'sampleId',
              'http://bibfra.me/vocab/marc/code': ['sampleCode'],
              'http://bibfra.me/vocab/marc/source': ['ddc'],
            },
          ],
          'http://bibfra.me/vocab/lite/creator': [
            {
              'http://bibfra.me/vocab/lite/Person': {
                id: 'sampleId',
                'http://bibfra.me/vocab/lite/name': ['sampleName'],
              },
            },
          ],
          'http://bibfra.me/vocab/lite/contributor': [
            {
              'http://bibfra.me/vocab/lite/Organization': {
                id: 'sampleId',
                'http://bibfra.me/vocab/lite/name': ['sampleName'],
              },
            },
          ],
          'http://bibfra.me/vocab/marc/tableOfContents': ['sampleTableOfContents'],
          'http://bibfra.me/vocab/marc/summary': ['sampleSummary'],
          'http://bibfra.me/vocab/marc/content': [
            {
              id: 'sampleId',
              'http://bibfra.me/vocab/marc/code': ['sampleCode'],
              'http://bibfra.me/vocab/marc/term': ['sampleTerm'],
              'http://bibfra.me/vocab/lite/link': ['sampleLink'],
            },
          ],
        },
      ],
      'http://bibfra.me/vocab/marc/title': [
        {
          'http://bibfra.me/vocab/marc/Title': {
            'http://bibfra.me/vocab/marc/partName': ['Instance: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Instance: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Instance: mainTitle'],
            'http://bibfra.me/vocab/bflc/nonSortNum': ['Instance: nonSortNum'],
            'http://bibfra.me/vocab/marc/subtitle': ['Instance: subtitle'],
          },
        },
        {
          'http://bibfra.me/vocab/marc/ParallelTitle': {
            'http://bibfra.me/vocab/marc/partName': ['Parallel: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Parallel: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Parallel: mainTitle'],
            'http://bibfra.me/vocab/lite/note': ['Parallel: noteLabel'],
            'http://bibfra.me/vocab/lite/date': ['Parallel: date'],
            'http://bibfra.me/vocab/marc/subtitle': ['Parallel: subtitle'],
          },
        },
        {
          'http://bibfra.me/vocab/marc/VariantTitle': {
            'http://bibfra.me/vocab/marc/partName': ['Variant: partName'],
            'http://bibfra.me/vocab/marc/partNumber': ['Variant: partNumber'],
            'http://bibfra.me/vocab/marc/mainTitle': ['Variant: mainTitle'],
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
          'http://bibfra.me/vocab/lite/providerPlace': [
            {
              'http://bibfra.me/vocab/lite/name': ['production providerPlace name'],
              'http://bibfra.me/vocab/lite/link': ['production providerPlace link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['production name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['production simple date'],
          'http://bibfra.me/vocab/lite/place': ['production simple place'],
        },
      ],
      'http://bibfra.me/vocab/marc/publication': [
        {
          'http://bibfra.me/vocab/lite/date': ['publication date'],
          'http://bibfra.me/vocab/lite/providerPlace': [
            {
              'http://bibfra.me/vocab/lite/name': ['publication providerPlace name'],
              'http://bibfra.me/vocab/lite/link': ['publication providerPlace link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['publication name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['publication simple date'],
          'http://bibfra.me/vocab/lite/place': ['publication simple place'],
        },
      ],
      'http://bibfra.me/vocab/marc/distribution': [
        {
          'http://bibfra.me/vocab/lite/date': ['distribution date'],
          'http://bibfra.me/vocab/lite/providerPlace': [
            {
              'http://bibfra.me/vocab/lite/name': ['distribution providerPlace name'],
              'http://bibfra.me/vocab/lite/link': ['distribution providerPlace link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['distribution name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['distribution simple date'],
          'http://bibfra.me/vocab/lite/place': ['distribution simple place'],
        },
      ],
      'http://bibfra.me/vocab/marc/manufacture': [
        {
          'http://bibfra.me/vocab/lite/date': ['manufacture date'],
          'http://bibfra.me/vocab/lite/providerPlace': [
            {
              'http://bibfra.me/vocab/lite/name': ['manufacture providerPlace name'],
              'http://bibfra.me/vocab/lite/link': ['manufacture providerPlace link'],
            },
          ],
          'http://bibfra.me/vocab/lite/name': ['manufacture name'],
          'http://bibfra.me/vocab/lite/simpleDate': ['manufacture simple date'],
          'http://bibfra.me/vocab/lite/place': ['manufacture simple place'],
        },
      ],
      'http://library.link/vocab/map': [
        {
          'http://library.link/identifier/LCCN': {
            'http://bibfra.me/vocab/lite/name': ['lccn value'],
            'http://bibfra.me/vocab/marc/status': [
              {
                'http://bibfra.me/vocab/lite/label': ['lccn status value'],
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
                'http://bibfra.me/vocab/lite/label': ['isbn status value'],
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
          'http://bibfra.me/vocab/lite/link': ['accessLocation value'],
          'http://bibfra.me/vocab/lite/note': ['accessLocation note'],
        },
      ],
      'http://bibfra.me/vocab/marc/media': [
        {
          'http://bibfra.me/vocab/marc/code': ['media code'],
          'http://bibfra.me/vocab/marc/term': ['media term'],
          'http://bibfra.me/vocab/lite/link': ['media link'],
        },
      ],
      'http://bibfra.me/vocab/marc/carrier': [
        {
          'http://bibfra.me/vocab/marc/code': ['carrier code'],
          'http://bibfra.me/vocab/marc/term': ['carrier term'],
          'http://bibfra.me/vocab/lite/link': ['carrier link'],
        },
      ],
      'http://bibfra.me/vocab/marc/copyright': [
        {
          'http://bibfra.me/vocab/lite/date': ['copyright date value'],
        },
      ],
      'http://bibfra.me/vocab/marc/dimensions': ['20 cm'],
      'http://bibfra.me/vocab/marc/statementOfResponsibility': ['responsibility statement'],
      'http://bibfra.me/vocab/marc/edition': ['edition statement'],
      'http://bibfra.me/vocab/bflc/projectedProvisionDate': ['projected provision date'],
      'http://bibfra.me/vocab/marc/issuance': ['single unit'],
      _notes: [
        {
          value: ['Bibliography note'],
          type: ['http://bibfra.me/vocab/marc/bibliographyNote'],
        },
        {
          value: ['Type of Report note'],
          type: ['http://bibfra.me/vocab/marc/typeOfReport'],
        },
        {
          value: ['Governing Access Note'],
          type: ['http://bibfra.me/vocab/marc/governingAccessNote'],
        },
      ],
    },
  },
};
