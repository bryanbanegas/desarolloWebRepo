function getInput() {
  return document.getElementById("ecuacion");
}

//Modifique el addInput para que no te deje ingresar operadores repetidos
function addToInput(value) {
  const input = getInput();

  const lastChar = input.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastChar) && operators.includes(value)) {
    return; // no ingresa nada porque es el mismo operador que el anterior ingresado
  }

  input.value += value;
}

// Limpiar todo
function clearInput() {
  getInput().value = "";
}

// Borra el ultimo caracter ingresado
function deleteLast() {
  const input = getInput();
  input.value = input.value.slice(0, -1);
}

function Calc() {
  const app = document.getElementById("app");

  app.innerHTML = `
        <div>
            <input id="ecuacion" type="text" style="font-size: 50px" readonly>
            <div>
                <button onClick="addToInput(7)">7</button>
                <button onClick="addToInput(8)">8</button>
                <button onClick="addToInput(9)">9</button>
                <button class="signo" onClick="addToInput('/')">/</button>
            </div>
            <div>
                <button onClick="addToInput(4)">4</button>
                <button onClick="addToInput(5)">5</button>
                <button onClick="addToInput(6)">6</button>
                <button class="signo" onClick="addToInput('*')">*</button>
            </div>
            <div>
                <button onClick="addToInput(1)">1</button>
                <button onClick="addToInput(2)">2</button>
                <button onClick="addToInput(3)">3</button>
                <button class="signo" onClick="addToInput('-')">-</button>
            </div>
            <div>
                <button onClick="addToInput(0)">0</button>
                <button onClick="addToInput('(')">(</button>
                <button onClick="addToInput(')')">)</button>
                <button class="signo" onClick="addToInput('+')">+</button>
            </div>
            <div>
                <button onClick="clearInput()">AC</button>
                <button class="signo" onClick="calculate()">=</button>
            </div>
        </div>
    `;
}

// Exponer funciones al scope global para que los onClick del HTML funcionen
window.addToInput = addToInput;
window.clearInput = clearInput;
window.deleteLast = deleteLast;


Calc();