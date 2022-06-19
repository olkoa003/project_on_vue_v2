<template>
  <div class="main">
    <header>
      <div class="text-h1 text-sm-h3 mb-8 mt-8">My Calculator</div>
    </header>
    <hr />
    <div class="display">
      <input class="inputcal" v-model.number.trim="operand1" />
      <input class="inputcal" v-model.number.trim="operand2" />
      = {{ result }}
    </div>
    <hr />
    <br />
    <div class="messageerror" v-show="error">
      {{ error }}
    </div>

    <div class="mesages">
      <template v-if="result < 0">You got a negative number</template>
      <template v-else-if="result < 100">Result in the first hundred</template>
      <template v-else>You got too big number</template>
    </div>

    <div class="keyboard">
      <v-btn class="keyboard" @click="calculate('+')">+</v-btn>
      <v-btn class="keyboard" @click="calculate('-')">-</v-btn>
      <v-btn class="keyboard" @click="calculate('/')">/</v-btn>
      <v-btn class="keyboard" @click="calculate('*')">*</v-btn>
      <v-btn class="keyboard" @click="calculate('exponent')">Exp.</v-btn>
      <v-btn class="keyboard" @click="calculate('trunc')">trunc</v-btn>
    </div>

    <div class="form-check">
      <v-checkbox
        type="checkbox"
        id="checkbox"
        v-model="checked"
        label="Display keyboard"
      />
    </div>

    <div class="mainKeyboard keyboard" v-show="checked">
      <v-btn
        type="button"
        v-for="number in numbers"
        :key="number"
        @click="append(number)"
      >
        {{ number }}
      </v-btn>
      <v-btn @click="reset">Delete</v-btn>
    </div>

    <div class="optionlist">
      <label for="operand1">Operand1</label>
      <input type="radio" id="one" value="operand1" v-model="picked" />
      <br />
      <label for="operand2">Operand2</label>
      <input type="radio" id="two" value="operand2" v-model="picked" />
      <br />
      <span>Chosen: {{ picked }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalulatorComponent",
  prop: {
    result: {
      type: Number
    },
    number: {
      type: Number
    },
  },
  data() {
    return {
      result: 0,
      operand1: "",
      operand2: "",
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
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.inputcal {
  border: 1px solid;
  color: black;
  margin-right: 3px;
}

.keyboard {
  display: flex;
  gap: 5px;
  justify-content: center;
}
</style>
