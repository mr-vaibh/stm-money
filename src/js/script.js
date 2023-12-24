let noOfItems = 3;

document.addEventListener("DOMContentLoaded", function () {
    generateCircle(noOfItems);
});

document.getElementById('increase').addEventListener("click", function () {
    document.getElementById('circle').innerHTML = null;
    generateCircle(++noOfItems);
})
document.getElementById('decrease').addEventListener("click", function () {
    document.getElementById('circle').innerHTML = null;
    if (noOfItems > 0) generateCircle(--noOfItems);
})

function generateCircle(numItems) {
    const circle = document.getElementById('circle');
    const angle = (2 * Math.PI) / numItems;

    for (let i = 0; i < numItems; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.style.color = '#fff';
        item.textContent = i + 1; // Add text content (1, 2, 3, ...)

        // Adjust the radius as needed
        const radius = 80;
        const x = -Math.sin(i * angle) * radius + 90;
        const y = -Math.cos(i * angle) * radius + 90;

        // Hacky coefficient to adjust circles' position 
        // item.style.left = '-' + 10 + 'px';
        // item.style.top = '-' + 10 + 'px';

        item.style.transform = `translate(${x}px, ${y}px)`;

        circle.appendChild(item);
    }
}
