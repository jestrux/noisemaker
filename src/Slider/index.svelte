<script>
    import Input from './Input.svelte';
    import Level from './Level.svelte';
    export let value;
    export let label;
    export let onChange;
</script>

<div class="flex flex-col mt-3 pt-3 pb-1"
    style={{padding: "0.1rem"}}
>
    <label class="text-md font-light uppercase mb-1">{label}</label>
    <div>
        <Input {value}
            on:input={(e) => onChange(e.target.value)}
        />
    </div>
    <div class="flex justify-between px-1">
        <div class="flex flex-col items-start cursor-pointer"
            on:click={_ => onChange(0)}
        >
            <div class="my-1">
                <Level value="low" />
            </div>
            <span class="text-dark-gray opacity-65">Low</span>
        </div>
        <div class="flex flex-col center-center cursor-pointer"
            on:click={_ => onChange(0.5)}
        >
            <span class="my-1">
                <Level value="medium" />
            </span>
            <span class="text-dark-gray opacity-65">
                Medium
            </span>
        </div>
        <div class="flex flex-col items-end cursor-pointer"
            on:click={_ => onChange(1)}
        >
            <div class="my-1">
                <Level value="high" />
            </div>
            <span class="text-dark-gray opacity-65">
                High
            </span>
        </div>
    </div>
</div>