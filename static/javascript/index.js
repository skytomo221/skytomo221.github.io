window.onload = function () {
  const face = document.getElementById("face");
  const mouth = document.getElementById("mouth");
  const openedMouth = document.getElementById("open-mouth");

  const openMouth = () => {
    mouth.setAttribute("display", "none");
    openedMouth.setAttribute("display", "inline");
  };

  const closeMouth = () => {
    mouth.setAttribute("display", "inline");
    openedMouth.setAttribute("display", "none");
  };

  closeMouth();
  face.addEventListener("touchstart", openMouth);
  face.addEventListener("mousedown", openMouth);
  face.addEventListener("mouseup", closeMouth);
};
