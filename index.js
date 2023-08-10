const gutter = document.querySelector(".gutter");
const mainContent = document.querySelector(".main-content");
const headings = document.querySelectorAll("h1, h3");

let lineNumber = 1;
headings.forEach((heading) => {
  if (/\[.*\]/.test(heading.innerText)) {
    const lineDiv = document.createElement("div");
    lineDiv.classList.add("line-number");

    // Calculate the offset
    const headingOffset = heading.getBoundingClientRect().top;
    const gutterOffset = gutter.getBoundingClientRect().top;
    const relativeOffset = headingOffset - gutterOffset;

    lineDiv.style.top = `${relativeOffset}px`;

    lineDiv.innerText = lineNumber++;
    gutter.appendChild(lineDiv);
  }
});
