<script lang="ts">
    import logo from "./assets/svelte.png";
    import Counter from "./lib/Counter.svelte";
    import VideoPlayer from "./lib/player/VideoPlayer.svelte";

    function getBase(number: Number) {
        let numberString = number.toString();

        return (numberString.length - 5 >= 0 ? numberString[numberString.length - 5] : "") + numberString[numberString.length - 4] + "0".repeat(3);
    }

    let startNumber = Number.parseInt(localStorage.getItem("startNumber") ?? "20080");
    let baseUrl = localStorage.getItem("baseUrl") ?? `https://acdn3.sexcelebrity.net/content/videos/`;
    $: sources = Array.from({ length: 20 }, (v, i) => {
      let url = `${baseUrl}${getBase(startNumber + i)}/${(startNumber + i).toString()}/${(startNumber + i).toString()}_1080p.mp4`;
      console.log(url);
      
        return url;
    });
</script>

<main>
    <!-- <h1 class="text-3xl font-bold underline">Player</h1> -->
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Base Url</label>
            <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                bind:value={baseUrl}
                on:input={(_) => localStorage.setItem("baseUrl", baseUrl)}
            />
        </div>

        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Start Number</label>
            <input
                type="number"
                step="20"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                bind:value={startNumber}
                on:input={(_) => localStorage.setItem("startNumber", startNumber.toString())}
            />
        </div>
    </div>

    <div class="grid gap-6 mb-6 md:grid-cols-4">
        {#each sources as source}
            <VideoPlayer videoSource={source} />
        {/each}
    </div>
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
    }

    p {
        max-width: 14rem;
        margin: 1rem auto;
        line-height: 1.35;
    }

    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }
    }
</style>
