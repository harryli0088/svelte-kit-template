<script lang="ts">
  import Fa from 'svelte-fa'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'

  import Blanchor from '$lib/Blanchor.svelte';
  // import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
</script>

<main>
	<header>
    <div>
      <h1>Svelte Kit Template</h1>
      <br/>
      <div style="font-size:2em">
        <Blanchor href="https://github.com/harryli0088/svelte-kit-template">
          <Fa class="icon-button" icon={faGithub} style="color:white;"/>
        </Blanchor>
      </div>
    </div>
  </header>

  <section>
    <p>This is my own Svelte Kit template! It includes:</p>

    <ul>
      <li>Fontawesome icons for Svelte</li>
      <li>GitHub pages set up</li>
      <li>Container styling</li>
      <li>Some header/section/footer styling</li>
    </ul>
  </section>
</main>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #17202A;
		color: white;
    text-align: center;
    height: 70vh;
	}
  @media only screen and (min-width: 600px) {
		header {
			height: 50vh;
		}
	}
</style>