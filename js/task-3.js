function getElementWidth(content, padding, border) {
    let widthContent = parseFloat(content);
    let valuePading = parseFloat(padding);
    let valueBorder = parseFloat(border);
    return widthContent + (valuePading * 2) + (valueBorder * 2)
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
