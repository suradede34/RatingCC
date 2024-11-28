const data = [1, 2, 3, 4, 5];

for (const x of data) {
    document.querySelector('.game').innerHTML += `<div class="game-item">${x}</div>`;
}

let selectedRating = null;

function handleItemClick(event) {
    document.querySelectorAll('.game-item').forEach(item => {
        item.classList.remove('game-item-active');
    });
    event.target.classList.add('game-item-active');
    selectedRating = event.target.innerText;
}

function handleSubmit() {
    if (selectedRating !== null) {
        document.getElementById('selected-rating').style.display = 'block';
        document.getElementById('img').style.display = 'block';
        document.getElementById('h1').style.display = 'block';
        document.getElementById('p').style.display = 'block';
        document.getElementById('rating-value').innerText = selectedRating;

        document.querySelector('img').classList.add('hidden');
        document.querySelector('h1').classList.add('hidden');
        document.querySelector('p').classList.add('hidden');
        document.querySelector('.game').classList.add('hidden');
        document.getElementById('Btn').classList.add('hidden');
    }
}
document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('click', handleItemClick);
});
document.getElementById('Btn').addEventListener('click', handleSubmit);
