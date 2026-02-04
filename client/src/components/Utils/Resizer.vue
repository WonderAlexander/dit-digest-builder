<template>
  <div class="resizer">
    <div class="resizer__arrows">
      <div class="resizer__arrow left-arrow">&#8592;</div>
      <div class="resizer__arrow right-arrow">&#8594;</div>
    </div>
  </div>
</template>

<style scoped>
.resizer {
  width: 2px;
  height: 100vh;

  position: relative;
  background-color: rgba(10, 10, 10, 10%);
}

.resizer__arrows {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  width: 30px;
  height: 30px;
}

.resizer__arrows {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.resizer__arrow {
  font-size: 10px;
  color: #007bff;
  position: absolute;
}

.left-arrow {
  left: 2px;
}

.right-arrow {
  right: 2px;
}
</style>
