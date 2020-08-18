<template>
  <div class="el-typing">
    <span class="el-typing__item"></span>
    <span class="el-typing__item"></span>
    <span class="el-typing__item"></span>
  </div>
</template>

<style lang="scss">
.el-typing {
  $block: &;
  width: 56px;
  height: 26px;
  flex-shrink: 0;
  position: relative;
  border-radius: 100px;
  background-color: $color-gray;

  @include media-max(sm) {
    width: 48px;
    height: 22px;
  }

  &__item {
    width: 5px;
    height: 5px;
    border-radius: 100px;
    background-color: $color-gray-2;
    position: absolute;
    top: calc(50% - 2.5px);
    animation: typingBounce 0.3s ease infinite alternate;

    @include media-max(sm) {
      width: 4px;
      height: 4px;
      top: calc(50% - 2px);
    }

    &:nth-child(1) {
      left: 12px;
    }

    &:nth-child(2) {
      left: calc(50% - 2.5px);
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      right: 12px;
      animation-delay: 0.4s;
    }
  }

  @keyframes typingBounce {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  }
}
</style>
