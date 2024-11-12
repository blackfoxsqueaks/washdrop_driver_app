    /* Canvaskit Run Command:
    flutter build web --web-renderer canvaskit --release --dart-define=FLUTTER_WEB_CANVASKIT_URL=/canvaskit/
    */

    /* Files to Cache in Service Worker:
    const CORE = ["main.dart.js",
        "index.html",
        "flutter_bootstrap.js",
        "assets/AssetManifest.bin.json",
        "assets/FontManifest.json",
        "canvaskit/skwasm.js",
        "canvaskit/skwasm.wasm",
        "canvaskit/canvaskit.js"
        ]; 
    */

    /* Flutter Service Worker
    onEntrypointLoaded: async function(engineInitializer) {
      const appRunner = await engineInitializer.initializeEngine();
      await appRunner.runApp();

      // Remove the image element with the class 'header' once the app is loaded
      console.log('Drop App Loaded');

      await new Promise(resolve => setTimeout(resolve, 15000));

      const headerImage = document.querySelector('.header');
      if (headerImage) {
        headerImage.remove();
      }
    }
    */

    function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      console.log('URL:', location.search); // Log the URL parameters
      console.log('Parameter Name:', name); // Log the parameter name being searched for
      console.log('Parameter Value:', results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))); // Log the extracted value
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    document.addEventListener("DOMContentLoaded", function () {
      const loadingText = document.getElementById('loading-text');
      var barContent = document.querySelector('#bar-content');
      let baseText = "Revving up engines";
      let dotCount = 0;

     // Start dot animation
      const interval = setInterval(() => {
        dotCount = (dotCount + 1) % 4; // Cycle through 0, 1, 2, 3
        loadingText.textContent = baseText + '.'.repeat(dotCount);
      }, 500); // Adjust the speed as needed

      // After 15 seconds, switch the text to "Downloading updates"
      setTimeout(() => {
        baseText = "Downloading updates";
      }, 15000); // 15 seconds

      // After another 15 seconds, switch the text to "Finalizing updates"
      setTimeout(() => {
        baseText = "Finalizing updates";
      }, 30000); // 30 seconds

      // After 15 more seconds, stop the animation and finalize the updates
      setTimeout(() => {
        clearInterval(interval); // Stop the dot animation
      }, 45000); // 45 seconds
        });


    document.addEventListener("DOMContentLoaded", function () {
      const progressBar = document.getElementById('progress-bar');
      let progress = 0;

      // Define intervals for progress stages
      const stages = [
      { time: 200, percentage: 10 },
      { time: 800, percentage: 15 },            // Starting point
      { time: 2000, percentage: 20 },       // After 2 seconds, 10% filled
      { time: 4000, percentage: 35 },       // After 4 seconds, 20% filled
      { time: 8000, percentage: 40 },       // After 8 seconds, 30% filled
      { time: 12000, percentage: 45 },      // After 12 seconds, 40% filled
      { time: 15000, percentage: 50 },      // After 15 seconds, 50% filled
      { time: 18000, percentage: 55 },      // After 18 seconds, 55% filled
      { time: 22000, percentage: 60 },      // After 22 seconds, 60% filled
      { time: 26000, percentage: 70 },      // After 26 seconds, 70% filled
      { time: 30000, percentage: 75 },      // After 30 seconds, 75% filled
      { time: 35000, percentage: 85 },      // After 35 seconds, 85% filled
      { time: 40000, percentage: 90 },      // After 40 seconds, 90% filled
      { time: 45000, percentage: 97 },      // After 45 seconds, 97% filled
      { time: 50000, percentage: 100 }      // After 50 seconds, fully filled
      ];


      // Update progress bar based on stages
      stages.forEach(stage => {
        setTimeout(() => {
          progress = stage.percentage;
          progressBar.style.width = `${progress}%`;
        }, stage.time);
      });
    });

    // Prevent edge swipes
    const swipeHack = preventBrowserHistorySwipeGestures();

    function preventBrowserHistorySwipeGestures() {
      function touchStart(ev) {
        if (ev.touches.length === 1) {
          const touch = ev.touches[0];
          if (
            touch.clientX < window.innerWidth * 0.1 ||
            touch.clientX > window.innerWidth * 0.9
          ) {
            ev.preventDefault();
          }
        }
      }

      const options = { passive: false };
      window.addEventListener("touchstart", touchStart, options);

      return () => window.removeEventListener("touchstart", touchStart, options);
    }
