<template>
  <div class="main">
    <h1>My Calculator</h1>
    <hr />
    <div class="display">
      <input v-model.number.trim="operand1" name="operand1" />
      <input v-model.number.trim="operand2" name="operand2" />
      = {{ result }}
    </div>
    <hr />
    <br />
    <div class="messageerror" v-show="error">
      {{ error }}
    </div>

    <div class="mesages">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Получилось слишком большое число</template>
    </div>

    <div class="keyboard">
      <button @click="calculate('+')" name="+">+</button>
      <button @click="calculate('-')" name="-">-</button>
      <button @click="calculate('/')" name="/">/</button>
      <button @click="calculate('*')" name="*">*</button>
      <button @click="calculate('exponent')" name="Exp.">Exp.</button>
      <button @click="calculate('trunc')" name="trunc">trunc</button>
    </div>

    <div class="form-check">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label>Отобразить экранную клавиатуру</label>
    </div>

    <div class="mainKeyboard" v-show="checked">
      <button
        type="button"
        v-for="number in numbers"
        :key="number"
        @click="append(number)"
      >
        {{ number }}
      </button>
      <button @click="reset">Delete</button>
    </div>

    <div class="optionlist">
      <label for="operand1">Operand1</label>
      <input type="radio" id="one" value="operand1" v-model="picked" />
      <br />
      <label for="operand2">Operand2</label>
      <input type="radio" id="two" value="operand2" v-model="picked" />
      <br />
      <span>Выбрано: {{ picked }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  prop: {
    result: {
      type: Number,
    },
    number: {
      type: Number,
    },
  },
  data() {
    return {
      operand1: "",
      operand2: "",
      result: 0,
      error: "",
      operands: ["+", "-", "/", "*", "exponent", "trunc"],
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      checked: true,
      picked: "",
    };
  },
  methods: {
    calculate(operation = "+") {
      this.operation = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.division();
          break;
        case "exponent":
          this.exponent();
          break;
        case "trunc":
          this.trunc();
          break;
      }
    },
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    division() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На ноль делить нельзя!";
      } else this.result = operand1 / operand2;
    },
    exponent() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    trunc() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },

    append(number) {
      if (this.picked === "operand1") {
        this.operand1 = `${this.operand1}${number}`;
      } else if (this.picked === "operand2") {
        this.operand2 = `${this.operand2}${number}`;
      } else {
        return;
      }
    },

    reset() {
      if (this.picked === "operand1") {
        this.operand1 = this.operand1.slice(0, -1);
      } else if (this.picked === "operand2") {
        this.operand2 = this.operand2.slice(0, -1);
      } else {
        return;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  color: #42b983;
}

.mesages {
  padding: 20px;
  background-color: #f44336; /* Red */
  color: white;
  margin-bottom: 15px;
}

.messageerror {
  display: block;
  background-color: green;
  color: white;
  margin-bottom: 20px;
}

.optionlist {
  margin-top: 20px;
}

.mainKeyboard {
  margin-top: 20px;
}

.form-check {
  margin-top: 20px;
}
</style>
