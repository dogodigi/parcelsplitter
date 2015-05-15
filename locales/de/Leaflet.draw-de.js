/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
/* global L */

// Translations from https://github.com/makinacorpus/django-leaflet/blob/295c408a4ad544d045816998e04bdff4c1a000b9/leaflet/locale/de/LC_MESSAGES/django.po

L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: 'Abbrechen Zeichnung',
                text: 'Abbrechen'
            },
            undo: {
                title: 'Delete last point drawn',
                text: 'Delete last point'
            },
            buttons: {
                polyline: 'Zeichnen Sie eine Polylinie',
                polygon: 'Zeichnen Sie ein Polygon',
                rectangle: 'Zeichnen Sie ein Rechteck',
                circle: 'Zeichnen Sie einen Kreis',
                marker: 'Zeichnen Sie einen Marker'
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: 'Klicken und ziehen Sie einen Kreis zu zeichnen.'
                }
            },
            marker: {
                tooltip: {
                    start: 'Karte anklicken Marker zu platzieren.'
                }
            },
            polygon: {
                tooltip: {
                    start: 'Klicken, um Zeichnungsform starten.',
                    cont: 'Klicken, um weiter zeichnen Form.',
                    end: 'Klicken erste Punkt, um diese Form zu schließen.'
                }
            },
            polyline: {
                error: '<strong>Error:</strong> shape edges cannot cross!',
                tooltip: {
                    start: 'Klicken Sie auf Zeichnung Zeile zu beginnen.',
                    cont: 'Klicken Sie auf Zeichnung Linie fortzusetzen.',
                    end: 'Klicken letzten Punkt zu Linie zu beenden.'
                }
            },
            rectangle: {
                tooltip: {
                    start: 'Klicken und ziehen, um Rechteck zu zeichnen.'
                }
            },
            simpleshape: {
                tooltip: {
                    end: 'Lassen Sie die Maustaste, um die Zeichnung abzuschließen.'
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: 'Speichern Änderungen.',
                    text: 'Speichern'
                },
                cancel: {
                    title: 'Abbrechen-Bearbeitung, werden alle Änderungen verworfen.',
                    text: 'Abbrechen'
                }
            },
            buttons: {
                edit: 'Schichten bearbeiten',
                editDisabled: 'No layers to edit.',
                remove: 'Schichten löschen.',
                removeDisabled: 'No layers to delete.'
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: 'Drag Griffe oder Marker-Funktion zu bearbeiten.',
                    subtext: 'Klicken Sie auf Abbrechen, um Änderungen rückgängig zu machen.'
                }
            },
            remove: {
                tooltip: {
                    text: 'Klicken Sie auf eine Funktion zum Entfernen von'
                }
            }
        }
    }
};
