/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
// Translations from https://github.com/vikfm85/4Sig/blob/15fef672d5c77b50a3268bdc619f930e6e9042bf/index.html#L197

L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: 'Cancelar el dibujo',
                text: 'Cancelar'
            },
            undo: {
                title: 'Eliminar último punto dibujado',
                text: 'Eliminar último punto'
            },
            buttons: {
                polyline: 'Dibuja una linea',
                polygon: 'Dibuja un poligono',
                rectangle: 'Dibuja un rectangulo',
                circle: 'Dibuja un circulo',
                marker: 'Poner marcador'
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: 'Click y arrastre para dibujar circulo'
                }
            },
            marker: {
                tooltip: {
                    start: 'Cliquez sur la carte pour placer un marcador'
                }
            },
            polygon: {
                tooltip: {
                    start: 'Click para comenzar a dibujar la figura',
                    cont: 'Click para continuar dibujando la figura',
                    end: 'Click en el primer punto para cerrar la figura'
                }
            },
            polyline: {
                error: '<strong>Erreur:</strong> Les arrêtes de la forme ne doivent pas se croiser!',
                tooltip: {
                    start: 'Click para comenzar a dibujar la linea',
                    cont: 'Click para continuar dibujando la linea',
                    end: 'Click en el ultimo punto para terminar la linea'
                }
            },
            rectangle: {
                tooltip: {
                    start: 'Click y arrastre para dibujar un rectangulo'
                }
            },
            simpleshape: {
                tooltip: {
                    end: 'Relachez la souris pour finir de dessiner'
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: 'Guardar cambios',
                    text: 'Guardar'
                },
                cancel: {
                    title: 'Cancelar la edición y descartar todos los cambios',
                    text: 'Cancelar'
                }
            },
            buttons: {
                edit: 'Editar Layers',
                editDisabled: 'No hay Layers para editar',
                remove: 'Eliminar Layers',
                removeDisabled: 'No hay Layers para eliminar'
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: 'Arrastre para editar',
                    subtext: 'Click en cancelar para descartar los cambios'
                }
            },
            remove: {
                tooltip: {
                    text: 'Click para eliminar'
                }
            }
        }
    }
};
