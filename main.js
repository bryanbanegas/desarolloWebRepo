function addToInput(add){
    const input=document.getElementById("ecuacion");
    input.value+=add;
}

function clearInput(){
    const input=document.getElementById("ecuacion");
    input.value="";
}

function Calc(){
    const app=document.getElementById("app");

    app.innerHTML=`
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
                <button class="signo">=</button>
            </div>
        </div>
    `;
}

Calc();