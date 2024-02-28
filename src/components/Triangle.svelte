<script lang="ts">
  // I'm using typescript
  // let angles = $state([0, 0, 0]); // using svelte 5 runes for fun - Had to disable for astro
  // let triangle: string = $state(""); // actually anotating types here - again disabled for astro (it uses svelte v4)
  let angles: number[] = [0, 1, 2];
  let triangle: string = "";

  const handleInputChange = (i: any, e: any) => {
    // Yes this is lazy typescript
    const value = parseInt(e.target.value, 10); // No idea why I need the radix, otherwise it doesn't use base 10 for whatever reason
    if (!isNaN(value)) { // If is number
      angles[i] = value; // set angle to input
    } else {
      triangle = "Angle must be an integer"; // should probably make a try catch to stop runtime errors
    }
  };

  const checkEquilateral = () => { // es6 function as they look nicer
    if (angles[0] === angles[1] && angles[1] === angles[2] && angles[0] + angles[1] + angles[3] === 180) { // Using ===
      triangle = "Equilateral triangle";
    } else {
      triangle = "Not an equilateral triangle";
    }
     };
 const checkScalene = () => {
      if (angles) {
        
      }
    }


</script>

<main>
  {#each [0, 1, 2] as i}
    <label for={`angle${i}`}>Angle {i}:</label>
    <input
      type="text"
      id={`angle${i}`}
      bind:value={angles[i]}
      on:input={(e) => handleInputChange(i, e)}
    /><br />
  {/each}
  <button on:click={checkEquilateral}>Check Equilateral</button>
  <p>{triangle}</p>
</main>

