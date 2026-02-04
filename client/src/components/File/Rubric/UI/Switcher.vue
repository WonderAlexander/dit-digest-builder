<script setup lang="ts">
const props = defineProps(['handleSwitchChange', 'text'])

const handleSwitchChange = (): void => {
  props.handleSwitchChange()
}
</script>

<template>
  <div class="switcher">
    <input
      id="toggle-button"
      class="switcher__toggle-btn"
      type="checkbox"
      @change="handleSwitchChange"
    />
    <label for="toggle-button" class="switcher__text">{{ props.text }}</label>
  </div>
</template>

<style scoped>
.switcher__toggle-btn {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;
  margin: 0;
  vertical-align: top;
  background: #ffffff;
  border: 1px solid #e51740;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.switcher__toggle-btn::after {
  content: '';

  display: inline-block;
  position: absolute;
  left: 3px;
  top: 1.5px;

  width: 14px;
  height: 14px;
  background-color: #e51740;
  border-radius: 50%;

  transform: translateX(0);
}

.switcher__toggle-btn:checked::after {
  transform: translateX(calc(100% + 3px));
  background-color: #fff;
}

.switcher__toggle-btn:checked {
  background-color: #e51740;
}
</style>
