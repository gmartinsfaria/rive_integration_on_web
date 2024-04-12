const r = new rive.Rive({
  src: "./btn.riv",
  // OR the path to a discoverable and public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: "Button Animation",
  automaticallyHandleEvents: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});


