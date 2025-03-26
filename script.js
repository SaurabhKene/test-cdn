document.addEventListener("DOMContentLoaded", function () {
  const scripts = [...document.getElementsByTagName("script")];
  const currentScript = scripts.find((script) =>
    script.src.includes("script.js")
  );

  const params = new URLSearchParams(currentScript.src.split("?")[1]);
  const model = params.get("model") || "defaultModel";

  const chatbotUrl = `https://chatbot.logicsoft.online:8083/?model=${model}`;

  const svgNamespace = "http://www.w3.org/2000/svg";
  const xlinkNamespace = "http://www.w3.org/1999/xlink";

  const svg = document.createElementNS(svgNamespace, "svg");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("xmlns", svgNamespace);
  svg.setAttribute("xmlns:xlink", xlinkNamespace);
  svg.setAttribute("x", "0px");
  svg.setAttribute("y", "0px");
  svg.setAttribute("width", "120px");
  svg.setAttribute("height", "120px");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("enable-background", "new 0 0 100 100");
  svg.setAttribute("space", "preserve");

  const image = document.createElementNS(svgNamespace, "image");

  if(model === "1"){
    image.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/gh/SaurabhKene/test-cdn/Images/Animation\x20-\x201738834021266.gif"
    );
  }else if(model === "3"){
    image.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/gh/SaurabhKene/test-cdn/Images/bharatgif.gif"
    );
  }
 
  image.setAttribute("x", "11");
  image.setAttribute("y", "0");
  image.setAttribute("width", "80");
  image.setAttribute("height", "103");
  svg.appendChild(image);

  const textGroup = document.createElementNS(svgNamespace, "g");
  textGroup.setAttribute("id", "rotatingText");

  const path = document.createElementNS(svgNamespace, "path");
  path.setAttribute("id", "textPath");
  path.setAttribute("fill", "none");
  path.setAttribute(
    "d",
    "M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z"
  );
  textGroup.appendChild(path);

  const text = document.createElementNS(svgNamespace, "text");
  // text.setAttribute("style", "fill:#ff5e04; font-size: 10px"); // Set font size to 11px

  if (model === "3") {
    text.setAttribute("style", "fill:#2e2e2e; font-size: 10px;");
  } else {
    text.setAttribute("style", "fill:#ff5e04; font-size: 11px;"); // Change as needed
  }

  const textPath = document.createElementNS(svgNamespace, "textPath");
  textPath.setAttributeNS(xlinkNamespace, "href", "#textPath");

  if (model === "1") {
    const tspan1 = document.createElementNS(svgNamespace, "tspan");
    tspan1.setAttribute("x", "0");
    tspan1.textContent = "Inspiring Trust, ";
    textPath.appendChild(tspan1);
  } else if (model === "3") {
    const tspan1 = document.createElementNS(svgNamespace, "tspan");
    tspan1.setAttribute("x", "0");
    tspan1.textContent = "Trusted Standards ";
    textPath.appendChild(tspan1);
  }

  if (model === "1") {
    const tspan2 = document.createElementNS(svgNamespace, "tspan");
    tspan2.setAttribute("x", "52");
    tspan2.setAttribute("dx", "40");
    tspan2.textContent = "Assuring Safe & Nutritious Food";
    textPath.appendChild(tspan2);
  } else if (model === "3") {
    const tspan2 = document.createElementNS(svgNamespace, "tspan");
    tspan2.setAttribute("x", "52");
    tspan2.setAttribute("dx", "40");
    tspan2.textContent = "Ensuring Safe & Nutritious Food";
    textPath.appendChild(tspan2);
  }

  text.appendChild(textPath);
  textGroup.appendChild(text);

  svg.appendChild(textGroup);

  const style = document.createElement("style");
  style.innerHTML = `
      @keyframes rotateText {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      #rotatingText {
        animation: rotateText 10s linear infinite;
        transform-origin: 50% 50%;
      }
    `;
  document.head.appendChild(style);

  svg.style.position = "fixed";
  svg.style.bottom = "20px";
  svg.style.right = "20px";
  svg.style.zIndex = "999999";
  svg.style.cursor = "pointer";

  document.body.appendChild(svg);

  const chatbotContainer = document.createElement("div");
  chatbotContainer.style.position = "fixed";
  chatbotContainer.style.bottom = "10px";
  chatbotContainer.style.right = "10px";
  chatbotContainer.style.width = "30%";
  chatbotContainer.style.height = "90%";
  //chatbotContainer.style.border = "1px solid #ff5e04";
  chatbotContainer.style.borderRadius = "8px";
  chatbotContainer.style.backgroundColor = "#fff";
  chatbotContainer.style.transform = "scale(0)";
  chatbotContainer.style.transition = "transform 0.3s ease";
  chatbotContainer.style.transformOrigin = "bottom right";
  chatbotContainer.style.zIndex = "510000000";
  chatbotContainer.style.overflow = "hidden";

  const innerDiv = document.createElement("div");
  innerDiv.style.width = "100%";
  innerDiv.style.height = "100%";
  innerDiv.style.position = "relative";
  innerDiv.style.overflow = "hidden";

  const iframe = document.createElement("iframe");
  iframe.src = chatbotUrl;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  innerDiv.appendChild(iframe);

  chatbotContainer.appendChild(innerDiv);

  const closeButton = document.createElement("button");
  closeButton.style.position = "absolute";
  closeButton.style.top = "16px";
  closeButton.style.right = "10px";
  closeButton.style.width = "30px";
  closeButton.style.height = "30px";
  closeButton.style.borderRadius = "50%";
  closeButton.style.background = "none";
  closeButton.style.color = "black";
  closeButton.style.border = "none";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontWeight = "bold";
  closeButton.innerText = "✖";

  closeButton.addEventListener("click", () => {
    chatbotContainer.style.transform = "scale(0)";
    isOpen = false;
    svg.style.visibility = "visible";
    svg.style.pointerEvents = "auto";
  });

  chatbotContainer.appendChild(closeButton);

  const refreshButton = document.createElement("button");
  refreshButton.style.position = "absolute";
  refreshButton.style.top = "16px";
  refreshButton.style.right = "45px";
  refreshButton.style.width = "30px";
  refreshButton.style.height = "30px";
  refreshButton.style.borderRadius = "50%";
  refreshButton.style.background = "none";
  refreshButton.style.color = "black";
  refreshButton.style.border = "none";
  refreshButton.style.cursor = "pointer";
  refreshButton.style.fontWeight = "bold";
  refreshButton.innerText = "";

  // Refresh iframe on click
  refreshButton.addEventListener("click", () => {
    iframe.src = iframe.src;
  });

  chatbotContainer.appendChild(refreshButton);

  let isOpen = false;

  svg.addEventListener("click", () => {
    isOpen = !isOpen;
    chatbotContainer.style.transform = isOpen ? "scale(1)" : "scale(0)";
    svg.style.visibility = isOpen ? "hidden" : "visible";
    svg.style.pointerEvents = isOpen ? "none" : "auto";
  });

  document.body.appendChild(svg);
  document.body.appendChild(chatbotContainer);

  const messageBubble = document.createElement("div");

  // Set message based on model value
  messageBubble.textContent =
    model === "3"
      ? "Hello, I am your BharatGAP Assistant"
      : "Hello, I am Bharatgap, Your FSSAI Assistant";

  messageBubble.style.position = "fixed";
  messageBubble.style.bottom = "120px";
  messageBubble.style.right = "30px";
  messageBubble.style.padding = "10px 15px";
  messageBubble.style.backgroundColor = "#e6e6e6";
  messageBubble.style.color = "#000000";
  messageBubble.style.borderRadius = "10px";
  messageBubble.style.fontSize = "14px";
  messageBubble.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  messageBubble.style.zIndex = "509999990";
  messageBubble.style.opacity = "1"; // Set opacity to make it visible
  messageBubble.style.transition = "opacity 0.3s ease";

  document.body.appendChild(messageBubble);
  let isMessageVisible = false;
  setInterval(() => {
    isMessageVisible = !isMessageVisible;
    messageBubble.style.opacity = isMessageVisible ? "1" : "0";
  }, 6000);

  // Media query to handle screen resize
  function handleResize() {
    if (window.innerWidth < 1000) {
      chatbotContainer.style.width = "100%";
      chatbotContainer.style.right = "0";
    } else {
      chatbotContainer.style.width = "30%";
      chatbotContainer.style.right = "10px";
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
});
