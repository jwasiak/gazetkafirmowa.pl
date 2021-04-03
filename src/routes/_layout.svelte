<script>
	import Navigation from '../components/Navigation.svelte';
	import logo from '../../images/logo.jpg';
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
		<img alt="Gazetka firmowa" src="{logo}">
	</div>
	</section>

<slot></slot>