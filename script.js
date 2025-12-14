function showTip(type) {
    let tips = document.getElementById("tips");

    if (type === "natural") {
        tips.innerHTML = "✨ Use light foundation, nude lipstick, and minimal eye makeup.";
    } 
    else if (type === "party") {
        tips.innerHTML = "✨ Go bold with eyeshadow, eyeliner, and glossy lips.";
    } 
    else if (type === "bridal") {
        tips.innerHTML = "✨ Focus on flawless base, soft eyes, and long-lasting makeup.";
    }
}
