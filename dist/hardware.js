

// setup invisible canvas with webgl
const canvas = document.getElementById("info-canvas");
const gl = canvas.getContext("webgl");

// get elements
const vendorElement = document.getElementById("GPU-vendor");
const rendererElement = document.getElementById("GPU-renderer");
const OSElement = document.getElementById("OS-type");
const browserElement = document.getElementById("browser-type");


const platform = parsePlatform();
const vendor = parseVendor(getUnmaskedInfo(gl).vendor);
const renderer = parseRenderer(getUnmaskedInfo(gl).renderer);

// update ui with values
vendorElement.textContent = "Vendor: " + vendor;
rendererElement.textContent = "GPU: " + renderer;
OSElement.textContent = "OS: " + platform;

console.log(navigator.deviceMemory);
console.log(navigator.hardwareConcurrency);

console.log(window.navigator.vendor)
console.log(window.navigator.userAgentData)
console.log(navigator.appName)

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
    vendor = "NVIDIA";
  } else vendor = unMaskedVendor + " (vendor parsing failed)";
  return vendor;
}

function parseRenderer(unMaskedVendor) {
  return unMaskedVendor;
}

function parsePlatform() {
  let platform = "";

  if (navigator.platform == "Win32") {
    platform = "Windows";
  } else if (navigator.platform == "MacIntel") {
    platform = "Mac OS";
  } else if (navigator.platform == "Linux x86_64") {
    platform = "Linux (x86_64)";
  } else if (navigator.platform == "Linux armv81") {
    platform = "Linux (ARM)";
  } else {
    platform = navigator.platform;
  }

  return platform;
}
