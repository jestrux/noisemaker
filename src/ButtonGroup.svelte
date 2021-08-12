<script>
  export let value;
  export let choices;
  export let onChange;
</script>

<div class="inline-flex border bg-gray rounded-xs overflow-hidden"
    style={{padding: "0.1rem"}}
>
    {#each choices as choice}
        <span class="rounded-xs cursor-pointer py-1 px-2 {value == choice ? 'bg-white' : 'text-dark-gray'}"
            on:click={() => onChange(choice)}
        >
            { choice.toUpperCase() }
        </span>
    {/each}
</div>