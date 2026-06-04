const canvas = document.getElementById("info-canvas");
const gl = canvas.getContext("experimental-webgl");

const vendorElement = document.getElementById("");

console.log(getUnmaskedInfo(gl));
console.log(getUnmaskedInfo(gl).vendor);
console.log(navigator.gpu);
console.log(getUnmaskedInfo(gl).renderer);
console.log(navigator.deviceMemory);
console.log(navigator.platform);
console.log(navigator.hardwareConcurrency);

function getUnmaskedInfo(gl) {
  var unMaskedInfo = {
    renderer: "",
    vendor: "",
  };

  var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
  if (dbgRenderInfo != null) {
    unMaskedInfo.renderer = gl.getParameter(
      dbgRenderInfo.UNMASKED_RENDERER_WEBGL,
    );
    unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
  }

  return unMaskedInfo;
}

function parseUnmaskedInfo(unMaskedInfo) {}
