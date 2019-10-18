const dt = new Date();
console.log(dt);

const dateInputElement = document.getElementById(`date-input`)
const timeInputElement = document.getElementById(`time-input`)

//登録ボタン
const urlInputElement = document.getElementById('url-input')
const subscribeButton = document.getElementById('subscribe')
subscribeButton.addEventListener('click', () => {
    console.log(urlInputElement.value);
});




//urlを開く
//function openWIN(url) { window.open(url); }

