import React from "react";

export const SpanishText = {
  // Root
  noRowsLabel: 'No rows',
  noResultsOverlayLabel: 'No results found.',

  // Density selector toolbar button text
  toolbarDensity: 'Densidad',
  toolbarDensityLabel: 'Densidad',
  toolbarDensityCompact: 'Compacto',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comfortable',

  // Columns selector toolbar button text
  toolbarColumns: 'Columnas',
  toolbarColumnsLabel: 'Seleccionar columnas',

  // Filters toolbar button text
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Mostrar filtros',
  toolbarFiltersTooltipHide: 'Esconder filtros',
  toolbarFiltersTooltipShow: 'Mostrar filtros',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Buscar...',
  toolbarQuickFilterLabel: 'Buscar',
  toolbarQuickFilterDeleteIconLabel: 'Limpiar',

  // Export selector toolbar button text
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Descargar como CSV',
  toolbarExportPrint: 'Imprimir',
  toolbarExportExcel: 'Descargar como xls',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Encontrar columna',
  columnsPanelTextFieldPlaceholder: 'Titulo de columna',
  columnsPanelDragIconLabel: 'Reorganizar columnas',
  columnsPanelShowAllButton: 'Mostrar todo',
  columnsPanelHideAllButton: 'Esconder todo',

  // Filter panel text
  filterPanelAddFilter: 'Añadir filtro',
  filterPanelDeleteIconLabel: 'Borrar',
  filterPanelLogicOperator: 'Operador logico',
  filterPanelOperator: 'Operador',
  filterPanelOperatorAnd: 'Y',
  filterPanelOperatorOr: 'O',
  filterPanelColumns: 'Columnas',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Valor del filtro',

  // Filter operators text
  filterOperatorContains: 'contiene',
  filterOperatorEquals: 'igual a',
  filterOperatorStartsWith: 'empieza con',
  filterOperatorEndsWith: 'termina con',
  filterOperatorIs: 'es',
  filterOperatorNot: 'no es',
  filterOperatorAfter: 'esta despues',
  filterOperatorOnOrAfter: 'esta en o despues',
  filterOperatorBefore: 'esta antes',
  filterOperatorOnOrBefore: 'esta en o antes',
  filterOperatorIsEmpty: 'esta vacio',
  filterOperatorIsNotEmpty: 'no esta vacio',
  filterOperatorIsAnyOf: 'es cualquiera de',

  // Filter values text
  filterValueAny: 'cualquiera',
  filterValueTrue: 'verdadero',
  filterValueFalse: 'falso',

  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuShowColumns: 'Mostrar columnas',
  columnMenuManageColumns: 'Administrar columnas',
  columnMenuFilter: 'Filtro',
  columnMenuHideColumn: 'Ocultar columna',
  columnMenuUnsort: 'Deshacer',
  columnMenuSortAsc: 'Orden ascendiente',
  columnMenuSortDesc: 'Orden descenciente',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,
  columnHeaderFiltersLabel: 'Mostrar filtros',
  columnHeaderSortIconLabel: 'Ordenar',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} filas seleccionadas`
      : `${count.toLocaleString()} fila seleccionada`,

  // Total row amount footer text
  footerTotalRows: 'Filas Totales:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Casilla de seleccion',
  checkboxSelectionSelectAllRows: 'Seleccionar todas las filas',
  checkboxSelectionUnselectAllRows: 'Deseleccionar filas',
  checkboxSelectionSelectRow: 'Seleccionar fila',
  checkboxSelectionUnselectRow: 'Deseleccionar fila',

  // Boolean cell text
  booleanCellTrueLabel: 'si',
  booleanCellFalseLabel: 'no',

  // Actions cell more text
  actionsCellMore: 'mas',

  // Column pinning text
  pinToLeft: 'Fijar a la izquierda',
  pinToRight: 'Fijar a la derecha',
  unpin: 'desfijar',

  // Tree Data
  treeDataGroupingHeaderName: 'Agrupar',
  treeDataExpand: 'mostrar hijos',
  treeDataCollapse: 'esconder hijos',

  // Grouping columns
  groupingColumnHeaderName: 'Agrupar',
  groupColumn: (name) => `Agrupar por ${name}`,
  unGroupColumn: (name) => `Desagrupar por ${name}`,

  // Master/detail
  detailPanelToggle: 'Abrir panel de detalle',
  expandDetailPanel: 'Expandir',
  collapseDetailPanel: 'Cerrar',

  // Used core components translation keys
  MuiTablePagination: {},

  // Row reordering text
  rowReorderingHeaderName: 'Reordenar filas',

  // Aggregation
  aggregationMenuItemHeader: 'Encabezado',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'avg',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'size',
};