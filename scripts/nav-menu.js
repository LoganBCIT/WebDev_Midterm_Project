(function(n){

	const $nav = n.querySelector('nav');
	const $btn = n.querySelector('.button-menu');
	$btn.addEventListener('click', function(){
		$nav.classList.toggle('display');
	});

})(document);
