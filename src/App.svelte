<script>
  import ButtonGroup from "./ButtonGroup.svelte";

  export let src;

  let density = "low";
  let contrast = "low";

  const map = {
    "low": 0,
    "medium": 50,
    "high": 100
  };

  $: image = `images/noise/${map[density]}-${map[contrast]}.png`;

  async function applyNoise(img){
    try {
        const { Rectangle, ImageFill } = require("scenegraph");
        const storage = require("uxp").storage;
        const { editDom, getDimensions } = require("./utils");
        console.log("Apply noise: ", img, Rectangle);

        const fs = storage.localFileSystem;
        const pluginFolder = await fs.getPluginFolder();
        const mapImageFile = await pluginFolder.getEntry(img);
    
        editDom((selection) => {
            try {
                if(selection.items.length){
                    const node = selection.items[0];
                    const dimensions = getDimensions(node);
                    if(dimensions){
                        node.fill = new ImageFill(mapImageFile);
                        return;
                    }
                }
                
                const rect = new Rectangle();
                rect.width = 500;
                rect.height = 500;
                rect.fill = new ImageFill(mapImageFile);
                selection.insertionParent.addChild(rect);
            } catch (error) {
                console.log("Error saving noise", error);
            }
        })
    } catch (error) {
        console.log("Error making some noise", error);
    }
  }
</script>

<div id="appWrapper" class="mt-3 pt-1 px-12px">
  <h2 class="mb-3">Noise Maker</h2>
  <img class="border rounded-sm object-cover w-full" 
    style="height: 150px;"
    src="{image}" alt="" 
  />

  <div class="flex items-center justify-between mt-3 pt-2">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="text-md">Density</label>

    <ButtonGroup 
      value={ density}
      choices={["low", "medium", "high"]}
      onChange={ value => density = value }
    />
  </div>

  <div class="flex items-center justify-between mt-3 pt-3">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="text-md">Contrast</label>

    <ButtonGroup 
      value={ contrast}
      choices={["low", "medium", "high"]}
      onChange={ value => contrast = value }
    />
  </div>

  <div class="mt-3 pt-2">
    <div class="button" uxp-variant="cta"
      on:click={() => applyNoise(image)}
    >
      Make Some Noise
    </div>
  </div>
</div>