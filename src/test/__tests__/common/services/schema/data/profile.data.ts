export const profileData = {
  id: 'testId_1',
  json: {
    Profile: {
      id: 'monographProfileId',
      date: '2017-05-26',
      title: 'BIBFRAME 2.0 Monograph',
      author: 'NDMSO',
      remark: '',
      description: 'Instance Monographs',
      resourceTemplates: [
        {
          id: 'instanceId',
          remark: '',
          resourceURI: 'instanceUri',
          resourceLabel: 'BIBFRAME Instance',
          propertyTemplates: [
            {
              type: 'literal',
              remark: '',
              mandatory: 'false',
              repeatable: 'true',
              propertyURI: 'propertyURI_1',
              propertyLabel: 'Literal label 1',
              valueConstraint: {
                defaults: [],
                useValuesFrom: [],
                valueDataType: {},
                valueTemplateRefs: [],
              },
              resourceTemplates: [],
            },
            {
              type: 'lookup',
              remark: '',
              mandatory: 'true',
              repeatable: 'true',
              propertyURI: '',
              propertyLabel: 'Simple lookup label 1',
              valueConstraint: {
                defaults: [
                  {
                    defaultURI: 'defaultURI_1',
                    defaultLiteral: 'single unit',
                  },
                ],
                editable: 'false',
                repeatable: 'true',
                useValuesFrom: ['useValuesFromURI_1'],
                valueDataType: {
                  dataTypeURI: 'dataTypeURI_1',
                },
                valueTemplateRefs: [],
              },
              resourceTemplates: [],
            },
            {
              type: 'resource',
              remark: '',
              mandatory: 'false',
              repeatable: 'true',
              propertyURI: 'propertyURI_2',
              propertyLabel: 'Group with dropdown',
              valueConstraint: {
                defaults: [],
                useValuesFrom: [],
                valueDataType: {},
                valueTemplateRefs: ['dropdownOption_1', 'dropdownOption_2'],
              },
              resourceTemplates: [],
            },
            {
              type: 'resource',
              remark: '',
              mandatory: 'false',
              repeatable: 'true',
              propertyURI: 'complexGroupPropertyURI_1',
              propertyLabel: 'Complex Group',
              valueConstraint: {
                defaults: [],
                useValuesFrom: [],
                valueDataType: {},
                valueTemplateRefs: ['complexGroup_1'],
              },
              resourceTemplates: [],
            },
          ],
        },
      ],
    },
  },
  name: 'BIBFRAME 2.0 Monograph',
  created: 'created_date',
  metadata: {
    createDate: 'created_date',
    updateDate: 'update_date',
    updateUser: null,
  },
  modified: 'modified_date',
  configType: 'profile',
};
