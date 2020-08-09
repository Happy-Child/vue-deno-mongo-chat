<template>
  <label class="el-field" :class="classes">
    <input
      class="el-field__input"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      @input="e => $emit('input', e.target.value)"
    />
    <transition name="fade">
      <span v-if="errors" class="el-field__errors">
        {{ errors }}
      </span>
    </transition>
  </label>
</template>

<script>
export default {
  name: "ElField",

  components: {},

  props: {
    value: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errors: {
      type: String,
      default: null
    }
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    classes() {
      return [
        { "el-field_error": this.errors }
      ]
    }
  }
};
</script>

<style lang="scss">
.el-field {
  $block: &;
  font-size: $font-size;
  display: block;
  width: 100%;
  position: relative;
  margin-bottom: px-to-em(24px, $font-size);

  &:last-child {
    margin-bottom: 0;
  }

  &__input {
    font-size: inherit;
    min-height: 46px;
    display: inherit;
    width: inherit;
    transition: $transition-default all ease;
    background-color: rgba($color-gray, 0.4);
    border: 1px solid $color-gray-1;
    padding: px-to-em(8px, $font-size) px-to-em(20px, $font-size);

    @include input-placeholder() {
      color: $color-gray-2;
    }

    @include on-event() {
      border-color: $color-gray-2;
    }
  }

  &__errors {
    @include ellipsis();
    position: absolute;
    top: calc(100% + 4px);
    color: $color-red;
    font-size: 12px;
  }

  &_error {
    #{$block}__input {
      color: $color-red;
      border-color: $color-red;
      background-color: rgba($color-red, 0.2);

      @include input-placeholder() {
        color: $color-red;
      }
    }
  }
}
</style>
