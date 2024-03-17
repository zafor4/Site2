const btns = document.querySelectorAll("#btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let option = btn.textContent;
    let inputOption = element(option);
    document.querySelector("#output").innerHTML = inputOption;
    const submitBtn = document.querySelector("#submitBtn");

    submitBtn.addEventListener("click", (e) => {
        let inputValue=document.querySelector('#inputValue').value;
        let res=checker(option,inputValue)
        if (res){
            document.querySelector('.result').textContent="Expression is valid"

        }
        else {
            document.querySelector('.result').textContent="Expression is Invalid"
            
        }
    });
  });
});

function element(option) {
  return `<h4 class="mt-4">Enter Your ${option}</h4>
    <input id="inputValue" type="text" class="form-control"  placeholder="${option}">
    <div class="d-grid gap-2">
        <button id="submitBtn" class="btn btn-primary mt-2" type="button">Submit</button>
        <h1 class="result"></h1>
      </div>`;
}

function checker(option,inputValue){
    let re
    if (option=='Postcode'){
        re = /^[0-9]{4}$/;
    }

    else if (option=="Email"){
        re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;

    }
    else if (option=="Phone"){
        re = /^(\+)?(88)?01[0-9]{9}$/;
    }
    return re.test(inputValue)
}
