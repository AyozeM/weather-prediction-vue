<template>
<section class="row col-4">
    <slot></slot>
    <div class="row  col-12 justify-content-between">
        <p class="text-danger">{{$t('page.maxima')}} {{medidas.max}}</p>
        <p class="text-info">{{$t('page.minima')}} {{medidas.min}}</p>
    </div>
</section>
</template>
<script>
export default {
  props: {
    medidas: {
      required: true,
      type: Object
    }
  }
};
</script>

