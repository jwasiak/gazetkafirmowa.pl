<script>
	import Navigation from '../components/Navigation.svelte';
	export let segment;
</script>

<style>
	img {
		box-shadow: 5px 5px 10px #000;
	}
</style>


<section class="hero is-medium">
	<div class="container">
		<div class="hero-head">			
			<Navigation {segment}/>
		</div>
		<img alt="Gazetka firmowa - logo" src="gazetkafirmowa-logo.png">
	</div>
	</section>

<div>
	<slot></slot>
</div>
