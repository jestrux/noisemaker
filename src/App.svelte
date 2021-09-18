<script>
  import ButtonGroup from "./ButtonGroup.svelte";
  import Slider from "./Slider";

  export let src;

  let color = "white";
  let density = 0;
  let contrast = 0;

  const map = {
    "low": 0,
    "medium": 50,
    "high": 100
  };

  $: image = `images/noise/${color}-${(density*100)}-${(contrast * 100)}.png`;

  async function applyNoise(img){
    try {
        const { Rectangle, ImageFill } = require("scenegraph");
        const storage = require("uxp").storage;
        const { editDom, getDimensions, placeInParent } = require("./utils");
        const viewport = require("viewport");
        console.log("Apply noise: ", image);

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
                placeInParent(rect, viewport.bounds);
                viewport.scrollIntoView(rect);
                viewport.zoomToRect(rect);
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
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="text-md font-light uppercase mb-1">NOISE PREVIEW</label>
  <img class="border rounded-sm object-cover w-full" 
    style="height: 150px; background: {color == 'white' ? 'black' : 'white'}"
    src="{image}" alt="" 
  />

  <div class="flex flex-col mt-3 pt-3">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="text-md font-light mb-1">NOISE COLOR</label>

    <ButtonGroup 
      value={ color }
      choices={["white", "black"]}
      onChange={ value => color = value }
    />
  </div>

  <Slider 
    label="NOISE INTENSITY"
    value={ density}
    onChange={ value => density = value }
  />

  <Slider 
    label="NOISE CONTRAST"
    value={ contrast}
    onChange={ value => contrast = value }
  />

  <div class="mt-3 pt-2">
    <div class="button large" uxp-variant="cta"
      on:click={() => applyNoise(image)}
    >
      Let's make some noise
    </div>
  </div>
</div>