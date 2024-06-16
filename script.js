const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (prefersDarkMode) {
  document.documentElement.style.colorScheme = "dark";
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", "#0F0F0F");
} else {
  document.documentElement.style.colorScheme = "light";
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", "#FAFAFA");
}

const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://cdn.jsdelivr.net/gh/DogukanUrker/ArkligCSS@v1.0.0/ArkligMin/Arklig.min.css";
document.head.appendChild(link);

const selectElement = document.getElementById("color");
selectElement.addEventListener("change", function () {
  const selectedValue = selectElement.value;
  if (selectedValue != "default") {
    link.rel = "stylesheet";
    link.href = `https://cdn.jsdelivr.net/gh/DogukanUrker/ArkligCSS@v1.0.0/ArkligMin/Arklig.${selectedValue}.min.css`;
    document.head.appendChild(link);
  } else {
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/gh/DogukanUrker/ArkligCSS@v1.0.0/ArkligMin/Arklig.min.css";
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
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "#FAFAFA");
  } else if (selectedValue === "dark") {
    document.documentElement.style.colorScheme = "dark";
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "#0F0F0F");
  }
});
