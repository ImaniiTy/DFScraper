<script lang="ts">
    import Fa from "svelte-fa";
    import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

    export let videoSource: string;
    // Binds
    let playerRef: HTMLVideoElement;
    let duration: number;
    let currentTime = 0;
    let paused = true;

    // Logic
    let showControls = true;
    let showControlsTimeout: NodeJS.Timeout;
    let lastMouseDown: NodeJS.Timeout;

    // Utils Functions
    function seek(value: number): void {
        currentTime += value;
    }

    // Event Handlers
    function handleMove(_): void {
        clearTimeout(showControlsTimeout);
        showControlsTimeout = setTimeout(() => (showControls = false), 2000);
        showControls = true;
    }

    function handleMouseDown(e: MouseEvent): void {
        if (!lastMouseDown) {
            lastMouseDown = setTimeout(function () {
                lastMouseDown = undefined;
                handleSingleClick(e);
            }, 300);
        } else {
            clearTimeout(lastMouseDown);
            lastMouseDown = undefined;
            handleDoubleClick(e);
        }
    }

    function handleSingleClick(e: MouseEvent) {
        paused ? playerRef.play() : playerRef.pause();
    }

    function handleDoubleClick(e: MouseEvent) {
        const clickX = e.clientX;
        const computedStyle = getComputedStyle(playerRef);
        const halfScreen = parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.width) / 2;

        seek(-10 + (20 * Math.floor(clickX / halfScreen)));

        if (clickX > halfScreen) {
            // seek(+10);
        } else {
        }
    }

    // function handleMouseUp(e: any): void {
    //     if (new Date().getMilliseconds() - lastMouseDown > 250) {
    //         paused ? e.target.play() : e.target.pause();
    //     }
    // }

    // function handleClick(e: any): void {
    //     paused ? playerRef.play() : playerRef.pause();
    // }
</script>

<main>
    <div class="relative">
        <div>
            <!-- on:mousemove={handleMove}
            on:mousedown={handleMouseDown} -->
            {#key videoSource}
            <video
                class="mx-auto"
                bind:duration
                bind:paused
                bind:currentTime
                bind:this={playerRef}

                controls
            >
                <track kind="captions" />
                <source src="{videoSource}" >
            </video>
            {/key}
        </div>

        <!-- <div
            class="controls absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity ease-in-out delay-150"
            style="opacity: {duration && showControls ? 1 : 0};"
        >
            <button class="w-24 h-24 rounded-full bg-gray-500 bg-opacity-50">
                <Fa icon={paused ? faPlay : faPause} size="2x" color="white" class="mx-auto" />
            </button>
        </div> -->
    </div>
</main>
