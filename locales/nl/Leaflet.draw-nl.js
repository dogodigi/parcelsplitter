/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
// Translations from https://github.com/makinacorpus/django-leaflet/blob/295c408a4ad544d045816998e04bdff4c1a000b9/leaflet/locale/de/LC_MESSAGES/django.po

L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: 'draw.toolbar.actions.title',
                text: 'draw.toolbar.actions.text'
            },
            undo: {
                title: 'draw.toolbar.undo.title',
                text: 'draw.toolbar.undo.text'
            },
            buttons: {
                polyline: 'draw.toolbar.buttons.polyline',
                polygon: 'draw.toolbar.buttons.polygon',
                rectangle: 'draw.toolbar.buttons.rectangle',
                circle: 'draw.toolbar.buttons.circle',
                marker: 'draw.toolbar.buttons.marker'
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: 'handlers.circle.tooltip.start'
                }
            },
            marker: {
                tooltip: {
                    start: 'handlers.marker.tooltip.start'
                }
            },
            polygon: {
                tooltip: {
                    start: 'handlers.polygon.tooltip.start',
                    cont: 'handlers.polygon.tooltip.cont',
                    end: 'handlers.polygon.tooltip.end'
                }
            },
            polyline: {
                error: 'handlers.polyline.error',
                tooltip: {
                    start: 'handlers.polyline.tooltip.start',
                    cont: 'handlers.polyline.tooltip.cont',
                    end: 'handlers.polyline.tooltip.end'
                }
            },
            rectangle: {
                tooltip: {
                    start: 'handlers.rectangle.tooltip.start'
                }
            },
            simpleshape: {
                tooltip: {
                    end: 'handlers.simpleshape.tooltip.end'
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: 'edit.toolbar.actions.save.title',
                    text: 'edit.toolbar.actions.save.text'
                },
                cancel: {
                    title: 'edit.toolbar.actions.cancel.title',
                    text: 'edit.toolbar.actions.cancel.text'
                }
            },
            buttons: {
                edit: 'edit.toolbar.buttons.edit',
                editDisabled: 'edit.toolbar.buttons.editDisabled',
                remove: 'edit.toolbar.buttons.remove',
                removeDisabled: 'edit.toolbar.buttons.removeDisabled'
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: 'edit.handlers.edit.tooltip.text',
                    subtext: 'edit.handlers.edit.tooltip.subtext'
                }
            },
            remove: {
                tooltip: {
                    text: 'edit.handlers.remove.tooltip'
                }
            }
        }
    }
};
