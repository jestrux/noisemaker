<script>
  export let value;
  export let choices;
  export let onChange;
</script>

<div class="inline-flex border bg-white rounded-sm p-1 overflow-hidden"
    style={{padding: "0.1rem"}}
>
    {#each choices as choice}
        <span class="flex-1 text-center text-md rounded-sm cursor-pointer py-2 px-4 {value == choice ? 'bg-blue text-white' : 'text-dark-gray'}"
            on:click={() => onChange(choice)}
        >
            { choice.charAt(0).toUpperCase() + choice.substring(1) }
        </span>
    {/each}
</div>