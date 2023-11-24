// TODO: potentially refactor to be 'The folio way'
import { LOCALES } from './locales';

const BASE_LOCALE = {
  'marva.welcome': 'Welcome to the new Marva Editor.',
  'marva.start-editing': 'Start editing.',
  'marva.dashboard': 'My dashboard',
  'marva.search': 'Search resources',
  'marva.create': 'Create resource',
  'marva.edit': 'Edit resource',
  'marva.main': 'Main',
  'marva.save-rd': 'Save resource',
  'marva.close-rd': 'Close resource',
  'marva.delete-rd': 'Delete resource',
  'marva.no-available-rds': 'No available resource descriptions.',
  'marva.resources': 'Resources:',
  'marva.search-by': 'Search By',
  'marva.search-no-rds-match': 'No resource descriptions match your query',
  'marva.search-by-sth': 'Search by{by}...',
  'marva.error-fetching': 'Error fetching data',
  'marva.error-loading-resource': 'Error loading resource',
  'marva.actions': 'Actions',
  'marva.isbn-lccn': 'ISBN/LCCN',
  'marva.isbn': 'ISBN',
  'marva.lccn': 'LCCN',
  'marva.title': 'TITLE', // TODO: it can be "uppercased" programmatically in SearchTypeSelect.tsx, need to be checked
  'marva.contributor': 'CONTRIBUTOR', // TODO: it can be "uppercased" programmatically in SearchTypeSelect.tsx, need to be checked
  'marva.author': 'Author',
  'marva.pub-date': 'Publication Date',
  'marva.edition': 'Edition',
  'marva.select-for-editing': 'Select a resource description for editing',
  'marva.start-from-scratch': 'Start from scratch',
  'marva.select-or-start-from-scratch': '{select} or {startFromScratch}',
  'marva.back-to-top': 'Back to top',
  'marva.properties': 'Properties',
  'marva.preview': 'Preview',
  'marva.confirm-close-rd': 'Do you really want to close the resource description? All unsaved changes will be lost.',
  'marva.confirm-delete-rd': 'Do you really want to delete the resource description?',
  'marva.save-close': 'Save and close',
  'marva.close': 'Close',
  'marva.delete': 'Delete',
  'marva.return': 'Return',
  'marva.rd-save-success': 'Resource description saved successfully',
  'marva.cant-save-rd': 'Cannot save the resource description',
  'marva.cant-delete-rd': 'Cannot delete the resource description',
  'marva.rd-deleted': 'Resource description deleted',
  'marva.app-fail': 'An error occurred. Please, reload the page.',
  'marva.search-select-index': 'Please select an index',
  'marva.search-invalid-lccn': 'LCCN is invalid, please correct',
  'marva.advanced-search': 'Advanced search',
  'marva.cancel': 'Cancel',
  'marva.resource-id': 'Resource ID',
  'marva.loading': 'Loading...',
  'marva.pagination-count': '{startCount} - {endCount} of {totalResultsCount}',
  'marva.yes': 'Yes',
  'marva.no': 'No',
};

export const i18nMessages = {
  [LOCALES.ENGLISH]: BASE_LOCALE,
  [LOCALES.GERMAN]: {
    ...BASE_LOCALE,
    'marva.welcome': 'Willkommen beim neuen Marva-Editor.',
    'marva.start-editing': 'Bearbeitung starten.',
    'marva.dashboard': 'Mein Armaturenbrett',
    'marva.search': 'Ressourcen durchsuchen',
    'marva.create': 'Ressource erstellen',
    'marva.edit': 'Ressource bearbeiten',
    'marva.main': 'Haupt',
    'marva.save-rd': 'Ressource sparen',
    'marva.close-rd': 'Ressource schließen',
    'marva.delete-rd': 'Ressource löschen',
    'marva.no-available-rds': 'Keine verfügbaren Ressourcenbeschreibungen.',
    'marva.resources': 'Ressourcen:',
    'marva.search-by': 'Suche nach',
    'marva.search-no-rds-match': 'Keine Ressourcenbeschreibungen stimmen mit Ihrer Suchanfrage überein',
    'marva.search-by-sth': 'Suche nach{by}...',
    'marva.error-fetching': 'Fehler beim Abrufen der Daten',
    'marva.error-loading-resource': 'Fehler beim Laden der Ressource',
    'marva.actions': 'Aktionen',
    'marva.isbn-lccn': 'ISBN/LCCN',
    'marva.isbn': 'ISBN',
    'marva.lccn': 'LCCN',
    'marva.title': 'TITEL', // TODO: it can be "uppercased" programmatically in SearchTypeSelect.tsx, need to be checked
    'marva.contributor': 'MITWIRKENDER', // TODO: it can be "uppercased" programmatically in SearchTypeSelect.tsx, need to be checked
    'marva.author': 'Autor',
    'marva.pub-date': 'Veröffentlichungsdatum',
    'marva.edition': 'Edition',
    'marva.select-for-editing': 'Wählen Sie eine Ressourcenbeschreibung zur Bearbeitung aus',
    'marva.start-from-scratch': 'Von vorne beginnen',
    'marva.select-or-start-from-scratch': '{select} oder {startFromScratch}',
    'marva.back-to-top': 'Zurück nach oben',
    'marva.properties': 'Eigenschaften',
    'marva.preview': 'Vorschau',
    'marva.confirm-close-rd':
      'Möchten Sie die Ressourcenbeschreibung wirklich schließen? Alle nicht gespeicherten Änderungen gehen verloren.',
    'marva.confirm-delete-rd': 'Möchten Sie die Ressourcenbeschreibung wirklich löschen?',
    'marva.save-close': 'Speichern und schließen',
    'marva.close': 'Schließen',
    'marva.delete': 'Löschen',
    'marva.return': 'Zurück',
    'marva.rd-save-success': 'Ressourcenbeschreibung erfolgreich gespeichert',
    'marva.cant-save-rd': 'Die Ressourcenbeschreibung kann nicht gespeichert werden',
    'marva.cant-delete-rd': 'Die Ressourcenbeschreibung kann nicht gelöscht werden',
    'marva.rd-deleted': 'Ressourcenbeschreibung gelöscht',
    'marva.app-fail': 'Es ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu.',
    'marva.search-select-index': 'Bitte wählen Sie ein Index',
    'marva.resource-id': 'Ressource ID',
    'marva.loading': 'Wird geladen...',
    'marva.pagination-count': '{startCount} - {endCount} von {totalResultsCount}',
    'marva.yes': 'Ja',
    'marva.no': 'Nein',
  },
  [LOCALES.JAPANESE]: {
    ...BASE_LOCALE,
  },
  [LOCALES.FRENCH]: {
    ...BASE_LOCALE,
  },
};
