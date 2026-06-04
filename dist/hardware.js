const canvas = document.getElementById("info-canvas");
const gl = canvas.getContext("webgl");

const vendorElement = document.getElementById("GPU-vendor");
const rendererElement = document.getElementById("GPU-renderer");

const vendor = parseVendor(getUnmaskedInfo(gl).vendor);
const renderer = parseRenderer(getUnmaskedInfo(gl).renderer);
// console.log(getUnmaskedInfo(gl));
console.log(parseVendor(getUnmaskedInfo(gl).vendor));
// console.log(navigator.gpu);
console.log(getUnmaskedInfo(gl).renderer);
console.log(navigator.deviceMemory);
console.log(navigator.platform);
console.log(navigator.hardwareConcurrency);

vendorElement.textContent = "Vendor: " + vendor;
rendererElement.textContent = "GPU: " + renderer;


function getUnmaskedInfo(gl) {
  let unMaskedInfo = {
    renderer: "",
    vendor: "",
  };

  let dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
  if (dbgRenderInfo != null) {
    unMaskedInfo.renderer = gl.getParameter(
      dbgRenderInfo.UNMASKED_RENDERER_WEBGL,
    );
    unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
  }

  return unMaskedInfo;
}

function parseVendor(unMaskedVendor) {
  let vendor = "";

  if (unMaskedVendor.toLowerCase().includes("nvidia")) {
    vendor = "nvidia";
  } else vendor = "unknown";
  return vendor;
}

function parseRenderer(unMaskedVendor) {
  return unMaskedVendor
}
