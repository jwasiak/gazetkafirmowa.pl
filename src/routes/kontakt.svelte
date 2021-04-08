<svelte:head>
	<title>Kontakt</title>
</svelte:head>

<script>

import { onMount } from 'svelte';

import { validateEmail } from '../common/validators'

let email = "";
let message = "";
let protection = "";
let msgType = null;
let msg = "";

function errorMessage(error=null) {
	console.log(error)
	msgType = "error"
	// msg = "Upss ... wystąpił problem z wysłaniem wiadomości."
	msg = error
}

function closeMsgBox() {
	msg = "";
}

async function handleSubmit(event) {	
	if ( protection.length ) {
		errorMessage('Spadaj spamerze ...')
		return
	}
	if ( !message.length ) {
		errorMessage('Wpisz treść wiadomości')
		return
	}
	if ( !validateEmail(email) ) {
		errorMessage('Błędny adres e-mail')
		return
	}
	const form = event.target.form;
	const data = new FormData(form);
	data.delete('protection');
	fetch(form.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		if (response.status === 200) {
			msgType = "info"
			msg = "Wiadomość została wysłana."
			form.reset()
		} else {
			errorMessage(response.statusText)
		}
	}).catch(error => { errorMessage(error) });
}

onMount(() => {
	const mymap = L.map('mapid').setView([49.69829, 21.74613], 17);
	const marker = L.marker([49.69829, 21.74613]).addTo(mymap);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 20,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
	marker.bindPopup("<b>Gazetka firmowa</b><br>Krosno, Tysiąclecia 14/20").openPopup();
});

</script>

<style>

.hidden {
	display: none;
}

</style>

<section class="section">
	<div class="container">
		<h1 class="title">Kontakt</h1>
		
		<div class="notification" 
			class:hidden="{msg === ''}" 
			class:is-success="{msgType === 'info'}" 
			class:is-danger="{msgType === 'error'}"
		>
			<button class="delete" on:click={closeMsgBox}></button>
			{msg}
		</div>
		
		<div class="box">
		
			<form action="https://formspree.io/f/xzbybjej" method="post">
			
				<div class="field">
					<label class="label" for="email">E-mail</label>
					<div class="control">
						<input id="email" class="input" type="email" name="email" placeholder="Adres e-mail" bind:value={email}>
					</div>
				</div>
				
				<div class="field">
					<label class="label" for="message">Wiadomość</label>
					<div class="control">
						<textarea id="message" class="textarea" name="message" placeholder="Treść wiadomości" bind:value={message}></textarea>
					</div>
				</div>
				
				
				
				<div class="control">
					<button class="button is-link" on:click|preventDefault={handleSubmit} >Wyślij</button>
				</div>
				
				<input class="is-hidden" name="protection" type="text" bind:value={protection}>
			
			</form>
		
		</div>
		
		<div class="box">
	
			<div class="columns">
				<div class="column" >
				  <p>
					  <strong>Sunshine S.C  </strong> <br>
					  tel. 667 386 830, 605 934 454 <br>
					  38-400 Krosno, ul. Tysiąclecia 14/20 <br>
					  e-mail: <a href="mailto:gazetkafirmowa@wp.pl">gazetkafirmowa@wp.pl</a>
				  </p>
				</div>
				<div class="column">
					<div id="mapid" style="height: 500px;"></div>
				</div>
			  </div>
	
		  </div>
			
	
	</div>
</section>