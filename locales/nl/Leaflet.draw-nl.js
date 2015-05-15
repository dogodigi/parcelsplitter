/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
/* global L */

// Translations from https://github.com/makinacorpus/django-leaflet/blob/295c408a4ad544d045816998e04bdff4c1a000b9/leaflet/locale/de/LC_MESSAGES/django.po

L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: 'Deactiveer de tekenfunctie',
                text: 'Annuleren'
            },
            undo: {
                title: 'Verwijder het laatst getekende punt',
                text: 'Laatste punt verwijderen'
            },
            buttons: {
                polyline: 'Lijn tekenen',
                polygon: 'Vlak tekenen',
                rectangle: 'Rechthoek tekenen',
                circle: 'Cirkel tekenen',
                marker: 'Symbool plaatsen'
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: 'Klik en sleep om een cirkel te tekenen'
                }
            },
            marker: {
                tooltip: {
                    start: 'Klik om een symbool te plaatsen'
                }
            },
            polygon: {
                tooltip: {
                    start: 'Plaats het eerste punt',
                    cont: 'Plaats volgende punt',
                    end: 'Plaats het volgende punt of dubbelklik om het vlak te sluiten'
                }
            },
            polyline: {
                error: 'Een vlak mag zichzelf niet kruisen',
                tooltip: {
                    start: 'Plaats het eerste punt',
                    cont: 'Plaats volgende punt',
                    end: 'Plaats het volgende punt of dubbelklik om de lijn te eindigen'
                }
            },
            rectangle: {
                tooltip: {
                    start: 'Klik en sleep om een rechthoek te tekenen'
                }
            },
            simpleshape: {
                tooltip: {
                    end: 'Sleep en laat los om te plaatsen'
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: 'Ok',
                    text: 'Ok'
                },
                cancel: {
                    title: 'Annuleren',
                    text: 'Annuleren'
                }
            },
            buttons: {
                edit: 'Bewerk een objecten',
                editDisabled: 'Er zijn geen objecten om te bewerken',
                remove: 'Verwijder een object',
                removeDisabled: 'Er zijn geen objecten om te verwijderen'
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: 'Verplaats punten of symbolen om te bewerken',
                    subtext: 'Klik annuleren om ongedaan te maken'
                }
            },
            remove: {
                tooltip: {
                    text: 'Klik een object om het te verwijderen'
                }
            }
        }
    }
};
