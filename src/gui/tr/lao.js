var TR = {
  // background
  backgroundTitle: 'ພາບພື້ນ',
  backgroundReset: 'ຕັ້ງຄ່າເລີ່ມຕົ້ນໃໝ່',
  backgroundImport: 'ນຳເຂົ້າ (jpg, png...)',
  backgroundFill: 'ຕື່ມໃສ່',

  // camera
  cameraTitle: 'ກ້ອງ',
  cameraReset: 'ເຂົ້າເບິ່ງ',
  cameraCenter: 'ຕັ້ງຄ່າເລີ່ມຕົ້ນໃໝ່ (bar)',
  cameraFront: 'ທາງໜ້າ (F)',
  cameraLeft: 'ທາງຊ້າຍ (L)',
  cameraTop: 'ທາງເທິງ (T)',
  cameraMode: 'ແບບໃຫ້ເລືອກ',
  cameraOrbit: 'ໝູນອ້ອມ (Turntable)',
  cameraSpherical: 'ຮູບໜ່ວຍມົນ (Trackball)',
  cameraPlane: 'ຮູບພຽງ (Trackball)',
  cameraProjection: 'ສະໄລ້ຮູບ',
  cameraPerspective: 'ສັດສ່ວນ',
  cameraOrthographic: 'ວາດພາບ',
  cameraFov: 'ຂອບເຂດການເບິ່ງເຫັນ',
  cameraPivot: 'ແກນຕັ້ງ',

  // file
  fileTitle: 'ແຟ້ມ (import/export)',
  fileImportTitle: 'ນຳເຂົ້າ',
  fileAdd: 'ເພີ້ມ (obj, sgl, ply, stl)',
  fileAutoMatrix: 'ຂອບນອກ ແລະ ໃຈກາງ',
  fileVertexSRGB: 'sRGB vertex color',
  fileExportSceneTitle: 'ສົ່ງອອກ ສາກພາບ',
  fileExportAll: 'ສົ່ງອອກ ທັງໝົດ',
  fileExportSGL: 'ຈັດເກັບ .sgl (SculptGL)',
  fileExportOBJ: 'ຈັດເກັບ .obj',
  fileExportPLY: 'ຈັດເກັບ .ply',
  fileExportSTL: 'ຈັດເກັບ .stl',

  fileExportTextureTitle: 'ສົ່ງອອກ ເນື້ອພາບ',
  fileExportTextureSize: 'ຂະໜາດ',
  fileExportColor: 'ຈັດເກັບ ແບບກະຈາຍ',
  fileExportRoughness: 'ຈັດເກັບ ແບບຫຍາບ',
  fileExportMetalness: 'ຈັດເກັບ ແບບໂລຫະ',

  // scene
  sceneTitle: 'ສາກພາບ',
  sceneReset: 'ຍົກອອກ ສາກພາບ',
  sceneResetConfirm: 'ຢືນຢັນ ຍົກອອກ ສາກພາບ',
  sceneAddSphere: 'ເພີ່ມ ໜ່ວຍກົມ',
  sceneAddCube: 'ເພີ່ມ ຮູບສີ່ລ່ຽມ',
  sceneAddCylinder: 'ເພີ່ມ ຮູບຊົງກົມ',
  sceneAddTorus: 'ເພີ່ມ ຮູບກົງລໍ້',
  sceneSelection: 'ເລືອກເອົາ',
  sceneMerge: 'ຮວມເຂົ້າກັນ ເລືອກເອົາ',
  sceneDuplicate: 'ກັອບປີ້ ເລືອກເອົາ',
  sceneDelete: 'ລົບ ເລືອກເອົາ',

  // mesh
  meshTitle: 'ຕາຂ່າຍ',
  meshNbVertices: 'ເທິງຈອມ : ',
  meshNbFaces: 'ດ້ານໜ້າ : ',

  // topology
  topologyTitle: 'ເຊື່ອມຕໍ່',

  //multires
  multiresTitle: 'ຄວາມຄົມຊັດຂອງຫຼືບພາບ',
  multiresSubdivide: 'ແບ່ງເປັນສິ້ນສ່ວນນ້ອຍໆ',
  multiresReverse: 'ຫັນກັບດ້ານ',
  multiresResolution: 'ມິຕິ',
  multiresNoLower: 'ບໍ່ມີ ມິຕິ ລະດັບ ຕ່ຳກວ່າ.',
  multiresNoHigher: 'ບໍ່ມີ ມິຕິ ລະດັບ ສູງກວ່າ.',
  multiresDelHigher: 'ລົບ ສູງກວ່າ',
  multiresDelLower: 'ລົບ ຕ່ຳກວ່າ',
  multiresSelectLowest: 'ເລືອກເອົາ ມິຕິ ລະດັບ ຕ່ຳສຸດ ກ່ອນ ຫັນກັບດ້ານ.',
  multiresSelectHighest: 'ເລືອກເອົາ ມິຕິ ລະດັບ ສູງສຸດ ກ່ອນ ແບ່ງເປັນສິ້ນສ່ວນນ້ອຍໆ.',
  multiresWarnBigMesh: function (nbFacesNext) {
    return 'ລະດັບຕໍ່ໄປ ແບ່ງເປັນສິ້ນສ່ວນນ້ອຍໆ ຈະພົບ ' + nbFacesNext + ' ດ້ານໜ້າ.\n' +
      'ຖ້າເຈົ້າຮູ້ວ່າກຳລັງເຮັດຫຍັງ, ກົດໃສ່ອີກ "ການແບ່ງເປັນສິ້ນສ່ວນນ້ອຍໆ".';
  },
  multiresNotReversible: 'ຂໍໂທດ ມັນເປັນໄປບໍ່ໄດ້ ທີ່ຈະຫັນກັບດ້ານ ຕາຂ່າຍອັນນີ້.\n' +
    'ຕາຂ່າຍ ບໍ່ແມ່ນຜະລິດຕະພັນ ຂອງ (loop-catmull) ເທິງໜ້າ ສິ້ນສ່ວນນ້ອຍໆ ຢູ່ເທິງ ຄວາມຫຼາກຫຼາຍຂອງຕາຂ່າຍ.',

  // remesh
  remeshTitle: 'ເມັດຈ້ຳ ຍ້ອນຄືນຕາຂ່າຍ (quads)',
  remeshRemesh: 'ຍ້ອນຄີນຕ່າຂ່າຍ',
  remeshResolution: 'ມິຕິ',
  remeshBlock: 'ຢັບຢັ້ງ',

  // dynamic
  dynamicTitle: 'ການເຄື່ອນທີ່ ແບບເຊື່ອມຕໍ່',
  dynamicActivated: 'ເຮັດໃຫ້ເຄື່ອນໄຫວ (no quads)',
  dynamicSubdivision: 'ສິ້ນສ່ວນນ້ອຍໆ',
  dynamicDecimation: 'ທຳລາຍຈຳນວນຫຼາຍ',
  dynamicLinear: 'ຕໍ່ເນື່ອງ ສິ້ນສ່ວນນ້ອຍໆ',

  // sculpt
  sculptTitle: 'ແກະສະຫຼັກ & ທາສີ',
  sculptBrush: 'ແປງ',
  sculptInflate: 'ໂພງຂຶ້ນ',
  sculptTwist: 'ບິດ',
  sculptSmooth: 'ເຮັດໃຫ້ລຽບ (-Shift)',
  sculptFlatten: 'ເຮັດໃຫ້ພຽງ',
  sculptPinch: 'ປັກ',
  sculptCrease: 'ຮອຍຍັບ',
  sculptDrag: 'ລາກ',
  sculptPaint: 'ແຕ້ມ',
  sculptMasking: 'ໜ້າກາກ (-Ctrl)',
  sculptMove: 'ຍ້າຍ',
  sculptLocalScale: 'ທ້ອງຖິ່ນ ມາດຕາສ່ວນ',
  sculptTransform: 'ປ່ຽນຮູບໂສມ (E)',

  sculptCommon: 'ໂດຍທົ່ວໄປ',
  sculptTool: 'ເຄື່ອງມື',
  sculptSymmetry: 'ໄດ້ສັດສ່ວນ',
  sculptContinuous: 'ສີບຕໍ່',
  sculptRadius: 'ລັດສະໝີ (-X)',
  sculptIntensity: 'ຄວາມເຂັ້ມ (-C)',
  sculptHardness: 'ຄວາມແຊງ',
  sculptCulling: 'ດ້ານໜ້າ ບາງ (front vertex only)',
  sculptAlphaTitle: 'ອັກສອນ',
  sculptLockPositon: 'ລັອກ ຕຳແໜ່ງ',
  sculptAlphaTex: 'ເນື້ອພາບ',
  sculptImportAlpha: 'ນຳເຂົ້າ ອັກສອນ tex (jpg, png...)',
  sculptNegative: 'ຈຳນວນລົບ (N or -Alt)',
  sculptColor: 'ແສງສະທ້ອນ',
  sculptRoughness: 'ຜິວຫຍາບ',
  sculptMetallic: 'ແບບໂລຫະ',
  sculptClay: 'ດິນປັ້ນ',
  sculptAccumulate: 'ສະສົມ (no limit per stroke)',
  sculptColorGlobal: 'ທົ່ວໂລກ',
  sculptPickColor: 'ວັດສະດຸ / ຕົວເລືອກສີ (-S)',
  sculptTangentialSmoothing: 'ຜ່ອນຄາຍ ເທົ່ານັ້ນ',
  sculptTopologicalCheck: 'ກວດກາ ໂຄງສ້າງເຊື່ອມຕໍ່',
  sculptMoveAlongNormal: 'ເຄື່ອນທີ່ ຕາມ ປົກກະຕິ (N or -Alt)',
  sculptMaskingClear: 'ຍົກອອກ (-Ctrl + Drag)',
  sculptMaskingInvert: 'ຫັນກັບດ້ານ (-Ctrl + Click)',
  sculptMaskingBlur: 'ສະຫຼົວ',
  sculptMaskingSharpen: 'ຄົມຊັດ',
  sculptPBRTitle: 'PBR ວັດສະດຸ',
  sculptPaintAll: 'ທາສີ ທັງໝົດ',
  sculptExtractTitle: 'ສະກັດເອົາ',
  sculptExtractThickness: 'ຄວາມໜາ',
  sculptExtractAction: 'ສະກັດເອົາ !',

  // states
  stateTitle: 'ປະຫວັດກ່ອນໜ້າ',
  stateUndo: 'ຍ້ອນຄືນຫຼັງ',
  stateRedo: 'ຍ້ອນຄີນທີ່ເຮັດໄວ້',
  stateMaxStack: 'ກອງຂຶ້ນ ສູງສຸດ',

  // pressure
  pressureTitle: 'ຄວາມດັນ ຂອງແຜ່ນ',
  pressureRadius: 'ຄວາມດັນ ຂອງລັດສະໝີ',
  pressureIntensity: 'ຄວາມດັນ ຂອງຄວາມເຂັ້ມ',

  // rendering
  renderingTitle: 'ຫຼິ້ນສະແດງ',
  renderingGrid: 'ສະແດງ ຫຼືບ',
  renderingSymmetryLine: 'ສະແດງ ເສັ້ນ ສະທ້ອນ',
  renderingMatcap: 'Matcap',
  renderingCurvature: 'ຄວາມໂຄ້ງ',
  renderingPBR: 'PBR',
  renderingTransparency: 'ຄວາມໂປ່ງໃສ',
  renderingNormal: 'ເຮັດເງົາ ປົກກະຕິ',
  renderingUV: 'ເຮັດເງົາ UV',
  renderingShader: 'ເຮັດເງົາ',
  renderingMaterial: 'ວັດສະດຸ',
  renderingImportUV: 'ນຳເຂົ້າ (jpg, png...)',
  renderingImportMatcap: 'ນຳເຂົ້າ (jpg, png...)',
  renderingExtra: 'ພິເສດ',
  renderingFlat: 'ເຮັດເງົາ ພຽງ',
  renderingWireframe: 'ເສັ້ນກອບ (W)',
  renderingExposure: 'ການເຜີຍອອກ',
  renderingEnvironment: 'ສິ່ງແວດລ້ອມ',
  renderingIsolate: 'ຢູ່ຕ່າງຫາກ/ສະແດງ (I)',
  renderingFilmic: 'ພາບໜັງ ກະຈ່າງແຈ້ງສົມຈິງ',

  // contour
  contour: 'ໂຄງ',
  contourShow: 'ສະແດງ ໂຄງ',
  contourColor: 'ສີ',
  darkenUnselected: 'ມືດກວ່າ ບໍ່ໄດ້ເລືອກເອົາ',

  // pixel ratio
  resolution: 'ມິຕິ',

  // matcaps
  matcapPearl: 'ໄຂ່ມຸກ',
  matcapClay: 'ດິນປັ້ນ',
  matcapSkin: 'ຜິວ',
  matcapGreen: 'ຂຽວ',
  matcapWhite: 'ຂາວ',

  // sketchfab
  sketchfabTitle: 'ເຂົ້າໄປ Sketchfab !',
  sketchfabUpload: 'Upload',
  sketchfabUploadMessage: 'ກະລຸນາ ເຂົ້າໄປທີ່ sketchfab API Key.\n' +
    'ເຈົ້າກໍ ສາມາດ ອອກຈາກ "guest" to upload anonymously.\n' +
    '(a new window will pop up when the uploading and processing is finished)',
  sketchfabUploadError: function (error) {
    return 'Sketchfab upload error :\n' + error;
  },
  sketchfabUploadSuccess: 'Upload success !\nHere is your link :',
  sketchfabAbort: 'Abort the last upload ?',
  sketchfabUploadProcessing: 'Processing...\nYour model will be available at :',

  about: 'ກ່ຽວກັບ & ຊ່ວຍເຫຼືອ',

  alphaNone: 'ບໍ່ມີ',
  alphaSquare: 'ກ່ອງສີ່ລ່ຽມ',
  alphaSkin: 'ພື້ນຜິວ',

  remeshTitleMC: 'ເມັດຈ້ຳ ຍ້ອນຄືນຕາຂ່າຍ (manifold tris)',
  remeshRemeshMC: 'ຍ້ອນຄືນຕາຂ່າຍ',
  remeshSmoothingMC: 'ຜ່ອນຄາຍ ແບບເຊື່ອມຕໍ່'
};

export default TR;
