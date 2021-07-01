const txtElement= ['Mahasiswa Teknik Informatika Universitas Ibn Khaldun Bogor'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.Length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if (words.length == currentTxt.Length) {
		count++;
		txtIndex = 0;
	}
	

	setTimeout(ngetik, 500);
})(); 