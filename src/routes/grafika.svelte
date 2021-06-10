<svelte:head>
	<title>Grafika i moduły</title>
</svelte:head>

<script>

let modal=false;

function hideModal(){
	modal=false;
}

function showModal(){
	modal=true;
}
	
</script>

<style>
	.modules {
		display: grid;
		justify-content: center;
		grid-template-columns: 20vh 40vh;
		grid-template-rows: 15vh 30vh 15vh;
		
	}
	.three {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	
	.modules div {
		color: white;
		font-weight: 700;
		/* background-color: #d61f11; */
		margin: 0.5rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;	
		border-radius: 5px;
		/* box-shadow: 5px 5px 10px #981f1d; */	  
		box-shadow: 5px 5px 10px #000;	  
		background-image: linear-gradient(#d61f11, #981f1d);
	}
	
	.modal-content {
		width: auto;
	}

</style>

<section class="section">
	<div class="container">
		
		<h1 class="title">Grafika i moduły</h1>
		
		<p class="block is-size-5">
			W cenie reklamy nasz grafik tworzy dla Państwa efektowne i rzucające się w oko grafiki które wysyła do akceptacji na maila.<br/>
			Poniżej dostępne moduły wraz z wymiarami:
		</p>
		
		<div class="block">
			
			<div class="modules">
				
				<div>1 moduł<br/>7x5 cm</div>
				
				<div>2 moduły (poziom)<br/>14x5 cm</div>
				
				<div>2 moduły (pion)<br/>7x10 cm</div>
				
				<div>4 moduły<br/>14x10 cm</div>
				
				<div class="three">3 moduły<br/>21x5 cm</div>
				
			</div>
			
		</div>
		<a on:click={showModal}> Kliknij aby zobaczyć przykładową stronę gazetki</a>
		
	</div>
</section>

<div class="modal" class:is-active="{modal}" on:click={hideModal}>
	<div class="modal-background"></div>
	<div class="modal-content">
		<img src="example.jpg" alt="przykładowa strona">
	</div>
</div>
