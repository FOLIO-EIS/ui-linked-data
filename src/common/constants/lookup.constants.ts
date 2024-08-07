export const BLANK_NODE_TRAIT = '_:';
export const AUTHORITATIVE_LABEL_URI = 'http://www.loc.gov/mads/rdf/v1#authoritativeLabel';
export const SCHEMA_LABEL_URI = 'http://www.w3.org/2000/01/rdf-schema#label';
export const ID_KEY = '@id';
export const VALUE_KEY = '@value';
export const CODE_SEPARATOR = '/';

// TODO: Make correct types
export const lookupConfig: Record<string, any> = {
  'http://id.loc.gov/authorities/childrensSubjects': {
    name: 'childrensSubjects',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/authorities/demographicTerms': {
    name: 'demographicTerms',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/authorities/genreForms': {
    name: 'genreForms',
    type: 'complex',
    processor: 'lcAuthorities',
    modes: [
      {
        'LCGFT All': {
          url: 'https://id.loc.gov/authorities/genreForms/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
      },
    ],
  },

  'http://id.loc.gov/authorities/geographics': {
    name: 'geographics',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/authorities/names': {
    name: 'names',
    type: 'complex',
    processor: 'lcAuthorities',
    modes: [
      {
        'NAF All': {
          url: 'https://id.loc.gov/authorities/names/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
        'NAF Personal Names': {
          url: 'https://id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=PersonalName&count=25',
        },
        'NAF Corporate Name': {
          url: 'https://id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=CorporateName&count=25',
        },
        'NAF Name/Title': {
          url: 'https://id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=NameTitle&count=25',
        },
        'NAF Title': {
          url: 'https://id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=Title&count=25',
        },
        'NAF Geographic': {
          url: 'https://id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=Geographic&count=25',
        },
        'NAF Conference Name': {
          url: 'https://id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=ConferenceName&count=25',
        },
      },
    ],
  },

  'http://preprod.id.loc.gov/authorities/names': {
    name: 'names',
    type: 'complex',
    processor: 'lcAuthorities',
    modes: [
      {
        'NAF All': {
          url: 'http://preprod.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
        'NAF Personal Names': {
          url: 'http://preprod.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=PersonalName&count=25',
        },
        'NAF Corporate Name': {
          url: 'http://preprod.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=CorporateName&count=25',
        },
        'NAF Name/Title': {
          url: 'http://preprod.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=NameTitle&count=25',
        },
        'NAF Title': {
          url: 'http://preprod.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=Title&count=25',
        },
        'NAF Geographic': {
          url: 'http://preprod.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=Geographic&count=25',
        },
        'NAF Conference Name': {
          url: 'http://preprod.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&rdftype=ConferenceName&count=25',
        },
      },
    ],
  },
  'http://id.loc.gov/authorities/performanceMediums': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        All: {
          url: 'http://id.loc.gov/authorities/performanceMediums/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
      },
    ],
  },
  'http://id.loc.gov/authorities/subjects': {
    name: 'subjects',
    type: 'complex',
    processor: 'lcAuthorities',

    modes: [
      {
        'LCSH All': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
        'LCSH Topics': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=Topic&count=25',
        },
        'LCSH Geographic': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=Geographic&count=25',
        },
        'LCSH Name': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=Name&count=25',
        },
        'LCSH FamilyName': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=FamilyName&count=25',
        },
        'LCSH CorporateName': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=CorporateName&count=25',
        },
        'LCSH GenreForm': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=GenreForm&count=25',
        },
        'LCSH Simple Type': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=SimpleType&count=25',
        },
        'LCSH Complex Subject': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=ComplexSubject&count=25',
        },
        'LCSH Temporal': {
          url: 'https://id.loc.gov/authorities/subjects/suggest2/?q=<QUERY>&rdftype=Temporal&count=25',
        },
      },
    ],
  },
  HierarchicalGeographic: {
    name: 'names',
    type: 'complex',
    processor: 'lcAuthorities',

    modes: [
      {
        All: {
          url: 'https://preprod-8288.id.loc.gov/authorities/names/suggest2/?q=<QUERY>&count=25&rdftype=HierarchicalGeographic',
          all: true,
        },
      },
    ],
  },

  'http://id.loc.gov/entities/providers': {
    name: 'providers',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/entities/relationships': {
    name: 'relationships',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        All: {
          url: 'https://id.loc.gov/entities/relationships/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
      },
    ],
  },
  'http://id.loc.gov/vocabulary/geographicAreas': {
    name: 'geographicAreas',
    processor: 'lcAuthorities',
    type: 'complex',
    minCharBeforeSearch: 2,
    modes: [
      {
        All: {
          url: 'https://id.loc.gov/vocabulary/geographicAreas/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
      },
    ],
  },

  'https://preprod-8230.id.loc.gov/resources/works': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Works - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/works/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },
        'Works - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/works/suggest2/?q=<QUERY>&count=25',
        },

        'Hubs - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://preprod-8295.id.loc.gov/resources/works': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Works - Keyword': {
          url: 'https://preprod-8295.id.loc.gov/resources/works/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },
        'Works - Left Anchored': {
          url: 'https://preprod-8295.id.loc.gov/resources/works/suggest2/?q=<QUERY>&count=25',
        },

        'Hubs - Keyword': {
          url: 'https://preprod-8295.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8295.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://preprod-8210.id.loc.gov/resources/works/': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Works - Keyword': {
          url: 'https://preprod-8295.id.loc.gov/resources/works/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },
        'Works - Left Anchored': {
          url: 'https://preprod-8295.id.loc.gov/resources/works/suggest2/?q=<QUERY>&count=25',
        },

        'Hubs - Keyword': {
          url: 'https://preprod-8295.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8295.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://preprod-8295.id.loc.gov/resources/works/': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Works - Keyword': {
          url: 'https://preprod-8295.id.loc.gov/resources/works/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },
        'Works - Left Anchored': {
          url: 'https://preprod-8295.id.loc.gov/resources/works/suggest2/?q=<QUERY>&count=25',
        },

        'Hubs - Keyword': {
          url: 'https://preprod-8295.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8295.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://preprod-8080.id.loc.gov/resources/works': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Works - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/works/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },
        'Works - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/works/suggest2/?q=<QUERY>&count=25',
        },

        'Hubs - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://preprod-8080.id.loc.gov/resources/works/': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Works - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/works/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },
        'Works - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/works/suggest2/?q=<QUERY>&count=25',
        },

        'Hubs - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://id.loc.gov/resources/hubs': {
    name: 'Works',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Hubs - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://preprod-8080.id.loc.gov/resources/hubs': {
    name: 'Hubs',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        'Hubs - Keyword': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=?<QUERY>&count=25',
          all: true,
        },

        'Hubs - Left Anchored': {
          url: 'https://preprod-8080.id.loc.gov/resources/hubs/suggest2/?q=<QUERY>&count=25',
        },
      },
    ],
  },

  'https://preprod-8080.id.loc.gov/resources/instances': {
    name: 'Instances',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        All: {
          url: 'https://preprod-8080.id.loc.gov/resources/instances/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
      },
    ],
  },

  'https://preprod-8230.id.loc.gov/resources/instances': {
    name: 'Instances',
    processor: 'lcAuthorities',
    type: 'complex',
    modes: [
      {
        All: {
          url: 'https://preprod-8080.id.loc.gov/resources/instances/suggest2/?q=<QUERY>&count=25',
          all: true,
        },
      },
    ],
  },

  'http://id.loc.gov/entities/roles': {
    name: 'roles',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/resources/works': {
    name: 'works',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/rwo/agents': {
    name: 'agents',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/carriers': {
    name: 'carriers',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/classSchemes': {
    name: 'classSchemes',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/contentTypes': {
    name: 'contentTypes',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/countries': {
    name: 'countries',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/descriptionConventions': {
    name: 'descriptionConventions',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/frequencies': {
    name: 'frequencies',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/genreFormSchemes': {
    name: 'genreFormSchemes',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/graphicMaterials': {
    name: 'graphicMaterials',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/issuance': {
    name: 'issuance',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/languages': {
    name: 'languages',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/marcauthen': {
    name: 'marcauthen',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/marcgt': {
    name: 'marcgt',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/maspect': {
    name: 'maspect',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/maudience': {
    name: 'maudience',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mbroadstd': {
    name: 'mbroadstd',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mcapturestorage': {
    name: 'mcapturestorage',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mcolor': {
    name: 'mcolor',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mediaTypes': {
    name: 'mediaTypes',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/menclvl': {
    name: 'menclvl',
    type: 'simple',
    modes: [],
  },

  'http://id.loc.gov/vocabulary/mfiletype': {
    name: 'mfiletype',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mgeneration': {
    name: 'mgeneration',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mgroove': {
    name: 'mgroove',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/millus': {
    name: 'millus',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mlayout': {
    name: 'mlayout',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mmaterial': {
    name: 'mmaterial',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mmusicformat': {
    name: 'mmusicformat',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mmusnotation': {
    name: 'mmusnotation',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mplayback': {
    name: 'mplayback',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mpolarity': {
    name: 'mpolarity',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mpresformat': {
    name: 'mpresformat',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mproduction': {
    name: 'mproduction',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mrecmedium': {
    name: 'mrecmedium',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mrectype': {
    name: 'mrectype',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mregencoding': {
    name: 'mregencoding',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mrelief': {
    name: 'mrelief',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mscale': {
    name: 'mscale',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mscript': {
    name: 'mscript',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/msoundcontent': {
    name: 'msoundcontent',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mspecplayback': {
    name: 'mspecplayback',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mstatus': {
    name: 'mstatus',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/msupplcont': {
    name: 'msupplcont',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/mtechnique': {
    name: 'mtechnique',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/organizations': {
    name: 'organizations',
    type: 'complex',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/relators': {
    name: 'relators',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/resourceComponents': {
    name: 'resourceComponents',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/resourceTypes': {
    name: 'resourceTypes',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/vocabulary/subjectSchemes': {
    name: 'subjectSchemes',
    type: 'simple',
    modes: [],
  },
  'http://mlvlp04.loc.gov:3000/verso/api/configs?filter[where][configType]=noteTypes&filter[fields][json]=true': {
    name: 'true',
    type: 'simple',
    modes: [],
  },
  'http://mlvlp04.loc.gov:8080/authorities/classification/G': {
    name: 'G',
    type: 'simple',
    modes: [],
  },
  'http://mlvlp04.loc.gov:8230/resources/instances': {
    name: 'instances',
    type: 'simple',
    modes: [],
  },
  'http://mlvlp04.loc.gov:8230/resources/works': {
    name: 'works',
    type: 'simple',
    modes: [],
  },
  'http://mlvlp06.loc.gov:8288/resources/hubs': {
    name: 'hubs',
    type: 'simple',
    modes: [],
  },
  'http://mlvlp06.loc.gov:8288/resources/works': {
    name: 'works',
    type: 'simple',
    modes: [],
  },
  'http://rdaregistry.info/termList/RDAContentType/': {
    name: 'RDAContentType/',
    type: 'simple',
    modes: [],
  },
  'http://www.rdaregistry.info/termList/RDAColourContent/': {
    name: 'RDAColourContent/',
    type: 'simple',
    modes: [],
  },
  'https://lookup.ld4l.org/authorities/search/linked_data/dbpedia_ld4l_cache': {
    name: 'dbpedia_ld4l_cache',
    type: 'simple',
    modes: [],
  },
  'https://lookup.ld4l.org/authorities/search/linked_data/getty_aat_ld4l_cache': {
    name: 'getty_aat_ld4l_cache',
    type: 'simple',
    modes: [],
  },
  'http://id.loc.gov/ontologies/bibframe': {
    name: 'bibframe',
    type: 'simple',
    modes: [],
  },

  'https://www.wikidata.org/w/api.php': {
    name: 'wikidata',
    type: 'complex',
    processor: 'wikidataAPI',

    modes: [
      {
        Wikidata: {
          url: 'https://www.wikidata.org/w/api.php?action=wbsearchentities&search=<QUERY>&format=json&errorformat=plaintext&language=en&uselang=en&type=item&origin=*',
          all: true,
        },
      },
    ],
  },
};
