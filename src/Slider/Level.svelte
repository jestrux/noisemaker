<script>
    export let value;
</script>

<svg style="margin-left: 3px;" viewBox="0 0 12 12">
    <circle fill="#5A5A5A" cx="2.5" cy="2.5" r="2" />
    {#if value != "low"}
        <circle fill="#5A5A5A" cx="8.2" cy="2.5" r="2" />
    {/if}
    {#if value == "high"}
        <circle fill="#5A5A5A" cx="2.5" cy="8.2" r="2" />
    {/if}
    <circle fill="#5A5A5A" cx="8.2" cy="8.2" r="2" />
</svg>