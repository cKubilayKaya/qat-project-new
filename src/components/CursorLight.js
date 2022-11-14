import React from "react";

export default function CursorLight() {
  setTimeout(() => {
    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, 1);
  return <div className="cursor" id="cursor"></div>;
}
