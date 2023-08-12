// public/assets/js/main.tsx
import * as React from "react";
var socket = new WebSocket("ws://localhost:8000");
if (socket) {
  socket.addEventListener("open", () => {
    console.log("opened");
  });
  socket.addEventListener("message", (event) => {
    console.log("message", event);
  });
}
function App() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { class: "p-2" }, /* @__PURE__ */ React.createElement("form", { id: "emotions-form" }, /* @__PURE__ */ React.createElement("header", { class: "font-bold text-xs dark:text-gray-700 text-center block" }, "How are you?"), /* @__PURE__ */ React.createElement("ul", { class: "flex space-x-1 text-[2.6rem]" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { name: "happy", title: "happy" }, "\u{1F600}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { name: "confused", title: "confused" }, "\u{1F616}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { name: "angry", title: "angry" }, "\u{1F92C}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { name: "overwhelmed", title: "overwhelmed" }, "\u{1F635}\u200D\u{1F4AB}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { name: "pensive", title: "pensive" }, "\u{1F914}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { name: "sad", title: "sad" }, "\u{1F625}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { name: "tired", title: "tired" }, "\u{1F634}"))))), /* @__PURE__ */ React.createElement("section", { class: "p-2" }, /* @__PURE__ */ React.createElement("form", { id: "water-consumption-form" }, /* @__PURE__ */ React.createElement("header", { class: "font-bold text-xs dark:text-gray-700 text-center block" }, "Hydrated?"), /* @__PURE__ */ React.createElement("ul", { class: "grid gap-2 grid-cols-8 text-[2.8rem]" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "1" }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "2" }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "3" }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "4" }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "5" }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "6" }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "7" }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", null, "\u{1F6B0}", /* @__PURE__ */ React.createElement("input", { type: "radio", name: "water", value: "8" })))))));
}
export {
  App as default
};
