<script>
export let segment;

let active = false;

function handleClick() {
	active = !active
}
		
</script>
	
<nav class="navbar" role="navigation" aria-label="main navigation">
	
	<div class="navbar-brand">
		<a role="button" class="navbar-burger" class:is-active="{active}" aria-label="menu" aria-expanded="false" on:click={handleClick} >
			<span aria-hidden="true" ></span>
			<span aria-hidden="true" ></span>
			<span aria-hidden="true" ></span>
		</a>
	</div>

	<div class="navbar-menu" class:is-active="{active}">
		<div class="navbar-end">
			
			<a  class="navbar-item" class:is-active="{!segment}" href=".">
				O firmie 
			</a>
		
			<a class="navbar-item" class:is-active="{segment === 'cennik'}" href="cennik">
				Cennik
			</a>
			
			<a class="navbar-item" class:is-active="{segment === 'grafika'}" href="grafika">
				Grafika i moduły
			</a>
			
			<a class="navbar-item" class:is-active="{segment === 'kontakt'}" href="kontakt">
				Kontakt
			</a>
					
		</div>

	</div>
	
</nav>