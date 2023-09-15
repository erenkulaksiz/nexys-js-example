<template>
  <h1>Nexys Vue Example</h1>
  <div class="btn-container">
    <button @click="clearLogs">Clear</button>
    <button @click="onLog">Test log</button>
    <button @click="onErrorLog">Error Log</button>
    <button @click="subscribe">Subscribe to "log.add"</button>
  </div>
</template>

<script lang="ts">
  import nexys from './nexys';

  export default {
    methods: {
      onLog() {
        // Log a message.
        nexys.log("Test log");
      },
      onErrorLog() {
        // Log an error.
        nexys.error({ message: "Test error log" });
      },
      subscribe() {
        // Subscribe to log.add
        nexys.Events.subscribe("log.add", (data) => {
          console.log("log added!", data);
        });
      },
      clearLogs() {
        // Clear logs and requests.
        nexys.clear();
      },

      // Read more about available functions: https://docs.nexys.app/category/functions
    },
  };
</script>
