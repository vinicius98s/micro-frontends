import ReactDOM from "react-dom";
import React from "react";
import Vue from "vue";

import ReactApp from "./react";
import VueApp from "./vue/App.vue";

function render() {
  document.body.innerHTML = "";
  const reactRoot = document.createElement("div");
  reactRoot.id = "react";
  document.body.appendChild(reactRoot);

  const vueRoot = document.createElement("div");
  vueRoot.id = "vue";
  document.body.appendChild(vueRoot);

  const currentRoute = window.location.pathname;

  switch (currentRoute) {
    case "/vue":
      return new Vue({
        el: "#vue",
        render: h => h(VueApp)
      });
    case "/":
    default:
      return ReactDOM.render(<ReactApp />, document.getElementById("react"));
  }
}

document.addEventListener("DOMContentLoaded", function() {
  render();

  const pushState = history.pushState;
  history.pushState = function() {
    pushState.apply(history, arguments);
    render();
  };

  window.onpopstate = render;
});
