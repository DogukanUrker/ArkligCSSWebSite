const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://cdn.jsdelivr.net/gh/DogukanUrker/ArkligCSS@main/ArkligMin/Arklig.min.css";
document.head.appendChild(link);

const selectElement = document.getElementById("color");
selectElement.addEventListener("change", function () {
  const selectedValue = selectElement.value;
  if (selectedValue != "default") {
    link.rel = "stylesheet";
    link.href = `https://cdn.jsdelivr.net/gh/DogukanUrker/ArkligCSS@main/ArkligMin/Arklig.${selectedValue}.min.css`;
    document.head.appendChild(link);
  } else {
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/gh/DogukanUrker/ArkligCSS@main/ArkligMin/Arklig.min.css";
    document.head.appendChild(link);
  }
});

const selectColorScheme = document.getElementById("theme");
selectColorScheme.addEventListener("change", function () {
  const selectedValue = selectColorScheme.value;
  if (selectedValue === "auto") {
    document.documentElement.style.colorScheme = "light dark";
  } else if (selectedValue === "light") {
    document.documentElement.style.colorScheme = "light";
  } else if (selectedValue === "dark") {
    document.documentElement.style.colorScheme = "dark";
  }
});
