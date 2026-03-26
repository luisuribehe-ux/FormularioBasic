/**
 * Google Apps Script — LuisconIA Lead Capture
 *
 * SETUP:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/10IRVBlsV21T0EeUC2qGwRUx1wsXimUvrZxBYdotCbgg/edit
 * 2. Rename the first tab to "Leads"
 * 3. Add headers in Row 1 (A1:T1):
 *    Timestamp | Nombre | Correo | Telefono | Cargo | Empresa | Rubro | Categorias | Suscripcion | Perfil | Descripcion_Negocio | Servicios_Productos | Oportunidades_Dolores | Publico_Objetivo | Herramientas_IA | Area_Departamento | Desafios_Laborales | Uso_Actual_IA | Herramientas_Corp | Objetivo_IA | Idioma
 * 4. Go to Extensions > Apps Script
 * 5. Paste this entire code into Code.gs
 * 6. Deploy > Manage deployments > edit > New version > Deploy
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById('10IRVBlsV21T0EeUC2qGwRUx1wsXimUvrZxBYdotCbgg')
                              .getSheetByName('Leads');

    if (!sheet) {
      sheet = SpreadsheetApp.openById('10IRVBlsV21T0EeUC2qGwRUx1wsXimUvrZxBYdotCbgg')
                            .insertSheet('Leads');
      sheet.appendRow([
        'Timestamp', 'Nombre', 'Correo', 'Telefono', 'Cargo', 'Empresa',
        'Rubro', 'Categorias', 'Suscripcion', 'Perfil',
        'Descripcion_Negocio', 'Servicios_Productos', 'Oportunidades_Dolores',
        'Publico_Objetivo', 'Herramientas_IA',
        'Area_Departamento', 'Desafios_Laborales', 'Uso_Actual_IA',
        'Herramientas_Corp', 'Objetivo_IA', 'Idioma'
      ]);
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nombre || '',
      data.correo || '',
      data.telefono || '',
      data.cargo || '',
      data.empresa || '',
      data.rubro || '',
      data.categorias || '',
      data.suscripcion || '',
      data.perfil || '',
      data.descripcion_negocio || '',
      data.servicios_productos || '',
      data.oportunidades_dolores || '',
      data.publico_objetivo || '',
      data.herramientas_ia || '',
      data.area_departamento || '',
      data.desafios_laborales || '',
      data.uso_actual_ia || '',
      data.herramientas_corp || '',
      data.objetivo_ia || '',
      data.idioma || 'es'
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
                         .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', message: 'LuisconIA Lead Capture API is running' }))
                       .setMimeType(ContentService.MimeType.JSON);
}
