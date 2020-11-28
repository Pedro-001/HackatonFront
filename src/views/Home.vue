<template>
<div><px-jumbo /></div>

  <div>
  
     <px-assets-table />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import PxJumbo from "@/components/PxJumbo";

export default {
  name: "Home",
  components: { PxAssetsTable, PxJumbo }
};
</script>